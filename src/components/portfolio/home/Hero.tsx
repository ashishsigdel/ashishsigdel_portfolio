"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import "@/styles/background.css";
import Scroll from "./Scroll";
import HeroButtons from "./HeroButtons";
import Eager from "./Eager";
import Link from "next/link";
import StepIndicator from "./StepIndicator";
import QuoteCircles from "@/assets/2nd-quote-circles.svg";
import QuoteBGBlur from "@/assets/2nd-quote-bg-blur.svg";
import Image from "next/image";

export default function Hero() {
  const controls = useAnimation();
  const [inView, setInView] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const sequence = async () => {
      await controls.start("animate");
    };

    sequence();
  }, [controls, inView]);

  const nameText = "Hi, I'm Ashish";
  const aiText = "AI";
  const explorerText = " Explorer, Creative ";
  const developerText = "Developer";

  const nameChars = nameText.split("");
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
    <div className="relative w-full overflow-x-hidden">
      <Eager />
      <StepIndicator />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-[600px] h-[calc(100dvh-96px)] flex flex-col justify-center text-center px-4 md:px-5 relative overflow-hidden"
      >
        <div className="flex flex-col items-center justify-center absolute left-1/2 transform -translate-x-1/2 scale-150">
          <div className="-z-1 relative">
            <Image
              src={QuoteCircles}
              alt="Quote Circles"
              className="opacity-60"
            />
          </div>
          <div className="absolute z-[1]">
            <Image src={QuoteBGBlur} alt="Quote BG Blur" />
          </div>
        </div>
        <div className="text-xs sm:text-sm text-white/60 uppercase">Home</div>
        {/* Main content with staggered reveal */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate={controls}
          className="w-full max-w-5xl mx-auto px-2 sm:px-4"
        >
          {/* Name with character animation */}
          <div className="overflow-hidden py-2 space-y-10">
            <span className=""></span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-poppins flex flex-wrap justify-center">
              {mounted &&
                nameChars.map((char, index) => (
                  <motion.span
                    key={`name-${index}`}
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
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
            </h1>
          </div>

          {/* Professional title with character-by-character animations */}
          <motion.div variants={itemVariants} className="overflow-hidden">
            <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-poppins">
              <motion.span
                variants={titleRevealVariants}
                custom={1.2}
                initial="initial"
                animate="animate"
                className="inline-block"
              >
                {/* AI with character animation */}
                <span className="text-blue-500 whitespace-nowrap">
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
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    ))}
                </span>

                {/* Explorer, Creative with character animation */}
                <span className="whitespace-normal sm:whitespace-nowrap">
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
                        className="cursor-default inline-block"
                      >
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    ))}
                </span>
              </motion.span>
              <br className="block sm:hidden" />

              {/* Developer with character animation */}
              <span className="text-blue-500 whitespace-nowrap">
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
          <div className="relative mt-3 sm:mt-5 h-6 flex justify-center">
            <motion.div
              variants={taglineVariants}
              initial="initial"
              animate="animate"
              className="overflow-hidden absolute left-0 right-0 mx-auto max-w-fit px-2"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.0, duration: 0.5 }}
                className="text-xs sm:text-sm text-gray-400 font-geist"
              >
                Turning Data into Intelligence, Ideas into Vision.
              </motion.p>
            </motion.div>
          </div>
          <div className="mt-8 sm:mt-12">
            <HeroButtons />
          </div>
        </motion.div>

        <Link
          href={"#about"}
          className="mx-auto absolute bottom-5 left-1/2 -translate-x-1/2"
        >
          <Scroll />
        </Link>
      </motion.div>
    </div>
  );
}
