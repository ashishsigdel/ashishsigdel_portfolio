"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const blogs = [
  {
    title: "The Architecture of Agentic Interfaces",
    date: "March 15, 2026",
    href: "/blog/agentic-interfaces",
    readTime: "5 min read",
  },
  {
    title: "Vercel AI SDK: A Paradigm Shift in React State",
    date: "February 28, 2026",
    href: "/blog/vercel-ai-sdk",
    readTime: "8 min read",
  },
  {
    title: "Micro-animations with Framer Motion and Tailwind v4",
    date: "January 14, 2026",
    href: "/blog/micro-animations",
    readTime: "6 min read",
  },
];

export default function Blog() {
  return (
    <section className="w-full pt-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-14">
        <div className="space-y-4">
          <p className="text-zinc-500 font-mono text-sm tracking-widest uppercase">
            Writing
          </p>
          <div className="flex items-end justify-between">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Featured <span className="text-orange-600">Blogs</span>
            </h2>
            <Link
              href="/blog"
              className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-mono"
            >
              View all <ArrowUpRight size={16} />
            </Link>
          </div>
          <p className="text-zinc-400 text-lg max-w-3xl">
            Thoughts on engineering, design, and building products.
          </p>
        </div>

        <div className="flex flex-col overflow-hidden">
          {blogs.map((blog, i) => (
            <Link
              key={i}
              href={blog.href}
              className="group flex flex-col md:flex-row md:items-center justify-between px-8 py-7 border-b border-zinc-800 last:border-b-0 transition-all duration-300 gap-4 md:gap-0"
            >
              <div className="flex flex-col gap-1.5">
                <span className="text-zinc-500 font-mono text-xs tracking-widest uppercase">
                  {blog.date}
                </span>
                <h3 className="text-xl font-bold text-zinc-300 group-hover:text-white transition-colors">
                  {blog.title}
                </h3>
              </div>
              <div className="flex items-center gap-4 shrink-0">
                <span className="text-zinc-500 text-sm group-hover:text-zinc-300 transition-colors font-mono">
                  {blog.readTime}
                </span>
                <div className="w-9 h-9 rounded-full border border-zinc-700 flex items-center justify-center group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300">
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
