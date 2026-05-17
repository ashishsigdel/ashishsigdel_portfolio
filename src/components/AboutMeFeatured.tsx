"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function AboutMeFeatured() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative w-full pt-24 px-6 overflow-visible">
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-14">
        {/* Header */}
        <div className="space-y-4">
          <p className="text-zinc-500 font-mono text-sm tracking-widest uppercase">
            Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            About <span className="text-orange-600">Me</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-3xl">
            A quick snapshot of who I am and how I build products.
          </p>
        </div>

        {/* Cards grid — info left, image right */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* LEFT COLUMN — info cards stacked */}
          <div className="col-span-1 flex flex-col gap-6">
            {/* Who I am */}
            <div className="group relative flex flex-col justify-between p-8 rounded-3xl border border-zinc-800 bg-zinc-950 hover:bg-zinc-900 overflow-hidden transition-all duration-500">
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/4 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10">
                <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-4">
                  Professional Summary
                </p>
                <p className="text-zinc-400 text-base leading-relaxed">
                  AI Engineer and full stack developer with production
                  experience building clinical intelligence systems, end-to-end
                  agentic workflows, scalable SaaS software, full stack web
                  applications, and predictive models over Electronic Health
                  Record data. Proficient in Javascript, Nodejs, Python,
                  FastAPI, Django, React, LangChain, LangGraph, RAG, and LLM
                  fine-tuning (QLoRA/LoRA).
                </p>
              </div>
            </div>

            {/* Skills architecture */}
            <div className="group relative flex flex-col justify-between p-8 rounded-3xl border border-zinc-800 bg-zinc-950 hover:bg-zinc-900 overflow-hidden transition-all duration-500">
              <div className="absolute -top-10 -left-10 w-44 h-44 bg-orange-600/5 rounded-full blur-3xl group-hover:bg-orange-600/10 transition-all duration-500 pointer-events-none" />
              <div className="relative z-10">
                <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-4">
                  Skills Architecture
                </p>
                <p className="text-zinc-400 text-base leading-relaxed">
                  My personal skills map — showing how technical depth, AI
                  practice, and product thinking work as{" "}
                  <span className="text-orange-600">one unified system</span>.
                </p>
              </div>
              <div className="relative z-10 mt-8 flex flex-wrap gap-2">
                {[
                  "Full-Stack",
                  "AI / ML",
                  "Design Systems",
                  "DevOps",
                  "Product",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs uppercase tracking-wider text-zinc-400 transition-colors duration-300 group-hover:border-zinc-700 group-hover:text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN — skills image */}
          <div className="group col-span-1 md:col-span-2 relative rounded-3xl border border-zinc-800 bg-zinc-950 hover:bg-zinc-900 overflow-hidden transition-all duration-500 flex flex-col">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-orange-600/5 rounded-full blur-3xl group-hover:bg-orange-600/10 transition-all duration-500 pointer-events-none" />

            {/* Window bar */}
            <div className="flex items-center justify-between border-b border-zinc-800 px-5 py-3 shrink-0">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-zinc-700" />
                <span className="w-3 h-3 rounded-full bg-zinc-700" />
                <span className="w-3 h-3 rounded-full bg-orange-600/80" />
              </div>
              <span className="text-xs font-mono text-zinc-500 tracking-widest uppercase">
                skills-architecture.map
              </span>
              <span className="text-xs font-mono text-zinc-600">v2026</span>
            </div>

            {/* Full image */}
            <div className="relative flex-1 p-4">
              <Image
                src="/skills/skills.png"
                alt="My skills architecture map"
                width={1400}
                height={900}
                className="w-full h-auto object-contain transition-transform duration-700"
              />
            </div>

            {/* Caption strip */}
            <div className="border-t border-zinc-800 px-5 py-3 shrink-0">
              <p className="text-sm text-zinc-400">
                Skills Architecture Map — how I design, build, and scale real
                products from concept to deployment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
