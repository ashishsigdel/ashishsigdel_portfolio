import React from "react";
import "@/styles/background.css";

export default function Background() {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-[-1] bg-gradient-to-br from-black via-gray-900 to-green-900 overflow-hidden">
      {/* Horizontal moving "Ashish" */}
      <div className="absolute text-[30rem] font-extrabold text-black/10 top-[100px] animate-scroll font-geist stroke-text">
        Ashish
      </div>

      {/* Floating Symbols */}
      <div className="absolute text-[10rem] font-bold opacity-10 text-gray-600 bottom-5 right-[30%] animate-float-slower">
        #
      </div>

      {/* Floating 3D brackets */}
      <div className="absolute top-1/4 left-32 sm:left-40 md:left-52 lg:left-72 opacity-80 text-9xl text-gray-700 animate-rotate-slow floating-3d shadow-md">
        &#123;
      </div>
      <div className="absolute bottom-1/3 right-1/4 opacity-80 text-8xl text-gray-600 animate-rotate-slower floating-3d">
        &#125;
      </div>
    </div>
  );
}
