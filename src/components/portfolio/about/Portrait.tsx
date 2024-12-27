"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import myPic from "@/assets/ashish-profile.jpg";
import { getActive } from "@/services/portfolio/profileService";

interface ProfilePic {
  id: number;
  profileURL: string;
}

export default function Protrait() {
  const [profilePic, setProfilePic] = useState<ProfilePic | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchProfilePic = async () => {
      setLoading(true);
      try {
        const response = await getActive();
        setProfilePic(response.data);
      } catch (error: any) {
        console.log("Error fetching profile picture:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfilePic();
  }, []);
  return (
    <div className="w-full max-w-[18rem] bg-black/50 rounded-ss-md rounded-ee-md backdrop-blur-sm  text-gray-300 border border-white/15 cursor-grab">
      <div className="p-2 border-b border-white/15">
        <span>protrait</span>
      </div>
      <div className=" flex flex-col gap-2">
        <Image
          src={profilePic?.profileURL || myPic}
          alt="My Picture"
          width={400}
          height={400}
          className="w-full aspect-square object-cover"
        />
      </div>
    </div>
  );
}
