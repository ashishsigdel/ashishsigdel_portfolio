import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CoverPhoto({ project }: { project: any }) {
  if (!project) {
    return;
  }
  return (
    <div className="w-full">
      <motion.div
        className="h-[9rem] bg-gradient-to-t from-white/20 to-transparent w-[2px] mx-auto"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
      {project.coverPhoto && (
        <Image
          src={project?.coverPhoto}
          alt={project.title}
          width={1000}
          height={1000}
          className="w-full"
        />
      )}

      <motion.div
        className="h-[9rem] bg-gradient-to-b from-white/20 to-transparent w-[2px] mx-auto mb-5"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      />
    </div>
  );
}
