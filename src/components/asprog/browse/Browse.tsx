import React from "react";
import { Projects } from "@/components/asprog/browse";

export default function Browse() {
  return (
    <div className="flex items-center justify-center w-full mt-[10%] pb-16">
      <div className="text-center">
        <h3 className="text-[40px] md:text-[50px] font-bold">
          Discover inspiring projects.
        </h3>
        <p className="mt-4 text-gray-700 dark:text-gray-400 font-geist">
          Let&apos;s be creative! Explore innovative ideas and <br /> bring them
          to life.
        </p>
        <div>
          <Projects />
        </div>
      </div>
    </div>
  );
}
