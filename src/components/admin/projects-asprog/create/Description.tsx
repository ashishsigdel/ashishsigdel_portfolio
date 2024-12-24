"use client";
import React, { useEffect, useState } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

export default function Description({
  setDescriptionError,
  descriptionError,
  description,
  setDescription,
}: {
  setDescriptionError: (value: string) => void;
  setDescription: (value: string) => void;
  descriptionError: string;
  description: string;
}) {
  const { quill, quillRef } = useQuill({
    theme: "snow",
    modules: {
      toolbar: [
        [{ header: "1" }, { header: "2" }, { font: [] }],
        [{ size: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
        ],
        ["link", "image", "video"],
      ],
    },
    formats: [
      "header",
      "font",
      "size",
      "bold",
      "italic",
      "underline",
      "strike",
      "blockquote",
      "list",
      "indent",
      "link",
      "image",
      "video",
    ],
  });

  // Track if the editor has been initialized
  const [isInitialized, setIsInitialized] = useState(false);

  // Handle initial content setup
  useEffect(() => {
    if (quill && !isInitialized && description) {
      quill.root.innerHTML = description;
      setIsInitialized(true);
    }
  }, [quill, description, isInitialized]);

  // Handle editor events
  useEffect(() => {
    if (!quill) return;

    const handleTextChange = () => {
      const text = quill.getText().trim();
      if (text === "") {
        setDescription("");
        setDescriptionError("Description is required");
      } else {
        setDescriptionError("");
        setDescription(quill.root.innerHTML);
      }
    };

    const handleClick = () => {
      const text = quill.getText().trim();
      if (text === "") {
        setDescriptionError("Description is required");
      } else {
        setDescriptionError("");
      }
    };

    quill.on("text-change", handleTextChange);
    quill.root.addEventListener("click", handleClick);

    return () => {
      quill.off("text-change", handleTextChange);
      quill.root.removeEventListener("click", handleClick);
    };
  }, [quill, setDescription, setDescriptionError]);

  return (
    <div className="grid grid-cols-1 gap-2 mb-3">
      <div className="flex flex-col gap-x-2">
        <label className="text-sm text-dark-black dark:text-light-white font-semibold">
          Description *
        </label>
        <div className="w-full flex justify-center items-center flex-col min-h-[200px] bg-light-white dark:bg-dark-black">
          <div ref={quillRef} className="w-full"></div>
        </div>
        {descriptionError && (
          <span className="text-danger text-[12px] font-normal tracking-[0] mt-1 italic leading-[1] w-full">
            {descriptionError}
          </span>
        )}
      </div>
    </div>
  );
}
