"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import "@/styles/background.css";
import { Floating } from "../utils";
import Scroll from "./Scroll";
import Link from "next/link";
import StepIndicator from "./StepIndicator";

export default function Hero() {
  const controls = useAnimation();

  const [refInView, inView] = useState(true);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const sequence = async () => {
      await controls.start("animate");
    };

    sequence();
  }, [controls, inView]);

  const nameText = "Hi, I'm Ashish";
  const nameChars = nameText.split("");

  const letterVariants = {
    initial: { y: 100, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1],
        delay: 0.3 + i * 0.04,
      },
    }),
  };

  const aiText = "AI ";
  const explorerText = " Explorer, Creative";
  const developerText = "Developer";

  const aiChars = aiText.split("");
  const explorerChars = explorerText.split("");
  const developerChars = developerText.split("");

  const titleRevealVariants = {
    initial: { y: 80 },
    animate: (delay: number) => ({
      y: 0,
      transition: {
        delay,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };

  const titleCharVariants = {
    initial: { y: 40, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.215, 0.61, 0.355, 1],
        delay: 1.4 + i * 0.03,
      },
    }),
  };

  const devCharVariants = {
    initial: { y: 40, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.215, 0.61, 0.355, 1],
        delay: 1.6 + i * 0.03,
      },
    }),
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.7,
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.7,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    tap: { scale: 0.98 },
  };

  const portfolioLabelVariants = {
    initial: { opacity: 0, x: -20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.6,
        duration: 0.7,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  const taglineVariants = {
    initial: { width: "0%" },
    animate: {
      width: "100%",
      transition: {
        delay: 1.7,
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative">
      <StepIndicator />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-[720px] h-[calc(100dvh-96px)] flex flex-col justify-center text-center px-5 relative overflow-hidden"
      >
        {/* Main content with staggered reveal */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate={controls}
          className="max-w-5xl mx-auto"
        >
          {/* Name with character animation */}
          <div className="overflow-hidden py-2 space-y-5">
            <span className="text-sm text-white/60 uppercase">Home</span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-poppins flex justify-center">
              {mounted &&
                nameChars.map((char, index) => (
                  <motion.span
                    key={`name-${index}`}
                    custom={index}
                    variants={letterVariants}
                    initial="initial"
                    animate="animate"
                    whileHover={{
                      y: -5,
                      color: "#3B82F6",
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                    className={`${char === " " ? "mx-4" : ""} cursor-default`}
                  >
                    {char}
                  </motion.span>
                ))}
            </h1>
          </div>

          {/* Professional title with character-by-character animations */}
          <motion.div variants={itemVariants} className="overflow-hidden">
            <h3 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-poppins lg:leading-[105px]">
              <motion.span
                variants={titleRevealVariants}
                custom={1.2}
                initial="initial"
                animate="animate"
                className="inline-block"
              >
                {/* AI with character animation */}
                <span className="text-blue-500">
                  {mounted &&
                    aiChars.map((char, index) => (
                      <motion.span
                        key={`ai-${index}`}
                        custom={index}
                        variants={titleCharVariants}
                        initial="initial"
                        animate="animate"
                        whileHover={{
                          y: -5,
                          scale: 1.05,
                          textShadow: "0 0 8px rgba(59, 130, 246, 0.8)",
                          transition: { duration: 0.2 },
                        }}
                        className="cursor-default inline-block"
                      >
                        {char}
                      </motion.span>
                    ))}
                </span>
                <span> </span>

                {/* Explorer, Creative with character animation */}
                {mounted &&
                  explorerChars.map((char, index) => (
                    <motion.span
                      key={`explorer-${index}`}
                      custom={index}
                      variants={titleCharVariants}
                      initial="initial"
                      animate="animate"
                      whileHover={{
                        y: -5,
                        color: "#3B82F6",
                        transition: { duration: 0.2 },
                      }}
                      className={`${
                        char === " " ? "mx-1" : ""
                      } cursor-default inline-block`}
                    >
                      {char}
                    </motion.span>
                  ))}
              </motion.span>
              <br />

              {/* Developer with character animation */}
              <span className="text-blue-500">
                {mounted &&
                  developerChars.map((char, index) => (
                    <motion.span
                      key={`dev-${index}`}
                      custom={index}
                      variants={devCharVariants}
                      initial="initial"
                      animate="animate"
                      whileHover={{
                        y: -5,
                        scale: 1.05,
                        textShadow: "0 0 8px rgba(59, 130, 246, 0.5)",
                        transition: { duration: 0.2 },
                      }}
                      className="cursor-default inline-block"
                    >
                      {char}
                    </motion.span>
                  ))}
              </span>
            </h3>
          </motion.div>

          {/* Tagline with typing effect */}
          <div className="relative mt-5 h-6 flex justify-center">
            <motion.div
              variants={taglineVariants}
              initial="initial"
              animate="animate"
              className="overflow-hidden whitespace-nowrap absolute left-0 right-0 mx-auto max-w-fit"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.3, duration: 0.5 }}
                className="text-sm text-gray-300 font-geist"
              >
                Turning Data into Intelligence, Ideas into Vision.
              </motion.p>
            </motion.div>
          </div>

          {/* Enhanced action button with hover effect */}
          <motion.div variants={itemVariants} className="mt-10">
            <Link href={"/projects"}>
              <motion.button
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="px-8 py-3 rounded-full text-sm font-medium bg-blue-500 bg-opacity-10 border border-blue-500/30 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Explore Projects</span>
                <motion.span
                  className="absolute inset-0 bg-blue-500 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        <Scroll />

        <Floating />
      </motion.div>
    </div>
  );
}
