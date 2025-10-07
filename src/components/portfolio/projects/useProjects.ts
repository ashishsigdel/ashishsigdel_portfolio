"use client";

import { fetchAll, fetchUnique } from "@/services/portfolio/projectService";
import { ProjectClient } from "@/types/projects";
import { useState } from "react";
import toast from "react-hot-toast";

export default function useProjects() {
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState<ProjectClient[]>([]);
  const [allProjectsForSEO, setAllProjectsForSEO] = useState<ProjectClient[]>(
    []
  );
  const [cachedPages, setCachedPages] = useState<{
    [key: string]: ProjectClient[];
  }>({});
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [selectedTag, setSelectedTag] = useState("all");
  const [project, setProject] = useState({});

  const preloadPagesInBackground = async (search: string = "") => {
    try {
      const promises = [];
      const pages = [1, 2, 3]; // Preload first 3 pages

      for (const page of pages) {
        promises.push(fetchAll({ page, limit: 6, search }));
      }

      const responses = await Promise.all(promises);
      const newCachedPages: { [key: string]: ProjectClient[] } = {};
      const allProjects: ProjectClient[] = [];

      responses.forEach((response, index) => {
        const pageNum = pages[index];
        const projects = response.data.projects || [];
        newCachedPages[`${pageNum}-${search}`] = projects;
        allProjects.push(...projects);
      });

      setCachedPages((prev) => ({ ...prev, ...newCachedPages }));
      setAllProjectsForSEO(allProjects);

      // Set initial display data from first page
      if (responses[0]) {
        setProjects(responses[0].data.projects || []);
        setCurrentPage(responses[0].data.currentPage);
        setTotalPage(responses[0].data.totalPages);
      }
    } catch (error) {
      console.error("Failed to preload pages:", error);
      // Fallback to regular fetch
      fetchProjects(1, search);
    }
  };

  const fetchProjects = async (page: number, search: string) => {
    try {
      setLoading(true);

      // Check if we have cached data for this page
      const cacheKey = `${page}-${search}`;
      if (cachedPages[cacheKey]) {
        setProjects(cachedPages[cacheKey]);
        setCurrentPage(page);
        setLoading(false);
        return;
      }

      // If not cached or page > 3, fetch from API
      const response = await fetchAll({ page: page, limit: 6, search });
      setProjects(response.data.projects || []);
      setCurrentPage(response.data.currentPage);
      setTotalPage(response.data.totalPages);

      // Cache this page for future use
      setCachedPages((prev) => ({
        ...prev,
        [cacheKey]: response.data.projects || [],
      }));
    } catch (error) {
      toast.error("Failed to fetch projects");
    } finally {
      setLoading(false);
    }
  };

  return {
    projects,
    fetchProjects,
    preloadPagesInBackground,
    allProjectsForSEO,
    currentPage,
    setCurrentPage,
    totalPage,
    setTotalPage,
    loading,
    setLoading,
    selectedTag,
    setSelectedTag,
    project,
  };
}
