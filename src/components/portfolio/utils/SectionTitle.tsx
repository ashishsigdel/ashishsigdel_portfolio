"use client";
import { motion } from "framer-motion";

interface Props {
  title: string;
}

export default function SectionTitle({ title }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-fit mx-auto text-center"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-white ml-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        {title}
      </motion.h2>
      <motion.div
        className="absolute top-full left-1/2 w-24 h-1 bg-blue-500 rounded-full mt-1.5"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      />
    </motion.div>
  );
}
