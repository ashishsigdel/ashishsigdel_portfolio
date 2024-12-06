"use client";
import { Menu } from "@/types/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const SidebarLink = ({ menu, fullbar }: { menu: Menu; fullbar: boolean }) => {
  const pathname = usePathname();
  let newPathname;
  if (pathname === "/") {
    newPathname = "/dashboard";
  } else {
    newPathname = pathname;
  }

  const checkPath = menu.link.split("/")[1];
  const subMenuStart = menu.subMenu
    ? menu.subMenu.some((subMenu) => newPathname.startsWith(`${subMenu.link}`))
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
          className={`flex justify-between items-center text-dark-black dark:text-light-white px-4 hover:text-black dark:hover:text-white text-[15px] cursor-pointer ${
            newPathname.startsWith(`/${checkPath}`) && "bg-gray-500/[.2]"
          } `}
        >
          <div className="flex gap-3 py-[10px] items-center cursor-pointer">
            {menu.icon && (
              <menu.icon className="text-2xl opacity-60 text-dark-black dark:text-light-white hover:text-black dark:hover:text-white" />
            )}
            {fullbar && (
              <span className="font-semibold overflow-hidden whitespace-nowrap">
                {menu.name}
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
                  newPathname.startsWith(`${subMenu.link}`) &&
                  "bg-gray-500/[.2]"
                } px-4 py-[8px] flex gap-3 items-center cursor-pointer text-dark-black dark:text-light-white hover:text-black dark:hover:text-white`}
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
