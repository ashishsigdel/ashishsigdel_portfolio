"use client";

import React from "react";
import Image from "next/image";
import crown from "@/assets/icons/crown.svg";
import Link from "next/link";

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => {
      // Calculate the fill percentage for each star
      const starValue = index + 1;
      let fillPercentage = 0;

      if (rating >= starValue) {
        fillPercentage = 100; // Full star
      } else if (rating > index && rating < starValue) {
        // Partial star - calculate exact percentage
        fillPercentage = (rating - index) * 100;
      }

      return (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          className="w-5 h-5"
        >
          <path
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            fill="#C3BABA"
          />

          <defs>
            <clipPath id={`starClip-${index}`}>
              <rect x="0" y="0" width={`${fillPercentage}%`} height="100%" />
            </clipPath>
          </defs>
          <path
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            fill="#FFD700"
            clipPath={`url(#starClip-${index})`}
          />
        </svg>
      );
    });
  };

  return <div className="flex items-center">{renderStars()}</div>;
};

export default function PaidLinkForm({ project }: any) {
  const rating = 4.4;

  return (
    <div className="md:sticky top-52 p-8 z-50 rounded-lg w-full">
      {/* Price Section */}
      <div className="flex flex-col items-start mb-4">
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
          Price:
        </p>
        <div className="flex items-center gap-2">
          <p
            className={`text-2xl text-purple-600 dark:text-purple-400 ${
              project.actualPrice ? "line-through" : ""
            } dark:text-gray-400`}
          >
            ${project.price}
          </p>
          {project.actualPrice && (
            <p className="text-2xl text-purple-600 dark:text-purple-400">
              ${project.actualPrice}
            </p>
          )}
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Best value pricing!
        </p>
      </div>

      <button className="w-full mt-4 px-6 py-[8px] bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 dark:hover:bg-purple-500 transition-all duration-300 font-geist flex gap-2 items-center justify-center">
        <Image src={crown} alt="crown icon" className="w-7 h-7" />
        <p>Get this project</p>
      </button>

      {/* Ratings Section */}
      <div className="space-y-3 mt-5">
        <div className="flex items-center gap-2">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Ratings:
          </p>
          <StarRating rating={rating} />
          <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
            ({rating.toFixed(1)})
          </p>
        </div>
      </div>
    </div>
  );
}
