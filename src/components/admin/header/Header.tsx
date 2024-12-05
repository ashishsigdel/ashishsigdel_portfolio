"use client";

import ThemeToggle from "@/utils/ThemeToggler";
import Image from "next/image";
import React, { useState } from "react";
import profilePic from "@/assets/ashish-profile.jpg";
import logo from "@/assets/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { Sidebar } from "@/components/admin/sidebar";
import { ProfileMenuCard } from "@/components/admin/header";

export default function Header() {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const [openProfile, setOpenProfile] = useState<boolean>(false);

  const closeSidebar = () => setOpenSidebar(false);

  const openProfileToggle = () => setOpenProfile(!openProfile);

  return (
    <>
      <header className="bg-light-white dark:bg-black w-full h-20 flex items-center sticky top-0 z-[998] border-b border-color">
        <div className="px-6 w-full flex justify-between items-center">
          <div className="gap-3 items-center hidden md:flex">
            <span className="p-2 shadow-sm rounded-md text-bluecolor font-semibold">
              Dashboard
            </span>
          </div>
          <div className="gap-6 items-center flex md:hidden">
            <GiHamburgerMenu
              onClick={() => setOpenSidebar(true)}
              className="text-[20px] text-skin font-bold cursor-pointer"
            />
            <Link href="/dashboard" className="h-[36px] overflow-hidden">
              <Image src={logo} alt="logo-mmf" height={36} />
            </Link>
          </div>
          <div className="flex gap-6 items-center overflow-hidden">
            <ThemeToggle />
            <Image
              src={profilePic}
              alt="profile-pic"
              onClick={openProfileToggle}
              width={36}
              height={36}
              className="rounded-lg object-cover cursor-pointer"
            />
            {openProfile && <ProfileMenuCard />}
          </div>
        </div>
      </header>
      {openSidebar && (
        <>
          <div className="flex absolute top-0 left-0 md:hidden bg-black">
            <Sidebar />
          </div>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={closeSidebar}
          ></div>
        </>
      )}
    </>
  );
}
