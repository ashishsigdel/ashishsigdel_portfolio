"use client";

import Link from "next/link";
import { LuArrowLeftToLine, LuArrowRightToLine } from "react-icons/lu";
import { useState } from "react";
import { SidebarLink } from "@/components/admin/sidebar";
import { MenuData } from "@/data/menudata";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function Sidebar() {
  const [openFullSidebar, setOpenFullSidebar] = useState<boolean>(true);
  const handleOpenfullSidebar = () => {
    setOpenFullSidebar(!openFullSidebar);
  };
  const newMessageCount = useSelector(
    (state: RootState) => state.messageCount.count
  );

  return (
    <div
      className={`sidebar sticky top-0 z-[999] bg-white dark:bg-black min-h-screen ${
        openFullSidebar ? "sidebar-expanded" : "sidebar-collapsed"
      } border-r border-color`}
    >
      <div className="border-b border-dashed border-color w-full h-20 hidden md:flex items-center">
        <div className="pl-6 w-full overflow-hidden">
          <Link href="#" className="h-[25px] overflow-hidden relative">
            <div
              className={`transition-all duration-300 ease-in-out ${
                openFullSidebar ? "opacity-100 w-auto" : "opacity-0 w-0"
              } absolute`}
            >
              <span className="font-bold text-gray-500 text-xl">Dashboard</span>
            </div>
            <div
              className={`transition-all duration-300 ease-in-out ${
                openFullSidebar ? "opacity-0 w-0" : "opacity-100 w-auto"
              }`}
            >
              <span className="font-bold text-gray-500 text-xl">D</span>
            </div>
          </Link>
        </div>
        <div
          onClick={handleOpenfullSidebar}
          className="p-1.5 bg-white w-fit text-gray-400 rounded-md -right-3 relative shadow-md cursor-pointer "
        >
          {openFullSidebar ? <LuArrowLeftToLine /> : <LuArrowRightToLine />}
        </div>
      </div>

      <div className="my-6 px-3">
        <div className="flex flex-col my-5">
          {MenuData.map((menu) => {
            return (
              <SidebarLink
                key={menu.id}
                menu={menu}
                fullbar={openFullSidebar}
                newMessage={newMessageCount}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
