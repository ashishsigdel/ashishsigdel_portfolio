"use client";
import {
  AboutMe,
  ILove,
  KeyPoints,
  MeOnline,
  Portrait,
} from "@/components/portfolio/about";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { getActive } from "@/services/portfolio/profileService";
import useProfile from "./useProfile";

export default function About() {
  const constrainRef = useRef(null);

  const { profile, fetchProfile } = useProfile();

  useEffect(() => {
    fetchProfile();
  }, []);
  return (
    <div className="max-w-7xl mx-auto my-16 px-3">
      <div className="w-full text-center my-10 autoShow">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
          About Me
        </h1>
      </div>
      <div
        ref={constrainRef}
        className="relative flex flex-wrap space-y-4 space-x-3 justify-center lg:justify-normal"
      >
        <motion.div
          drag
          dragConstraints={constrainRef}
          dragElastic={0.2} // Lower elasticity for slower drag
          dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }} // Adjust damping for control
          className="lg:relative left-[9rem]"
        >
          <AboutMe />
        </motion.div>
        <motion.div
          drag
          dragConstraints={constrainRef}
          dragElastic={0.2}
          dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
          className="lg:relative top-[10rem] left-[5rem]"
        >
          <Portrait profile={profile} />
        </motion.div>
        <motion.div
          drag
          dragConstraints={constrainRef}
          dragElastic={0.2}
          dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
          className="bottom-[4rem] left-[10rem] lg:relative"
        >
          <MeOnline />
        </motion.div>
        <motion.div
          drag
          dragConstraints={constrainRef}
          dragElastic={0.2}
          dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
          className="lg:relative left-[18rem] bottom-[2rem]"
        >
          <ILove />
        </motion.div>
      </div>
    </div>
  );
}
