"use client";

import Image from "next/image";
import Link from "next/link";
import { LuArrowLeftToLine, LuArrowRightToLine } from "react-icons/lu";
import { useState } from "react";
import { SidebarLink } from "@/components/admin/sidebar";
import logosmall from "@/assets/logo-small.svg";
import logofull from "@/assets/logo.svg";
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
          <Link href="/dashboard" className="h-[25px] overflow-hidden">
            {openFullSidebar ? (
              <Image src={logofull} alt="ashish" width={150} height={30} />
            ) : (
              <Image src={logosmall} alt="ashish" width={30} height={30} />
            )}
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
        <div className="flex flex-col my-4">
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
