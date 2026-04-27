"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  {
    label: "About",
    href: "https://bibliook.ashishsigdel.com.np/about",
  },
  { label: "Search", href: "https://bibliook.ashishsigdel.com.np/search" },
  {
    label: "Dashboard",
    href: "https://bibliook.ashishsigdel.com.np/dashboard",
  },
  {
    label: "IOE Preparation",
    href: "https://bibliook.ashishsigdel.com.np/ioe/browse-semester",
  },
];

export default function BibliookHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed left-1/2 top-10 z-50 w-[calc(100%-1.5rem)] max-w-6xl -translate-x-1/2 rounded-2xl border transition-all duration-500 ${
        scrolled
          ? "border-white/15 bg-white/5 backdrop-blur-xl shadow-[0_12px_30px_rgba(0,0,0,0.45)]"
          : "border-white/10 bg-white/0 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-16 items-center justify-between px-5 md:px-8">
        {/* Logo */}
        <Link href="/bibliook" className="flex items-center gap-2.5">
          <Image
            src="/projects/bibliook-logo.png"
            alt="Bibliook"
            width={100}
            height={100}
            className="w-32 object-contain"
          />
          <h1 className="sr-only">Bibliook</h1>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={
                l.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Login CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="https://bibliook.ashishsigdel.com.np/login"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-black hover:bg-zinc-200 transition-colors"
          >
            Get started <ArrowUpRight size={13} />
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white p-1"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden rounded-b-2xl border-t border-white/10 bg-black/95 px-5 py-4 backdrop-blur-xl flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={
                l.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="text-sm text-zinc-400 hover:text-white transition-colors py-1"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <div className="flex items-center gap-3 pt-2 border-t border-white/8">
            <Link
              href="https://bibliook.ashishsigdel.com.np/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-black"
            >
              Get started <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
