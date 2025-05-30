"use client";

import Image from "next/image";
import logo from "@/assets/logo/coding.svg";
import useGetActive from "../outline/useGetActive";
import { motion } from "framer-motion";

export default function Footer() {
  const { scrollToSection } = useGetActive();

  return (
    <section
      id="footer"
      className="py-8 md:py-10 bg-black/50 border-t border-color w-full"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0">
          <div className="flex gap-3 items-center">
            <Image
              src={logo}
              alt="Logo"
              width={26}
              height={26}
              className="invert"
            />
            <p className="text-center font-bold tracking-wider text-xl md:text-2xl">
              Ashish
              <span className="text-portfolio-primary">&lt;Sigdel&gt;</span>
            </p>
          </div>

          <motion.div
            onClick={() => scrollToSection("home")}
            className="border border-color px-3 py-1.5 sm:px-3.5 sm:py-2 bg-portfolio-primary/20 rounded-full tracking-wide whitespace-nowrap text-xs flex items-center gap-1 cursor-pointer"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-medium text-sm">Back to Top</span>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              initial={{ y: 5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </motion.svg>
          </motion.div>
        </div>

        <div className="mt-6 sm:mt-10 text-xs sm:text-sm text-white/90 w-full">
          <p className="text-center">
            &copy; Ashish Sigdel {new Date().getFullYear()} - All Right
            Reserved!
          </p>
        </div>
      </div>
    </section>
  );
}
