"use client";
import Link from "next/link";
import { NewsletterUsers, SendEmail } from "@/components/admin/email-manage";
import { useState } from "react";
import useNewsletter from "./useNewsletter";

export default function EmailManage() {
  const { selectedUserIds, handleCheckboxChange } = useNewsletter();

  return (
    <div className="bg-light-white dark:bg-dark-black pb-5 min-h-screen">
      <div className="px-6 w-full flex justify-between items-center ">
        <div className="my-5">
          <h3 className="font-semibold text-[17.5px] leading-5">
            Ashish Sigdel Dashboard
          </h3>
          <Link href="/" className="text-[14px] text-gray-500">
            Home
          </Link>{" "}
          <span className="text-[14px] text-gray-500">-</span>{" "}
          <span className="text-[14px] text-gray-500">Email Manager</span>
        </div>
      </div>
      <div className="px-6 mb-4">
        <div className="flex-col xl:flex xl:flex-row">
          <div className="w-full xl:w-[35%] p-2">
            <NewsletterUsers
              selectedUserIds={selectedUserIds}
              handleCheckboxChange={handleCheckboxChange}
            />
          </div>
          <div className="w-full xl:w-[65%] p-2">
            <SendEmail selectedUserIds={selectedUserIds} />
          </div>
        </div>
      </div>
    </div>
  );
}
