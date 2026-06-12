"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const links = {
  Navigate: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
  ],
  Products: [
    {
      label: "Bibliook",
      href: "https://bibliook.ashishsigdel.com.np",
      external: true,
    },
    { label: "ClearText AI", href: "/portfolio", external: false },
    {
      label: "YOLO Research",
      href: "https://ieeexplore.ieee.org/document/11485071",
      external: true,
    },
  ],
  Connect: [
    {
      label: "GitHub",
      href: "https://github.com/ashishsigdel",
      external: true,
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/aasisigdel",
      external: true,
    },
    {
      label: "Twitter / X",
      href: "https://x.com/_ashishsigdel_",
      external: true,
    },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
  ],
};

function GrainCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const FPS = 12;
    const frameInterval = 1000 / FPS;
    let animId: number;
    let lastFrameTime = 0;
    let isVisible = true;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const renderGrain = () => {
      const w = canvas.width;
      const h = canvas.height;
      if (!w || !h) return;
      const imageData = ctx.createImageData(w, h);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const px = (i / 4) % w;
        const py = Math.floor(i / 4 / w);

        // Radial mask — only apply grain inside the elliptical glow zone
        const cx = w / 2;
        const cy = h;
        const dx = (px - cx) / (w * 0.55);
        const dy = (py - cy) / (h * 0.85);
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > 1) {
          data[i + 3] = 0;
          continue;
        }

        const falloff = Math.max(0, 1 - dist);
        const noise = Math.random() * 255;
        const alpha = falloff * falloff * 38;

        data[i] = noise;
        data[i + 1] = noise * 0.4;
        data[i + 2] = 0;
        data[i + 3] = alpha;
      }

      ctx.clearRect(0, 0, w, h);
      ctx.putImageData(imageData, 0, 0);
    };

    const loop = (time: number) => {
      animId = requestAnimationFrame(loop);
      if (!isVisible || time - lastFrameTime < frameInterval) return;
      lastFrameTime = time;
      renderGrain();
    };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      renderGrain();
    };

    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // Static grain only when the user prefers reduced motion
    if (reducedMotion) {
      return () => ro.disconnect();
    }

    const io = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    io.observe(canvas);

    animId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ mixBlendMode: "screen" }}
    />
  );
}

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-black">
      {/* ── Ambient glow layers ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* soft wide halo */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[160%] h-[80%]"
          style={{
            background:
              "radial-gradient(ellipse at 50% 100%, rgba(194,65,12,0.50) 0%, rgba(120,40,8,0.28) 32%, rgba(30,10,2,0.12) 62%, transparent 82%)",
          }}
        />
        {/* tight bright core */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-[42%]"
          style={{
            background:
              "radial-gradient(ellipse at 50% 100%, rgba(251,113,33,0.40) 0%, rgba(194,65,12,0.22) 42%, transparent 72%)",
          }}
        />
        {/* specular hot-spot */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[30%] h-[18%]"
          style={{
            background:
              "radial-gradient(ellipse at 50% 100%, rgba(253,186,116,0.30) 0%, transparent 70%)",
          }}
        />
        {/* animated grain — sits on top of glows */}
        <GrainCanvas />
      </div>

      {/* ── Top fade-to-black ── */}
      <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-black via-black/80 to-transparent z-10 pointer-events-none" />

      {/* ── Content ── */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 pt-52 pb-12 flex flex-col gap-24">
        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
          {Object.entries(links).map(([category, items]) => (
            <div key={category} className="flex flex-col gap-4">
              <p className="text-zinc-500 font-mono text-[10px] tracking-[0.2em] uppercase">
                {category}
              </p>
              <ul className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      {...("external" in item && item.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="group inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {item.label}
                      {"external" in item && item.external && (
                        <svg
                          className="w-2.5 h-2.5 opacity-0 group-hover:opacity-60 transition-opacity -translate-y-px"
                          viewBox="0 0 10 10"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <path d="M1.5 8.5 8.5 1.5M4 1.5h4.5v4.5" />
                        </svg>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 -mt-14">
          <p className="text-white font-mono text-[11px] tracking-widest uppercase">
            &copy; {new Date().getFullYear()} Ashish Sigdel. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
