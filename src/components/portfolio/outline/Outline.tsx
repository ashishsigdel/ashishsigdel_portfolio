"use client";
import React, { useEffect, useState } from "react";
import TopBar from "./TopBar";
import LeftBar from "./LeftBar";
import BottomBar from "./BottomBar";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import RightDots from "./RightDots";
import Quiting from "./Quiting";

export default function Outline({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [width, setWidth] = useState<"w-[80%]" | "w-full">("w-full");
  const [quiting, setQuiting] = useState(false);

  const toggleWidth = () => {
    if (width === "w-full") {
      setWidth("w-[80%]");
    } else {
      setWidth("w-full");
    }
  };
  const toggleQuiting = () => {
    setQuiting(true);

    setTimeout(() => {
      setQuiting(false);
    }, 3100);
  };

  return (
    <motion.div
      initial={
        pathname === "/" ? { scale: 0.8, opacity: 0 } : { scale: 1, opacity: 1 }
      }
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className={`w-screen h-[100dvh] p-2 z-[999] transition-transform duration-700 ease-out flex`}
    >
      <div
        className={`${width} h-full border border-white/20 rounded-md flex flex-col overflow-hidden transition-all duration-700 ease-out`}
      >
        <TopBar
          width={width}
          toggleWidth={toggleWidth}
          toggleQuiting={toggleQuiting}
        />
        <header className="flex overflow-y-auto h-full relative">
          {quiting && <Quiting />}
          <nav className="h-full">
            <LeftBar />
          </nav>
          <div className="w-full mx-auto overflow-y-auto h-full">
            {children}
          </div>
          <RightDots />
        </header>
        <BottomBar />
      </div>
      <div
        className={`${
          width === "w-[80%]" ? "inline-block" : "hidden"
        } w-[20%] h-full border border-white/20 rounded-md flex flex-col overflow-hidden transition-all duration-700 ease-out ml-2`}
      ></div>
    </motion.div>
  );
}
