"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { ProjectClient } from "@/types/projects";
import { Modal } from "@/components/modal";
import ProjectModel from "./ProjectModel";
import Tags from "./project/Tags";

interface Props {
  project: ProjectClient;
}

export default function ProjectCard({ project }: Props) {
  const [showModal, setShowModal] = React.useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  // Simplified animation variants
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    inView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
    hover: { y: -5, transition: { duration: 0.2 } },
  };

  return (
    <>
      <motion.div
        onClick={openModal}
        className="border border-white/20 rounded-lg overflow-hidden cursor-pointer backdrop-blur-sm bg-black/5 dark:bg-white/5 max-w-[400px] mx-auto group"
        variants={cardVariants}
        initial="initial"
        whileInView="inView"
        whileHover="hover"
        viewport={{ once: true, amount: 0.1, margin: "50px 0px" }}
      >
        <div
          className="relative w-full h-0"
          style={{ paddingBottom: "56.25%" }}
        >
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="w-full h-full transition-transform duration-500 group-hover:scale-105">
              <Image
                height={500}
                width={500}
                src={project.coverPhoto}
                alt={project.title}
                className="w-full h-full object-cover"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300" />
          </div>
        </div>

        <div className="p-4">
          <div className="flex flex-wrap gap-2 my-2 mb-4 min-h-[64px]">
            <Tags tags={project.tags} />
          </div>

          <h4 className="text-[18px] font-semibold text-gray-800 dark:text-white font-poppins line-clamp-1">
            {project.title}
          </h4>

          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-2">
            {project.shortDescription}
          </p>

          <div className="mt-4 flex items-center text-xs text-portfolio-primary">
            <span>View Project</span>
            <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </div>
        </div>
      </motion.div>

      <Modal isOpen={showModal}>
        <ProjectModel closeModal={closeModal} project={project} />
      </Modal>
    </>
  );
}
