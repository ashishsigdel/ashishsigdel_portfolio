"use client";
import { fetchAll, updateSeen } from "@/services/admin/inboxServices";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function useInbox() {
  const [inbox, setInbox] = useState<
    {
      id: number;
      fullName: string;
      email: string;
      company?: string;
      message: string;
      seen: boolean;
      createdAt: Date;
    }[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const getAll = async (page: number) => {
    try {
      setLoading(true);
      const response = await fetchAll(page);
      setInbox(response.data.contacts);
      setCurrentPage(response.data.currentPage);
      setTotalPage(response.data.totalPages);
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const updateSeenStatus = async (id: number) => {
    try {
      const response = await updateSeen(id);

      setInbox((prevInbox) =>
        prevInbox.map((inbox) =>
          inbox.id === id ? { ...inbox, seen: true } : inbox
        )
      );
    } catch (error: any) {
      console.log(error?.response?.data?.message || "Something went wrong!");
    } finally {
    }
  };
  return {
    inbox,
    loading,
    getAll,
    currentPage,
    setCurrentPage,
    totalPage,
    updateSeenStatus,
  };
}
