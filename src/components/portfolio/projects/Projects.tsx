"use client";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { tags } from "@/data/tag";
import useProjects from "./useProjects";
import ProjectCardSkeleton from "./ProjectCardSkeleton";
import ProjectCard from "./ProjectCard";
import { Pagination } from "@/components/common";

export default function Projects() {
  const [refresh, setRefresh] = useState<boolean>(false);
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

  const handleTagClick = (tag: string) => {
    let tagValue = tag === "all" ? "" : tag;
    setSelectedTag(tag);
    fetchProjects(1, tagValue);
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
  };

  return (
    <div className="mt-10 max-w-7xl mx-auto px-3 flex flex-col lg:flex-row gap-x-5 min-h-[70%] mb-24">
      <div className="w-full lg:w-1/4 lg:border-r border-white/20 pr-4 mt-8">
        <h3 className="text-center text-3xl font-semibold">Explore Projects</h3>
        <form className="max-w-3xl mx-auto mt-10">
          <div className="flex items-center justify-center border-solid rounded-md border border-white/20 transition-all duration-[0.3s] ease-in-out">
            <input
              type={"text"}
              name="search"
              onChange={hanlgeSearchChange}
              placeholder="Search..."
              id="search"
              className="ml-4 w-full h-full py-4 bg-transparent text-[14px] focus:outline-none"
            />

            <div className="w-11 h-10  rounded-full flex items-center justify-center mr-3">
              <button type="button" className="text-white">
                <FaSearch />
              </button>
            </div>
          </div>
        </form>

        <div className="flex flex-wrap justify-center gap-4 mt-[6rem]">
          {/* All Tag */}
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

          {/* Dynamic Tags */}
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
        </div>
      </div>

      <div className="w-full lg:w-3/4">
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <ProjectCardSkeleton key={i} />
            ))}
          </div>
        ) : projects.length === 0 ? (
          <div className="mt-20 w-full flex justify-center">No Result</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {projects.map((creation) => (
              <ProjectCard key={creation.id} project={creation} />
            ))}
          </div>
        )}
        <div className="mt-12"></div>
        <Pagination
          totalPages={totalPage}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
