import type { Metadata } from "next";
import Navbar from "@/components/utils/Navbar";
import Footer from "@/components/Footer";
import BlogListContent from "@/components/blog/BlogListContent";

export const metadata: Metadata = {
  title: "Blog — Ashish Sigdel",
  description: "Thoughts on engineering, design, and building products.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black text-white antialiased overflow-x-hidden">
      <Navbar />

      <section className="relative w-full pt-34 pb-12 px-6 overflow-visible">
        {/* Decorative Top Gradient - Reused from Portfolio for consistency */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 z-0 h-32 left-1/2 -translate-x-1/2 w-screen"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
          <div className="absolute left-1/2 top-0 h-52 w-[78%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(234,88,12,0.18),rgba(234,88,12,0.07)_38%,rgba(0,0,0,0)_100%)] blur-2xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-12">
          {/* Header */}
          <div className="space-y-4">
            <p className="text-zinc-500 font-mono text-sm tracking-widest uppercase">
              Writing
            </p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Latest <span className="text-orange-600">Articles</span>
            </h1>
            <p className="text-zinc-400 text-lg max-w-3xl">
              Thoughts on engineering, design, and building products.
            </p>
          </div>

          <BlogListContent />
        </div>
      </section>

      <Footer />
    </main>
  );
}