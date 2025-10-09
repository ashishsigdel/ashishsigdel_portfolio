"use client";
import React, { useState } from "react";
import TopBar from "./TopBar";
import LeftBar from "./LeftBar";
import BottomBar from "./BottomBar";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import RightDots from "./RightDots";
import Quiting from "./Quiting";
import Chat from "../ai/Chat";

type OutlineProps = {
  children:
    | React.ReactNode
    | ((props: {
        openAIChat: boolean;
        setOpenAIChat: React.Dispatch<React.SetStateAction<boolean>>;
      }) => React.ReactNode);
};

export default function Outline({ children }: OutlineProps) {
  const pathname = usePathname();
  const [width, setWidth] = useState<"w-[80%]" | "w-full">("w-full");
  const [quiting, setQuiting] = useState(false);
  const [openAIChat, setOpenAIChat] = useState(false);

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
        <header className="flex overflow-y-auto overflow-x-hidden h-full relative">
          {quiting && <Quiting />}
          <nav className="h-full">
            <LeftBar />
          </nav>
          <div className="w-full mx-auto overflow-y-auto h-full relative">
            {typeof children === "function"
              ? children({ openAIChat, setOpenAIChat })
              : children}
          </div>
          <motion.div
            initial={false}
            animate={openAIChat ? { x: 0 } : { x: "100%" }}
            transition={{ type: "spring", stiffness: 250, damping: 28 }}
            className={`absolute top-0 right-0 h-full z-10 bg-black/70 backdrop-blur-sm w-full min-[1200px]:w-[60%] ${
              openAIChat
                ? "border-l border-white/20 pointer-events-auto"
                : "border-0 pointer-events-none"
            }`}
          >
            <Chat openAIChat={openAIChat} setOpenAIChat={setOpenAIChat} />
          </motion.div>
          {!openAIChat && <RightDots />}
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
