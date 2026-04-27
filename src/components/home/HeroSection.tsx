"use client";

import { useState, useRef } from "react";
import { MoveUp } from "lucide-react";
import ScrollVideo from "./ScrollVideo";
import { Spotlight } from "../ui/spotlight";
import Navbar from "@/components/utils/Navbar";

// Increase to make frames change faster. Height auto-adjusts so scroll ends with last frame.
const SCROLL_SPEED = 4;

const greetings = ["Hello", "Bonjour", "Hola", "Namaste", "Ciao", "Olá"];

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function HeroSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async (text: string) => {
    if (!text.trim() || isTyping) return;

    const userMessage: Message = { role: "user", content: text };
    setMessages([userMessage]);
    setInput("");
    setIsTyping(true);

    const responseText =
      "Hey amigo! I'm Ashish — Full-Stack Engineer, AI enthusiast, and problem solver. Ask me anything. I promise to keep it real. 👍";

    const assistantMessage: Message = { role: "assistant", content: "" };
    setMessages([userMessage, assistantMessage]);

    const chunks = responseText.split(" ");
    for (let i = 0; i < chunks.length; i++) {
      await new Promise((r) => setTimeout(r, 40));
      setMessages((prev) => {
        const newMessages = [...prev];
        newMessages[1] = {
          ...newMessages[1],
          content: newMessages[1].content + (i === 0 ? "" : " ") + chunks[i],
        };
        return newMessages;
      });
    }
    setIsTyping(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(input);
  };

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

        {/* Top Left - Greeting & Name only */}
        <div className="absolute top-14 left-4 md:top-24 md:left-12 z-10">
          {/* Animated Greeting - Infinite Slide Up */}
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

          {/* Name */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            <span className="bg-linear-to-bl from-orange-400 to-orange-950 bg-clip-text text-transparent">
              I&#39;m
            </span>{" "}
            Ashish
          </h1>
        </div>

        {/* Center Left - Main Heading vertically centered */}
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
          {/* Welcome Message or Chat Messages */}
          <div className="mb-4 px-3">
            {messages.length === 0 ? (
              <div className="text-left">
                <p className="text-zinc-300 text-lg font-semibold mb-1">
                  <span className="text-orange-600">
                    Nice to meet you, Pal!
                  </span>
                </p>
                <p className="text-white text-base md:text-xl leading-snug">
                  Explore my work with AI - Just ask about my projects, skills,
                  or experience.
                </p>
              </div>
            ) : (
              <div className="text-left">
                <p className="text-orange-600 text-lg font-semibold mb-1">
                  {messages[0]?.content}
                </p>
                <p className="text-white text-lg md:text-xl leading-snug">
                  {messages[1]?.content}
                  {isTyping && (
                    <span className="inline-block w-0.5 h-5 bg-white ml-1 animate-pulse" />
                  )}
                </p>
              </div>
            )}
          </div>

          {/* Input Area */}
          <form
            onSubmit={handleSubmit}
            className="relative w-full touch-manipulation"
          >
            <div className="relative rounded-full bg-white/15 backdrop-blur-sm flex items-center shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.15),inset_0_-1px_0_rgba(0,0,0,0.3)]">
              <input
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
          Based on Nepal. 🇳🇵
        </div>
      </section>
    </div>
  );
}
