"use client";
import React, { useState, useRef, useEffect } from "react";
import userImage from "@/assets/image-placeholder.png";
// import { create } from "@/services/projectService";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { create, fetchUnique, update } from "@/services/asprog/projectServices";

export default function useCreateProduct() {
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [resourceLink, setResourceLink] = useState<string>("");
  const [demoLink, setDemoLink] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [actualPrice, setActualPrice] = useState<string>("");

  const [titleError, setTitleError] = useState<string>("");

  const [descriptionError, setDescriptionError] = useState<string>("");
  const [tagsError, setTagsError] = useState<string>("");

  const [coverImage, setCoverImage] = useState<File | null>(null);

  const [coverImageUrlFromServer, setCoverImageUrlFromServer] =
    useState<string>("");

  const [coverImageError, setCoverImageError] = useState<string | null>(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAddTag = (tag: string) => {
    setTags((prevTags) => [...prevTags, tag]);
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags((prevTags) => prevTags.filter((tag) => tag !== tagToRemove));
  };

  const pasteFromClipboard = async (
    setLink: React.Dispatch<React.SetStateAction<string>>
  ) => {
    try {
      const text = await navigator.clipboard.readText();
      setLink(text);
    } catch (err) {
      toast.error(`Failed to read clipboard contents: ${err}`);
    }
  };

  const validateTitle = () => {
    if (title === "") {
      setTitleError("Title is required");
    } else {
      setTitleError("");
    }
  };

  const validateDescription = () => {
    if (description === "") {
      setDescriptionError("Description is required");
    } else {
      setDescriptionError("");
    }
  };

  const validateTag = () => {
    if (tags.length === 0) {
      setTagsError("Minimum 1 tag is required.");
    } else {
      setTagsError("");
    }
  };

  const validateCoverImage = () => {
    if (coverImage === null) {
      setCoverImageError("Cover Image is required.");
    } else {
      setCoverImageError("");
    }
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setTags([]);
    setResourceLink("");
    setDemoLink("");
    setCoverImage(null);
  };

  const handleSubmit = async () => {
    validateTitle();
    validateDescription();
    validateTag();
    validateCoverImage();
    if (
      title &&
      description &&
      tags &&
      coverImage &&
      !titleError &&
      !descriptionError &&
      !tagsError &&
      !coverImageError
    ) {
      setLoading(true);

      try {
        const response = await create({
          title,
          description,
          tags,
          resourceLink,
          demoLink,
          price: price,
          actualPrice: actualPrice,
          coverImage,
        });
        resetForm();
        toast.success("Project Created Successfully!");
        router.push("/asprog/project");
      } catch (error: any) {
        toast.error(error.response?.data?.message || "Failed to save project");
      } finally {
        setLoading(false);
      }
    }
  };

  const fetchProject = async (id: string) => {
    try {
      setLoading(true);
      const response = await fetchUnique({ uId: id });
      setTitle(response.data.title);
      setDescription(response.data.description);
      setCoverImageUrlFromServer(response.data.coverPhoto);

      if (response.data.resourceLink) {
        setResourceLink(response.data.resourceLink);
      }
      if (response.data.demoLink) {
        setDemoLink(response.data.demoLink);
      }

      const tagsArray: [] = response.data.tags.split(",");
      setTags(tagsArray);

      if (response.data.price) {
        setPrice(response.data.price);
      }
      if (response.data.actualPrice) {
        setActualPrice(response.data.actualPrice);
      }
    } catch (error: any) {
      toast.error("Failed to fetch project");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (id: string) => {
    validateTitle();
    validateDescription();
    validateTag();
    if (
      title &&
      description &&
      tags &&
      !titleError &&
      !descriptionError &&
      !tagsError
    ) {
      setLoading(true);

      try {
        const response = await update(
          {
            title,
            description,
            tags,
            resourceLink,
            demoLink,
            price: price,
            actualPrice: actualPrice,
            coverImage,
          },
          id
        );
        resetForm();
        toast.success("Project Created Successfully!");
        router.push("/asprog/project");
      } catch (error: any) {
        toast.error(error.response?.data?.message || "Failed to save project");
      } finally {
        setLoading(false);
      }
    }
  };

  return {
    coverImage,
    setCoverImage,
    coverImageUrlFromServer,
    title,
    setTitle,
    description,
    setDescription,
    tags,
    titleError,
    setTitleError,
    descriptionError,
    setDescriptionError,
    tagsError,
    setTagsError,
    handleAddTag,
    handleRemoveTag,
    isOpen,
    fileInputRef,
    resourceLink,
    demoLink,
    setResourceLink,
    setDemoLink,
    price,
    actualPrice,
    setPrice,
    setActualPrice,
    pasteFromClipboard,
    handleSubmit,
    coverImageError,
    setCoverImageError,
    loading,
    fetchProject,
    handleUpdate,
  };
}
