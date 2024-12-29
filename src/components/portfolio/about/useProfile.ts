"use client";
import { getActive } from "@/services/portfolio/profileService";
import { ProfileType } from "@/types/profile";
import React, { useState } from "react";

export default function useProfile() {
  const [profile, setProfile] = useState<ProfileType | null>(null);

  const fetchProfile = async () => {
    try {
      const response = await getActive();
      setProfile(response.data);
    } catch (error) {
      if (process.env.NODE_ENV === "development") {
        console.log(error);
      }
    }
  };

  return {
    fetchProfile,
    profile,
  };
}
