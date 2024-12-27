"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoHome } from "react-icons/io5";
import { RiApps2Fill, RiContactsBook3Fill } from "react-icons/ri";

export default function LeftBar() {
  const pathname = usePathname();

  const isActive = (page: string) => {
    return page === pathname;
  };

  return (
    <div className="hidden md:flex flex-col gap-4 justify-center items-center w-[40px] h-full border-r border-white/20 bg-black/30">
      <Link
        href="/"
        className={`group relative cursor-pointer hover:text-primary ${
          isActive("/") ? "text-white/90" : "text-white/40"
        }`}
      >
        <IoHome />
        <span className="absolute left-12 top-0 opacity-0 group-hover:opacity-100 group-hover:left-8 group-hover:top-0 bg-white text-black text-xs rounded py-1 px-2 transition-all duration-300 whitespace-nowrap z-[999]">
          Home
        </span>
      </Link>

      <Link
        href="/portfolio"
        className={`group relative cursor-pointer hover:text-primary ${
          isActive("/portfolio") ? "text-white/90" : "text-white/40"
        }`}
      >
        {" "}
        <RiApps2Fill />
        <span className="absolute left-12 top-0 opacity-0 group-hover:opacity-100 group-hover:left-8 group-hover:top-0 bg-white text-black text-xs rounded py-1 px-2 transition-all duration-300 whitespace-nowrap z-[999]">
          My Portfolio
        </span>
      </Link>

      <Link
        href="/contact"
        className={`group relative cursor-pointer hover:text-primary ${
          isActive("/contact") ? "text-white/90" : "text-white/40"
        }`}
      >
        {" "}
        <RiContactsBook3Fill />
        <span className="absolute left-12 top-0 opacity-0 group-hover:opacity-100 group-hover:left-8 group-hover:top-0 bg-white text-black text-xs rounded py-1 px-2 transition-all duration-300 whitespace-nowrap z-[999]">
          Contact Me
        </span>
      </Link>
    </div>
  );
}
