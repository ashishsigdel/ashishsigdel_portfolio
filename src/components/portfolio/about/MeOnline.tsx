"use client";

import Link from "next/link";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

// Define the interface
interface SocialLinks {
  linkedin: string;
  instagram: string;
  github: string;
  facebook: string;
  x: string;
}

// Export the socialLinks object
const socialLinks: SocialLinks = {
  linkedin: "https://www.linkedin.com/in/aasisigdel/",
  instagram: "https://www.instagram.com/aasissigdel",
  github: "https://www.github.com/ashishsigdel",
  facebook: "https://www.facebook.com/ashish.sgdl.9/",
  x: "https://www.x.com/",
};

export default function MeOnline() {
  return (
    <div className="w-full max-w-[15rem] bg-black/50 rounded-ss-md rounded-ee-md backdrop-blur-sm text-gray-300 border border-white/15 h-fit cursor-grab">
      <div className="p-2 border-b border-white/15">
        <span>me-online</span>
      </div>
      <div className="p-3 md:p-5 flex flex-col gap-2">
        {Object.entries(socialLinks).map(([key, value], index) => (
          <div key={key}>
            <Link
              href={value}
              target="_blank"
              className="flex items-center gap-2"
            >
              <span className="text-gray-500 mr-1">
                {String(index + 1).padStart(2, "0")}.
              </span>
              <span className={`text-gray-300 cursor-pointer`}>{key}</span>
              <MdArrowOutward />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
