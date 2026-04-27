"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function BibliookHero() {
  const [downloadHref, setDownloadHref] = useState(
    "https://bibliook.ashishsigdel.com.np/download/desktop",
  );

  useEffect(() => {
    const ua = navigator.userAgent || "";
    const isMobile =
      /Android|iPhone|iPad|iPod|Mobile|IEMobile|Opera Mini/i.test(ua);

    setDownloadHref(
      `https://bibliook.ashishsigdel.com.np/download/${isMobile ? "mobile" : "desktop"}`,
    );
  }, []);

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-20 sm:px-6"
      style={{
        backgroundImage: "url('/bibliook/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center 25%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-linear-to-b from-black/65 via-black/45 to-black/70" />

      {/* Content */}
      <div
        className="relative mx-auto w-full max-w-5xl px-5 py-10 text-center sm:px-8 sm:py-12"
        style={{ zIndex: 10 }}
      >
        {/* Headline */}
        <h1 className="mb-6 text-6xl font-extrabold leading-[0.95] tracking-tight sm:text-5xl md:text-6xl lg:text-8xl">
          <span className="block bg-linear-to-b from-white via-white to-zinc-300 bg-clip-text pb-2 text-transparent">
            Study Smarter.
          </span>
          <span className="block bg-linear-to-b from-cyan-200 via-blue-200 to-blue-400/90 bg-clip-text pb-2 text-transparent">
            Learn Faster.
          </span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-zinc-200 md:text-lg">
          Explore curated notes, get instant AI answers, and take your studies
          to the next level — all in one place.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="https://bibliook.ashishsigdel.com.np/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-100 shadow-[0_10px_35px_rgba(255,255,255,0.2)]"
          >
            Open Bibliook
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
          <Link
            href={downloadHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/35 px-7 py-3.5 text-sm font-semibold text-zinc-100 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-200/70 hover:text-white backdrop-blur-sm"
          >
            Download App
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-14 flex items-center justify-center gap-8 text-sm">
          {[
            { val: "2K+", label: "Users" },
            { val: "50+", label: "Notes" },
            { val: "400+", label: "AI Answers" },
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-0.5">
              <span className="text-xl font-extrabold text-white">{s.val}</span>
              <span className="text-xs uppercase tracking-widest text-zinc-300">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
