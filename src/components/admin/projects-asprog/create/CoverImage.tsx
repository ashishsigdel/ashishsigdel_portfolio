"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { BiPencil } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

export default function CoverImage({
  coverImage,
  setCoverImage,
  coverImageError,
  setCoverImageError,
  coverImageUrlFromServer,
}: any) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const openLightBox = () => {
    setOpen(true);
  };

  useEffect(() => {
    if (open) {
      document.body.style.height = "100vh";
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.height = "auto";
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.body.style.height = "auto";
      document.body.style.overflowY = "auto";
    };
  }, [open]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setCoverImage(file);
      setImagePreview(URL.createObjectURL(file));
    } else {
      setCoverImageError("Error while uploading image.");
    }
  };

  const handleImageChangeClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="card my-4 lg:mt-0">
      <div className="w-full px-4 sm:px-6 md:px-8 border-b-[1px] border-[#ccc] dark:border-gray-500 pb-4">
        <h3 className="font-semibold text-[17.5px] leading-5 text-gray-700 dark:text-gray-300 uppercase">
          Cover Image *
        </h3>
      </div>
      <div className="w-full flex justify-center items-center pb-6 pt-5 px-4 sm:px-6 md:px-8">
        <div className="flex justify-center items-center w-full relative">
          {imagePreview || coverImageUrlFromServer ? (
            <>
              <Image
                src={imagePreview ? imagePreview : coverImageUrlFromServer}
                height={1000}
                width={200}
                className="object-cover rounded-md w-full border-[1px] border-solid border-[#eee] dark:border-gray-500"
                alt="Cover Image"
                onClick={openLightBox}
              />
              <div
                className="absolute bottom-0 right-0 bg-skin/40 text-white rounded-full p-2 cursor-pointer hover:bg-skin"
                onClick={handleImageChangeClick}
              >
                <BiPencil />
              </div>
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onChange={handleImageChange}
              />
            </>
          ) : (
            <>
              <label
                htmlFor="medias"
                className="flex items-center w-full p-2 justify-center bg-form-background dark:bg-dark-form-background rounded-md cursor-pointer h-[200px]"
              >
                <div className="p-5 border-[1px] border-skin border-dashed cursor-pointer">
                  <span className="text-skin text-[72px] font-normal cursor-pointer">
                    <BsPlus />
                  </span>
                </div>
              </label>
              <input
                type="file"
                name="medias"
                id="medias"
                accept="image/*"
                onChange={handleImageChange}
                ref={fileInputRef}
                className="opacity-0 w-full h-full absolute inset-0 cursor-pointer"
              />
            </>
          )}
        </div>
      </div>
      {coverImageError && (
        <span className="text-danger text-[12px] font-normal tracking-[0] mt-1 italic leading-[1] w-full px-4 sm:px-6 md:px-8">
          {coverImageError}
        </span>
      )}
      {open && imagePreview && (
        <div className="fixed inset-0 flex items-start justify-center bg-black bg-opacity-75 z-[9999] px-2 py-10 overflow-y-scroll">
          <div className="relative w-full h-auto max-w-4xl">
            <Image
              src={imagePreview}
              width={800}
              height={800}
              alt="Product Image"
              className="w-full h-full object-cover rounded-md"
            />

            <button
              className="absolute top-1 right-1 bg-danger text-white rounded-full p-1 cursor-pointer"
              title="Close"
              onClick={() => setOpen(false)}
            >
              <IoClose />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
