"use client";
import {
  deleteUser,
  getAll,
  getAllStudyhere,
} from "@/services/admin/userServices";
import { UserListAmdin } from "@/types/user";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function useUsers() {
  const [users, setUsers] = useState<UserListAmdin[]>([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchUsers = async (page: number, search: string) => {
    setLoading(true);

    try {
      const response = await getAllStudyhere({ page, limit: 10, search });
      setTotal(response.data.totalPages);
      setCurrentPage(response.data.currentPage);
      setUsers(response.data.users);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteUserInitiate = async (id: number | string) => {
    try {
      const response = await deleteUser(id);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    } catch (error: any) {
      throw error?.response?.data?.message || "Failed to delete user";
    }
  };

  const removeUser = (id: number | string) => {
    toast.promise(deleteUserInitiate(id), {
      loading: "Deleting user...",
      success: "User deleted successfully",
      error: "Failed to delete user",
    });
  };

  return {
    users,
    loading,
    total,
    currentPage,
    fetchUsers,
    setCurrentPage,
    removeUser,
  };
}
