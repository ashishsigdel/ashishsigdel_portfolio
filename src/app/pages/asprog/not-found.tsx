"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FaRobot, FaArrowLeft, FaHome } from "react-icons/fa";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-br bg-light-white dark:bg-dark-black w-screen h-screen overflow-hidden relative">
      {/* Main Content */}
      <div className="text-center p-8 rounded-lg bg-white shadow-2xl dark:bg-gray-800 dark:text-gray-200 max-w-md z-10 border border-color">
        <FaRobot className="text-8xl text-indigo-500 mb-4 dark:text-indigo-400 animate-bounce" />
        <h1 className="text-7xl font-bold mb-4 text-gray-800 dark:text-gray-200 animate-pulse">
          404
        </h1>
        <p className="text-2xl mb-8 text-gray-600 dark:text-gray-300">
          Oops! The page you're looking for doesn't exist.
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => router.back()}
            className="px-4 py-2 text-lg font-medium text-white bg-indigo-500 rounded-lg hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition flex items-center"
          >
            <FaArrowLeft className="mr-2" />
            Go Back
          </button>
          <Link
            href="/"
            className="px-4 py-2 text-lg font-medium text-white bg-gray-600 rounded-lg hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 focus:outline-none transition flex items-center"
          >
            <FaHome className="mr-2" />
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
