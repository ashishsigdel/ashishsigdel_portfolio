import React from "react";

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
        Turing data into intelligence, Ideas into vision.
      </p>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="h-[48px] bg-gradient-to-t from-green-500 to-transparent w-[1.5px] mx-auto mt-5"></div>
        <div className="h-[48px] bg-gradient-to-b from-green-500 to-transparent w-[1.5px] mx-auto"></div>
      </div>
    </div>
  );
}
