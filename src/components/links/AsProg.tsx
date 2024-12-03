"use client";
import { asProgLinks } from "@/data/socialmedia";
import { MdArrowOutward } from "react-icons/md";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function AsProg() {
  return (
    <div className="mt-7 w-full">
      <p className="font-geist my-3">join asprog community :</p>
      <div className="space-y-3">
        {asProgLinks.map((social) => {
          return (
            <Link
              key={social.name}
              href={social.link}
              className="px-4 py-3 flex items-center justify-between bg-gray-200 dark:bg-gray-900 w-full rounded-lg text-dark-black dark:text-light-white font-semibold gap-x-5 font-geist text-[16px border border-black/10 dark:border-white/10 cursor-pointer"
            >
              <div className="flex gap-3 items-center">
                {social.icon && (
                  <Image
                    src={social.icon}
                    alt="youtube"
                    className={`w-8 h-8 ${
                      social.icon.src.split("/").pop()?.split(".")[0] ===
                      "github"
                        ? "invert dark:invert-0"
                        : ""
                    }`}
                  />
                )}
                {social.name}
              </div>
              <MdArrowOutward />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
