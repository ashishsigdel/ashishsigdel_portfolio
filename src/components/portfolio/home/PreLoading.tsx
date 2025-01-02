"use client";
import { Background } from "@/components/portfolio/utils";
import Image from "next/image";
import { useState, useEffect } from "react";
import logo from "@/assets/logo/coding.svg";

export default function PreLoading() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 600);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="h-[100vh] overflow-hidden relative text-white flex flex-col items-center justify-center px-5">
      <Background />
      <div
        className={`border rounded-md w-[30rem] border-white/20 h-[40px] flex items-center justify-between relative ${
          !isVisible
            ? "scale-50 opacity-0 transition-all duration-200 ease-in-out"
            : "scale-100 opacity-100"
        }`}
      >
        <div className="w-[40px] h-full flex justify-center items-center border-r border-white/20 overflow-hidden">
          <Image
            src={logo}
            alt="Logo"
            width={20}
            height={20}
            className="invert"
          />
        </div>
        <div className="mx-auto">
          <p className="text-center font-semibold tracking-wider">
            Ashish
            <span className="text-portfolio-primary">&lt;Sigdel&gt;</span>
          </p>
        </div>
        <div className="w-[40px] h-full flex justify-center items-center border-l border-white/20 overflow-hidden">
          <div className="bg-green-500 size-2.5 rounded-full relative">
            <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
