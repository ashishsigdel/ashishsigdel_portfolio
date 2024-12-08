"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function Security() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);

  const handlePasswordChange = (e: any) => {
    e.preventDefault();
    // Add password change logic here
    toast.success("Password changed successfully!");
  };

  const toggle2FA = () => {
    setIs2FAEnabled((prev) => !prev);
    toast.success(
      `Two-Factor Authentication ${!is2FAEnabled ? "Enabled" : "Disabled"}`
    );
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
        <div className="flex-1 flex flex-col">
          <h4 className="font-medium text-[16px] text-gray-700 dark:text-gray-300 mb-4">
            Change Password
          </h4>
          <div className="flex flex-col gap-x-2 mb-4">
            <label className="text-sm text-dark-black dark:text-light-white font-normal">
              Current Password
            </label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className={`w-full py-[10px] px-5 items-center rounded-lg bg-form-background dark:bg-dark-form-background focus:bg-form-background-focus focus:dark:bg-dark-form-background-focus text-form-color dark:text-dark-form-color focus:outline-none border-[1px] border-color`}
              placeholder="Current Password"
            />
          </div>
          <div className="flex flex-col gap-x-2 mb-4">
            <label className="text-sm text-dark-black dark:text-light-white font-normal">
              New Password
            </label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className={`w-full py-[10px] px-5 items-center rounded-lg bg-form-background dark:bg-dark-form-background focus:bg-form-background-focus focus:dark:bg-dark-form-background-focus text-form-color dark:text-dark-form-color focus:outline-none border-[1px] border-color`}
              placeholder="New Password"
            />
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
            />
          </div>
          <button
            onClick={handlePasswordChange}
            className="bg-skin text-white px-4 py-2 rounded-md hover:opacity-90 w-fit"
          >
            Change Password
          </button>
        </div>

        <div className="flex-1 flex flex-col">
          <h4 className="font-medium text-[16px] text-gray-700 dark:text-gray-300 mb-4">
            Two-Factor Authentication
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Add an extra layer of security to your account.
          </p>
          <button
            onClick={toggle2FA}
            className={`${
              is2FAEnabled ? "bg-red-500" : "bg-green-500"
            } text-white px-4 py-2 rounded-md hover:opacity-90 w-fit`}
          >
            {is2FAEnabled ? "Disable 2FA" : "Enable 2FA"}
          </button>
        </div>
      </div>
    </div>
  );
}
