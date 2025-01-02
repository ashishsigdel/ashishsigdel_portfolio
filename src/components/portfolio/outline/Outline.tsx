"use client";
import React, { useEffect, useState } from "react";
import TopBar from "./TopBar";
import LeftBar from "./LeftBar";
import BottomBar from "./BottomBar";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Outline({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <motion.div
      initial={
        pathname === "/" ? { scale: 0.8, opacity: 0 } : { scale: 1, opacity: 1 }
      }
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className={`w-screen h-[100dvh] p-2 z-[999] transition-transform duration-700 ease-out `}
    >
      <div className="w-full h-full border border-white/20 rounded-md flex flex-col overflow-hidden">
        <TopBar />
        <div className="flex overflow-y-auto h-full">
          <div className="h-full">
            <LeftBar />
          </div>
          <div className="w-full mx-auto overflow-y-auto h-full">
            {children}
          </div>
        </div>
        <BottomBar />
      </div>
    </motion.div>
  );
}
