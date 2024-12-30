import React from "react";

export default function ProjectCardSkeleton() {
  return (
    <div className="bg-black/30 border border-white/20 rounded-lg overflow-hidden animate-pulse cursor-pointer lg:w-72">
      <div
        className="relative w-full h-0 bg-white/10"
        style={{ paddingBottom: "56.25%" }}
      />
      <div className="p-4">
        <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>
      </div>
    </div>
  );
}
