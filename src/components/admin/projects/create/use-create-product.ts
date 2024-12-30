"use client";
import React, { useState, useRef } from "react";
import userImage from "@/assets/image-placeholder.png";
// import { create } from "@/services/projectService";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { create, fetchUnique, update } from "@/services/admin/projectServices";

export default function useCreateProduct() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [tags, setTags] = useState<string[]>([]);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [githubLink, setGithubLink] = useState<string>("");
  const [previewLink, setPreviewLink] = useState<string>("");

  const [titleError, setTitleError] = useState<string>("");

  const [descriptionError, setDescriptionError] = useState<string>("");
  const [tagsError, setTagsError] = useState<string>("");

  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [coverImageUrlFromServer, setCoverImageUrlFromServer] =
    useState<string>("");
  const [previewImagesUrlFromServer, setpreviewImagesUrlFromServer] =
    useState<string>("");
  const [previewImages, setPreviewImages] = useState<File[] | []>([]);

  const [imageError, setImageError] = useState<string>("");
  const [longImageError, setLongImageError] = useState<string | null>(null);
  const [coverImageError, setCoverImageError] = useState<string | null>(null);
  const [previewImagesError, setPreviewImagesError] = useState<string | null>(
    null
  );

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
    setGithubLink("");
    setPreviewLink("");
    setCoverImage(null);
    setPreviewImages([]);
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
      !longImageError &&
      !coverImageError
    ) {
      setLoading(true);
      try {
        const response = await create(
          title,
          description,
          tags,
          coverImage,
          githubLink,
          previewLink,
          previewImages
        );

        resetForm();
        toast.success("Project Created Successfully!");
        router.push("/portfolio/project");
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
      setpreviewImagesUrlFromServer(response.data.previewPics);

      if (response.data.githubLink) {
        setGithubLink(response.data.githubLink);
      }
      if (response.data.previewLink) {
        setPreviewLink(response.data.previewLink);
      }

      const tagsArray: [] = response.data.tags.split(",");
      setTags(tagsArray);
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
          title,
          description,
          tags,
          coverImage,
          githubLink,
          previewLink,
          previewImages,
          id
        );
        resetForm();
        toast.success("Project updated Successfully!");
        router.push("/portfolio/project");
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
    previewImages,
    setPreviewImages,
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
    longImageError,
    setLongImageError,
    handleAddTag,
    handleRemoveTag,
    isOpen,
    fileInputRef,
    githubLink,
    previewLink,
    setGithubLink,
    setPreviewLink,
    pasteFromClipboard,
    handleSubmit,
    coverImageError,
    setCoverImageError,
    previewImagesError,
    setPreviewImagesError,
    loading,
    fetchProject,
    coverImageUrlFromServer,
    previewImagesUrlFromServer,
    handleUpdate,
  };
}
