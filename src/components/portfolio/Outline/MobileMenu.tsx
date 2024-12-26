"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaFingerprint, FaSkiing } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { RiApps2Fill, RiContactsBook3Fill } from "react-icons/ri";

interface propsTypes {
  openNavbar: Boolean;
  handleOpenNav: () => void;
}

const MobileMenu: React.FC<propsTypes> = ({ openNavbar, handleOpenNav }) => {
  const pathname = usePathname();

  const isActive = (page: string) => {
    return page === pathname;
  };
  return (
    <div
      className={`bg-black/20 backdrop-blur-md md:hidden blur-bg transition-max-height duration-500 absolute w-full ease-in-out overflow-hidden ${
        openNavbar ? "max-h-[500px] py-10 border-b border-white/20" : "max-h-0"
      } z-[9999]`}
    >
      <ul className="flex flex-col gap-6 w-full">
        <Link
          href={"/"}
          className={`mx-auto ${
            isActive("/") ? "text-primary" : "text-white/90"
          }`}
        >
          <li
            className="text-[18px] cursor-pointer flex items-center gap-3 "
            onClick={handleOpenNav}
          >
            <IoHome />
            Home
          </li>
        </Link>

        <Link
          href={"/portfolio"}
          className={`mx-auto ${
            isActive("/portfolio") ? "text-primary" : "text-white/90"
          }`}
        >
          <li
            className="text-[18px] cursor-pointer flex items-center gap-3 mx-auto"
            onClick={handleOpenNav}
          >
            <RiApps2Fill />
            My Portfolio
          </li>
        </Link>

        <Link
          href={"/contact"}
          className={`mx-auto ${
            isActive("/contact") ? "text-primary" : "text-white/90"
          }`}
        >
          <li
            className="text-[18px] cursor-pointer flex items-center gap-3 mx-auto"
            onClick={handleOpenNav}
          >
            <RiContactsBook3Fill />
            Contact Me
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default MobileMenu;
