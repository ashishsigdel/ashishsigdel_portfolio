"use client";
import { fetchAll } from "@/services/asprog/projectServices";
import { ProjectTableProps } from "@/types/asprog";
import { useState } from "react";
import toast from "react-hot-toast";

export default function useProject() {
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState<ProjectTableProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const fetchProjects = async (page: number, search: string) => {
    try {
      setLoading(true);
      const response = await fetchAll({ page, limit: 10, search });
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
  };
}
