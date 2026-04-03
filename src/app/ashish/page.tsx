"use client";

import { useState } from "react";
import { MoveUp, Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Buttons";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";

const greetings = ["Hello", "Bonjour", "Hola", "Namaste", "Ciao", "Olá"];

const navLinks = [
  { name: "Bibliook", href: "/bibliook" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
];

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function AshishPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isNavHovered, setIsNavHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <section
      className="relative overflow-hidden bg-black"
      style={{ height: "100dvh" }}
    >
      {/* Spotlight effect */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      {/* 3D Robot background — shifted left, above text */}
      <div className="absolute inset-y-0 right-0 w-full md:w-[70%] z-20 pointer-events-none md:pointer-events-auto -translate-x-[22%]">
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* Dark gradient fade on the left to keep text readable */}
      <div className="absolute inset-y-0 left-0 w-3/4 md:w-1/2 z-0 bg-linear-to-r from-black via-black/90 to-transparent pointer-events-none" />

      {/* Dim overlay when nav is hovered */}
      <div
        className={cn(
          "absolute inset-0 bg-black/30 z-40 pointer-events-none transition-opacity duration-300",
          isNavHovered ? "opacity-100" : "opacity-0",
        )}
      />

      {/* Mobile menu backdrop */}
      {isMobileMenuOpen && (
        <div
          className="absolute inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Top Right - Nav Links */}
      <div className="absolute top-6 right-4 md:right-12 z-50 flex items-center gap-3 md:gap-6 text-sm font-medium touch-manipulation">
        <nav
          className="hidden md:flex items-center gap-4 md:gap-6"
          onMouseEnter={() => setIsNavHovered(true)}
          onMouseLeave={() => {
            setIsNavHovered(false);
            setHoveredLink(null);
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onMouseEnter={() => setHoveredLink(link.name)}
              onMouseLeave={() => setHoveredLink(null)}
              className={cn(
                "transition-all duration-300",
                hoveredLink && hoveredLink !== link.name
                  ? "text-white opacity-40"
                  : "text-white opacity-100",
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <Button
          title="Contact"
          onClick={() => {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        />
        {/* Hamburger - mobile only */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex items-center justify-center w-9 h-9 text-white"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Top Left - Greeting & Name */}
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
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          <span className="text-orange-700">I&#39;m</span> Ashish
        </h1>
      </div>

      {/* Center Left - Main Heading vertically centered */}
      <div className="absolute top-[28%] bottom-[38%] md:top-24 md:bottom-12 left-4 md:left-12 z-10 flex flex-col justify-center">
        <h2 className="text-[2.6rem] sm:text-5xl md:text-8xl lg:text-9xl font-bold leading-[0.85] tracking-tight bg-linear-to-b from-white via-white/55 to-white/10 bg-clip-text text-transparent pb-3 md:pb-7 space-y-3 sm:space-y-0">
          <span className="block">Building</span>
          <span className="block">Intelligent</span>
          <span className="block">Digital</span>
          <span className="block">Systems</span>
        </h2>

        <p className="text-zinc-500 text-sm font-light tracking-wide mt-2 block sm:hidden">
          Turning data into Intelligence, <br /> Idea into Vision.
        </p>
        <p className="text-zinc-500 text-sm font-light tracking-wide mt-2 hidden sm:inline">
          Turning data into Intelligence, Idea into Vision.
        </p>
      </div>

      {/* Bottom - Chat Area */}
      <div className="absolute bottom-6 left-4 right-4 md:bottom-12 md:left-auto md:right-12 md:max-w-md z-10">
        {/* Welcome Message or Chat Messages */}
        <div className="mb-4 px-3">
          {messages.length === 0 ? (
            <div className="text-left">
              <p className="text-zinc-300 text-lg font-semibold mb-1">
                <span className="text-orange-600">Nice to meet you,</span> pal
                <span className="text-orange-600">!</span>
              </p>
              <p className="text-white text-base md:text-xl leading-snug">
                I&#39;m really glad you&#39;re here. So, let&#39;s talk. Just
                start typing below and smile.🤓
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
          <div className="relative rounded-full bg-orange-700 flex items-center shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.15),inset_0_-1px_0_rgba(0,0,0,0.3)]">
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
              className="min-w-0 flex-1 bg-transparent outline-none text-white font-semibold text-base placeholder:text-white/60 px-6 py-4"
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="m-1.5 p-3 rounded-full text-black disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-150 active:scale-95 shrink-0"
              style={{
                background: "linear-gradient(160deg, #ffffff 0%, #d4d4d4 100%)",
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
          Powered by <span className="text-zinc-500">Ashish Intelligence</span>
        </p>
      </div>

      {/* Bottom Center - Location */}
      <div className="hidden md:block absolute bottom-4 left-1/2 -translate-x-1/2 text-sm font-medium gradient-sweep-text">
        Based on Nepal. 🇳🇵
      </div>

      {/* Mobile Bottom Sheet Nav */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-50 md:hidden">
        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 bg-black border-t border-zinc-800 transition-transform duration-300 ease-out rounded-t-3xl pointer-events-auto",
            isMobileMenuOpen ? "translate-y-0" : "translate-y-full",
          )}
        >
          {/* Handle */}
          <div className="flex justify-center pt-3 pb-2">
            <div className="w-12 h-1 bg-zinc-700 rounded-full" />
          </div>
          <nav className="flex flex-col px-6 pb-10 pt-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium py-4 px-4 rounded-lg text-white hover:bg-zinc-900 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="text-lg font-medium py-4 px-4 rounded-lg border border-zinc-700 text-white hover:bg-zinc-900 transition-colors mt-4 text-left"
            >
              Contact
            </button>
          </nav>
        </div>
      </div>
    </section>
  );
}
