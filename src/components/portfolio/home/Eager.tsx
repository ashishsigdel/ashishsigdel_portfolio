import React from "react";
import { motion } from "framer-motion";

export default function Eager() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -150 }}
      animate={{ opacity: 1, x: "-50%" }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
      className="absolute top-10 left-1/2 md:left-40 md:translate-x-0 border border-color px-3.5 py-2 bg-portfolio-primary/20 rounded-full tracking-wide whitespace-nowrap text-xs flex items-center gap-1"
    >
      <div className="w-[30px] flex justify-center items-center ">
        <div className="bg-green-500 size-2.5 rounded-full relative">
          <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
        </div>
      </div>
      Eager to Collaborate!
    </motion.div>
  );
}
