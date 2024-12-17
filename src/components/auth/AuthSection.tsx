"use client";
import React from "react";
import { ButtonLoader } from "@/components/common";
import Link from "next/link";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import Image from "next/image";
import profilePic from "@/assets/ashish-profile.jpg";
import useLogin from "./useLogin";

export default function AuthSection() {
  const {
    username,
    password,
    isLoading,
    showPassword,
    usernameError,
    passwordError,
    handleChange,
    togglePasswordVisibility,
    validateUsername,
    validatePassword,
    onSubmit,
    redirectIfAuthenticate,
  } = useLogin();

  redirectIfAuthenticate;

  return (
    <div className="flex flex-col w-full items-center justify-center min-h-screen bg-light-white">
      <div className="w-full sm:w-fit sm:min-w-[500px] max-w-3xl px-5 border border-color rounded-lg py-7 bg-white">
        <div className="my-7 text-center">
          <h2 className="font-semibold text-[26px] leading-5 text-gray-700 text-center mb-8">
            Login Auth
          </h2>
        </div>
        <div>
          <form method="POST" onSubmit={onSubmit}>
            <div className="flex flex-col gap-x-2 mb-4">
              <label className="text-sm text-dark-black/80 font-normal">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={username}
                onChange={handleChange}
                className={`w-full py-[10px] px-5 items-center rounded-lg bg-form-background  text-gray-800 focus:outline-none border-[1px] ${
                  usernameError ? "border-danger" : "border-color"
                }`}
                placeholder="Type username"
                onBlur={validateUsername}
              />
              {usernameError && (
                <span className="text-danger text-[12px] font-normal tracking-[0] mt-1 italic leading-[1] w-full">
                  Username is required
                </span>
              )}
            </div>
            <div className="flex flex-col gap-x-2 mb-4">
              <label className="text-sm text-dark-black/80 font-normal">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={password ?? ""}
                onChange={handleChange}
                className={`w-full py-[10px] px-5 items-center rounded-lg bg-form-background  text-gray-800 focus:outline-none border-[1px] ${
                  passwordError ? "border-danger" : "border-color"
                }`}
                placeholder="Type username"
                onBlur={validatePassword}
              />
              <div className="absolute inset-y-0 right-0 top-0 pr-3 flex justify-center items-center text-sm h-full">
                <button
                  type="button"
                  className="text-gray-500 hover:text-gray-700"
                  onClick={togglePasswordVisibility}
                >
                  <span className="sr-only">Show password</span>
                  {showPassword ? (
                    <BsEye
                      className={`${passwordError ? "text-danger" : ""}`}
                    />
                  ) : (
                    <BsEyeSlash
                      className={`${passwordError ? "text-danger" : ""}`}
                    />
                  )}
                </button>
              </div>
              {passwordError && (
                <span className="text-danger text-[12px] font-normal tracking-[0] mt-1 italic leading-[1] w-full">
                  Password is required
                </span>
              )}
            </div>

            <div className="mb-6 w-full text-center">
              {isLoading ? (
                <ButtonLoader />
              ) : (
                <button className="bg-skin w-full py-2.5 rounded-lg text-white font-semibold">
                  Sign In
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
