import React from "react";
import "@/styles/background.css";
import { Floating } from "../../utils";
import { FaShare } from "react-icons/fa";
import toast from "react-hot-toast";

export default function Hero({ project }: { project: any }) {
  const handleShare = () => {
    const url = window.location.href; // Get current URL
    navigator.clipboard
      .writeText(url)
      .then(() => {
        toast.success("Link copied to clipboard!");
      })
      .catch(() => {
        toast.error("Failed to copy link.");
      });
  };

  return (
    <div className="h-[calc(40dvh)] mt-10 flex flex-col justify-center text-center px-5 relative">
      <span className="text-sm text-white/60 -mt-10 mb-10 uppercase">
        Project
      </span>
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-poppins">
        {project?.title}
      </h1>
      <div className="flex w-full justify-center mt-10 ">
        <div
          className="bg-black/20 w-10 h-10 rounded-full flex items-center justify-center border border-white/20 hover:scale-105 transition-all duration-500 cursor-pointer"
          onClick={handleShare} // Call the share function on click
        >
          <FaShare className="" />
        </div>
      </div>
    </div>
  );
}
