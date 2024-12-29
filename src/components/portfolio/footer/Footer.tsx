"use client";

import Image from "next/image";
import logo from "@/assets/logo/coding.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuData } from "@/data/portfolioMenu";

export default function Footer() {
  const pathname = usePathname();

  const isHideen = (page: string) => {
    return page === pathname;
  };

  return (
    <div className="mt-32 py-10 bg-black/50 border-t border-color w-full ">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex gap-3 items-center">
            <Image
              src={logo}
              alt="Logo"
              width={26}
              height={26}
              className="invert"
            />
            <p className="text-center font-bold tracking-wider text-2xl">
              Ashish
              <span className="text-portfolio-primary">&lt;Sigdel&gt;</span>
            </p>
          </div>
          <div className="my-5 sm:my-0">
            <ul className="flex flex-col sm:flex-row text-center gap-5">
              {MenuData.map((menu) => (
                <Link
                  key={menu.id}
                  href={menu.link}
                  className={`${
                    isHideen(menu.link) ? "hidden" : ""
                  } hover:text-white/80 text-white/60`}
                >
                  <li>
                    <span className="lowercase">{menu.name}</span>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 text-sm text-white/90 w-full">
          <p className="text-center">
            &copy; Ashish Sigdel 2024 - All Right Reserved!
          </p>
        </div>
      </div>
    </div>
  );
}
