"use client";
import Image from "next/image";
import profilePic from "@/assets/ashish-profile.jpg";
import ThemeToggle from "@/utils/ThemeToggler";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useState } from "react";

export default function ProfileMenuCard() {
  const handleLogoutClick = () => {};
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="absolute top-16 right-12 bg-white dark:bg-black rounded-md shadow-md min-w-72 py-3 border border-color">
      <div className="flex gap-4 items-center border-b border-color dark:border-graycolor p-5 ">
        <Image
          src={profilePic}
          alt="profile-pic"
          width={40}
          height={40}
          className="rounded-lg object-cover cursor-pointer"
        />
        <div>
          <h3 className="font-semibold leading-3 text[15px]">Ashish Sigdel</h3>
          <span className="text-[11px] text-graycolor">@ashishsigdel</span>
        </div>
      </div>

      <div className="">
        <ul className="flex flex-col gap-4 p-5">
          <li className="text-hardgray dark:text-lightgray hover:text-bluecolor text-[14px] font-[600] flex justify-between">
            <span>Mode</span>
            <ThemeToggle />
          </li>
          <li className="text-hardgray dark:text-lightgray hover:text-bluecolor text-[14px] font-[600] flex justify-between">
            <span>Language</span>
            <span>English</span>
          </li>

          <li
            className="text-hardgray dark:text-lightgray hover:text-bluecolor text-[14px] font-[600] cursor-pointer"
            onClick={handleLogoutClick}
          >
            {isLoading ? "Signing Out..." : "Sign Out"}
          </li>
        </ul>
      </div>
    </div>
  );
}
