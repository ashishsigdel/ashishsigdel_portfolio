"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import useContact from "./useContact";
import { CgDanger } from "react-icons/cg";
import SuccessMessage from "./SuccessMessage";
import SubmitButton from "./SubmitButton";

// Animation variants centralized
const animations = {
  container: {
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
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  },
  success: {
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
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
  },
  element: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  },
};

const ErrorMessage = ({ message }: { message: string }) => (
  <span className="text-danger text-[11px] font-normal tracking-[0] mt-1 leading-[1] w-full flex items-center gap-1">
    <CgDanger size={12} />
    {message}
  </span>
);

// Form field component
const FormField = ({
  label,
  error,
  children,
  className = "",
}: {
  label?: string;
  error?: string | null;
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div className={`mb-3 ${className}`} variants={animations.element}>
    <span className="font-geist mb-1 text-gray-300">{label}</span>
    <div className="mt-1">
      {children}
      {error && <ErrorMessage message={error} />}
    </div>
  </motion.div>
);

// Input field component
const InputField = ({
  name,
  value,
  onChange,
  placeholder,
  error,
  onBlur,
}: {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  error?: string | null;
  onBlur?: () => void;
}) => (
  <input
    type="text"
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={`w-full py-2.5 md:py-3 px-3 bg-transparent text-[14px] focus:outline-none border rounded-md ${
      error ? "border-danger/80" : "border-white/20"
    }`}
    onBlur={onBlur}
  />
);

// Main contact form component
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await new Promise((resolve) => setTimeout(resolve, 300));
    onSubmit(e);
  };

  return (
    <div className="max-w-3xl mx-auto my-16">
      <motion.div
        className="w-full my-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={animations.container}
      >
        <div className="w-full rounded-ss-md rounded-ee-md backdrop-blur-sm text-gray-300 border border-white/15">
          <motion.div
            className="p-2 border-b border-white/15"
            variants={animations.element}
          >
            <span className="font-geist">write-message</span>
          </motion.div>

          <AnimatePresence mode="wait">
            {responseMessage ? (
              <SuccessMessage
                key="success"
                onReload={() => setResponseMessage(undefined)}
              />
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="p-3 md:p-5"
                variants={animations.container}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <FormField label="full-name*" error={nameError}>
                  <InputField
                    name="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Your Name"
                    error={nameError}
                    onBlur={validateName}
                  />
                </FormField>

                <FormField label="email*" error={emailError}>
                  <InputField
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    error={emailError}
                    onBlur={validateEmail}
                  />
                </FormField>

                <FormField label="company">
                  <InputField
                    name="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Company Name"
                  />
                </FormField>

                <FormField label="message" error={messageError}>
                  <textarea
                    name="message"
                    value={message}
                    rows={4}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write Message..."
                    className={`w-full py-2.5 md:py-3 px-3 bg-transparent text-[14px] focus:outline-none border rounded-md ${
                      messageError ? "border-danger/80" : "border-white/20"
                    }`}
                    onBlur={validateMessage}
                  />
                </FormField>

                <FormField className="">
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
                    <span className="text-danger text-[11px] font-normal tracking-[0] mt-1 leading-[1] w-full flex items-center gap-1 ml-8">
                      <CgDanger size={12} />
                      {checkBoxError}
                    </span>
                  )}
                </FormField>

                {errorResponseMessage && (
                  <motion.div variants={animations.element}>
                    <ErrorMessage message={errorResponseMessage} />
                  </motion.div>
                )}

                <motion.div
                  className="w-full flex justify-center mb-5 mt-7"
                  variants={animations.element}
                >
                  <SubmitButton loading={loading} />
                </motion.div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
