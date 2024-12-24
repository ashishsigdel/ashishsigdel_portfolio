"use client";
import React, { useState } from "react";
import { SingleUser } from "@/components/admin/users";
import { Pagination, SingleLineLoading } from "@/components/common";
import { Users } from "@/data/users";

export default function TagTable() {
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState<boolean>(false);
  const updateUserStatus = (id: string, isActive: boolean) => {};
  const removeUser = (id: string) => {};

  return (
    <>
      <div className="bg-white dark:bg-black shadow rounded-lg p-6 w-full">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-[17px] font-semibold">All Users</span>
            <span className="text-[14px] text-gray-500">List of all users</span>
          </div>
        </div>
        <div className="relative overflow-x-auto my-5">
          <table className="w-full text-sm text-left rtl:text-right">
            <thead className="text-xs uppercase border-b border-dashed border-color text-gray-700 dark:text-gray-300 font-normal">
              <tr className="px-2">
                <th scope="col" className="pr-6 py-3 whitespace-nowrap">
                  SN
                </th>
                <th scope="col" className="pr-6 py-3 whitespace-nowrap">
                  Name
                </th>
                <th scope="col" className="pr-6 py-3 whitespace-nowrap">
                  Email
                </th>
                <th scope="col" className="pr-6 py-3 whitespace-nowrap">
                  Role
                </th>
                <th scope="col" className="pr-6 py-3 whitespace-nowrap">
                  Action
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
              ) : Users.length === 0 ? (
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
                  {Users.map((user: any, index) => (
                    <SingleUser
                      updateUserStatus={updateUserStatus}
                      user={user}
                      index={index}
                      key={user.id}
                      removeUser={removeUser}
                    />
                  ))}
                </>
              )}
            </tbody>
          </table>
        </div>
        <Pagination
          totalPages={5}
          currentPage={3}
          handlePageChange={() => console.log("page change")}
        />
      </div>
    </>
  );
}
