"use client";

import { useEffect, useRef, useState } from "react";

const storyBlocks = [
  {
    title: "The Beginning",
    content:
      "My journey started with curiosity — breaking apart simple scripts and trying to understand how digital systems worked. What began as tinkering quickly turned into a genuine passion for building software that solves real problems.",
  },
  {
    title: "The Engineering Path",
    content:
      "After diving deep into computer science, I found my groove at the intersection of full-stack development and artificial intelligence. From building responsive interfaces to designing ML pipelines, I learned that the best products come from understanding the entire stack.",
  },
  {
    title: "Where I Am Now",
    content:
      "Today I architect and ship production systems that combine robust engineering with AI capabilities. Whether it's a RAG-powered study platform or a computer vision research paper, I'm always building at the edge of what's possible.",
  },
];

export default function AboutStory() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative w-full pt-24 px-6 overflow-visible">
      {/* Divider glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-28 left-1/2 -translate-x-1/2 w-screen"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-14">
        {/* Section header — matches home page pattern */}
        <div className="space-y-4">
          <p className="text-zinc-500 font-mono text-sm tracking-widest uppercase">
            Story
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            My <span className="text-orange-600">Story</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-3xl">
            How curiosity turned into craft, and craft into a career building intelligent systems.
          </p>
        </div>

        {/* Story blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {storyBlocks.map((block, i) => (
            <div
              key={block.title}
              className="group relative flex flex-col p-8 rounded-3xl border border-zinc-800 bg-zinc-950 hover:bg-zinc-900 overflow-hidden transition-all duration-500"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.7s ease ${i * 0.15}s, transform 0.7s ease ${i * 0.15}s, background-color 0.5s`,
              }}
            >
              {/* Decorative glow */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-600/5 rounded-full blur-3xl group-hover:bg-orange-600/10 transition-all duration-500 pointer-events-none" />

              <div className="relative z-10">
                {/* Step indicator */}
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 text-xs font-bold mb-5">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3">
                  {block.title}
                </p>
                <p className="text-zinc-400 text-base leading-relaxed">
                  {block.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
