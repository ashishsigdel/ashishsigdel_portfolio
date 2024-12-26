"use client";
import { getProfile, toggle2FA, update } from "@/services/admin/userServices";
import { UserAdmin } from "@/types/user";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function useSetting() {
  const [user, setUser] = useState<UserAdmin | null>(null);
  const [loading, setLoading] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [toggling, setToggling] = useState(false);
  const [fullName, setfullName] = useState("");
  const [email, setEmail] = useState("");

  const fetchProfile = async () => {
    try {
      setLoading(true);
      const response = await getProfile();
      setEmail(response.data.email);
      setfullName(response.data.fullName);
      setUser(response.data);
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const updateUser = async () => {
    try {
      setUpdating(true);
      const response = await update(email, fullName);
      setEmail(response?.data?.email);
      setfullName(response?.data?.fullName);
      setUser(response?.data);
      toast.success("Successfully update.");
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Something went wrong!");
    } finally {
      setUpdating(false);
    }
  };

  const toggle2FAuth = async () => {
    try {
      setToggling(true);
      const response = await toggle2FA();

      setUser(response?.data);
      toast.success(
        `Successfully ${
          response.data.twoFactorEnable ? "enabled" : "disabled"
        } 2FA.`
      );
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Something went wrong!");
    } finally {
      setToggling(false);
    }
  };
  return {
    user,
    setUser,
    loading,
    fetchProfile,
    email,
    setEmail,
    fullName,
    setfullName,
    updateUser,
    updating,
    toggle2FAuth,
    toggling,
  };
}
