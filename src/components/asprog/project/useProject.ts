"use client";
import {
  fetchUnique,
  getResourceLink,
} from "@/services/asprog/projectAsprogServices";
import { ProjectClient } from "@/types/asprog";
import { useParams } from "next/navigation";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function useProject() {
  const params = useParams();
  const uId = params?.uuid as string; // Typecast to ensure uId is a string

  const [project, setProject] = useState<ProjectClient | null>(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<{
    fullName: string;
    email: string;
  }>({
    fullName: "",
    email: "",
  });

  const { fullName, email } = formData;
  const [fullNameError, setFullNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const updatedFormData = {
      ...formData,
      [event.target.name]: event.target.value,
    };
    setFormData(updatedFormData);
  };

  const validateFullName = () => {
    if (!fullName) {
      setFullNameError("FullName is required!");
    } else {
      setFullNameError(null);
    }
  };

  const validateEmail = () => {
    if (!email) {
      setEmailError("Email is required!");
    } else {
      setEmailError(null);
    }
  };

  const fetchProject = async () => {
    try {
      setLoading(true);
      if (!uId) {
        throw new Error("Invalid project id");
      }
      const response = await fetchUnique({ uId });
      setProject(response.data);
    } catch (error) {
      toast.error("Failed to fetch project");
    } finally {
      setLoading(false);
    }
  };

  const sendEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    validateFullName();
    validateEmail();

    if (fullName && email && !fullNameError && !emailError) {
      try {
        setLoading(true);
        await getResourceLink({
          uId,
          fullName,
          email,
        });
        setLoading(false);
        setFormData({ fullName: "", email: "" });
        return "Link sent successfully";
      } catch (error: any) {
        setLoading(false);
        throw error?.response?.data?.message || "Failed to send link";
      }
    } else {
      setLoading(false);
      throw "Please fill in all required fields"; // If validation fails
    }
  };

  const getFreeLink = (event: FormEvent<HTMLFormElement>) => {
    toast.promise(
      sendEmail(event), // Call the sendEmail function and pass the event
      {
        loading: "Sending...",
        success: (message) => message, // Use the success message from sendEmail
        error: (err) => err, // Handle error message from sendEmail
      },
      {
        id: "toast",
      }
    );
  };

  return {
    fetchProject,
    project,
    getFreeLink,
    handleChange,
    formData,
    loading,
    fullNameError,
    emailError,
    validateFullName,
    validateEmail,
  };
}
