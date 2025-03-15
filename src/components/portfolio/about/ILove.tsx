"use client";

import React from "react";

export default function ILove() {
  return (
    <div className="w-full max-w-[18rem] rounded-ss-md rounded-ee-md backdrop-blur-sm  text-gray-300 border border-white/15 cursor-grabbing">
      <div className="p-2 border-b border-white/15">
        <span className="font-geist">i-loves</span>
      </div>
      <div className="p-2 md:p-5 flex flex-col gap-y-2">
        {[
          "Coding",
          "Listening to Music",
          "Exploring",
          "Money",
          "Camera",
          "Watching Movies",
        ].map((item, index) => (
          <p key={index}>
            <span className="text-portfolio-primary mr-1">
              {String(index + 1).padStart(2, "0")}.
            </span>
            <span className={`text-gray-300`}>{item}</span>
          </p>
        ))}
      </div>
    </div>
  );
}
