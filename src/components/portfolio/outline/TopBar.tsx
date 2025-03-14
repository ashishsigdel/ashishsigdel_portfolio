"use client";

import Image from "next/image";
import logo from "@/assets/logo/coding.svg";
import { FiList } from "react-icons/fi";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import MobileMenu from "./MobileMenu";
import { Leftwindow } from "../utils";

export default function TopBar({
  width,
  toggleWidth,
  toggleQuiting,
}: {
  width: string;
  toggleWidth: () => void;
  toggleQuiting: () => void;
}) {
  const [openNavbar, setOpenNavbar] = useState<boolean>(false);

  const handleOpenNav = () => {
    setOpenNavbar(!openNavbar);
  };

  return (
    <div className="w-full">
      <div className="w-full border-b border-white/20 h-[40px] flex items-center justify-between bg-black/30 blur-bg relative">
        <div className="w-[40px] h-full flex justify-center items-center border-r border-white/20 overflow-hidden">
          <Image
            src={logo}
            alt="Logo"
            width={20}
            height={20}
            className="invert"
          />
        </div>
        <div className="mx-auto">
          <p className="text-center font-semibold tracking-wider">
            Ashish<span className="text-portfolio-primary">&lt;Sigdel&gt;</span>
          </p>
        </div>
        <div
          onClick={handleOpenNav}
          className="w-[40px] h-full flex justify-center items-center md:hidden"
        >
          {openNavbar ? (
            <MdClose className="text-xl cursor-pointer" />
          ) : (
            <FiList className="text-xl cursor-pointer" />
          )}
        </div>
        <Leftwindow
          width={width}
          toggleWidth={toggleWidth}
          toggleQuiting={toggleQuiting}
        />
      </div>
      <div className="w-full relative">
        <MobileMenu openNavbar={openNavbar} handleOpenNav={handleOpenNav} />
      </div>
    </div>
  );
}
