"use client";
import Image from "next/image";
import React from "react";

type Props = {
  openAIChat: boolean;
  setOpenAIChat: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Floating({ openAIChat, setOpenAIChat }: Props) {
  if (openAIChat) return null;

  return (
    <>
      <div className="fixed bottom-8 right-8 flex flex-col items-center gap-1 z-50">
        <div
          className="bg-portfolio-primary/10 backdrop-blur-sm p-1 w-12 h-12 rounded-full object-cover flex items-center justify-center border border-portfolio-primary/40 hover:cursor-pointer group relative animate-float"
          aria-label="Ask AI"
          onClick={() => setOpenAIChat((prev) => !prev)}
        >
          {/* Tooltip */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-1 rounded-md text-xs bg-white/90 text-gray-900 shadow transition-opacity duration-200 opacity-0 pointer-events-none group-hover:opacity-100 ">
            Ask AI
          </div>
          <Image
            src="/robot.png"
            alt="robot"
            width={100}
            height={100}
            className="w-10 h-10 object-contain"
          />
        </div>
      </div>
    </>
  );
}
