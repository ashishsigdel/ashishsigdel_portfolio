"use client";
import React, { useState, useEffect } from "react";
import { MenuData } from "@/data/portfolioMenu";
import { motion, AnimatePresence } from "framer-motion";
import useGetActive from "./useGetActive";

export default function RightDots() {
  const { isActive, scrollToSection } = useGetActive();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute right-8 h-full hidden min-[1200px]:flex items-center">
      <AnimatePresence>
        {isLoading ? (
          // Loading animation
          <motion.div
            className="flex flex-col space-y-4 items-center"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.6, delay: 1.0 },
            }}
          >
            {[...Array(MenuData.length)].map((_, index) => (
              <motion.div
                key={`loader-${index}`}
                className="w-4 h-4 border border-portfolio-primary rounded-full flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0.2, 1, 0.2, 1, 0.2],
                  scale: [0.8, 1.2, 0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: index * 0.1, // Stagger the pulsing
                }}
              >
                <motion.div
                  className="w-2 h-2 bg-portfolio-primary rounded-full"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                    scale: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: index * 0.1,
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          // Main navigation dots with improved animation
          <motion.div
            className="flex flex-col space-y-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.1,
                  ease: "easeOut",
                },
              },
            }}
          >
            {MenuData.map((menu, index) => {
              return (
                <div onClick={() => scrollToSection(menu.link)} key={menu.id}>
                  <motion.div
                    className={`group flex items-center justify-center gap-2 w-4 h-4 border rounded-full transition-all ${
                      isActive(menu.link)
                        ? "border-portfolio-primary"
                        : "border-[#595959]"
                    } hover:border-white`}
                    variants={{
                      hidden: {
                        opacity: 0,
                        x: 10,
                        scale: 0.9,
                      },
                      visible: {
                        opacity: 1,
                        x: 0,
                        scale: 1,
                        transition: {
                          duration: 0.5,
                          ease: "easeOut",
                          type: "spring",
                          stiffness: 100,
                          damping: 15,
                        },
                      },
                      hover: {
                        scale: 1.1,
                        transition: { duration: 0.2 },
                      },
                    }}
                    whileHover="hover"
                  >
                    <motion.div
                      className={`w-2 h-2 rounded-full transition-all ${
                        isActive(menu.link)
                          ? "bg-portfolio-primary"
                          : "bg-[#595959]"
                      } group-hover:bg-white`}
                      variants={{
                        hover: {
                          scale: 1.2,
                          transition: { duration: 0.2 },
                        },
                      }}
                    />
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
