"use client";
import React, { useEffect, useState } from "react";
import Search from "@/components/common/Search";
import Image from "next/image";
import defaultImage from "@/assets/image-placeholder.png";
import useNewsletter from "./useNewsletter";
import { UserAdmin } from "@/types/user";
import { useSearchParams } from "next/navigation";
import { SingleLineLoading } from "@/components/common";

interface PropsType {
  selectedUserIds: number[];
  handleCheckboxChange: Function;
}

export default function NewsletterUsers({
  selectedUserIds,
  handleCheckboxChange,
}: PropsType) {
  const searchValue = useSearchParams().get("search") || "";
  const [refresh, setRefresh] = useState<boolean>(false);
  const { fetchUsers, users, currentPage, setCurrentPage, loading } =
    useNewsletter();

  useEffect(() => {
    fetchUsers(searchValue ? 1 : currentPage, searchValue);
  }, [searchValue, refresh]);

  return (
    <div className="bg-white dark:bg-black shadow rounded-lg p-6 w-full">
      <div className="flex justify-between items-center">
        <Search name="email-manager" />
      </div>
      <div className="relative overflow-x-auto my-5">
        <table className="w-full text-sm text-left rtl:text-right">
          <thead className="text-xs uppercase border-b border-dashed border-color text-gray-700 dark:text-gray-300 font-normal">
            <tr className="px-2">
              <th scope="col" className="pr-2 py-3 whitespace-nowrap">
                Select
              </th>
              <th scope="col" className="pr-6 py-3 whitespace-nowrap">
                User
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <>
                <tr>
                  <td
                    scope="row"
                    colSpan={8}
                    className="pr-6 py-4 font-semibold whitespace-nowrap text-graycolor"
                  >
                    <div className="min-h-[300px] flex justify-center items-center">
                      <SingleLineLoading />
                    </div>
                  </td>
                </tr>
              </>
            ) : users.length === 0 ? (
              <tr>
                <td
                  scope="row"
                  colSpan={8}
                  className="py-4 font-semibold whitespace-nowrap text-graycolor text-center"
                >
                  No data found
                </td>
              </tr>
            ) : (
              <>
                {users.map((user: UserAdmin, index: number) => (
                  <tr
                    key={user.id}
                    className="border-b border-dashed border-color hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer rounded-sm px-2"
                  >
                    <td
                      scope="row"
                      className="pr-2 py-4 font-normal whitespace-nowrap text-gray-600 dark:text-gray-400"
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
                          <p className="text-xs">{user.email}</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
