"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import myPic from "@/assets/ashish-profile.jpg";
import { ProfileType } from "@/types/profile";

export default function Protrait({ profile }: { profile: ProfileType | null }) {
  return (
    <div className="w-full max-w-[18rem] bg-black/50 rounded-ss-md rounded-ee-md backdrop-blur-sm  text-gray-300 border border-white/15 cursor-grab">
      <div className="p-2 border-b border-white/15">
        <span>protrait</span>
      </div>
      <div className=" flex flex-col gap-2">
        <Image
          src={profile?.profileURL || myPic}
          alt="My Picture"
          width={400}
          height={400}
          className="w-full aspect-square object-cover"
        />
      </div>
    </div>
  );
}
