"use client";

import { ArrowUpRight, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Reveal from "@/components/ui/Reveal";

function RagMomentumIllustration({ hovered }: { hovered: boolean }) {
  const layerHeights = [
    8, 9, 10, 11, 12, 14, 18, 24, 36, 54, 80, 114, 156, 206,
  ];

  return (
    <svg
      className="h-full w-full"
      width="272"
      height="267"
      viewBox="0 0 272 267"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="rag-front-stroke" x1="30" y1="240" x2="220" y2="40">
          <stop offset="0" stopColor="#3F434A" />
          <stop offset="1" stopColor="#787D86" />
        </linearGradient>
      </defs>

      {layerHeights.map((height, index) => {
        const x = 18 + index * 8.4;
        const y = 178 - index * 10.6;
        const width = 116;
        const skewY = 58;
        const depth = 4;
        const shiftX = hovered ? index * 0.75 : 0;
        const shiftY = hovered ? -index * 0.45 : 0;
        const activeStroke = hovered ? "#A4ACB7" : "url(#rag-front-stroke)";
        const faceOpacity = hovered ? 0.72 : 0.52;

        return (
          <g
            key={index}
            transform={`translate(${shiftX} ${shiftY})`}
            style={{
              transition:
                "transform 550ms cubic-bezier(0.22, 1, 0.36, 1), filter 400ms ease",
              transitionDelay: `${index * 18}ms`,
              filter: hovered ? "brightness(1.18)" : "brightness(1)",
            }}
          >
            <path
              d={`M ${x} ${y} L ${x + width} ${y + skewY} L ${x + width} ${y + skewY + height} L ${x} ${y + height} Z`}
              fill="#07080A"
              fillOpacity={faceOpacity}
              stroke={activeStroke}
              strokeWidth="0.75"
            />
            <path
              d={`M ${x} ${y} L ${x + width} ${y + skewY}`}
              stroke="#2B2E33"
              strokeLinecap="round"
              strokeWidth="0.75"
              opacity={hovered ? 0.95 : 0.78}
            />
            <path
              d={`M ${x + width} ${y + skewY} L ${x + width + depth} ${y + skewY + depth * 0.65} L ${x + width + depth} ${y + skewY + height + depth * 0.65} L ${x + width} ${y + skewY + height}`}
              fill="#060709"
              stroke="#2D3035"
              strokeWidth="0.75"
              opacity={0.85}
            />
          </g>
        );
      })}
    </svg>
  );
}

function BibliookPageLayer({ gradientId }: { gradientId: string }) {
  return (
    <svg
      className="w-full"
      width="489"
      viewBox="0 0 489 382"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="1">
        <rect
          x="10.2715"
          y="30"
          width="432"
          height="357"
          fill="#0A0A0A"
          stroke={`url(#${gradientId})`}
        />
        <line
          x1="55.6387"
          y1="97.6836"
          x2="394.812"
          y2="97.6836"
          stroke="white"
          strokeOpacity="0.7"
        />
        <line
          x1="55.6387"
          y1="135.651"
          x2="394.812"
          y2="135.651"
          stroke="white"
          strokeOpacity="0.6"
        />
        <line
          x1="55.6387"
          y1="173.618"
          x2="394.812"
          y2="173.618"
          stroke="white"
          strokeOpacity="0.5"
        />
        <line
          x1="55.6387"
          y1="211.585"
          x2="394.812"
          y2="211.585"
          stroke="white"
          strokeOpacity="0.4"
        />
        <line
          x1="55.6387"
          y1="249.552"
          x2="394.812"
          y2="249.552"
          stroke="white"
          strokeOpacity="0.3"
        />
        <line
          x1="55.6387"
          y1="287.52"
          x2="394.812"
          y2="287.52"
          stroke="white"
          strokeOpacity="0.2"
        />
        <line
          x1="55.6387"
          y1="325.487"
          x2="394.812"
          y2="325.487"
          stroke="white"
          strokeOpacity="0.1"
        />
      </g>
      <defs>
        <linearGradient
          id={gradientId}
          x1="226.271"
          y1="34"
          x2="226.271"
          y2="390"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="0.8" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function FeaturedProjects() {
  const [isBibliookArrowHovered, setIsBibliookArrowHovered] = useState(false);
  const [isRagCardHovered, setIsRagCardHovered] = useState(false);

  return (
    <section className="relative w-full pt-24 px-6 overflow-visible">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-28 left-1/2 -translate-x-1/2 w-screen"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/35 to-transparent" />
        <div className="absolute left-1/2 top-0 h-52 w-[78%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.2),rgba(255,255,255,0.09)_34%,rgba(255,255,255,0.02)_58%,rgba(0,0,0,0)_100%)] blur-2xl" />
        <div className="absolute inset-x-0 top-0 h-20 bg-linear-to-b from-white/10 via-white/5 to-transparent" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-14 ">
        <Reveal className="space-y-4">
          <p className="text-zinc-500 font-mono text-sm tracking-widest uppercase">
            Projects
          </p>
          <div className="flex items-end justify-between">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Featured <span className="text-orange-600">Works</span>
            </h2>
            <Link
              href="/portfolio"
              className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-mono"
            >
              View all <ArrowUpRight size={16} />
            </Link>
          </div>

          <p className="text-zinc-400 text-lg max-w-3xl">
            A selection of projects that highlight my skills and experience.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
          {/* Item 1: Bibliook */}
          <Reveal
            delay={0.1}
            className="group col-span-1 md:col-span-2 relative flex flex-col justify-end p-8 rounded-3xl border border-zinc-800 bg-zinc-950 hover:bg-zinc-900 overflow-hidden transition-all duration-500"
          >
            <Link
              href="https://bibliook.ashishsigdel.com.np"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-10 rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              aria-label="Open Bibliook website"
            />
            <div
              className={`absolute top-8 right-22 w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center transition-colors duration-500 z-20 cursor-pointer ${
                isBibliookArrowHovered
                  ? "text-white"
                  : "group-hover:bg-white group-hover:text-black"
              }`}
            >
              <Globe size={20} />
            </div>
            <Link
              href="/bibliook"
              onMouseEnter={() => setIsBibliookArrowHovered(true)}
              onMouseLeave={() => setIsBibliookArrowHovered(false)}
              onFocus={() => setIsBibliookArrowHovered(true)}
              onBlur={() => setIsBibliookArrowHovered(false)}
              className="absolute top-8 right-8 w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-500 z-20 cursor-pointer"
              aria-label="Open Bibliook detail page"
            >
              <ArrowUpRight size={20} />
            </Link>
            {/* Background design */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent z-0" />
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent-green/10 rounded-full blur-3xl group-hover:bg-accent-green/20 transition-all duration-500" />
            <div className="pointer-events-none absolute -right-16 top-24 z-0 w-72 opacity-20 transition duration-300 group-hover:opacity-30 md:-right-20 md:top-32 md:w-md">
              <div className="relative mt-2">
                <div className="absolute left-12 -top-8 transition-transform duration-300 group-hover:translate-x-4 group-hover:rotate-3">
                  <BibliookPageLayer gradientId="bibliook-layer-back" />
                </div>
                <div className="absolute left-8 -top-4">
                  <BibliookPageLayer gradientId="bibliook-layer-middle" />
                </div>
                <div className="relative left-4 transition-transform duration-300 group-hover:-translate-x-4 group-hover:-rotate-3">
                  <BibliookPageLayer gradientId="bibliook-layer-top" />
                </div>
              </div>
            </div>

            <div className="relative z-0 flex flex-col gap-4">
              <Image
                src={"/projects/bibliook-logo.png"}
                alt="bibliook-logo"
                width={300}
                height={300}
                className="w-32"
              />

              <div>
                <h3 className="text-2xl font-bold text-white mb-2 opacity-0 absolute">
                  Bibliook
                </h3>
                <p className="text-zinc-400 max-w-md">
                  Bibliook is an AI-powered digital platform for exploring and
                  interacting with content. It combines full-stack engineering
                  with scalable design to deliver a fast, user-focused
                  experience.
                </p>
                <div className="mt-6 inline-flex max-w-md items-start divide-x divide-zinc-800/80">
                  <div className="pr-4">
                    <span className="block text-xs uppercase tracking-wider text-zinc-500">
                      Total Users
                    </span>
                    <span className="block text-xl font-semibold leading-tight text-zinc-100">
                      2K+
                    </span>
                  </div>
                  <div className="px-4">
                    <span className="block text-xs uppercase tracking-wider text-zinc-500">
                      Total Notes
                    </span>
                    <span className="block text-xl font-semibold leading-tight text-zinc-100">
                      50+
                    </span>
                  </div>
                  <div className="pl-4">
                    <span className="block text-xs uppercase tracking-wider text-zinc-500">
                      AI Answers Solved
                    </span>
                    <span className="block text-xl font-semibold leading-tight text-zinc-100">
                      400+
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Item 2: RAG Pipeline (Tall) */}
          <Reveal delay={0.2} className="col-span-1">
            <div
              className="group cursor-pointer h-full relative flex flex-col justify-end p-8 rounded-3xl border border-zinc-800 bg-zinc-950 hover:bg-zinc-900 overflow-hidden transition-all duration-500"
              onMouseEnter={() => setIsRagCardHovered(true)}
              onMouseLeave={() => setIsRagCardHovered(false)}
            >
            <div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-500 z-10">
              <ArrowUpRight size={20} />
            </div>

            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-accent-blue/10 rounded-full blur-3xl group-hover:bg-accent-blue/20 transition-all duration-500" />

            <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-end px-2 py-8">
              <div className="h-full w-full max-w-[18rem] translate-x-6 transition-all duration-500 group-hover:translate-x-8">
                <RagMomentumIllustration hovered={isRagCardHovered} />
              </div>
            </div>

            <div className="pointer-events-none absolute inset-0 z-0 bg-linear-to-t from-zinc-950 via-zinc-950/70 to-transparent" />

            <div className="relative z-10 flex flex-col gap-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  ClearText AI
                </h3>
                <p className="text-zinc-400">
                  ClearText AI is an intelligent{" "}
                  <span className="text-orange-600">agentic</span> humanization
                  platform that automatically detects and removes AI
                  fingerprints from your content.
                </p>
              </div>
              <div className="rounded-lg border border-zinc-800 bg-zinc-900/70 px-2 py-1 transition-colors duration-300 group-hover:border-zinc-700 group-hover:text-zinc-300 text-xs w-fit">
                Drop your file. Our AI does the rest.
              </div>
            </div>
            </div>
          </Reveal>

          {/* Item 3: YOLO Cauliflower Disease Detection (Wide/Small) */}
          <Reveal
            delay={0.1}
            className="group col-span-1 md:col-span-3 relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 transition-all duration-500 hover:border-zinc-700 hover:bg-zinc-900/70"
          >
            <div className="grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] h-full">
              <div className="relative p-8 md:p-10 lg:p-12">
                <div className="absolute -left-14 top-10 h-40 w-40 rounded-full bg-white/5 blur-3xl pointer-events-none" />
                <div className="relative z-10 flex items-start gap-5 mb-7">
                  <div className="max-w-xl">
                    <h3 className="text-3xl font-bold tracking-tight text-white mb-3">
                      YOLO Cauliflower Disease Detection
                    </h3>
                    <p className="text-zinc-400 text-base leading-relaxed md:text-lg md:leading-relaxed">
                      Published research on early detection and localization of
                      cauliflower diseases using YOLO variants and transfer
                      learning. Built on a custom 810-image dataset across 5
                      classes with domain-expert annotations, with the best
                      YOLOv8s model achieving precision 34.43%, recall 31.94%,
                      and mAP@50 28.15% after ~200 epochs.
                    </p>
                  </div>
                </div>

                <Link
                  href="https://ieeexplore.ieee.org/document/11485071"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-black transition-all duration-300 hover:bg-zinc-200 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.2)]"
                >
                  Read IEEE Paper <ArrowUpRight size={18} />
                </Link>
              </div>

              <div className="relative border-t border-zinc-800 bg-zinc-950/70 p-6 md:border-t-0 md:border-l md:border-zinc-800 md:p-8 flex flex-col">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.09),rgba(0,0,0,0)_58%)]" />
                <p className="relative z-10 mb-4 text-xs font-mono uppercase tracking-[0.22em] text-zinc-500">
                  Model Snapshot
                </p>

                <div className="relative z-10 flex-1 min-h-45 overflow-hidden rounded-2xl border border-zinc-800/80 bg-[#09090b] p-3 transition-all duration-500 group-hover:border-zinc-600 group-hover:bg-[#0c0c0e]">
                  {/* Inline style for hover-triggered scanner animation */}
                  <style>{`
              @keyframes clean-scan {
                0% { top: 0%; opacity: 0; }
                10% { opacity: 1; }
                90% { opacity: 1; }
                100% { top: 100%; opacity: 0; }
              }
              .group:hover .scan-animation {
                animation: clean-scan 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
              }
            `}</style>

                  {/* Clean Scanner Area */}
                  <div className="relative w-full h-full rounded-xl bg-zinc-950 overflow-hidden flex items-center justify-center border border-zinc-800/50">
                    {/* Subtle Tech Grid Background */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[1.25rem_1.25rem]"></div>

                    {/* Bounding Box Container */}
                    <div className="relative w-3/5 h-[65%] border border-zinc-700/40 group-hover:border-zinc-500/80 transition-colors duration-500">
                      {/* 4 Corner Markers (YOLO style) */}
                      <div className="absolute -top-px -left-px w-3 h-3 border-t-2 border-l-2 border-zinc-400 opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute -top-px -right-px w-3 h-3 border-t-2 border-r-2 border-zinc-400 opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute -bottom-px -left-px w-3 h-3 border-b-2 border-l-2 border-zinc-400 opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute -bottom-px -right-px w-3 h-3 border-b-2 border-r-2 border-zinc-400 opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Animated Scan Line (Hidden until group hover triggers the animation) */}
                      <div className="scan-animation absolute left-0 right-0 h-px opacity-0 bg-white/40 shadow-[0_0_8px_1px_rgba(255,255,255,0.2)] group-hover:bg-white group-hover:shadow-[0_0_12px_2px_rgba(255,255,255,0.5)] transition-colors duration-500" />
                    </div>
                  </div>
                </div>

                <div className="relative z-10 mt-4 grid grid-cols-3 gap-2 text-center text-[11px] uppercase tracking-[0.08em] text-zinc-400">
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/70 p-2.5 transition-colors duration-300 group-hover:border-zinc-700 group-hover:text-zinc-300">
                    P 34.43%
                  </div>
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/70 p-2.5 transition-colors duration-300 group-hover:border-zinc-700 group-hover:text-zinc-300">
                    R 31.94%
                  </div>
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/70 p-2.5 transition-colors duration-300 group-hover:border-zinc-700 group-hover:text-zinc-300">
                    mAP50 28.15%
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
