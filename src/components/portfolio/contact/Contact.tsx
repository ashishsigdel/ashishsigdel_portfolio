"use client";
import React from "react";
import { motion } from "framer-motion";
import useContact from "./useContact";
import { MdArrowForward, MdMail } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoReload } from "react-icons/io5";
import { Spinner } from "@/components/common";

export default function Contact() {
  const {
    fullName,
    setFullName,
    email,
    setEmail,
    company,
    setCompany,
    message,
    setMessage,
    aggree,
    setAggree,
    loading,
    validateName,
    validateEmail,
    validateMessage,
    validateCheckbox,
    nameError,
    emailError,
    messageError,
    checkBoxError,
    responseMessage,
    onSubmit,
    errorResponseMessage,
    setResponseMessage,
  } = useContact();
  return (
    <div className="max-w-3xl mx-auto my-16 px-3">
      <div className="w-full text-center my-10 autoShow">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
          Contact Me
        </h1>
      </div>
      <div className="w-full my-10">
        <motion.div
          className="h-[9rem] bg-gradient-to-t from-white/20 to-transparent w-[2px] mx-auto"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <div className="w-full rounded-ss-md rounded-ee-md backdrop-blur-sm  text-gray-300 border border-white/15 ">
          <div className="p-2 border-b border-white/15">
            <span className="font-geist">write-message</span>
          </div>
          {responseMessage ? (
            <div className="m-6 px-3 py-8 bg-portfolio-primary/10 border border-portfolio-primary rounded-md flex flex-col items-center justify-center">
              <div className="flex gap-5 items-center">
                <FaRegCircleCheck className="text-blue-400" />
                <span className="text-blue-400">
                  Thank you for your message! I will reply you soon!
                </span>
              </div>
              <button
                onClick={() => setResponseMessage(undefined)}
                className="mt-8 flex gap-3 items-center px-4 py-3 border border-portfolio-primary rounded-md"
              >
                <IoReload className="text-blue-400" />
                <span className="text-blue-400">Reload Form</span>
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="p-3 md:p-5">
              <div className="mb-5">
                <span className="font-geist mb-1 text-gray-300">
                  full-name*
                </span>
                <div className="mt-1">
                  <input
                    type="text"
                    name="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Your Name"
                    className={`w-full py-4 px-3 bg-transparent text-[14px] focus:outline-none border rounded-md ${
                      nameError ? "border-danger/80" : "border-white/20"
                    }`}
                    onBlur={validateName}
                  />
                  {nameError && (
                    <span className="text-danger text-[12px] font-normal tracking-[0] mt-1 italic leading-[1] w-full font-geist">
                      Full name is required
                    </span>
                  )}
                </div>
              </div>
              <div className="mb-5">
                <span className="font-geist mb-1 text-gray-300">email*</span>
                <div className="mt-1">
                  <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    className={`w-full py-4 px-3 bg-transparent text-[14px] focus:outline-none border rounded-md ${
                      emailError ? "border-danger/80" : "border-white/20"
                    }`}
                    onBlur={validateEmail}
                  />
                  {emailError && (
                    <span className="text-danger text-[12px] font-normal tracking-[0] mt-1 italic leading-[1] w-full font-geist">
                      Email is required
                    </span>
                  )}
                </div>
              </div>
              <div className="mb-5">
                <span className="font-geist mb-1 text-gray-300">company</span>
                <div className="mt-1">
                  <input
                    type="text"
                    name="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Company Name"
                    className="w-full py-4 px-3 bg-transparent text-[14px] focus:outline-none border border-white/20 rounded-md"
                  />
                </div>
              </div>
              <div className="mb-5">
                <span className="font-geist mb-1 text-gray-300">message</span>
                <div className="mt-1">
                  <textarea
                    name="message"
                    value={message}
                    rows={6}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write Message..."
                    className={`w-full py-4 px-3 bg-transparent text-[14px] focus:outline-none border rounded-md ${
                      messageError ? "border-danger/80" : "border-white/20"
                    }`}
                    onBlur={validateMessage}
                  />
                  {messageError && (
                    <span className="text-danger text-[12px] font-normal tracking-[0] mt-1 italic leading-[1] w-full font-geist">
                      Message is required
                    </span>
                  )}
                </div>
              </div>
              <div className="mb-5 ">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="agree"
                    checked={aggree}
                    onChange={(e) => setAggree(e.target.checked)}
                    className="w-5 h-5 cursor-pointer"
                    onBlur={validateCheckbox}
                  />
                  <label
                    htmlFor="agree"
                    className="text-[14px] cursor-pointer select-none text-gray-300"
                  >
                    I agree to the terms and conditions
                  </label>
                </div>
                {checkBoxError && (
                  <span className="text-danger text-[12px] font-normal tracking-[0] mt-1 italic leading-[1] w-full font-geist ml-8">
                    {checkBoxError}
                  </span>
                )}
              </div>
              <div className="h-12">
                {errorResponseMessage && (
                  <span className="text-danger text-[12px] font-normal tracking-[0] mt-1 italic leading-[1] w-full font-geist">
                    {errorResponseMessage}
                  </span>
                )}
              </div>
              <div className="w-full flex justify-center">
                <button
                  type="submit"
                  className="cursor-pointer py-3 px-4 border border-color hover:border-portfolio-primary/80 transition-all duration-500 w-fit rounded-md font-geist group "
                >
                  <span className="relative z-10 flex gap-4 items-center">
                    {loading ? "loading..." : "send-message"}
                    {loading ? (
                      <Spinner />
                    ) : (
                      <MdMail className="group-hover:text-portfolio-primary/80 transition-all duration-500" />
                    )}
                  </span>
                </button>
              </div>
            </form>
          )}
        </div>
        <motion.div
          className="h-[9rem] bg-gradient-to-b from-white/20 to-transparent w-[2px] mx-auto mb-5"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        />
      </div>
    </div>
  );
}
