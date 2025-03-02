"use client";
import { Menu } from "@/types/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const SidebarLink = ({
  menu,
  fullbar,
  newMessage,
}: {
  menu: Menu;
  fullbar: boolean;
  newMessage: number;
}) => {
  console.log(newMessage);

  const pathname = usePathname();

  const checkPath = menu.link.split("/")[1];

  const subMenuStart = menu.subMenu
    ? menu.subMenu.some((subMenu) => pathname.startsWith(`${subMenu.link}`))
    : false;
  const [subMenu, setSubMenu] = useState<boolean>(subMenuStart);
  const handleSubMenu = () => {
    setSubMenu(!subMenu);
  };

  return (
    <>
      <div className="relative">
        <Link
          href={menu.link}
          className={`flex justify-between items-center text-dark-black dark:text-light-white px-4 hover:bg-gray-500/[.1] dark:hover dark:hover:text-white text-[15px] cursor-pointer ${
            pathname.split("/")[1] === checkPath && "bg-gray-500/[.2]"
          } `}
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
        </Link>
        {menu.subMenu && (
          <div className="h-full">
            <FaChevronDown
              className={`text-[13px] absolute top-4 right-3 ${
                !fullbar && "hidden"
              }`}
              onClick={handleSubMenu}
            />
          </div>
        )}
      </div>
      {(subMenu || !fullbar) && menu.subMenu && (
        <div className={`${fullbar ? "px-4" : "pl-2"}`}>
          {menu.subMenu.map((subMenu) => (
            <Link key={subMenu.id} href={subMenu.link}>
              <div
                className={`${
                  pathname.startsWith(`${subMenu.link}`) &&
                  "bg-gray-500/[.2] border-t border-gray-500/[.1]"
                } px-4 py-[8px] flex gap-3 items-center cursor-pointer text-dark-black dark:text-light-white hover:bg-gray-500/[.1]`}
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
    </>
  );
};

export default SidebarLink;
