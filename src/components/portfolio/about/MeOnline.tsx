"use client";

import Link from "next/link";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { socialLinks } from "@/data/socialmedia";

export default function MeOnline() {
  return (
    <div className="w-full max-w-[15rem] rounded-ss-md rounded-ee-md backdrop-blur-sm text-gray-300 border border-white/15 h-fit cursor-grabbing">
      <div className="p-2 border-b border-white/15">
        <span className="font-geist">me-online</span>
      </div>
      <div className="p-2 md:p-5 flex flex-col gap-2">
        {Object.entries(socialLinks).map(([key, value], index) => (
          <div key={key}>
            <Link
              href={value.link}
              target="_blank"
              className="flex items-center"
            >
              <span className="text-portfolio-primary mr-1">
                {String(index + 1).padStart(2, "0")}.
              </span>
              <span className={`text-gray-300 cursor-pointer`}>
                {value.name}
              </span>
              <MdArrowOutward className="ml-1" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
