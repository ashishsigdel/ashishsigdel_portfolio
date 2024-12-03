import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import profile_image from "@/assets/ashish-profile.jpg";
import website from "@/assets/icons/website.png";

export default function ProfileSection() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src={profile_image}
        width={300}
        height={300}
        className="rounded-full w-[100px] h-[100px] object-cover"
        alt="Ashish-sigdel"
      />
      <Link
        href="https://me.ashishsigdel.com.np"
        className="px-4 py-3 flex items-center justify-between bg-gray-200 dark:bg-gray-900 w-full rounded-lg text-dark-black dark:text-light-white font-semibold gap-x-5 font-geist text-[16px border border-black/10 dark:border-white/10 mt-5 md:mt-10 cursor-pointer"
      >
        <div className="flex gap-3 items-center">
          <Image src={website} alt="youtube" className={`w-8 h-8`} />
          ashishsigdel/me
        </div>
        <MdArrowOutward />
      </Link>
    </div>
  );
}
