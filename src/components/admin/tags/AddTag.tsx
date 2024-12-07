"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { IoClose } from "react-icons/io5";

type Props = {
  closeModal: () => void;
  tag?: any;
  setRefresh: any;
};

export default function AddTag({ closeModal, tag, setRefresh }: Props) {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      //   const response = await createProfile(ImageForm);
      closeModal();
      toast.success("Profile created successfully.");
      setRefresh(true);
    } catch (error) {
      console.error("Error creating profile:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="relative z-[50] bg-white dark:bg-black border border-color rounded-lg shadow-3xl w-full max-w-3xl mt-100">
      <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          Add Tag
        </h3>
        <button
          type="button"
          className="text-gray-500 dark:text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          data-modal-hide="default-modal"
          onClick={closeModal}
        >
          <IoClose />
        </button>
      </div>
      {/* Modal body */}
      <div className="p-4 md:p-5 w-full">
        <form className="" onSubmit={onSubmit} encType="multipart/form-data">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <label className="text-sm text-hardgray dark:text-lightgray font-semibold">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className={`w-full py-[10px] px-5 items-center rounded-lg bg-form-background dark:bg-dark-form-background border-[1px] border-color focus:outline-none
                   ${
                     false
                       ? "border-danger"
                       : "border-[#eee] dark:border-gray-500"
                   }
                `}
                placeholder="Type product name"
                required
                // onBlur={validateName}
              />
              {/* {nameError && (
                <span className="text-danger text-[12px] font-normal tracking-[0] mt-1 italic leading-[1] w-full">
                  {nameError}
                </span>
              )} */}
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-hardgray dark:text-lightgray font-semibold">
                Is Active
              </label>
              <select
                id="category"
                className={`w-full py-[10px] px-5 items-center rounded-lg bg-form-background dark:bg-dark-form-background border-[1px] border-color focus:outline-none 
                  "border-[#eee] dark:border-gray-500
                `}
                name="isActive"
                // onChange={handleChange}
                // defaultValue={isActive?.toString()}
              >
                <option value="" className="text-hardgray dark:text-lightgray">
                  Select Status
                </option>
                <option
                  value="true"
                  className="text-hardgray dark:text-lightgray"
                >
                  Yes
                </option>
                <option
                  value="false"
                  className="text-hardgray dark:text-lightgray"
                >
                  No
                </option>
              </select>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="py-1.5 px-3 bg-blue-500 text-[14px] font-semibold text-white rounded-md my-4"
            >
              Add Tag
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
