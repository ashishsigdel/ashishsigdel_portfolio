"use client";
import React from "react";
import { LinkSection, LogoSection } from "@/components/asprog/header";

export default function Header() {
  return (
    <div className="sticky top-0 h-[6rem] z-[999] border-b border-black/20 dark:border-white/20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-3">
        <LogoSection />
        <LinkSection />
      </div>
    </div>
  );
}
