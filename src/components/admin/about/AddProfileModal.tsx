"use client";

import Image from "next/image";
import React, { ChangeEvent, useRef, useState } from "react";
import { BiPencil } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import imagePlaceholder from "@/assets/image-placeholder.png";
import { SingleLineLoading } from "@/components/common";
import toast from "react-hot-toast";
import { create } from "@/services/admin/profileServices";
// import { createProfile } from "@/services/profileService";

type Props = {
  closeModal: () => void;
  profile?: any;
  setRefresh: any;
};

export default function AddProfileModal({
  closeModal,
  profile,
  setRefresh,
}: Props) {
  const [ImageForm, setImageForm] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [imageError, setImageError] = useState<string | null>(null);
  const [image, setImage] = useState<string>(
    profile ? profile.profileURL : imagePlaceholder.src
  );

  const fileInputRef = useRef<HTMLInputElement>(null);

  const chooseImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const file = e.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          setImage(reader.result as string);
        };
        reader.readAsDataURL(file);
        setImageForm(file);
      }
    }
  };

  const handleImageChangeClick = () => {
    fileInputRef.current?.click();
  };

  const validateMedia = () => {
    if (!setImageForm) {
      setImageError("Please select an image.");
      return false;
    }
    if (imageError) {
      return false;
    }
    return true;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateMedia()) {
      return;
    }
    setIsLoading(true);
    try {
      const response = await create(ImageForm);
      console.log(response);

      closeModal();
      toast.success("Profile created successfully.");
      setRefresh(true);
    } catch (error: any) {
      console.log("Error creating profile:", error);
      toast.error(error?.response?.data?.message || "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative z-[50] bg-white dark:bg-black border border-color rounded-lg shadow-3xl w-full max-w-2xl mt-100">
      <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
          {profile ? "Update" : "Add"} Profile
        </h3>
        <button
          type="button"
          className="text-gray-500 dark:text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-base w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          onClick={closeModal}
        >
          <IoClose />
        </button>
      </div>
      {/* Modal body */}
      <div className="p-4 md:p-5 w-full">
        <form onSubmit={onSubmit} encType="multipart/form-data">
          <div className="flex flex-col gap-3">
            {/* image start */}
            <div className="flex justify-center items-center w-auto">
              <div className="relative">
                <Image
                  src={image}
                  height={425}
                  width={425}
                  className="object-cover h-[425px] w-[425px] rounded-md border-[1px] border-solid border-[#eee] dark:border-gray-500"
                  alt="User Image"
                />
                <div
                  className="absolute -bottom-3 right-5 bg-skin/70 text-white rounded-full p-2 cursor-pointer hover:bg-skin"
                  onClick={handleImageChangeClick}
                >
                  <BiPencil />
                </div>
              </div>
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onBlur={validateMedia}
                onChange={chooseImage}
              />
            </div>

            {imageError && (
              <span className="text-danger text-center text-[14px] font-normal tracking-[0] mt-1 italic leading-[1] w-full">
                {imageError}
              </span>
            )}
            {/* image end */}
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="py-1.5 px-3 bg-blue-500 text-[16px] font-semibold text-white rounded-md my-4"
            >
              {isLoading ? (
                <SingleLineLoading />
              ) : profile ? (
                "Update Profile"
              ) : (
                "Add Profile"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
