"use client";
import { Menu } from "@/types/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const SidebarLink = ({
  menu,
  fullbar,
  newMessage,
}: {
  menu: Menu;
  fullbar: boolean;
  newMessage: number;
}) => {
  const pathname = usePathname();

  return (
    <div className="py-2 border-b border-color">
      <div className="relative">
        <Link
          href={menu.link || "#"}
          className={`flex justify-between items-center text-dark-black dark:text-light-white px-4 ${
            !menu.subMenu &&
            "hover:bg-gray-500/[.1] dark:hover:bg-gray-100/[.2] dark:hover:text-white"
          } ${
            !menu.subMenu &&
            pathname === menu.link &&
            "bg-gray-200 dark:bg-gray-800"
          } text-[15px] cursor-pointer rounded-lg`}
        >
          <div className="flex gap-3 py-[10px] items-center cursor-pointer relative w-full">
            {menu.icon && (
              <menu.icon className="text-2xl opacity-60 text-dark-black dark:text-light-white hover:text-black dark:hover:text-white" />
            )}
            {fullbar && (
              <span className="font-semibold overflow-hidden whitespace-nowrap">
                {menu.name}
              </span>
            )}
            {menu.name === "Inbox" && newMessage > 0 && (
              <span
                className={`absolute right-[-5px] ${
                  !fullbar && "top-[-1px]"
                }  bg-blue-500 text-white h-5 w-5 flex items-center justify-center rounded-full text-xs`}
              >
                {newMessage}
              </span>
            )}
          </div>
          {menu.subMenu && fullbar && <FaChevronRight />}
        </Link>
      </div>
      {menu.subMenu && (
        <div className="">
          {menu.subMenu.map((subMenu) => (
            <Link key={subMenu.id} href={subMenu.link}>
              <div
                className={`px-4 py-[8px] flex gap-3 items-center cursor-pointer text-dark-black dark:text-light-white 
                  hover:bg-gray-500/[.1] dark:hover:bg-gray-100/[.2] dark:hover:text-white ${
                    pathname === subMenu.link && "bg-gray-200 dark:bg-gray-800"
                  } rounded-lg`}
              >
                {subMenu.icon && (
                  <subMenu.icon className="text-xl opacity-60 text-dark-black dark:text-light-white hover:text-black dark:hover:text-white" />
                )}
                {fullbar && (
                  <span className="font-semibold overflow-hidden whitespace-nowrap">
                    {subMenu.name}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarLink;
