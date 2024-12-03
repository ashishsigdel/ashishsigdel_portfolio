import React from "react";

export default function Resources() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 p-8 max-w-7xl mx-auto h-[calc(100vh-6rem)] items-center justify-center">
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-4xl md:text-5xl leading-tight font-poppins font-bold text-gray-800 dark:text-white">
          Join the AsProg• <br /> Newsletter
        </h1>
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mt-4 font-geist">
          Subscribe to our newsletter to stay updated with the latest news,
          tutorials, and exclusive content.
        </p>
        <form className="flex flex-col gap-6 mt-10">
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
    </div>
  );
}
