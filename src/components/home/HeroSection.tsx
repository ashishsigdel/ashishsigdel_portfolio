"use client";

import { useState, useRef, useCallback } from "react";
import { MoveUp } from "lucide-react";
import ReactMarkdown from "react-markdown";
import ScrollVideo from "./ScrollVideo";
import { Spotlight } from "../ui/spotlight";
import Navbar from "@/components/utils/Navbar";
import { myAxios } from "@/services/apiServices";

// Increase to make frames change faster. Height auto-adjusts so scroll ends with last frame.
const SCROLL_SPEED = 4;

const greetings = ["Hello", "Bonjour", "Hola", "Namaste", "Ciao", "Olá"];

// ─── Types ────────────────────────────────────────────────────────────────────

type HistoryMessage = {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
};

// ─── Token helpers (mirrored from Chat.tsx) ───────────────────────────────────

const TOKEN_KEY = "ai.jwt";
const TOKEN_EXP_KEY = "ai.jwt.exp";

function loadTokenFromStorage(): { t: string | null; e: number | null } {
  try {
    const t = localStorage.getItem(TOKEN_KEY);
    const e = localStorage.getItem(TOKEN_EXP_KEY);
    if (!t || !e) return { t: null, e: null };
    return { t, e: Number(e) };
  } catch {
    return { t: null, e: null };
  }
}

function saveTokenToStorage(
  t: string,
  setToken: (v: string) => void,
  setTokenExpiry: (v: number) => void,
  expMsFromNow = 60 * 60 * 1000,
) {
  const expiry = Date.now() + expMsFromNow;
  try {
    localStorage.setItem(TOKEN_KEY, t);
    localStorage.setItem(TOKEN_EXP_KEY, String(expiry));
  } catch {}
  setToken(t);
  setTokenExpiry(expiry);
}

function clearTokenStorage(
  setToken: (v: null) => void,
  setTokenExpiry: (v: null) => void,
) {
  try {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(TOKEN_EXP_KEY);
  } catch {}
  setToken(null);
  setTokenExpiry(null);
}

function buildHistoryString(msgs: HistoryMessage[]): string {
  return msgs
    .filter((m) => !!m.content)
    .map((m) => {
      const ts = m.timestamp.toISOString();
      return `[${ts}] ${m.isUser ? "User" : "AI"}: ${m.content}`;
    })
    .join("\n");
}

function getErrorDetail(error: unknown): string {
  if (typeof error !== "object" || error === null || !("response" in error)) {
    return "";
  }

  const response = (error as { response?: { data?: { message?: unknown } } })
    .response;
  return typeof response?.data?.message === "string"
    ? response.data.message
    : "";
}

