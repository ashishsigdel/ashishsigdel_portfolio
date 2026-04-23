"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BibliookPage() {
  return (
    <div className="w-full min-h-screen bg-black">
      {/* Back button */}
      <div className="fixed top-8 left-8 z-50">
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-md border border-white/20"
        >
          ← Back
        </Link>
      </div>

      {/* Expandable card container */}
      <motion.div
        layoutId="bibliook-card"
        className="relative w-full h-screen flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative w-full h-full flex flex-col items-center justify-center p-8">
          {/* Background glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent-green/10 rounded-full blur-3xl opacity-50" />

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative z-10 text-center max-w-4xl"
          >
            {/* Logo */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mb-8"
            >
              <Image
                src="/projects/bibliook-logo.png"
                alt="Bibliook Logo"
                width={200}
                height={200}
                className="w-40 h-40 mx-auto"
              />
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Bibliook
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-xl text-zinc-300 mb-8 leading-relaxed"
            >
              An AI-powered digital platform for exploring and interacting with content. 
              It combines full-stack engineering with scalable design to deliver a fast, 
              user-focused experience.
            </motion.p>

            {/* Details Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
            >
              <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors">
                <h3 className="text-sm font-mono uppercase text-zinc-400 mb-3">Tech Stack</h3>
                <p className="text-white">Next.js, TypeScript, AI SDK, Tailwind CSS</p>
              </div>
              <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors">
                <h3 className="text-sm font-mono uppercase text-zinc-400 mb-3">Focus</h3>
                <p className="text-white">Full-stack Engineering & Scalable Design</p>
              </div>
              <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors">
                <h3 className="text-sm font-mono uppercase text-zinc-400 mb-3">Outcome</h3>
                <p className="text-white">Fast, User-Focused Experience</p>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mt-12"
            >
              <a
                href="#"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-colors"
              >
                View Project <ArrowUpRight size={18} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
