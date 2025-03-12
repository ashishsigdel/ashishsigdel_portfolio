import React from "react";

export default function Floating() {
  return (
    <>
      {/* Floating Symbols */}
      <div className="absolute text-[6rem] md:text-[8rem] lg:text-[10rem] font-bold opacity-10 text-gray-600 bottom-10 md:bottom-5 left-[10%] md:left-[20%] animate-float-slower z-[-1]">
        #
      </div>
      {/* Floating 3D brackets */}
      <div className="absolute top-[30%] sm:top-[27%] md:top-[24%] lg:top-[15%] left-10 sm:left-24 md:left-28 lg:left-40 min-[1200px]:left-72 opacity-80 text-5xl sm:text-6xl md:text-7xl lg:text-8xl  text-gray-700 animate-rotate-slow floating-3d shadow-md z-[-1]">
        &#123;
      </div>
      <div className="absolute bottom-[30%] sm:bottom-[27%] md:bottom-[24%] lg:bottom-[20%] right-10 sm:right-24 md:right-28 lg:right-40 min-[1200px]:right-72 opacity-80 text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gray-600 animate-rotate-slower floating-3d z-[-1]">
        &#125;
      </div>
    </>
  );
}
