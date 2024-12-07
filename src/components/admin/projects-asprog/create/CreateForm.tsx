"use client";
import React, { useState } from "react";
import {
  CoverImage,
  LinkInformation,
  PriceInformation,
  ProjectInformation,
  useCreate,
} from "@/components/admin/projects-asprog";
import { ButtonLoader, Spinner } from "@/components/common";
import { useSearchParams } from "next/navigation";

export default function CreateForm() {
  const searchParams = useSearchParams();

  const projectId = searchParams.get("project");
  const {
    title,
    setTitle,
    description,
    setDescription,
    tags,
    handleAddTag,
    handleRemoveTag,
    handleSubmit,
    resourceLink,
    previewLink,
    setResourceLink,
    setPreviewLink,
    pasteFromClipboard,
    coverImage,
    setCoverImage,
    coverImageError,
    setCoverImageError,
    price,
    actualPrice,
    setPrice,
    setActualPrice,
    titleError,
    descriptionError,
    tagsError,
    loading,
    setDescriptionError,
  } = useCreate();

  return (
    <div className="bg-white dark:bg-black shadow rounded-lg p-6 w-full border border-color">
      <div className="w-full flex flex-col xl:flex-row">
        <div className="w-full xl:w-[65%] p-2">
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
            setDescriptionError={setDescriptionError}
          />
          <LinkInformation
            resourceLink={resourceLink}
            previewLink={previewLink}
            setResourceLink={setResourceLink}
            setPreviewLink={setPreviewLink}
            pasteFromClipboard={pasteFromClipboard}
          />
        </div>
        <div className="w-full xl:w-[35%] p-2">
          <CoverImage
            coverImage={coverImage}
            setCoverImage={setCoverImage}
            setCoverImageError={setCoverImageError}
            coverImageError={coverImageError}
          />
          <PriceInformation
            price={price}
            actualPrice={actualPrice}
            setPrice={setPrice}
            setActualPrice={setActualPrice}
          />
        </div>
      </div>
      <div className="w-full text-end">
        <button
          className="py-1.5 px-3 bg-skin text-[14px] font-normal text-white rounded-md my-4"
          onClick={handleSubmit}
        >
          {loading ? (
            <ButtonLoader />
          ) : projectId ? (
            "Update Project"
          ) : (
            "Create Project"
          )}
        </button>
      </div>
    </div>
  );
}
