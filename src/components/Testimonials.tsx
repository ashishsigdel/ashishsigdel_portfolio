"use client";

import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Ashish fundamentally transformed how we approach our frontend architecture. His deep understanding of React and Next.js allowed us to scale our application effortlessly while maintaining absolute visual excellence.",
    author: "Elena Rostova",
    role: "VP of Engineering, CloudScale",
  },
  {
    quote: "The agentic interfaces he builds aren't just functional—they feel alive. He has a unique ability to bridge complex LLM logic with hyper-minimalist, high-performance user experiences.",
    author: "Marcus Chen",
    role: "Founder, Hexa AI",
  },
  {
    quote: "Working with Ashish means never having to compromise on design or performance. He delivered a sophisticated, enterprise-grade system that exceeded our wildest expectations.",
    author: "Sarah Jenkins",
    role: "Product Lead, Datatron",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full py-32 px-6 bg-zinc-950/50 border-y border-zinc-900 border-dashed">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        <div className="flex flex-col items-center text-center space-y-4">
          <Quote className="text-zinc-800" size={48} />
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Client <span className="text-zinc-500">Testimonials</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col justify-between p-8 rounded-2xl bg-black border border-zinc-800 hover:border-zinc-700 transition-colors">
              <p className="text-zinc-300 text-lg leading-relaxed mb-10 font-light">
                "{t.quote}"
              </p>
              <div>
                <p className="text-white font-bold">{t.author}</p>
                <p className="text-zinc-500 text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
