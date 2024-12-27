import React from "react";
import "@/styles/background.css";

export default function Background() {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-[-1] bg-gradient-to-br from-black via-gray-900 to-green-900 overflow-hidden">
      {/* Horizontal moving "Ashish" */}
      <div className="absolute text-[30rem] font-extrabold text-black/10 top-[100px] animate-scroll font-geist stroke-text">
        Ashish Dev
      </div>
    </div>
  );
}
