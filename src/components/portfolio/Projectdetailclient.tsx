"use client";

import { useState, useEffect } from "react";
import { ChevronUp, Github, ExternalLink } from "lucide-react";

// ── Scroll progress bar ────────────────────────────────────────────────────
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handler = () => {
      const el = document.documentElement;
      const scrollTop = el.scrollTop || document.body.scrollTop;
      const height = el.scrollHeight - el.clientHeight;
      setProgress(height > 0 ? (scrollTop / height) * 100 : 0);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-zinc-900">
      <div
        className="h-full bg-gradient-to-r from-orange-500 to-amber-400 transition-[width] duration-75"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

// ── Back to top button ─────────────────────────────────────────────────────
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-8 right-8 z-40 p-3 rounded-full border border-zinc-700 bg-zinc-900/90 text-zinc-400 hover:text-white hover:border-zinc-500 backdrop-blur-sm transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ChevronUp size={16} />
    </button>
  );
}

// ── Engagement Panel (inline layout) ────────────────────────────────────────
export function EngagementPanel({
  githubLink,
  previewLink,
}: {
  githubLink?: string | null;
  previewLink?: string | null;
}) {
  return (
    <div className="space-y-6">
      {/* Action Links */}
      <div className="flex items-center gap-4">
        {/* Github Link */}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-zinc-800 bg-zinc-900/60 text-zinc-400 flex items-center justify-center hover:border-zinc-600 hover:text-zinc-200 hover:bg-zinc-800 transition-all duration-300"
            title="Source Code"
          >
            <Github size={16} />
          </a>
        )}

        {/* Preview Link */}
        {previewLink && (
          <a
            href={previewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-zinc-800 bg-zinc-900/60 text-zinc-400 flex items-center justify-center hover:border-zinc-600 hover:text-zinc-200 hover:bg-zinc-800 transition-all duration-300"
            title="Live Preview"
          >
            <ExternalLink size={16} />
          </a>
        )}
      </div>
    </div>
  );
}
