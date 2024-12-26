"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import userImage from "@/assets/ashish-profile.jpg";
import { ButtonLoader } from "@/components/common";

export default function Profile({
  user,
  setEmail,
  email,
  setFullName,
  fullName,
  updateUser,
  updating,
}: any) {
  const [fullNameError, setFullNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateFullName = () => {
    if (!fullName) {
      setFullNameError("Full Name is required");
    }
  };

  const validateEmail = () => {
    if (!email) {
      setEmailError("Email is required");
    }
  };
  const update = (e: any) => {
    e.preventDefault();
    validateFullName();
    validateEmail();
    updateUser();
  };
  return (
    <div className="mb-[15px] rounded-[5px] border-[1px] border-solid border-color p-[15px] bg-white dark:bg-black py-8">
      <div className="w-full px-4 sm:px-6 md:px-8 border-b-[1px] border-color pb-4 mb-8">
        <h3 className="font-semibold text-[17.5px] leading-5 text-gray-700 dark:text-gray-300 uppercase">
          Personal Information
        </h3>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-6 items-center">
        <div className="flex-1 flex flex-col text-center">
          <div className="flex w-auto items-center justify-center">
            <Image
              src={userImage}
              height={200}
              width={200}
              className="h-[100px] w-[100px] rounded-full object-cover"
              alt="User Image"
            />
          </div>
          <div className="mt-4 w-full">
            <h4 className="text-[14px] tracking-[0.02rem] text-gray-500">
              {user?.fullName}
            </h4>
            <h4 className="text-[14px] tracking-[0.02rem] text-gray-500">
              {user?.email}
            </h4>
            <h4 className="text-[14px] tracking-[0.02rem] text-gray-500">
              Role: {user?.role}
            </h4>
          </div>
        </div>
        <form onSubmit={update} className="flex-1 w-full">
          <div className="flex flex-col gap-x-2 mb-4">
            <label className="text-sm text-dark-black dark:text-light-white font-normal">
              Full Name
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className={`w-full py-[10px] px-5 items-center rounded-lg bg-form-background dark:bg-dark-form-background focus:bg-form-background-focus focus:dark:bg-dark-form-background-focus text-form-color dark:text-dark-form-color focus:outline-none border-[1px] border-color`}
              placeholder="Name"
              onBlur={validateFullName}
            />
            {fullNameError && (
              <span className="text-danger text-[12px] font-normal tracking-[0] mt-1 italic leading-[1] w-full">
                {fullNameError}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-x-2 mb-4">
            <label className="text-sm text-dark-black dark:text-light-white font-normal">
              Email
            </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full py-[10px] px-5 items-center rounded-lg bg-form-background dark:bg-dark-form-background focus:bg-form-background-focus focus:dark:bg-dark-form-background-focus text-form-color dark:text-dark-form-color focus:outline-none border-[1px] border-color`}
              placeholder="Email"
              onBlur={validateEmail}
            />
            {emailError && (
              <span className="text-danger text-[12px] font-normal tracking-[0] mt-1 italic leading-[1] w-full">
                {emailError}
              </span>
            )}
          </div>
          <div className="w-fit">
            {updating ? (
              <ButtonLoader />
            ) : (
              <button
                type="submit"
                className="bg-skin text-white px-4 py-2 rounded-md hover:opacity-90"
              >
                Update Profile
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
