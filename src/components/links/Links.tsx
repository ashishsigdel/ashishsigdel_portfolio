import Image from "next/image";
import React from "react";
import {
  AsProg,
  ProfileSection,
  SocialLinks,
  Support,
} from "@/components/links";
import cornerImage from "@/assets/links/image.png";

export default function Links() {
  return (
    <div className="flex flex-col w-full max-w-2xl  mx-auto items-center justify-center min-h-screen">
      <div className="shadow-lg rounded-lg shadow-dark-black/20 dark:shadow-light-white/10 w-full relative flex items-center justify-center md:mt-10 mb-10">
        <Image
          src={cornerImage}
          alt="corner"
          className="absolute w-32 h-32 top-0 left-0 rounded-tl-lg"
        />
        <Image
          src={cornerImage}
          alt="corner"
          className="absolute w-32 h-32 top-0 right-0 transform scale-x-[-1] rounded-tl-lg"
        />

        <div className="flex flex-col w-full max-w-[500px] rounded-lg relative">
          <div className="px-5 py-10 ">
            <ProfileSection />
            <SocialLinks />
            <Support />
            <AsProg />
          </div>
        </div>
      </div>
    </div>
  );
}
