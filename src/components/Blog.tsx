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
    <section className="w-full py-32 px-6">
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        <div className="flex items-end justify-between border-b border-zinc-800 pb-6">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Featured <span className="text-zinc-500">Blogs</span>
          </h2>
          <Link href="/blog" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2">
            View all <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="flex flex-col">
          {blogs.map((blog, i) => (
            <Link 
              key={i} 
              href={blog.href}
              className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-zinc-900 hover:border-zinc-700 transition-colors gap-4 md:gap-0"
            >
              <div className="flex flex-col gap-2">
                <span className="text-zinc-500 font-mono text-sm tracking-widest uppercase">{blog.date}</span>
                <h3 className="text-2xl font-bold text-zinc-300 group-hover:text-white transition-colors">
                  {blog.title}
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-zinc-500 text-sm group-hover:text-zinc-300 transition-colors">{blog.readTime}</span>
                <div className="flex items-center gap-2 text-accent-green opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  <span className="text-sm font-medium">Read</span>
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
