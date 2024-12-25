import { getAllSubscriber } from "@/services/admin/userServices";
import { sendNewsletter } from "@/services/asprog/newsletterServices";
import { UserAdmin } from "@/types/user";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function useNewsletter() {
  const [users, setUsers] = useState<UserAdmin[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [sending, setSending] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [refresh, setRefresh] = useState<boolean>(false);

  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [messageError, setMessageError] = useState<string>("");

  const [selectedUserIds, setSelectedUserIds] = useState<number[]>([]);

  const handleCheckboxChange = (userId: number) => {
    setSelectedUserIds((prevSelected) =>
      prevSelected.includes(userId)
        ? prevSelected.filter((id) => id !== userId)
        : [...prevSelected, userId]
    );
  };

  const fetchUsers = async (page: number, search: string) => {
    try {
      setLoading(true);
      const response = await getAllSubscriber({ page, limit: 5, search });
      setUsers(response.data.users);
      setTotal(response.data.totalPages);
      setCurrentPage(response.data.currentPage);
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setMessage("");
    setSubject("");
  };

  const handleSendEmail = async () => {
    if (!subject) {
      setSubjectError("Subject is required!");
      return;
    }
    if (!message) {
      setMessageError("Message is required!");
      return;
    }

    try {
      setSending(true);
      const response = await sendNewsletter({
        selectedUserIds,
        subject,
        message,
      });
      toast.success("Message sent successfully!");
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Something went wrong!");
    } finally {
      setSending(false);
    }
  };

  return {
    fetchUsers,
    users,
    loading,
    total,
    currentPage,
    refresh,
    setRefresh,
    setCurrentPage,
    selectedUserIds,
    setSelectedUserIds,
    handleCheckboxChange,
    subject,
    setSubject,
    message,
    setMessage,
    subjectError,
    messageError,
    setMessageError,
    handleSendEmail,
    sending,
  };
}
