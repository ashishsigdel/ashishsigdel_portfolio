"use client";

import { ArrowUpRight, Cpu, FormInput, MonitorCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function FeaturedProjects() {
  const router = useRouter();

  const handleBibliookClick = () => {
    router.push("/bibliook");
  };

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
        <div className="space-y-4">
          <p className="text-zinc-500 font-mono text-sm tracking-widest uppercase">
            Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Featured <span className="text-orange-600">Works</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-3xl">
            A selection of projects that highlight my skills and experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
          {/* Item 1: Agentic Form Builder (Large) */}
          <div className="group col-span-1 md:col-span-2 relative flex flex-col justify-end p-8 rounded-3xl border border-zinc-800 bg-zinc-950 hover:bg-zinc-900 overflow-hidden transition-all duration-500">
            <div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-500 z-10">
              <ArrowUpRight size={20} />
            </div>
            {/* Background design */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent z-0" />
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent-green/10 rounded-full blur-3xl group-hover:bg-accent-green/20 transition-all duration-500" />

            <div className="relative z-10 flex flex-col gap-4">
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
              </div>
            </div>
          </div>

          {/* Item 2: RAG Pipeline (Tall) */}
          <div className="group col-span-1 relative flex flex-col justify-end p-8 rounded-3xl border border-zinc-800 bg-zinc-950 hover:bg-zinc-900 overflow-hidden transition-all duration-500">
            <div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-500 z-10">
              <ArrowUpRight size={20} />
            </div>

            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-accent-blue/10 rounded-full blur-3xl group-hover:bg-accent-blue/20 transition-all duration-500" />

            <div className="relative z-10 flex flex-col gap-4">
              <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl w-fit">
                <Cpu className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  RAG Pipeline Explorer
                </h3>
                <p className="text-zinc-400">
                  Visualizing multi-step data retrieval, chunking, and embedding
                  workflows on complex high-density data.
                </p>
              </div>
            </div>
          </div>

          {/* Item 3: Awesome Frontend (Wide/Small) */}
          <div className="group col-span-1 md:col-span-3 relative flex flex-col md:flex-row items-start md:items-center justify-between p-8 md:p-12 rounded-3xl border border-zinc-800 bg-zinc-950 hover:bg-zinc-900 overflow-hidden transition-all duration-500">
            <div className="absolute -top-[50%] left-[50%] -translate-x-1/2 w-full h-full bg-accent-green/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex items-start gap-6 mb-6 md:mb-0">
              <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl">
                <MonitorCheck className="text-white" size={32} />
              </div>
              <div className="max-w-xl">
                <h3 className="text-3xl font-bold text-white mb-3">
                  Awesome Frontend
                </h3>
                <p className="text-zinc-400 text-lg">
                  A premium collection of high-fidelity, highly interactive UI
                  components engineered with precision, focusing on
                  micro-interactions and performance.
                </p>
              </div>
            </div>

            <Link
              href="/portfolio"
              className="relative z-10 flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-colors shrink-0"
            >
              View Case Study <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
