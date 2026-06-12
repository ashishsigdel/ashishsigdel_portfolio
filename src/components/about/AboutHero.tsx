"use client";

import { MapPin, Briefcase, GraduationCap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const statusItems = [
  { icon: MapPin, label: "Based in Nepal", value: "Nepal" },
  { icon: Briefcase, label: "Current Role", value: "AI/ML + Full Stack" },
  { icon: GraduationCap, label: "Education", value: "Computer Engineering" },
];

export default function AboutHero() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={ref}
      className="relative w-full pt-32 md:pt-40 pb-12 px-6 overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-125 left-1/2 -translate-x-1/2 w-screen"
      >
        <div className="absolute left-1/2 top-0 h-100 w-[80%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(234,88,12,0.12),rgba(234,88,12,0.04)_40%,transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-center">
          {/* Text content */}
          <div
            className="flex flex-col gap-6"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
            }}
          >
            <div className="space-y-4">
              <p className="text-zinc-500 font-mono text-sm tracking-widest uppercase">
                About
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                I build things that{" "}
                <span className="text-orange-600">matter</span>
                <span className="text-zinc-600">.</span>
              </h1>
              <p className="text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed">
                I&apos;m Ashish Sigdel — a full-stack developer and AI/ML
                engineer who loves turning complex problems into elegant,
                human-centered solutions. I care deeply about craft, clarity,
                and building products that genuinely help people.
              </p>
            </div>

            {/* Status pills */}
            <div className="flex flex-wrap gap-3 mt-2">
              {statusItems.map((item) => (
                <div
                  key={item.label}
                  className="inline-flex items-center gap-2.5 rounded-full border border-zinc-800 bg-zinc-950 px-4 py-2.5 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900"
                >
                  <item.icon size={15} className="text-orange-600 shrink-0" />
                  <span className="text-sm text-zinc-300 font-medium">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
