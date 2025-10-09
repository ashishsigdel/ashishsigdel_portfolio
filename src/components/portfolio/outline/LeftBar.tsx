"use client";
import { MenuData } from "@/data/portfolioMenu";
import useGetActive from "./useGetActive";

export default function LeftBar() {
  const { isActive, scrollToSection } = useGetActive();

  return (
    <ul className="hidden md:flex flex-col gap-4 justify-center items-center w-[40px] h-full border-r border-white/20 bg-black/30">
      {MenuData.map((menu) => (
        <li key={menu.id}>
          <div
            onClick={() => scrollToSection(menu.link)}
            className={`group relative cursor-pointer hover:text-primary hover:text-white/90 ${
              isActive(menu.link) ? "text-white/90" : "text-white/40"
            }`}
          >
            <menu.icon className="text-xl" />
            <span className="absolute left-12 top-0 opacity-0 group-hover:opacity-100 group-hover:left-8 group-hover:top-0 bg-white text-black text-xs rounded py-1 px-2 transition-all duration-300 whitespace-nowrap z-[999]">
              {menu.name}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}
