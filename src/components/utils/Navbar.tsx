"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Button from "../ui/Buttons";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";

export default function Navbar() {
  const pathname = usePathname();
  const [isNavHovered, setIsNavHovered] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Bibliook", href: "/bibliook" },
  ];

  const normalizePath = (path: string) => {
    if (path.length > 1 && path.endsWith("/")) {
      return path.slice(0, -1);
    }
    return path;
  };

  const currentPath = normalizePath(pathname || "/");
  const isActiveLink = (href: string) => normalizePath(href) === currentPath;

  if (!isMounted) {
    return null;
  }

  return createPortal(
    <div>
      <div
        className={cn(
          "fixed top-4 right-3 md:top-5 md:right-10 z-120 flex items-center gap-3 md:gap-6 text-sm font-medium touch-manipulation rounded-full px-4 md:px-6 py-2 transition-all duration-300",
          isScrolled || isMobileMenuOpen
            ? "bg-zinc-900/35 backdrop-blur-xl backdrop-saturate-150 border border-white/20 shadow-[0_10px_38px_rgba(0,0,0,0.38),inset_0_1px_0_rgba(255,255,255,0.18)]"
            : "bg-transparent border border-transparent",
        )}
      >
        <nav
          className="hidden md:flex items-center gap-4 md:gap-6"
          onMouseEnter={() => setIsNavHovered(true)}
          onMouseLeave={() => {
            setIsNavHovered(false);
            setHoveredLink(null);
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onMouseEnter={() => setHoveredLink(link.name)}
              onMouseLeave={() => setHoveredLink(null)}
              className={cn(
                "transition-all duration-300",
                isActiveLink(link.href)
                  ? "text-orange-600 opacity-100"
                  : hoveredLink && hoveredLink !== link.name
                    ? "text-white opacity-40"
                    : "text-white opacity-100",
              )}
            >
              {/* <TextScramble text={link.name} /> */}
              {link.name}
            </Link>
          ))}
        </nav>
        <Link href={"/contact"}>
          <Button title="Contact" />
        </Link>
        {/* Hamburger - mobile only */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex items-center justify-center w-9 h-9 text-white"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {/* Dim overlay when nav is hovered */}
      <div
        className={cn(
          "fixed inset-0 bg-black/40 z-100 pointer-events-none transition-opacity duration-300",
          isNavHovered ? "opacity-100" : "opacity-0",
        )}
      />
      {/* Mobile menu backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-110 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Bottom Sheet Nav  */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-120 md:hidden">
        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 bg-black border-t border-zinc-800 transition-transform duration-300 ease-out rounded-t-3xl pointer-events-auto",
            isMobileMenuOpen ? "translate-y-0" : "translate-y-full",
          )}
        >
          {/* Handle */}
          <div className="flex justify-center pt-3 pb-2">
            <div className="w-12 h-1 bg-zinc-700 rounded-full" />
          </div>
          <nav className="flex flex-col px-6 pb-10 pt-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "text-lg font-medium py-4 px-4 rounded-lg transition-colors",
                  isActiveLink(link.href)
                    ? "text-orange-600 bg-zinc-900"
                    : "text-white hover:bg-zinc-900",
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>,
    document.body,
  );
}
