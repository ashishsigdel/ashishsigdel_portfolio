"use client";
import React, { useState } from "react";
import { Users } from "@/data/users";
import Search from "@/components/common/Search";
import Image from "next/image";
import defaultImage from "@/assets/image-placeholder.png";

type User = {
  id: number;
  fullName: string;
  email: string;
  role: string;
  newsletter: boolean;
};
interface PropsType {
  selectedUserIds: number[];
  handleCheckboxChange: Function;
}

export default function NewsletterUsers({
  selectedUserIds,
  handleCheckboxChange,
}: PropsType) {
  return (
    <div className="bg-white dark:bg-black shadow rounded-lg p-6 w-full">
      <div className="flex justify-between items-center">
        <Search name="email-manager" />
      </div>
      <div className="relative overflow-x-auto my-5">
        <table className="w-full text-sm text-left rtl:text-right">
          <thead className="text-xs uppercase border-b border-dashed border-color text-gray-700 dark:text-gray-300 font-normal">
            <tr className="px-2">
              <th scope="col" className="pr-6 py-3 whitespace-nowrap">
                Select
              </th>
              <th scope="col" className="pr-6 py-3 whitespace-nowrap">
                User
              </th>
            </tr>
          </thead>
          <tbody>
            {Users.map((user: User, index: number) => (
              <tr
                key={user.id}
                className="border-b border-dashed border-color hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer rounded-sm px-2"
              >
                <td
                  scope="row"
                  className="pr-6 py-4 font-normal whitespace-nowrap text-gray-600 dark:text-gray-400"
                >
                  <input
                    type="checkbox"
                    checked={selectedUserIds.includes(user.id)}
                    onChange={() => handleCheckboxChange(user.id)}
                  />
                </td>
                <td
                  scope="row"
                  className="pr-6 py-4 font-normal whitespace-nowrap text-gray-600 dark:text-gray-400"
                >
                  <div className="flex space-x-3 items-center">
                    <Image
                      src={defaultImage}
                      alt="Profilepic"
                      className="w-10 h-10 object-cover rounded-md"
                    ></Image>
                    <div>
                      <p>{user.fullName}</p>
                      <p>{user.email}</p>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
