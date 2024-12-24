"use client";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { tags } from "@/data/tag";
// import { projects } from "@/data/projects";
import { ProjectCard, ProjectCardSkeleton } from "@/components/asprog/browse";
// import useCreation from "@/hooks/use-creation";
import { Spinner } from "@/components/common";
import useBrowse from "./useBrowse";

export default function Projects() {
  const { loading, fetchProjects, projects, selectedTag, setSelectedTag } =
    useBrowse();

  const handleTagClick = (tag: string) => {
    let tagValue = tag === "all" ? "" : tag;
    setSelectedTag(tag);
    fetchProjects(tagValue);
  };

  const hanlgeSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => {
      fetchProjects(e.target.value);
    }, 1500);
  };

  useEffect(() => {
    fetchProjects("");
  }, []);

  return (
    <div className="mt-10">
      <form className="max-w-3xl mx-auto">
        <div className="flex items-center justify-center border-solid bg-white dark:bg-gray-800 rounded-full border border-gray-300 dark:border-gray-700 transition-all duration-[0.3s] ease-in-out">
          <input
            type={"text"}
            name="search"
            onChange={hanlgeSearchChange}
            placeholder="What are you looking for?"
            id="search"
            className="ml-5 w-full h-full py-4 bg-transparent text-[14px] text-gray-600 dark:text-light focus:outline-none"
          />

          <div className="w-11 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-3">
            <button type="button" className="text-white">
              <FaSearch />
            </button>
          </div>
        </div>
      </form>

      {/* Tags Section */}
      <div className="flex flex-wrap justify-center gap-4 mt-[6rem]">
        {/* All Tag */}
        <div
          onClick={() => handleTagClick("all")}
          className={`cursor-pointer px-4 py-2 rounded-full text-sm font-medium ${
            selectedTag === "all"
              ? "border border-purple-500/50 bg-purple-600 text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
          }`}
        >
          All
        </div>

        {/* Dynamic Tags */}
        {tags.map((tag, index) => (
          <div
            key={index}
            onClick={() => handleTagClick(tag)}
            className={`cursor-pointer px-4 py-2 rounded-full text-sm font-medium ${
              selectedTag === tag
                ? "border border-purple-500/50 bg-purple-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
            }`}
          >
            {tag}
          </div>
        ))}
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {Array.from({ length: 8 }).map((_, i) => (
            <ProjectCardSkeleton key={i} />
          ))}
        </div>
      ) : projects.length === 0 ? (
        <div className="mt-20 w-full flex justify-center">No Result</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {projects.map((creation) => (
            <ProjectCard key={creation.id} project={creation} />
          ))}
        </div>
      )}
    </div>
  );
}
