import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface WorkProps {
  work: {
    id: number;
    title: string;
    image: any;
    points: {
      id: number;
      name: string;
    }[];
  };
  index: number;
}

export default function WorkCard({ work, index }: WorkProps) {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
      className={`w-full border border-gray-200 dark:border-gray-700 px-4 py-8 md:p-8 rounded-xl overflow-hidden relative transition-all duration-300 ease-in-out shadow-lg bg-white dark:bg-gray-900 ${
        index % 2 !== 0
          ? "flex flex-col md:flex-row-reverse"
          : "flex flex-col md:flex-row"
      }`}
    >
      <div className="w-full md:w-1/2 flex-shrink-0">
        <div className="h-full aspect-video overflow-hidden rounded-lg shadow-lg">
          <Image
            src={work.image}
            alt={work.title}
            className="w-full h-full object-contain"
            layout="responsive"
            width={600}
            height={550}
            quality={80}
            priority
          />
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center py-6 md:px-8">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight text-gray-900 dark:text-white">
          {work.title}
        </h3>
        <div className="mt-6 space-y-4">
          {work.points.map((point, index) => (
            <motion.div
              key={point.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              className="flex items-start gap-3 text-base sm:text-lg text-gray-700 dark:text-gray-300"
            >
              <span className="text-portfolio-primary font-bold mt-[1px] mr-1">
                {String(index + 1).padStart(2, "0")}.
              </span>
              <p className="leading-relaxed">{point.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
