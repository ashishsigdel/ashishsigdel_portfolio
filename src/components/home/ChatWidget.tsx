"use client";

import {
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import { MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/contexts/SidebarContext";

export interface ChatWidgetHandle {
  sendMessage: (text: string) => void;
}

const ChatWidget = forwardRef<ChatWidgetHandle>((props, ref) => {
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");
  const { isChatOpen, setIsChatOpen } = useSidebar();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    if (!isChatOpen) {
      setIsChatOpen(true);
    }

    const userMessage = { role: "user", content: text };
    setMessages((prev) => [...prev, userMessage]);

    const aiMessage = { role: "system", content: "" };
    setMessages((prev) => [...prev, aiMessage]);

    const responseText =
      "Greetings. I am the intelligence layer of Ashish's portfolio. He is a Senior Frontend Engineer who crafts high-performance, minimalist digital systems. How can I assist you with his work or background today?";
    const chunks = responseText.split(" ");

    for (let i = 0; i < chunks.length; i++) {
      await new Promise((r) => setTimeout(r, 40));
      setMessages((prev) => {
        const newMessages = [...prev];
        const lastIndex = newMessages.length - 1;
        newMessages[lastIndex] = {
          ...newMessages[lastIndex],
          content:
            newMessages[lastIndex].content + (i === 0 ? "" : " ") + chunks[i],
        };
        return newMessages;
      });
    }
  };

  useImperativeHandle(ref, () => ({
    sendMessage: handleSendMessage,
  }));

  const handleInputChange = (e: any) => setInput(e.target.value);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleSendMessage(input);
    setInput("");
  };

  return (
    <>
      {/* Chat Widget - Bottom Right */}
      <div
        className={cn(
          "fixed bottom-8 right-8 w-105 bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl flex flex-col z-50 transition-all duration-300",
          isChatOpen
            ? "h-150 translate-y-0 opacity-100"
            : "h-0 translate-y-4 opacity-0 pointer-events-none",
        )}
      >
        {/* Widget Header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-zinc-800 bg-zinc-950 rounded-t-2xl">
          <div>
            <h2 className="text-lg font-bold text-white">AI Assistant</h2>
          </div>
          <button
            onClick={() => setIsChatOpen(false)}
            className="p-2 hover:bg-zinc-800 rounded-lg transition-colors"
            title="Close"
          >
            <svg
              className="w-5 h-5 text-zinc-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto overscroll-y-contain p-6 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent flex flex-col">
          {messages.length === 0 ? (
            <div className="flex flex-col justify-end h-full animate-in fade-in duration-500 pb-2">
              <div className="text-center space-y-2 mb-6 mt-auto">
                <h3 className="text-lg font-semibold text-white">
                  How can I help?
                </h3>
                <p className="text-sm text-zinc-400 font-light">
                  Ask anything about Ashish's background or projects.
                </p>
              </div>
              <div className="flex flex-col gap-2 w-full">
                {[
                  "Could you summarize Ashish's experience?",
                  "What are his core technical skills?",
                  "Tell me about some of his recent projects.",
                ].map((question) => (
                  <button
                    key={question}
                    type="button"
                    onClick={() => setInput(question)}
                    className="text-left text-sm text-zinc-300 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 rounded-xl px-4 py-3 transition-colors shadow-sm"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((m: any, i: number) => (
                <div
                  key={i}
                  className={cn(
                    "flex gap-3 animate-in slide-in-from-bottom-2 duration-300",
                    m.role === "user" ? "justify-end" : "justify-start",
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[85%] rounded-2xl px-4 py-3",
                      m.role === "user"
                        ? "bg-white text-black"
                        : "bg-zinc-900 text-zinc-200 border border-zinc-800",
                    )}
                  >
                    <p className="text-[10px] font-mono uppercase tracking-wider mb-1 opacity-70">
                      {m.role === "user" ? "You" : "AI"}
                    </p>
                    <p className="leading-relaxed text-sm">{m.content}</p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-zinc-800 bg-zinc-950 rounded-b-2xl">
          <form onSubmit={handleSubmit} className="relative flex w-full">
            <textarea
              value={input}
              onChange={handleInputChange}
              placeholder="Type your message..."
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl pl-4 pr-12 py-3 text-white text-sm resize-none outline-none focus:border-zinc-700 placeholder:text-zinc-600 min-h-15 max-h-25"
              rows={2}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(e as any);
                }
              }}
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="absolute bottom-2 right-2 p-2.5 rounded-full bg-zinc-700 text-white hover:bg-zinc-600 disabled:opacity-50 disabled:hover:bg-zinc-700 transition-all duration-300 group flex items-center justify-center shadow-md"
            >
              <MoveRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </form>
        </div>
      </div>

      {/* Floating Chat Button */}
      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-8 right-8 group z-50"
          title="Open chat"
        >
          <div className="relative">
            <div className="w-14 h-14 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center hover:bg-zinc-800 hover:border-zinc-600 transition-all duration-300 shadow-lg hover:scale-110">
              <svg
                className="w-6 h-6 text-zinc-300"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                />
              </svg>
            </div>

            {/* Badge */}
            {messages.length > 0 && (
              <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-white border-2 border-black flex items-center justify-center">
                <span className="text-[10px] font-bold text-black">
                  {messages.filter((m) => m.role === "system").length}
                </span>
              </div>
            )}
          </div>
        </button>
      )}
    </>
  );
});

export default ChatWidget;
