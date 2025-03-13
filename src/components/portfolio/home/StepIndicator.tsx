import React from "react";
import { motion } from "framer-motion";

export default function StepIndicator() {
  return (
    <div className="hidden min-[1200px]:flex items-center text-gray-400 text-lg font-semibold absolute left-8 h-full">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.7,
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        01
      </motion.span>

      <motion.div
        className="overflow-hidden"
        initial={{ width: 0 }}
        animate={{ width: "100px" }}
        transition={{
          duration: 1.2,
          delay: 0.7,
          ease: "easeInOut",
        }}
      >
        <motion.svg
          version="1.2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1080 1080"
          width="100"
          height="100"
        >
          <motion.path
            fillRule="evenodd"
            fill="#595959"
            d="M222 545.5l0.1-8 698.1 8.9-0.1 8z" // Increased length (698.1 instead of 498.1) and width (8 instead of 5)
            initial={{ pathLength: 0, opacity: 0.2 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              ease: "easeInOut",
            }}
          />
          <motion.path
            fillRule="evenodd"
            fill="#595959"
            d="M914.1 590.6l-0.2-80.3 69.7 40z" // Moved arrowhead x-position from 714.1 to 914.1 to match longer line
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 1.6,
              ease: "easeOut",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}
