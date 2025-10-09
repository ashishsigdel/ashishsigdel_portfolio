import React from "react";
import { motion } from "framer-motion";
import { BiSolidBot, BiSolidMessageSquareDots } from "react-icons/bi";
import useGetActive from "../outline/useGetActive";

export default function HeroButtons() {
  const { scrollToSection } = useGetActive();
  const itemVariants = {
    initial: { y: -20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 2.0,
        duration: 1.8,
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
    tap: { scale: 0.9 },
  };

  return (
    <motion.div
      variants={itemVariants}
      className="mt-10 flex flex-col sm:flex-row gap-x-3 gap-y-4 items-center justify-center"
    >
      <div
        onClick={() => scrollToSection("projects")}
        className="relative inline-block"
      >
        <motion.button
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          className="px-6 py-2.5 rounded-full text-sm font-medium bg-portfolio-primary border border-blue-500/30 transition-all duration-300 relative overflow-hidden group flex items-center gap-2"
        >
          <BiSolidBot size={18} />
          <span className="relative z-10">Explore Projects</span>
        </motion.button>
      </div>
      <div
        onClick={() => scrollToSection("contact")}
        className="relative inline-block"
      >
        <motion.button
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          className="px-6 py-2.5 rounded-full text-sm font-medium bg-portfolio-primary/20 border border-blue-500/30 transition-all duration-300 relative overflow-hidden group z-10 flex items-center gap-2"
        >
          <span className="relative z-10">Send Message</span>
          <BiSolidMessageSquareDots size={18} />
        </motion.button>
      </div>
    </motion.div>
  );
}
