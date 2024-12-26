"use client";
import Link from "next/link";
import { Profile, Security } from ".";
import useSetting from "./useSetting";
import { Spinner } from "@/components/common";
import { useEffect } from "react";

export default function Settings() {
  const {
    user,
    setUser,
    loading,
    fetchProfile,
    email,
    setEmail,
    fullName,
    setfullName,
    updateUser,
    updating,
    toggle2FAuth,
    toggling,
  } = useSetting();

  useEffect(() => {
    fetchProfile();
  }, []);

  if (!user) {
    return (
      <div className="animate-pulse min-h-screen flex flex-col gap-6 p-6">
        <div className="h-8 w-1/3 bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div className="h-8 w-1/5 bg-gray-300 dark:bg-gray-700 rounded"></div>

        <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg flex items-center gap-6">
          <div className="w-32 h-32 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
          <div className="flex flex-col gap-4 flex-1">
            <div className="h-6 w-2/3 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="h-6 w-1/2 bg-gray-300 dark:bg-gray-700 rounded"></div>
          </div>
        </div>

        <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <div className="h-6 w-full bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="h-6 w-full bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="h-6 w-full bg-gray-300 dark:bg-gray-700 rounded"></div>
          </div>
          <div className="flex justify-between items-center">
            <div className="h-6 w-1/2 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="h-10 w-28 bg-gray-300 dark:bg-gray-700 rounded"></div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-light-white dark:bg-dark-black pb-5 min-h-screen">
      <div className="px-6 w-full flex justify-between items-center ">
        <div className="my-5">
          <h3 className="font-semibold text-[17.5px] leading-5">
            Ashish Sigdel Dashboard
          </h3>
          <Link href="/" className="text-[14px] text-gray-500">
            Home
          </Link>{" "}
          <span className="text-[14px] text-gray-500">-</span>{" "}
          <span className="text-[14px] text-gray-500">Settings</span>
        </div>
      </div>
      <div className="px-6 mb-4">
        <div className="flex flex-col gap-4 justify-center">
          <div className="flex-1 min-w-[300px] md:min-w-[500px] ">
            <Profile
              user={user}
              setEmail={setEmail}
              email={email}
              setFullName={setfullName}
              fullName={fullName}
              updateUser={updateUser}
              updating={updating}
            />
          </div>
          <div className="flex-1 min-w-[300px] md:min-w-[500px] ">
            <Security
              user={user}
              toggle2FAuth={toggle2FAuth}
              toggling={toggling}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
