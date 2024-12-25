"use client";
import { subscribe } from "@/services/asprog/newsletterServices";
import React, { FormEvent, useState } from "react";
import toast from "react-hot-toast";

export default function useSubscribe() {
  const [email, setEmail] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [fullNameError, setfullNameError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const validateFullName = () => {
    if (!fullName) {
      setfullNameError("FullName is required!");
    } else {
      setfullNameError("");
    }
  };
  const validateEmail = () => {
    if (!email) {
      setEmailError("Email is required!");
    } else {
      setEmailError("");
    }
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    validateFullName();
    validateFullName();

    if (fullName && email && !fullNameError && !emailError) {
      setIsLoading(true);
      try {
        setIsLoading(true);

        const response = await subscribe(email, fullName);
        toast.success(response?.message || "Subscribed successfully");
      } catch (error: any) {
        toast.error(error?.response?.data?.message || "Something went wrong");
      } finally {
        setIsLoading(false);
      }
    }
  };

  return {
    email,
    setEmail,
    fullName,
    setFullName,
    emailError,
    fullNameError,
    isLoading,
    onSubmit,
    validateFullName,
    validateEmail,
  };
}
