"use client";
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useContact from "./useContact";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoReload } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";

export default function ContactForm() {
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

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    tap: { scale: 0.9 },
  };

  const formContainerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
  };

  const successVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        type: "spring",
        stiffness: 200,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
      },
    },
  };

  const formElementVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await new Promise((resolve) => setTimeout(resolve, 300));
    onSubmit(e);
  };

  const handleReload = () => {
    setResponseMessage(undefined);
  };

  const ReloadComponent = () => (
    <motion.div
      className="m-6 px-3 py-8 bg-portfolio-primary/10 border border-portfolio-primary rounded-md flex flex-col items-center justify-center"
      variants={successVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="flex gap-5 items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2,
          }}
        >
          <FaRegCircleCheck className="text-blue-400" />
        </motion.div>
        <motion.span
          className="text-blue-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          Thank you for your message! I will reply you soon!
        </motion.span>
      </div>
      <motion.button
        onClick={handleReload}
        className="mt-8 flex gap-3 items-center px-4 py-3 border border-portfolio-primary rounded-md"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.3 }}
      >
        <IoReload className="text-blue-400" />
        <span className="text-blue-400">Reload Form</span>
      </motion.button>
    </motion.div>
  );

  return (
    <div className="max-w-3xl mx-auto my-16 px-3">
      <motion.div
        className="w-full my-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={formContainerVariants}
      >
        <div className="w-full rounded-ss-md rounded-ee-md backdrop-blur-sm text-gray-300 border border-white/15">
          <motion.div
            className="p-2 border-b border-white/15"
            variants={formElementVariants}
          >
            <span className="font-geist">write-message</span>
          </motion.div>

          <AnimatePresence mode="wait">
            {responseMessage ? (
              <ReloadComponent key="success" />
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="p-3 md:p-5"
                variants={formContainerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {/* Full name field */}
                <motion.div className="mb-3" variants={formElementVariants}>
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
                      className={`w-full py-3.5 px-3 bg-transparent text-[14px] focus:outline-none border rounded-md ${
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
                </motion.div>

                {/* Email field */}
                <motion.div className="mb-3" variants={formElementVariants}>
                  <span className="font-geist mb-1 text-gray-300">email*</span>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your Email"
                      className={`w-full py-3.5 px-3 bg-transparent text-[14px] focus:outline-none border rounded-md ${
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
                </motion.div>

                {/* Company field */}
                <motion.div className="mb-3" variants={formElementVariants}>
                  <span className="font-geist mb-1 text-gray-300">company</span>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="company"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Company Name"
                      className="w-full py-3.5 px-3 bg-transparent text-[14px] focus:outline-none border border-white/20 rounded-md"
                    />
                  </div>
                </motion.div>

                {/* Message field */}
                <motion.div className="mb-3" variants={formElementVariants}>
                  <span className="font-geist mb-1 text-gray-300">message</span>
                  <div className="mt-1">
                    <textarea
                      name="message"
                      value={message}
                      rows={4}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Write Message..."
                      className={`w-full py-3.5 px-3 bg-transparent text-[14px] focus:outline-none border rounded-md ${
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
                </motion.div>

                {/* Agreement checkbox */}
                <motion.div className="mb-3" variants={formElementVariants}>
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
                </motion.div>

                {/* Error messages */}
                <motion.div className="h-12" variants={formElementVariants}>
                  {errorResponseMessage && (
                    <span className="text-danger text-[12px] font-normal tracking-[0] mt-1 italic leading-[1] w-full font-geist">
                      {errorResponseMessage}
                    </span>
                  )}
                </motion.div>

                {/* Submit button */}
                <motion.div
                  className="w-full flex justify-center"
                  variants={formElementVariants}
                >
                  <motion.button
                    variants={buttonVariants}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                    type="submit"
                    className="px-6 py-2.5 rounded-full text-sm font-medium bg-portfolio-primary/20 border border-blue-500/30 transition-all duration-300 relative overflow-hidden group z-10 flex items-center gap-2"
                    disabled={loading}
                  >
                    <motion.span
                      className="relative z-10"
                      animate={loading ? { opacity: [1, 0.7, 1] } : {}}
                      transition={{
                        repeat: loading ? Infinity : 0,
                        duration: 1.5,
                      }}
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </motion.span>
                    <motion.div
                      whileHover={{
                        x: [0, 5, 0],
                        transition: { duration: 0.5, repeat: Infinity },
                      }}
                      whileTap={{
                        x: 5,
                        opacity: 0,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <IoIosSend size={18} />
                    </motion.div>

                    {/* Button shine effect */}
                    <motion.span
                      className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      style={{
                        top: 0,
                        left: "-100%",
                        width: "100%",
                        height: "100%",
                      }}
                      animate={
                        loading
                          ? {
                              left: ["100%", "-100%"],
                              transition: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 1.5,
                                ease: "linear",
                              },
                            }
                          : {}
                      }
                    />
                  </motion.button>
                </motion.div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
