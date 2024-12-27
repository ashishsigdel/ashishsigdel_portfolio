import React from "react";
import "@/styles/background.css";

export default function Hero() {
  return (
    <div className="h-[calc(100dvh-96px)] flex flex-col justify-center text-center px-5 relative">
      <span className="text-sm text-white/60 -mt-10 mb-10 uppercase">Home</span>
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-poppins">
        Hi, I&#39;m Ashish
      </h1>
      <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-poppins">
        <span className="text-blue-500">AI </span>Explorer, Creative <br />
        <span className="text-blue-500">Developer</span>
      </h3>
      <p className="text-sm mt-5 text-gray-300 font-geist">
        Turing Data into Intelligence, Ideas into Vision.
      </p>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="h-[48px] bg-gradient-to-t from-green-500 to-transparent w-[1.5px] mx-auto mt-5"></div>
        <div className="h-[48px] bg-gradient-to-b from-green-500 to-transparent w-[1.5px] mx-auto"></div>
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
