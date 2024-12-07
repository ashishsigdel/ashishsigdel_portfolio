"use client";
import React, { useState } from "react";
import {
  CoverImage,
  LinkInformation,
  PreviewImages,
  ProjectInformation,
  useCreate,
} from "@/components/admin/projects";
import { ButtonLoader, Spinner } from "@/components/common";

export default function CreateForm() {
  const {
    title,
    setTitle,
    description,
    setDescription,
    tags,
    handleAddTag,
    handleRemoveTag,
    handleSubmit,
    githubLink,
    previewLink,
    setGithubLink,
    setPreviewLink,
    pasteFromClipboard,
    longImage,
    setLongImage,
    longImageError,
    setLongImageError,
    coverImage,
    setCoverImage,
    coverImageError,
    setCoverImageError,
    previewImages,
    setPreviewImages,
    previewImagesError,
    setPreviewImagesError,
    titleError,
    descriptionError,
    tagsError,
    loading,
  } = useCreate();

  return (
    <div className="bg-white dark:bg-black shadow rounded-lg p-6 w-full border border-color">
      <div className="hidden xl:flex xl:flex-row">
        <div className="w-[65%] p-2">
          <ProjectInformation
            tags={tags}
            title={title}
            setTitle={setTitle}
            titleError={titleError}
            description={description}
            descriptionError={descriptionError}
            setDescription={setDescription}
            onAddTag={handleAddTag}
            onRemoveTag={handleRemoveTag}
            tagsError={tagsError}
          />
          <LinkInformation
            githubLink={githubLink}
            previewLink={previewLink}
            setGithubLink={setGithubLink}
            setPreviewLink={setPreviewLink}
            pasteFromClipboard={pasteFromClipboard}
          />
          <PreviewImages
            previewImages={previewImages}
            setPreviewImages={setPreviewImages}
            setPreviewImagesError={setPreviewImagesError}
            previewImagesError={previewImagesError}
          />
        </div>
        <div className="w-[35%] p-2">
          <CoverImage
            coverImage={coverImage}
            setCoverImage={setCoverImage}
            setCoverImageError={setCoverImageError}
            coverImageError={coverImageError}
          />
        </div>
      </div>
      <div className="flex flex-col xl:hidden">
        <div className="p-2">
          <ProjectInformation
            tags={tags}
            title={title}
            setTitle={setTitle}
            titleError={titleError}
            description={description}
            descriptionError={descriptionError}
            setDescription={setDescription}
            onAddTag={handleAddTag}
            onRemoveTag={handleRemoveTag}
            tagsError={tagsError}
          />
          <LinkInformation
            githubLink={githubLink}
            previewLink={previewLink}
            setGithubLink={setGithubLink}
            setPreviewLink={setPreviewLink}
            pasteFromClipboard={pasteFromClipboard}
          />
          <CoverImage
            coverImage={coverImage}
            setCoverImage={setCoverImage}
            setCoverImageError={setCoverImageError}
            coverImageError={coverImageError}
          />
          <PreviewImages
            previewImages={previewImages}
            setPreviewImages={setPreviewImages}
            setPreviewImagesError={setPreviewImagesError}
            previewImagesError={previewImagesError}
          />
        </div>
      </div>
      <div className="w-full text-end">
        <button
          className="py-1.5 px-3 bg-skin text-[14px] font-normal text-white rounded-md my-4"
          onClick={handleSubmit}
        >
          {loading ? <ButtonLoader /> : "Add Project"}
        </button>
      </div>
    </div>
  );
}
