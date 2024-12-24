"use client";
import React, { useEffect, useState } from "react";
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
    demoLink,
    setResourceLink,
    setDemoLink,
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
    fetchProject,
    coverImageUrlFromServer,
    handleUpdate,
  } = useCreate();

  useEffect(() => {
    if (projectId) {
      fetchProject(projectId);
    }
  }, []);

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
            previewLink={demoLink}
            setResourceLink={setResourceLink}
            setPreviewLink={setDemoLink}
            pasteFromClipboard={pasteFromClipboard}
          />
        </div>
        <div className="w-full xl:w-[35%] p-2">
          <CoverImage
            coverImage={coverImage}
            coverImageUrlFromServer={coverImageUrlFromServer}
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
        {loading ? (
          <ButtonLoader />
        ) : projectId ? (
          <button
            className="py-1.5 px-3 bg-skin text-[14px] font-normal text-white rounded-md my-4"
            onClick={() => handleUpdate(projectId)}
          >
            Update
          </button>
        ) : (
          <button
            className="py-1.5 px-3 bg-skin text-[14px] font-normal text-white rounded-md my-4"
            onClick={handleSubmit}
          >
            Create
          </button>
        )}
      </div>
    </div>
  );
}
