"use client";

import { ArrowUpRight, Cpu, FormInput, MonitorCheck } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Projects() {
  return (
    <section className="w-full py-32 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Featured <span className="text-zinc-500">Work</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl">
            A selection of intelligent systems and high-performance interfaces
            built for enterprise scale.
          </p>
        </div>

        {/* Bento Box Grid */}
      </div>
    </section>
  );
}
