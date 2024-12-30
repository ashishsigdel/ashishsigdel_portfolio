import React from "react";

export default function Floating() {
  return (
    <>
      {/* Floating Symbols */}
      <div className="absolute text-[10rem] font-bold opacity-10 text-gray-600 bottom-5 right-[30%] animate-float-slower z-[-1]">
        #
      </div>
      {/* Floating 3D brackets */}
      <div className="absolute top-1/4 left-10 sm:left-40 md:left-52 lg:left-72 opacity-80 text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gray-700 animate-rotate-slow floating-3d shadow-md z-[-1]">
        &#123;
      </div>
      <div className="absolute bottom-1/3 right-4 md:right-1/4 opacity-80 text-8xl text-gray-600 animate-rotate-slower floating-3d z-[-1]">
        &#125;
      </div>
    </>
  );
}
