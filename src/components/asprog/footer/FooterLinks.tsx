import Link from "next/link";
import React from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function FooterLinks() {
  return (
    <div className="flex flex-col md:flex-row gap-5 md:gap-10 items-center mr-4 text-gray-700 dark:text-gray-400 mt-10 md:mt-0">
      <div className="flex items-center gap-5 md:gap-10">
        <Link href={"/about"}>
          <p className="font-semibold">About</p>
        </Link>
        <Link href={"/faq"}>
          <p className="font-semibold">FAQ</p>
        </Link>
        <Link href={"https://buymeacoffee.com/ashishsigdel"}>
          <p className="font-semibold">Donate</p>
        </Link>
      </div>
      <div className="flex gap-3 items-center">
        <Link href={""} target="__blank">
          <FaXTwitter size={18} className="text-black dark:text-white" />
        </Link>
        <Link href={"https://www.youtube.com/@as-prog"} target="__blank">
          <FaYoutube size={24} className="text-black dark:text-white" />
        </Link>
        <Link href={""} target="__blank">
          <FaInstagram size={20} className="text-black dark:text-white" />
        </Link>
      </div>
    </div>
  );
}
