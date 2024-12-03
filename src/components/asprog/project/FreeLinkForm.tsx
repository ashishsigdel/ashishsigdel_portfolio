import Link from "next/link";
import React from "react";

export default function FreeLinkForm() {
  return (
    <div className="md:sticky top-32 bg-white dark:bg-gray-800 p-8 bg-opacity-50 z-50 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center dark:text-gray-100 mb-3">
        Get Free Access!!!
      </h1>
      <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-5 font-geist">
        Fill out the form to get access!
      </p>
      <form className="flex flex-col gap-6">
        <div>
          <label className="block text-gray-800 dark:text-gray-300 font-medium mb-[6px]">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            placeholder="Your full name"
            className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-gray-800 dark:text-gray-300 font-medium mb-[6px]">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full mt-4 px-6 py-[8px] bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 dark:hover:bg-purple-500 transition-all duration-300 font-geist"
        >
          Send link to email
        </button>
        {/* Privacy Policy Checkbox */}
        <div className="flex items-center gap-2">
          <label
            htmlFor="privacy-policy"
            className="text-sm text-gray-600 dark:text-gray-400 font-geist"
          >
            <span className="font-semibold text-gray-700 dark:text-gray-300 ">
              Disclaimer
            </span>
            : By entering your email, you accept our{" "}
            <a
              href="/privacy-policy"
              className="text-purple-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy & Policy
            </a>
            .
          </label>
        </div>
      </form>
    </div>
  );
}
