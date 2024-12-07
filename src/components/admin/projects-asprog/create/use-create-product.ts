"use client";
import React, { useState, useRef } from "react";
import userImage from "@/assets/image-placeholder.png";
// import { create } from "@/services/projectService";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function useCreateProduct() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [tags, setTags] = useState<string[]>([]);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [resourceLink, setResourceLink] = useState<string>("");
  const [previewLink, setPreviewLink] = useState<string>("");
  const [price, setPrice] = useState<number | undefined>(undefined);
  const [actualPrice, setActualPrice] = useState<number | undefined>(undefined);

  const [titleError, setTitleError] = useState<string>("");

  const [descriptionError, setDescriptionError] = useState<string>("");
  const [tagsError, setTagsError] = useState<string>("");

  const [coverImage, setCoverImage] = useState<File | null>(null);

  const [imageError, setImageError] = useState<string>("");
  const [longImageError, setLongImageError] = useState<string | null>(null);
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
    setPreviewLink("");
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
      !longImageError &&
      !coverImageError
    ) {
      setLoading(true);
      console.log(description);

      try {
        // const response = await create({
        //   title,
        //   description,
        //   tags,
        //   coverImage,
        //   resourceLink,
        //   previewLink,
        //   previewImages,
        // });
        // resetForm();
        toast.success("Project Created Successfully!");
        // router.push("/project");
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
    resourceLink,
    previewLink,
    setResourceLink,
    setPreviewLink,
    price,
    actualPrice,
    setPrice,
    setActualPrice,
    pasteFromClipboard,
    handleSubmit,
    coverImageError,
    setCoverImageError,
    loading,
  };
}