function ChatLoading() {
  return (
    <div className="mt-1 inline-flex items-center gap-2 text-sm font-medium text-zinc-300">
      <span>Thinking</span>
      <span className="inline-flex gap-1" aria-hidden="true">
        {[0, 1, 2].map((dot) => (
          <span
            key={dot}
            className="size-1.5 rounded-full bg-zinc-300 animate-pulse"
            style={{ animationDelay: `${dot * 140}ms` }}
          />
        ))}
      </span>
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function HeroSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Visible state — only the latest exchange
  const [input, setInput] = useState("");
  const [userText, setUserText] = useState("");
  const [aiText, setAiText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Internal full history (sent to API, never rendered)
  const historyRef = useRef<HistoryMessage[]>([]);

  // Token state
  const [token, setToken] = useState<string | null>(null);
  const [tokenExpiry, setTokenExpiry] = useState<number | null>(null);

  // ── Token initialisation (same logic as Chat.tsx) ──────────────────────────

  const initializeToken = useCallback(async (): Promise<string | null> => {
    try {
      const { t, e } = loadTokenFromStorage();
      if (t && e && Date.now() < e) {
        setToken(t);
        setTokenExpiry(e);
        return t;
      }
      const resp = await myAxios.get("/ai", {
        headers: {
          accept: "application/json, text/plain, */*",
          "cache-control": "no-cache",
          pragma: "no-cache",
        },
      });
      const newToken =
        typeof resp?.data === "string" ? resp.data : resp?.data?.token;
      if (!newToken) throw new Error("Token not received");
      saveTokenToStorage(newToken, setToken, setTokenExpiry, 60 * 60 * 1000);
      return newToken;
    } catch {
      clearTokenStorage(setToken, setTokenExpiry);
      return null;
    }
  }, []);

  // ── Send message ────────────────────────────────────────────────────────────

  const handleSendMessage = async (text: string) => {
    if (!text.trim() || isTyping) return;

    setErrorMsg("");
    setUserText(text);
    setAiText("");
    setInput("");
    setIsTyping(true);
    requestAnimationFrame(() => inputRef.current?.focus());

    // ── Resolve auth token ──
    let authToken = token;
    if (!authToken || !tokenExpiry) {
      authToken = await initializeToken();
    }

    const { t: storedToken, e: storedExp } = loadTokenFromStorage();
    const effectiveToken = authToken || storedToken;
    const effectiveExp = storedExp ?? tokenExpiry;

    if (!effectiveToken || !effectiveExp || Date.now() >= effectiveExp) {
      setAiText(
        "Session expired. Please refresh the page to start a new conversation.",
      );
      setIsTyping(false);
      return;
    }

    // ── Build history from internal log ──
    const previousMessages = [...historyRef.current];
    const historyString = buildHistoryString(previousMessages);

    // Add user message to internal history
    const userMsg: HistoryMessage = {
      id: Date.now().toString(),
      content: text,
      isUser: true,
      timestamp: new Date(),
    };
    historyRef.current = [...previousMessages, userMsg];

    // ── Streaming fetch (SSE) ──
    try {
      const response = await fetch(`${myAxios.defaults.baseURL}/ai`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
          "Cache-Control": "no-cache",
          Pragma: "no-cache",
          Authorization: `Bearer ${effectiveToken}`,
        },
        body: JSON.stringify({ prompt: text, history: historyString }),
      });

      if (!response.ok || !response.body) {
        throw new Error("Failed to get AI response");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let sseBuffer = "";
      let fullAiResponse = "";

      const appendText = (chunk: string) => {
        fullAiResponse += chunk;
        setAiText(fullAiResponse);
      };

      outer: while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        sseBuffer += decoder.decode(value, { stream: true });

        const lines = sseBuffer.split("\n");
        sseBuffer = lines.pop() || "";

        for (const raw of lines) {
          const line = raw.trim();
          if (!line) continue;

          if (line.startsWith("event:")) {
            const evt = line.slice(6).trim();
            if (evt === "done" || evt === "end") break outer;
            continue;
          }

          if (line.startsWith("data:")) {
            const dataContent = line.slice(5).trim();
            if (dataContent === "[DONE]") break outer;

            let textToAdd = "";
            try {
              const parsed: unknown = JSON.parse(dataContent);
              if (typeof parsed === "string") {
                textToAdd = parsed;
              } else if (
                typeof parsed === "object" &&
                parsed !== null &&
                "text" in parsed
              ) {
                const parsedText = (parsed as { text?: unknown }).text;
                textToAdd = typeof parsedText === "string" ? parsedText : "";
              }
            } catch {
              textToAdd = dataContent;
            }
            if (textToAdd) appendText(textToAdd);
          } else {
            // Non-SSE formatted chunk — append raw
            appendText(raw);
          }
        }
      }

      // Save completed AI reply to internal history
      const aiMsg: HistoryMessage = {
        id: (Date.now() + 1).toString(),
        content: fullAiResponse,
        isUser: false,
        timestamp: new Date(),
      };
      historyRef.current = [...historyRef.current, aiMsg];
    } catch (error: unknown) {
      const detail = getErrorDetail(error);
      setAiText(`Sorry, I encountered an error.${detail ? ` ${detail}` : ""}`);
    } finally {
      setIsTyping(false);
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(input);
  };

  const hasConversation = !!userText;

  // ─── Render ─────────────────────────────────────────────────────────────────

  return (
    <div
      ref={scrollContainerRef}
      className="relative"
      style={{ height: "100dvh" }}
    >
      <section className="relative isolate" style={{ height: "100dvh" }}>
        {/* Spotlight effect */}
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />

        {/* Scroll-animated Background */}
        <ScrollVideo
          className="z-0"
          opacity={1.0}
          scrollContainerRef={scrollContainerRef}
          scrollSpeed={SCROLL_SPEED}
        />

        <Navbar />

        {/* Top Left - Greeting & Name */}
        <div className="absolute top-14 left-4 md:top-24 md:left-12 z-10">
          <div className="relative h-5 overflow-hidden mb-2">
            <div className="greeting-slide-animation">
              {[...greetings, greetings[0]].map((greeting, index) => (
                <p
                  key={index}
                  className="h-5 leading-5 text-base text-orange-400 italic"
                >
                  {greeting},
                </p>
              ))}
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            <span className="bg-linear-to-bl from-orange-400 to-orange-950 bg-clip-text text-transparent">
              I&#39;m
            </span>{" "}
            Ashish
          </h1>
        </div>

        {/* Center Left - Main Heading */}
        <div className="absolute top-[28%] bottom-[38%] md:top-24 md:bottom-12 left-4 md:left-12 z-1 flex flex-col justify-center">
          <h2 className="text-[2.6rem] sm:text-5xl md:text-8xl lg:text-9xl font-bold leading-[0.85] tracking-tight bg-linear-to-b from-white via-white/65 to-white/30 bg-clip-text text-transparent pb-3 md:pb-7 space-y-3 sm:space-y-0">
            <span className="block">Building</span>
            <span className="block">Intelligent</span>
            <span className="block">Digital</span>
            <span className="block">Systems</span>
          </h2>

          <p className="text-zinc-400 text-sm font-medium tracking-wide mt-2 block sm:hidden">
            AI/ML Engineer +<br /> Full Stack Developer
          </p>
          <p className="text-zinc-400 text-sm font-medium tracking-wide mt-2 hidden sm:inline">
            AI/ML Engineer + Full Stack Developer
          </p>
        </div>

        {/* Bottom - Chat Area */}
        <div className="absolute bottom-6 left-4 right-4 md:bottom-12 md:left-auto md:right-12 md:w-md z-10">
          {/* Single-exchange display */}
          <div className="mb-4 px-3">
            {!hasConversation ? (
              /* Welcome state */
              <div className="text-left">
                <p className="text-zinc-300 text-lg font-semibold mb-1">
                  <span className="text-orange-600">
                    Nice to meet you, Pal!
                  </span>
                </p>
                <p className="text-white text-base md:text-xl leading-snug">
                  Explore my work with AI – Just ask about my projects, skills,
                  or experience.
                </p>
              </div>
            ) : (
              /* Latest exchange */
              <div className="text-left">
                {/* User bubble */}
                <p className="text-orange-600 text-lg font-semibold mb-1 truncate">
                  {userText}
                </p>

                {/* AI response — streaming or settled */}
                <div className="text-white text-lg md:text-xl leading-snug prose prose-invert prose-sm max-w-none">
                  {aiText || !isTyping ? (
                    <>
                      <ReactMarkdown
                        components={{
                          a: ({ href, children }) => (
                            <a
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-orange-400 underline"
                            >
                              {children}
                            </a>
                          ),
                          p: ({ children }) => (
                            <p className="mb-1 last:mb-0">{children}</p>
                          ),
                        }}
                      >
                        {aiText || errorMsg}
                      </ReactMarkdown>
                      {isTyping && (
                        <span className="inline-block w-0.5 h-5 bg-white ml-1 animate-pulse" />
                      )}
                    </>
                  ) : (
                    <ChatLoading />
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="relative w-full touch-manipulation"
          >
            <div className="relative rounded-full bg-white/15 backdrop-blur-sm flex items-center shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.15),inset_0_-1px_0_rgba(0,0,0,0.3)]">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleSubmit(e);
                  }
                }}
                placeholder="Ask me anything ..."
                className="min-w-0 flex-1 bg-transparent outline-none text-white font-semibold text-base placeholder:text-white/60 px-6 py-2"
                readOnly={isTyping}
                aria-busy={isTyping}
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="m-1.5 p-3 rounded-full text-black disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-150 active:scale-95 shrink-0"
                style={{
                  background:
                    "linear-gradient(160deg, #ffffff 0%, #d4d4d4 100%)",
                  boxShadow:
                    "0 3px 0 rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,1)",
                }}
              >
                <MoveUp size={18} />
              </button>
            </div>
          </form>

          {/* Powered By */}
          <p className="text-zinc-600 text-xs mt-4 text-center">
            Powered by{" "}
            <span className="text-zinc-500">Ashish Intelligence</span>
          </p>
        </div>

        <div className="hidden md:block absolute bottom-4 left-1/2 -translate-x-1/2 text-sm font-medium gradient-sweep-text">
          Based in Nepal. 🇳🇵
        </div>
      </section>
    </div>
  );
}
