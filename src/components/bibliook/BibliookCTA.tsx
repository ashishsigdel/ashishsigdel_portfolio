import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function BibliookCTA() {
  return (
    <section className="relative px-5 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 px-8 py-16 md:px-16 text-center">
          {/* Glow blobs */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-white/4 blur-[80px]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>

          <div className="relative z-10">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
              Free to use
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-5">
              Start studying smarter
              <br />
              <span className="bg-gradient-to-b from-white/60 to-white/20 bg-clip-text text-transparent">
                today.
              </span>
            </h2>
            <p className="text-zinc-500 max-w-md mx-auto text-sm mb-10">
              Join 2,000+ students already using Bibliook. No credit card. No
              setup. Just open and learn.
            </p>

            <Link
              href="https://bibliook.ashishsigdel.com.np"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-black hover:bg-zinc-100 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.1)]"
            >
              Open Bibliook
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
