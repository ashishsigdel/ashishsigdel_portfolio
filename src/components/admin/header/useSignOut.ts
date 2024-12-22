"use client";
import { removeAuth } from "@/redux/features/authSlice";
import { logout, logoutAll } from "@/services/logoutServices";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

export default function useSignOut() {
  const dispatch = useDispatch();
  const router = useRouter();
  const signOut = async () => {
    try {
      await logout();
      router.push("/auth");
    } catch (error: any) {
      throw (
        error.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
      dispatch(removeAuth());
    }
  };

  const signOutAll = async () => {
    try {
      await logoutAll();
      router.push("/auth");
    } catch (error: any) {
      throw (
        error.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
      dispatch(removeAuth());
    }
  };
  const handleSignOut = () => {
    toast.promise(
      signOut(),
      {
        loading: "Sign Outting...",
        success: () => `Sign Outted Successfully.`,
        error: (err) => err,
      },
      {
        id: "toast",
      }
    );
  };
  const handleSignOutAll = () => {
    toast.promise(
      signOutAll(),
      {
        loading: "Sign Outting to all devices...",
        success: () => `Sign Outted Successfully.`,
        error: (err) => err,
      },
      {
        id: "toast",
      }
    );
  };
  return {
    handleSignOut,
    handleSignOutAll,
  };
}
