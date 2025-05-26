"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import myPic from "@/assets/portfolio/ashish.png";

export default function Portrait() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
      className="relative max-w-[400px] mx-auto lg:mx-0 overflow-hidden rounded-ss-md rounded-ee-md backdrop-blur-lg bg-white/10 border border-white/15 cursor-grabbing shadow-lg"
      style={{ perspective: 1000 }}
    >
      <motion.div
        style={{ rotateX, rotateY }}
        className="relative p-2 border-b border-white/15"
      >
        <span className="font-geist text-gray-300">Portrait</span>
      </motion.div>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-radial from-portfolio-primary to-black opacity-50 pointer-events-none"></div>
        <motion.div
          className="flex flex-col gap-2"
          whileInView={{
            x: mousePosition.x / 50 - 10,
            y: mousePosition.y / 50 + 10, // Adjusted to keep the image slightly lower
          }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <Image
            src={myPic}
            alt="My Picture"
            width={800}
            height={800}
            className="w-full aspect-square object-contain pt-4"
            draggable="false"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
