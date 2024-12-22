"use client";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import Description from "./Description";

interface ProjectInformationProps {
  title: string;
  setTitle: (value: string) => void;
  titleError: string;
  description: string;
  descriptionError: string;
  setDescription: (value: string) => void;
  tags: string[];
  onAddTag: (tag: string) => void;
  onRemoveTag: (tag: string) => void;
  tagsError: string;
  setDescriptionError: any;
}

export default function ProjectInformation({
  title,
  setTitle,
  titleError,
  description,
  descriptionError,
  setDescription,
  tags,
  onAddTag,
  onRemoveTag,
  tagsError,
  setDescriptionError,
}: ProjectInformationProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleTagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault();
      if (!tags.includes(inputValue.trim())) {
        onAddTag(inputValue.trim());
        setInputValue("");
      }
    }
  };

  return (
    <>
      <div className="card mb-10">
        <div className="w-full px-4 sm:px-6 md:px-8 border-b-[1px] border-color pb-4">
          <h3 className="font-semibold text-[17.5px] leading-5 text-gray-700 dark:text-gray-300 uppercase">
            Project Information
          </h3>
        </div>
        <div className="w-full pt-5 px-4 sm:px-6 md:px-8">
          <div className="mb-4">
            <div className="flex flex-col gap-x-2">
              <label className="text-sm text-dark-black dark:text-light-white font-normal">
                Project Title *
              </label>
              <input
                type="text"
                value={title}
                name="title"
                onChange={(e) => setTitle(e.target.value)}
                className={`w-full py-[10px] px-5 items-center rounded-lg bg-form-background dark:bg-dark-form-background focus:bg-form-background-focus focus:dark:bg-dark-form-background-focus text-form-color dark:text-dark-form-color focus:outline-none border-[1px] ${
                  titleError ? "border-danger" : "border-color"
                }`}
                placeholder="Type project title"
                required
              />
              {titleError && (
                <span className="text-danger text-[12px] font-normal tracking-[0] mt-1 italic leading-[1] w-full">
                  Title is required
                </span>
              )}
            </div>
          </div>
          <Description
            description={description}
            descriptionError={descriptionError}
            setDescriptionError={setDescriptionError}
            setDescription={setDescription}
          />

          {/* Tags Section */}
          <div className="grid grid-cols-1 gap-2 mb-4">
            <div className="flex flex-col gap-x-2">
              <label className="text-sm text-dark-black dark:text-light-white font-normal">
                Tags *
              </label>
              <div className="flex flex-wrap gap-2 mt-1">
                {tags.map((tag, index) => (
                  <div className="mb-2" key={index}>
                    <div className="flex items-center bg-light-white dark:bg-dark-black border border-color py-1 px-3 rounded-full">
                      <span className="text-sm text-gray-700 dark:text-white">
                        {tag}
                      </span>
                      <button
                        type="button"
                        className="ml-2 text-gray-500 hover:text-red-600 dark:text-gray-300"
                        onClick={() => onRemoveTag(tag)}
                      >
                        <IoClose size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <input
                type="text"
                value={inputValue}
                name="tags"
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleTagKeyDown}
                placeholder="Type and press Enter to add tags"
                className={`w-full py-[10px] px-5 items-center rounded-lg bg-form-background dark:bg-dark-form-background focus:bg-form-background-focus focus:dark:bg-dark-form-background-focus text-form-color dark:text-dark-form-color focus:outline-none border-[1px] ${
                  tagsError ? "border-danger" : "border-color"
                }`}
              />
              {tagsError && (
                <span className="text-danger text-[12px] font-normal tracking-[0] mt-1 italic leading-[1] w-full">
                  {tagsError}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
