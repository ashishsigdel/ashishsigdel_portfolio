"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { useMediaQuery } from "react-responsive";
import { ProjectClient } from "@/types/projects";
import { Modal } from "@/components/modal";
import ProjectModel from "./ProjectModel";
import Tags from "./project/Tags";
interface Props {
  project: ProjectClient;
}

export default function ProjectCard({ project }: Props) {
  const [isClient, setIsClient] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const [showModal, setShowModal] = useState<boolean>(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  // Check if device is mobile
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Return null until the component is rendered on the client
  if (!isClient) {
    return null;
  }

  // Card animation variants
  const cardVariants = {
    hidden: {
      y: 50,
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1,
        duration: 0.5,
      },
    },
    hover: {
      y: -8,
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  // Image animation variants
  const imageVariants = {
    hover: {
      scale: 1.08,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <>
      <motion.div
        onClick={openModal}
        className="border border-white/20 rounded-lg overflow-hidden cursor-pointer backdrop-blur-sm bg-black/5 dark:bg-white/5 max-w-[400px] mx-auto"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        whileHover={isMobile ? undefined : "hover"}
        viewport={{ once: true, amount: 0.25 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div
          className="relative w-full h-0"
          style={{ paddingBottom: "56.25%" }}
        >
          <motion.div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <motion.div
              className="w-full h-full"
              variants={imageVariants}
              whileHover={isMobile ? undefined : "hover"}
              transition={{ duration: 0.5 }}
            >
              <Image
                height={500}
                width={500}
                src={project.coverPhoto}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
              initial={{ opacity: isMobile ? 0.8 : 0 }}
              animate={{ opacity: isMobile || isHovered ? 0.8 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>

        <motion.div className="p-4">
          {/* Tags */}
          <motion.div
            className="flex flex-wrap gap-2 my-2 mb-4 min-h-[64px]"
            variants={textVariants}
            custom={0}
          >
            <Tags tags={project.tags} />
          </motion.div>

          <motion.h4
            className="text-[18px] font-semibold text-gray-800 dark:text-white font-poppins line-clamp-1"
            variants={textVariants}
            custom={1}
          >
            {project.title}
          </motion.h4>

          <motion.p
            className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-2"
            variants={textVariants}
            custom={2}
          >
            {project.shortDescription}
          </motion.p>

          {/* "View Project" always visible, arrow animates on hover */}
          <motion.div
            className="mt-4 flex items-center text-xs text-portfolio-primary"
            variants={textVariants}
            custom={3}
          >
            <span>View Project</span>
            <motion.span
              className="ml-1"
              animate={{ x: isHovered && !isMobile ? 5 : 0 }}
              transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
            >
              →
            </motion.span>
          </motion.div>
        </motion.div>
      </motion.div>
      <Modal isOpen={showModal}>
        <ProjectModel closeModal={closeModal} project={project} />
      </Modal>
    </>
  );
}
