"use client";
import { ButtonLoader, Spinner } from "@/components/common";
import { changePassword } from "@/services/admin/userServices";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function Security({ user, toggle2FAuth, toggling }: any) {
  const [oldPassword, setOldPassword] = useState("");
  const [oldPasswordError, setOldPasswordError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [loading, setLoading] = useState(false);

  const validateOld = () => {
    if (!oldPassword) {
      setOldPasswordError("Old password is required.");
    } else {
      setOldPasswordError("");
    }
  };
  const validatePass = () => {
    if (!password) {
      setPasswordError("New password is required.");
    } else {
      setPasswordError("");
    }
  };
  const validateConf = () => {
    if (!confirmPassword) {
      setConfirmPasswordError("Confirm Password is required.");
    } else {
      setConfirmPasswordError("");
    }
  };

  const handlePasswordChange = async (e: any) => {
    e.preventDefault();
    validateOld();
    validatePass();
    validateConf();
    if (
      !oldPasswordError &&
      !passwordError &&
      !confirmPasswordError &&
      oldPassword &&
      password &&
      confirmPassword
    ) {
      try {
        setLoading(true);
        const response = await changePassword(
          oldPassword,
          password,
          confirmPassword
        );
        toast.success("Password changed successfully!");
        setOldPassword("");
        setPassword("");
        setConfirmPassword("");
      } catch (error: any) {
        toast.error(error.response.data.message || "Something went wrong!");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="mb-[15px] rounded-[5px] border-[1px] border-solid border-color p-[15px] bg-white dark:bg-black py-8">
      <div className="w-full px-4 sm:px-6 md:px-8 border-b-[1px] border-color pb-4 mb-8">
        <h3 className="font-semibold text-[17.5px] leading-5 text-gray-700 dark:text-gray-300 uppercase">
          Account Settings
        </h3>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-6 lg:px-6">
        {/* Change Password Section */}
        <form onSubmit={handlePasswordChange} className="flex-1 flex flex-col">
          <h4 className="font-medium text-[16px] text-gray-700 dark:text-gray-300 mb-4">
            Change Password
          </h4>
          <div className="flex flex-col gap-x-2 mb-4">
            <label className="text-sm text-dark-black dark:text-light-white font-normal">
              Current Password
            </label>
            <input
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              className={`w-full py-[10px] px-5 items-center rounded-lg bg-form-background dark:bg-dark-form-background focus:bg-form-background-focus focus:dark:bg-dark-form-background-focus text-form-color dark:text-dark-form-color focus:outline-none border-[1px] border-color`}
              placeholder="Current Password"
              onBlur={validateOld}
            />
            {oldPasswordError && (
              <span className="text-danger text-[12px] font-normal tracking-[0] mt-1 italic leading-[1] w-full">
                {oldPasswordError}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-x-2 mb-4">
            <label className="text-sm text-dark-black dark:text-light-white font-normal">
              New Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full py-[10px] px-5 items-center rounded-lg bg-form-background dark:bg-dark-form-background focus:bg-form-background-focus focus:dark:bg-dark-form-background-focus text-form-color dark:text-dark-form-color focus:outline-none border-[1px] border-color`}
              placeholder="New Password"
              onBlur={validatePass}
            />
            {passwordError && (
              <span className="text-danger text-[12px] font-normal tracking-[0] mt-1 italic leading-[1] w-full">
                {passwordError}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-x-2 mb-4">
            <label className="text-sm text-dark-black dark:text-light-white font-normal">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={`w-full py-[10px] px-5 items-center rounded-lg bg-form-background dark:bg-dark-form-background focus:bg-form-background-focus focus:dark:bg-dark-form-background-focus text-form-color dark:text-dark-form-color focus:outline-none border-[1px] border-color`}
              placeholder="Confirm Password"
              onBlur={validateConf}
            />
            {confirmPasswordError && (
              <span className="text-danger text-[12px] font-normal tracking-[0] mt-1 italic leading-[1] w-full">
                {confirmPasswordError}
              </span>
            )}
          </div>
          <div className="w-fit">
            {loading ? (
              <ButtonLoader />
            ) : (
              <button
                type="submit"
                className="bg-skin text-white px-4 py-2 rounded-md hover:opacity-90"
              >
                Change Password
              </button>
            )}
          </div>
        </form>

        <div className="flex-1 flex flex-col">
          <h4 className="font-medium text-[16px] text-gray-700 dark:text-gray-300 mb-4">
            Two-Factor Authentication
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Add an extra layer of security to your account.
          </p>
          <div className="w-fit">
            {toggling ? (
              <ButtonLoader bgColor="green-500" />
            ) : (
              <button
                onClick={toggle2FAuth}
                className={`${
                  user?.twoFactorEnable ? "bg-red-500" : "bg-green-500"
                } text-white px-4 py-2 rounded-md hover:opacity-90 w-fit`}
              >
                {user?.twoFactorEnable ? "Disable 2FA" : "Enable 2FA"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
