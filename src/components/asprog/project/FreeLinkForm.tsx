import Link from "next/link";
import React from "react";
import useProject from "./useProject";

export default function FreeLinkForm() {
  const {
    formData,
    handleChange,
    getFreeLink,
    fullNameError,
    emailError,
    validateEmail,
    validateFullName,
    loading,
  } = useProject();
  return (
    <div className="md:sticky top-32 p-8 bg-opacity-50 z-50 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center dark:text-gray-100 mb-3">
        Get Free Access!!!
      </h1>
      <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-5 font-geist">
        Fill out the form to get access!
      </p>
      <form onSubmit={getFreeLink} className="flex flex-col gap-6">
        <div>
          <label className="block text-gray-800 dark:text-gray-300 font-medium mb-[6px]">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            onChange={handleChange}
            value={formData.fullName}
            placeholder="Your full name"
            className={`w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border ${
              fullNameError
                ? "border-danger"
                : "border-gray-300 dark:border-gray-700"
            } dark:border-gray-700 rounded-md text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500`}
            onBlur={validateFullName}
          />
          {fullNameError && (
            <span className="text-danger text-[12px] font-normal tracking-[0] mt-1 italic leading-[1] w-full">
              FullName is required
            </span>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-gray-800 dark:text-gray-300 font-medium mb-[6px]">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            placeholder="Your email address"
            className={`w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border ${
              emailError
                ? "border-danger"
                : "border-gray-300 dark:border-gray-700"
            } dark:border-gray-700 rounded-md text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple `}
            onBlur={validateEmail}
          />
          {emailError && (
            <span className="text-danger text-[12px] font-normal tracking-[0] mt-1 italic leading-[1] w-full">
              Email is required
            </span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full mt-4 px-6 py-[8px] bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 dark:hover:bg-purple-500 transition-all duration-300 font-geist"
        >
          {loading ? "Sending..." : "Send link to email"}
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
