"use client";
import React from "react";
import { MenuData } from "@/data/portfolioMenu";
import useGetActive from "./useGetActive";

interface propsTypes {
  openNavbar: boolean;
  handleOpenNav: () => void;
}

const MobileMenu: React.FC<propsTypes> = ({ openNavbar, handleOpenNav }) => {
  const { isActive, scrollToSection } = useGetActive();

  return (
    <div
      className={`bg-black/20 backdrop-blur-md md:hidden transition-max-height duration-500 absolute w-full ease-in-out overflow-hidden ${
        openNavbar ? "max-h-[500px] py-10 border-b border-white/20" : "max-h-0"
      } z-[9999] fixed top-0 left-0`}
      style={{
        backdropFilter: "blur(10px)", // Adding fallback for browsers that don't support backdrop-filter
        WebkitBackdropFilter: "blur(10px)", // Safari support
      }}
    >
      <ul className="flex flex-col gap-6 w-full">
        {MenuData.map((menu) => (
          <div
            key={menu.id}
            onClick={() => scrollToSection(menu.link)}
            className={`mx-auto ${
              isActive(menu.link)
                ? "text-portfolio-primary font-semibold"
                : "text-white/90"
            }`}
          >
            <li
              className="text-[18px] cursor-pointer flex items-center gap-3 "
              onClick={handleOpenNav}
            >
              <menu.icon />
              {menu.name}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
