"use client";
import React, { useEffect, useState } from "react";
import TopBar from "./TopBar";
import LeftBar from "./LeftBar";
import BottomBar from "./BottomBar";

export default function Outline({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 1000);
  }, []);
  return (
    <div
      className={`w-screen h-[100dvh] p-2 z-[999] transition-transform duration-700 ease-out ${
        isVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"
      }`}
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
    </div>
  );
}
