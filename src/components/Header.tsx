"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Button from "./ui/Buttons";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isNavHovered, setIsNavHovered] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log("Scroll Y:", window.scrollY);

      const heroScrollEnd = window.innerHeight * 2;
      setScrolled(window.scrollY > heroScrollEnd);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Bibliook", href: "/bibliook" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <>
      {/* Full page dim overlay when nav is hovered */}
      <div
        className={cn(
          "fixed inset-0 bg-black/60 z-40 pointer-events-none transition-opacity duration-300",
          isNavHovered ? "opacity-100" : "opacity-0",
        )}
      />
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300",
          scrolled
            ? "bg-black/60 backdrop-blur-2xl border-b border-zinc-800"
            : "bg-transparent border-b border-transparent",
        )}
      >
        <div className="@container w-full max-w-7xl mx-auto h-full flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12">
          {/* LEFT GROUP: Logo + Navigation */}
          <div className="flex items-center gap-4 @sm:gap-6 @md:gap-8 @lg:gap-12">
            <Link
              href="/"
              className="text-lg @sm:text-xl font-bold tracking-tight text-white"
            >
              Ashish
              <span className="font-mono text-zinc-400">{"<Sigdel>"}</span>
            </Link>

            <nav
              className="hidden @md:flex items-center"
              onMouseEnter={() => setIsNavHovered(true)}
              onMouseLeave={() => {
                setIsNavHovered(false);
                setHoveredLink(null);
              }}
            >
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className={cn(
                    "text-xs @lg:text-sm font-medium px-2 @lg:px-4 transition-all duration-300 relative z-[60]",
                    pathname === link.href
                      ? "text-accent-green"
                      : hoveredLink && hoveredLink !== link.name
                        ? "text-white opacity-40"
                        : "text-white opacity-100",
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* RIGHT GROUP: Contact Button + Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button
              title="Contact"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="@md:hidden flex flex-col gap-1.5 w-6 h-6 justify-center items-center"
              aria-label="Toggle menu"
            >
              <span
                className={cn(
                  "w-6 h-0.5 bg-white transition-all duration-300",
                  isMobileMenuOpen && "rotate-45 translate-y-2",
                )}
              />
              <span
                className={cn(
                  "w-6 h-0.5 bg-white transition-all duration-300",
                  isMobileMenuOpen && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "w-6 h-0.5 bg-white transition-all duration-300",
                  isMobileMenuOpen && "-rotate-45 -translate-y-2",
                )}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm @md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Bottom Sheet */}
      <div
        className={cn(
          "fixed bottom-0 left-0 right-0 z-50 bg-black border-t border-zinc-800 @md:hidden transition-transform duration-300 ease-out rounded-t-3xl",
          isMobileMenuOpen ? "translate-y-0" : "translate-y-full",
        )}
      >
        {/* Handle/Indicator */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-12 h-1 bg-zinc-700 rounded-full" />
        </div>

        <nav className="flex flex-col px-6 pb-8 pt-4 gap-1">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "text-lg font-medium py-4 px-4 rounded-lg transition-colors",
                pathname === link.href
                  ? "text-accent-green bg-accent-green/10"
                  : "text-white hover:bg-zinc-900",
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-lg font-medium py-4 px-4 rounded-lg border border-accent-blue text-white hover:bg-accent-blue/10 transition-colors mt-4"
          >
            Contact
          </Link>
        </nav>
      </div>
    </>
  );
}
