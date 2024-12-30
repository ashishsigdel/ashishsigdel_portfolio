"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { BsPlus } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

export default function PreviewImages({
  previewImages,
  setPreviewImages,
  previewImagesError,
  setPreviewImagesError,
  previewImagesUrlFromServer,
}: any) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [open, setOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  // Function to open the lightbox for viewing images
  const openLightBox = (image: string) => {
    setSelectedImage(image);
    setOpen(true);
  };

  // Lock body scrolling when the lightbox is open
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

  const handleImagesChangeClick = () => {
    fileInputRef.current?.click();
  };

  // Handle image selection
  const handleImagesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setPreviewImages((prev: File[]) => [...prev, ...Array.from(files)]);

      const newImages: string[] = [];
      for (let i = 0; i < files.length && i < 5; i++) {
        const file = files[i];
        const reader = new FileReader();
        reader.onloadend = () => {
          newImages.push(reader.result as string);
          if (newImages.length === Math.min(files.length, 5)) {
            setPreviewUrls((prevImages) => [...prevImages, ...newImages]);
          }
        };
        reader.readAsDataURL(file);
      }
    } else {
      setPreviewImagesError("No image selected.");
    }
  };

  const handleRemoveImage = (indexToRemove: number) => {
    setPreviewImages((prevImages: File[]) =>
      prevImages.filter((_, index) => index !== indexToRemove)
    );

    setPreviewUrls((prevUrls: string[]) =>
      prevUrls.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <div className="card my-4 lg:mt-0">
      <div className="w-full px-4 sm:px-6 md:px-8 border-b-[1px] border-color pb-4">
        <h3 className="font-semibold text-[17.5px] leading-5 text-gray-700 dark:text-gray-300 uppercase">
          Preview Images
        </h3>
      </div>

      <div className="w-full flex justify-center items-center pb-10 pt-5 px-4 sm:px-6 md:px-8">
        <div className="flex justify-center items-center w-full relative">
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
            multiple
            onChange={handleImagesChange}
            ref={fileInputRef}
            className="opacity-0 w-full h-full absolute inset-0 cursor-pointer"
          />
        </div>

        {previewImagesError && (
          <span className="text-danger text-[12px] font-normal tracking-[0] mt-1 italic leading-[1] w-full">
            {previewImagesError}
          </span>
        )}
      </div>

      {/* Preview Images */}
      <div className="flex flex-wrap gap-3">
        {previewImagesUrlFromServer.length > 0 &&
          previewImagesUrlFromServer.map((image: any) => (
            <div
              key={image.id}
              className="relative pb-10 pt-5 px-4 sm:px-6 md:px-8"
            >
              <Image
                src={image.previewUrl}
                alt={`Preview ${image.id}`}
                width={200}
                height={200}
                className="object-cover rounded-md border border-color w-[200px] h-[200px]"
                onClick={() => openLightBox(image)}
              />
            </div>
          ))}
        {previewUrls.map((image, index) => (
          <div key={index} className="relative pb-10 pt-5 px-4 sm:px-6 md:px-8">
            <Image
              src={image}
              alt={`Preview ${index + 1}`}
              width={200}
              height={200}
              className="object-cover rounded-md border border-color w-[200px] h-[200px]"
              onClick={() => openLightBox(image)}
            />
            <button
              className="absolute top-0 right-0 bg-danger text-white rounded-full p-1 cursor-pointer"
              title="Remove"
              onClick={() => handleRemoveImage(index)}
            >
              <IoClose />
            </button>
          </div>
        ))}
      </div>

      {open && selectedImage && (
        <div className="fixed inset-0 flex items-start justify-center bg-black bg-opacity-75 z-[9999] px-2 py-10 overflow-y-scroll">
          <div className="relative w-full h-auto max-w-4xl">
            <Image
              src={selectedImage}
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
