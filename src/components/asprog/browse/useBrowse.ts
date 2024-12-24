"use client";

import { fetchAll } from "@/services/asprog/projectAsprogServices";
import { ProjectTableProps } from "@/types/asprog";
import { useState } from "react";
import toast from "react-hot-toast";

export default function useBrowse() {
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState<ProjectTableProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [selectedTag, setSelectedTag] = useState("all");

  const fetchProjects = async (search: string) => {
    try {
      setLoading(true);
      const response = await fetchAll({ page: 1, limit: 12, search });
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
  };
}
