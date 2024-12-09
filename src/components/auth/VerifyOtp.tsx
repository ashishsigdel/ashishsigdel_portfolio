"use client";

import React from "react";
import { Spinner } from "@/components/common";
import useVerifyOtp from "./useVerifyOtp";

export default function VerifyOtp() {
  const {
    isLoading,
    otpError,
    otpInputs,
    inputRefs,
    onSubmitOTPVefify,
    validateOtp,
    handleOtpInputChange,
    handleKeyDown,
    resendOTP,
    countdown,
    setCountdown,
  } = useVerifyOtp();

  const handleResendOtp = (event: any) => {
    event.preventDefault();
    if (countdown === null || countdown === 0) {
      resendOTP(event);
      setCountdown(60);
    }
  };

  return (
    <div className="flex flex-col w-full items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full sm:w-fit sm:min-w-[500px] max-w-3xl px-5 border border-gray-300 rounded-lg py-7 bg-white">
        <div className="my-7 text-center">
          <h2 className="font-semibold text-2xl text-gray-700">Verify OTP</h2>
        </div>
        <form onSubmit={onSubmitOTPVefify} className="space-y-6 px-5">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Enter OTP*
            </label>
            <div className="flex justify-between gap-2">
              {otpInputs.map((otpInput, index) => (
                <input
                  key={index}
                  type="text"
                  name="otp"
                  id={`otp-${index}`}
                  className={`w-12 h-12 border rounded-md text-center bg-form-background text-dark-black/80 ${
                    otpError ? "border-red-500" : "border-gray-300"
                  }`}
                  onChange={(e) => handleOtpInputChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  onBlur={validateOtp}
                  value={otpInput}
                  ref={inputRefs[index]}
                  maxLength={1}
                  inputMode="numeric"
                />
              ))}
            </div>
            {otpError && (
              <p className="text-sm text-red-500 mt-1">{otpError}</p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <span
              onClick={handleResendOtp}
              className={`cursor-pointer text-[14px] tracking-[0.02rem] text-gray-500 dark:text-gray-400 ${
                countdown !== null && countdown > 0
                  ? "pointer-events-none opacity-50"
                  : ""
              }`}
            >
              {countdown !== null && countdown > 0
                ? `Resend OTP in ${countdown}s`
                : "Didn't receive OTP? Resend"}
            </span>
            {isLoading ? (
              <Spinner />
            ) : (
              <button
                type="submit"
                className="bg-skin text-white px-4 py-2 rounded-md hover:opacity-95 focus:outline-none focus:ring focus:ring-indigo-300"
              >
                Validate OTP
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
