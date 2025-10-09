"use client";

import { myAxios } from "@/services/apiService";
import Image from "next/image";
import { useRef, useState } from "react";
import { IoMdSend } from "react-icons/io";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";

type Message = {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
  isStreaming?: boolean;
};

export default function Chat({
  setOpenAIChat,
}: {
  openAIChat: boolean;
  setOpenAIChat: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isUser: true,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);

    let accessToken;
    try {
      const response = await myAxios.get("/ai");
      accessToken = response.data;
    } catch (error: any) {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content:
          error?.response?.data?.error ||
          "Sorry, I'm having trouble connecting to the AI service right now. Please try again later.",
        isUser: false,
        timestamp: new Date(),
        isStreaming: false,
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
      return;
    }

    setInputValue("");
    setIsLoading(true);

    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      content: "",
      isUser: false,
      timestamp: new Date(),
      isStreaming: true,
    };

    setMessages((prev) => [...prev, botMessage]);

    try {
      const response = await fetch(`${myAxios.defaults.baseURL}/ai`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ prompt: inputValue }),
      });

      if (!response.ok || !response.body) {
        throw new Error("Failed to get AI response");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let lastContentWasList: boolean = false;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        buffer += chunk;

        // Process complete lines
        const lines = buffer.split("\n");
        buffer = lines.pop() || ""; // Keep incomplete line in buffer

        for (const line of lines) {
          const trimmedLine = line.trim();
          if (!trimmedLine) continue;

          // Detect end markers
          if (trimmedLine.startsWith("event:")) {
            const eventType = trimmedLine.slice(6).trim();
            if (eventType === "done" || eventType === "end") {
              setMessages((prev) =>
                prev.map((msg) =>
                  msg.id === botMessage.id
                    ? { ...msg, isStreaming: false }
                    : msg
                )
              );
              return;
            }
            continue; // Skip other event lines
          }

          if (trimmedLine.startsWith("data:")) {
            const dataContent = trimmedLine.slice(5).trim();
            if (dataContent === "[DONE]") {
              setMessages((prev) =>
                prev.map((msg) =>
                  msg.id === botMessage.id
                    ? { ...msg, isStreaming: false }
                    : msg
                )
              );
              return;
            }

            // Try parsing as JSON
            let textToAdd = "";
            try {
              const parsed = JSON.parse(dataContent);
              textToAdd =
                parsed.text || (typeof parsed === "string" ? parsed : "");
            } catch {
              textToAdd = dataContent;
            }

            if (textToAdd) {
              // Add proper line breaks when transitioning from lists to new content
              let processedText = textToAdd;

              // Detect if we're transitioning from list items to new sections
              if (
                lastContentWasList &&
                (textToAdd.startsWith("**") ||
                  textToAdd.startsWith("Find me:") ||
                  textToAdd.startsWith("Moto:") ||
                  textToAdd.startsWith("Let me know"))
              ) {
                processedText = "\n\n" + textToAdd;
              }

              // Update lastContentWasList flag
              lastContentWasList =
                !!textToAdd.includes("-") ||
                !!textToAdd.includes("*") ||
                !!textToAdd.match(/^\s*[•\-*]\s/);

              setMessages((prev) =>
                prev.map((msg) =>
                  msg.id === botMessage.id
                    ? { ...msg, content: msg.content + processedText }
                    : msg
                )
              );
            }
          } else {
            // Plain text line (not SSE format)
            let processedLine = trimmedLine;

            // Add proper line breaks for transitions
            if (
              lastContentWasList &&
              (trimmedLine.startsWith("**") ||
                trimmedLine.startsWith("Find me:") ||
                trimmedLine.startsWith("Moto:") ||
                trimmedLine.startsWith("Let me know"))
            ) {
              processedLine = "\n\n" + trimmedLine;
            }

            // Update lastContentWasList flag
            lastContentWasList =
              !!trimmedLine.includes("-") ||
              !!trimmedLine.includes("*") ||
              !!trimmedLine.match(/^\s*[•\-*]\s/);

            setMessages((prev) =>
              prev.map((msg) =>
                msg.id === botMessage.id
                  ? { ...msg, content: msg.content + processedLine + "\n" }
                  : msg
              )
            );
          }
        }
      }

      // Mark streaming as complete
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === botMessage.id ? { ...msg, isStreaming: false } : msg
        )
      );
    } catch (error: any) {
      console.error("Error sending message:", error);
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === botMessage.id
            ? {
                ...msg,
                content: `"Sorry, I encountered an error. ${
                  error ? error?.response?.data?.message : ""
                }`,
                isStreaming: false,
              }
            : msg
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([]);
  };

  return (
    <div className="w-full h-full flex flex-col text-white relative bg-black/10 backdrop-blur-md">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        <div>
          <h2 className="text-lg font-semibold">
            Ask <span className="text-portfolio-primary">Anything</span>
          </h2>
          <p className="text-sm text-white/60">About Ashish Sigdel</p>
        </div>
        <div className="flex items-center gap-2">
          {messages.length > 0 && (
            <button
              onClick={clearChat}
              className="text-white/50 hover:text-white/80 text-sm px-2 py-1 rounded hover:bg-white/5"
            >
              Clear
            </button>
          )}
          <button
            onClick={() => setOpenAIChat(false)}
            className="text-white/60 hover:text-white transition-colors"
            aria-label="Close Chat"
          >
            &#10005;
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <Image
              src="/robot.png"
              alt="AI Assistant"
              width={100}
              height={100}
              className="w-20 h-20 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              Hi! I'm Ashish's AI Assistant
            </h3>
            <p className="text-white/60 mb-4">
              Ask me anything about Ashish Sigdel's skills, projects, or
              experience!
            </p>
            <div className="text-sm text-white/40">
              Try: "What are Ashish's skills?" or "Tell me about his projects"
            </div>
          </div>
        ) : (
          messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.isUser ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.isUser
                    ? "bg-portfolio-primary text-white"
                    : "bg-white/5 text-white border border-white/10"
                }`}
              >
                {message.isUser ? (
                  <p>{message.content}</p>
                ) : (
                  <div className="prose prose-invert prose-sm max-w-none">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        // Code blocks with syntax highlighting
                        code({ className, children, ...props }: any) {
                          const match = /language-(\w+)/.exec(className || "");
                          const isInline = !match;
                          return !isInline ? (
                            <SyntaxHighlighter
                              style={oneDark as any}
                              language={match[1]}
                              PreTag="div"
                              className="rounded-md !bg-black/50 !text-sm my-3"
                              {...props}
                            >
                              {String(children).replace(/\n$/, "")}
                            </SyntaxHighlighter>
                          ) : (
                            <code
                              className="bg-white/10 rounded px-1.5 py-0.5 text-sm mx-0.5"
                              {...props}
                            >
                              {children}
                            </code>
                          );
                        },

                        // Paragraphs
                        p: ({ children }) => {
                          return (
                            <p className="mb-3 leading-relaxed">{children}</p>
                          );
                        },

                        // Headings
                        h1: ({ children }) => (
                          <h1 className="text-xl font-bold mb-4 mt-6 first:mt-0 border-b border-white/20 pb-2">
                            {children}
                          </h1>
                        ),
                        h2: ({ children }) => (
                          <h2 className="text-lg font-bold mb-3 mt-5 first:mt-0 border-b border-white/10 pb-1">
                            {children}
                          </h2>
                        ),
                        h3: ({ children }) => (
                          <h3 className="text-base font-bold mb-2 mt-4 first:mt-0">
                            {children}
                          </h3>
                        ),
                        h4: ({ children }) => (
                          <h4 className="text-sm font-bold mb-2 mt-3 first:mt-0">
                            {children}
                          </h4>
                        ),
                        h5: ({ children }) => (
                          <h5 className="text-sm font-semibold mb-2 mt-3 first:mt-0">
                            {children}
                          </h5>
                        ),
                        h6: ({ children }) => (
                          <h6 className="text-sm font-medium mb-2 mt-3 first:mt-0 text-white/80">
                            {children}
                          </h6>
                        ),

                        // Lists
                        ul: ({ children }) => (
                          <ul className="list-disc ml-6 mb-4 space-y-1.5">
                            {children}
                          </ul>
                        ),
                        ol: ({ children }) => (
                          <ol className="list-decimal ml-6 mb-4 space-y-1.5">
                            {children}
                          </ol>
                        ),
                        li: ({ children }) => (
                          <li className="mb-1.5 leading-relaxed">{children}</li>
                        ),

                        // Blockquotes
                        blockquote: ({ children }) => (
                          <blockquote className="border-l-3 border-portfolio-primary pl-4 italic text-white/80 bg-white/5 py-2 my-4 rounded-r">
                            {children}
                          </blockquote>
                        ),

                        // Links
                        a: ({ href, children }) => (
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-portfolio-primary hover:text-portfolio-primary/80 underline underline-offset-2 transition-colors"
                          >
                            {children}
                          </a>
                        ),

                        // Images
                        img: ({ src, alt }) => (
                          <div className="my-4">
                            <Image
                              src={src as string}
                              alt={alt || "Image"}
                              width={300}
                              height={200}
                              className="max-w-full h-auto rounded-lg border border-white/10 shadow-lg mx-auto"
                              loading="lazy"
                            />
                          </div>
                        ),

                        // Tables
                        table: ({ children }) => (
                          <div className="overflow-x-auto my-4">
                            <table className="min-w-full border-collapse border border-white/20 rounded-lg">
                              {children}
                            </table>
                          </div>
                        ),
                        thead: ({ children }) => (
                          <thead className="bg-white/10">{children}</thead>
                        ),
                        tbody: ({ children }) => (
                          <tbody className="divide-y divide-white/10">
                            {children}
                          </tbody>
                        ),
                        tr: ({ children }) => (
                          <tr className="divide-x divide-white/10">
                            {children}
                          </tr>
                        ),
                        th: ({ children }) => (
                          <th className="px-4 py-2 text-left font-semibold border-b border-white/20">
                            {children}
                          </th>
                        ),
                        td: ({ children }) => (
                          <td className="px-4 py-2 border-b border-white/10">
                            {children}
                          </td>
                        ),

                        // Horizontal Rule
                        hr: () => <hr className="my-6 border-white/20" />,

                        // Strong/Bold
                        strong: ({ children }) => (
                          <strong className="font-semibold text-white/90">
                            {children}
                          </strong>
                        ),

                        // Emphasis/Italic
                        em: ({ children }) => (
                          <em className="italic text-white/90">{children}</em>
                        ),

                        // Inline code (already handled in code component, but for direct usage)
                        pre: ({ children }) => (
                          <pre className="my-3 rounded-md overflow-auto bg-black/50 p-3 text-sm">
                            {children}
                          </pre>
                        ),

                        // Block level spacing
                        div: ({ children }) => (
                          <div className="my-3">{children}</div>
                        ),

                        // Span for inline elements
                        span: ({ children }) => (
                          <span className="inline">{children}</span>
                        ),

                        // Br for line breaks
                        br: () => <br className="my-1" />,
                      }}
                    >
                      {message.content || (message.isStreaming ? "..." : "")}
                    </ReactMarkdown>
                  </div>
                )}
                {message.isStreaming && (
                  <div className="flex items-center gap-1 mt-2">
                    <div className="animate-pulse w-2 h-2 bg-portfolio-primary rounded-full"></div>
                    <div className="animate-pulse w-2 h-2 bg-portfolio-primary rounded-full delay-75"></div>
                    <div className="animate-pulse w-2 h-2 bg-portfolio-primary rounded-full delay-150"></div>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <div className="p-4 border-t border-white/10">
        <form onSubmit={sendMessage} className="flex items-center gap-2">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask about Ashish's skills, projects, experience..."
            className="flex-1 py-2.5 px-3 bg-white/5 text-white placeholder-white/40 text-sm focus:outline-none border border-white/10 rounded-md focus:border-portfolio-primary/50 focus:bg-white/10"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={!inputValue.trim() || isLoading}
            className="p-2.5 bg-portfolio-primary hover:bg-portfolio-primary/80 disabled:bg-white/10 disabled:text-white/30 text-white rounded-md transition-colors"
          >
            <IoMdSend size={16} />
          </button>
        </form>
      </div>
    </div>
  );
}
