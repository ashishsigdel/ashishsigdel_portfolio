"use client";
import {
  deleteProfile,
  getAll,
  update,
} from "@/services/admin/profileServices";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function useProfile() {
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [profiles, setProfiles] = useState<
    {
      id: number;
      profileURL: string;
      isEnable: boolean;
      createdAt: Date;
      updatedAt: Date;
    }[]
  >([]);

  const fetchAllProfile = async (page: number) => {
    try {
      setLoading(true);
      const response = await getAll(page);
      setProfiles(response.data.profiles);
      setCurrentPage(response.data.currentPage);
      setTotalPage(response.data.totalPages);
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Unable to load.");
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, isActive: boolean) => {
    if (isActive) {
      toast.success("Already Public.");
      return;
    }
    try {
      const response = await update(id);
      setProfiles((prevProfiles) =>
        prevProfiles.map((profile) => ({
          ...profile,
          isEnable: profile.id === Number(id) ? true : false,
        }))
      );
    } catch (error: any) {
      throw error?.response?.data?.message || "Something went wrong!";
    }
  };

  const updateProfileStatus = (id: string, isActive: boolean) => {
    toast.promise(
      updateStatus(id, isActive),
      {
        loading: "Updating Status...",
        success: () => `Profile updated successfully!.`,
        error: (err) => err,
      },
      {
        id: "toast",
      }
    );
  };

  const remove = async (id: string) => {
    try {
      const response = await deleteProfile(id);
      setProfiles((prevProfile) =>
        prevProfile.filter((profile) => profile.id !== Number(id))
      );
    } catch (error: any) {
      throw error?.response?.data?.message || "Something went wrong!";
    }
  };
  const removeProfile = (id: string) => {
    toast.promise(
      remove(id),
      {
        loading: "Deleting profile...",
        success: () => `Profile deleted successfully!.`,
        error: (err) => err,
      },
      {
        id: "toast",
      }
    );
  };

  return {
    fetchAllProfile,
    loading,
    profiles,
    currentPage,
    totalPage,
    setCurrentPage,
    setTotalPage,
    updateProfileStatus,
    removeProfile,
  };
}
