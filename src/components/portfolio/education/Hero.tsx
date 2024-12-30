import React from "react";
import "@/styles/background.css";
import { Floating } from "../utils";

export default function Hero() {
  return (
    <div className="h-[calc(100dvh-96px)] flex flex-col justify-center text-center px-5 relative">
      <span className="text-sm text-white/60 -mt-10 mb-10 uppercase">
        Education
      </span>
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-poppins">
        My Basic
      </h1>
      <h3 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-poppins lg:leading-[105px]">
        <span className="text-blue-500">Qualificaton </span>and <br />
        <span className="text-blue-500">Certifcations</span>
      </h3>
      <p className="text-sm mt-5 text-gray-300 font-geist">
        Learn. Grow. Succeed.
      </p>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="h-[48px] bg-gradient-to-t from-portfolio-primary to-transparent w-[1.5px] mx-auto mt-5"></div>
        <div className="h-[48px] bg-gradient-to-b from-portfolio-primary to-transparent w-[1.5px] mx-auto"></div>
      </div>

      <Floating />
    </div>
  );
}
