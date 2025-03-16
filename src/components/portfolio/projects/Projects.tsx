"use client";
import React, { useEffect, useState } from "react";
import { tags } from "@/data/tag";
import useProjects from "./useProjects";
import ProjectCardSkeleton from "./ProjectCardSkeleton";
import ProjectCard from "./ProjectCard";
import { Pagination } from "@/components/common";
import { motion } from "framer-motion";
import useGetActive from "../outline/useGetActive";

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const {
    loading,
    fetchProjects,
    projects,
    selectedTag,
    setSelectedTag,
    setCurrentPage,
    currentPage,
    totalPage,
  } = useProjects();
  const { scrollToSection } = useGetActive();

  const handleTagClick = (tag: string) => {
    let tagValue = tag === "all" ? "" : tag;
    setSelectedTag(tag);
    fetchProjects(1, tagValue);
    scrollToSection("projects");
  };

  const hanlgeSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setTimeout(() => {
      fetchProjects(1, searchTerm);
    }, 1500);
  };

  useEffect(() => {
    fetchProjects(1, "");
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    fetchProjects(page, searchTerm);
    scrollToSection("projects");
  };

  return (
    <motion.div
      className="flex flex-col gap-x-5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-full border-white/20"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div
            onClick={() => handleTagClick("all")}
            className={`cursor-pointer px-4 py-2 rounded-md text-sm font-medium ${
              selectedTag === "all"
                ? "bg-portfolio-primary/40 border border-white/30"
                : "border border-white/20"
            }`}
          >
            All
          </div>

          {tags.map((tag, index) => (
            <div
              key={index}
              onClick={() => handleTagClick(tag)}
              className={`cursor-pointer px-4 py-2 rounded-md text-sm font-medium ${
                selectedTag === tag
                  ? "bg-portfolio-primary/40 border border-white/30"
                  : "border border-white/20"
              }`}
            >
              {tag}
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 lg:min-h-[580px]">
            {Array.from({ length: 6 }).map((_, i) => (
              <ProjectCardSkeleton key={i} />
            ))}
          </div>
        ) : projects.length === 0 ? (
          <div className="mt-20 w-full flex justify-center">No Result</div>
        ) : (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {projects.map((creation, index) => (
              <motion.div
                key={creation.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <ProjectCard project={creation} />
              </motion.div>
            ))}
          </motion.div>
        )}
        <div className="mt-12"></div>
        <Pagination
          totalPages={totalPage}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </motion.div>
    </motion.div>
  );
}
