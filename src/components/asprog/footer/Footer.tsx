import { LogoSection } from "@/components/asprog/header";
import React from "react";
import { FooterLinks } from "@/components/asprog/footer";
import Link from "next/link";
// import { socialLinks } from "@/types/constant";
import { GoDotFill } from "react-icons/go";

export default function Footer() {
  return (
    <div className="border-t border-white/20 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto h-full">
        <div className="h-full flex flex-col md:flex-row items-center justify-between px-3 py-6">
          <LogoSection />
          <FooterLinks />
        </div>
        <div className="mt-12 pb-6 px-10 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-500">&copy; 2024 asProg.</p>
          <p className="text-sm text-gray-500">
            Developed by:{" "}
            <Link
              href={"https://facebook.com"}
              className="underline font-medium hover:text-gray-700 dark:hover:text-gray-300"
            >
              Ashish Sigdel
            </Link>
          </p>
          <div className="flex gap-3 items-center">
            <Link href={"/asprog/terms"}>
              <p className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 cursor-pointer">
                Terms
              </p>
            </Link>
            <p className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 cursor-pointer">
              <GoDotFill />
            </p>
            <Link href={"/asprog/privacy"}>
              <p className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 cursor-pointer">
                Privacy
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
