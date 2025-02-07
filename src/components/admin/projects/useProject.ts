"use client";
import {
  fetchAll,
  deleteProject,
  changeVisiblility,
} from "@/services/admin/projectServices";
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

  const updateStatus = async (id: string) => {
    try {
      const response = await changeVisiblility(id);
      const updatedStatus = response.data.isEnable;
      setProjects((prevProjects) =>
        prevProjects.map((project) =>
          project.id === id ? { ...project, isEnable: updatedStatus } : project
        )
      );
    } catch (error: any) {
      throw error?.response?.data?.message || "Failed to update project status";
    }
  };

  const deleteProjectSingle = async (id: string) => {
    try {
      await deleteProject(id);

      setProjects((prevProjects) =>
        prevProjects.filter((project) => project.id !== id)
      );
    } catch (error: any) {
      throw error?.response?.data?.message || "Failed to update project status";
    }
  };

  const updateProjectStatus = (id: string) => {
    toast.promise(
      updateStatus(id),
      {
        loading: "Updating Staus...",
        success: () => `Status changed.`,
        error: (err) => err,
      },
      {
        id: "toast",
      }
    );
  };

  const removeProject = (id: string) => {
    toast.promise(
      deleteProjectSingle(id),
      {
        loading: "Deleting Project...",
        success: () => `Delete Successfully.`,
        error: (err) => err,
      },
      {
        id: "toast",
      }
    );
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
    updateProjectStatus,
    removeProject,
  };
}
