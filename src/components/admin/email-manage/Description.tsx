"use client";
import JoditEditor from "jodit-react";
import React, { useMemo, useRef, useState, useEffect } from "react";

export default function Description({
  setDescriptionError,
  descriptionError,
  description,
  setDescription,
}: {
  setDescriptionError: (value: string) => void;
  descriptionError: string;
  description: string;
  setDescription: any;
}) {
  const editor = useRef(null);

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: "Start typing...",
      minHeight: 300,
    }),
    []
  );

  useEffect(() => {
    // Apply styles after the editor initializes
    const editorContainer = document.querySelector(".jodit-container");
    if (editorContainer) {
      editorContainer.classList.add(
        "bg-white",
        "text-black",
        "dark:bg-gray-800",
        "dark:text-black",
        "w-full"
      );
    }
  }, []);

  return (
    <div className="w-full rounded-lg mb-10 h-[50%]">
      <JoditEditor
        ref={editor}
        value={description}
        config={config}
        onBlur={(newContent) => setDescription(newContent)}
        onChange={(newContent) => {}}
      />
      {descriptionError && (
        <span className="text-danger text-[12px] font-normal tracking-[0] mt-1 italic leading-[1] w-full">
          {descriptionError}
        </span>
      )}
    </div>
  );
}
