"use client";

import { fetchAll, fetchUnique } from "@/services/portfolio/projectService";
import { ProjectClient } from "@/types/projects";
import { useState } from "react";
import toast from "react-hot-toast";

export default function useProjects() {
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState<ProjectClient[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [selectedTag, setSelectedTag] = useState("all");
  const [project, setProject] = useState({});

  const fetchProjects = async (page: number, search: string) => {
    try {
      setLoading(true);
      const response = await fetchAll({ page: page, limit: 6, search });
      setProjects(response.data.projects || []);
      setCurrentPage(response.data.currentPage);
      setTotalPage(response.data.totalPages);
    } catch (error) {
      toast.error("Failed to fetch projects");
    } finally {
      setLoading(false);
    }
  };

  return {
    projects,
    fetchProjects,
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
