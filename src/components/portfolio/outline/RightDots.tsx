"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { MenuData } from "@/data/portfolioMenu";
import Link from "next/link";
import { motion } from "framer-motion";

export default function RightDots() {
  const pathname = usePathname();

  return (
    <div className="absolute right-8 h-full hidden min-[1200px]:flex items-center">
      <motion.div
        className="flex flex-col space-y-4"
        initial={{ opacity: 0, x: 20 }} // Starts faded & shifted right
        animate={{ opacity: 1, x: 0 }} // Fades in & moves to position
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
      >
        {MenuData.map((menu) => {
          const isActive = pathname === menu.link;

          return (
            <Link href={menu.link} key={menu.id}>
              <div
                className={`group flex items-center justify-center gap-2 w-4 h-4 border rounded-full transition-all ${
                  isActive ? "border-portfolio-primary" : "border-[#595959]"
                } hover:border-white`}
              >
                <div
                  className={`w-2 h-2 rounded-full transition-all ${
                    isActive ? "bg-portfolio-primary" : "bg-[#595959]"
                  } group-hover:bg-white group-hover:scale-110`}
                />
              </div>
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
}
