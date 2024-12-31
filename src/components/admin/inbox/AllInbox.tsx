"use client";
import React, { useEffect, useState } from "react";
import { messages } from "@/data/dashboard";
import SingleLineImage from "./SingleInbox";
import { Pagination, SingleLineLoading } from "@/components/common";
import SingleInbox from "./SingleInbox";
import useInbox from "./useInbox";

export default function AllInbox() {
  const [refresh, setRefresh] = useState<boolean>(false);
  const updateProfileStatus = (id: string, isActive: boolean) => {};
  const removeProfile = (id: string) => {};

  const {
    inbox,
    loading,
    getAll,
    currentPage,
    setCurrentPage,
    totalPage,
    updateSeenStatus,
  } = useInbox();

  useEffect(() => {
    getAll(1);
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    getAll(page);
  };

  return (
    <>
      <div className="bg-white dark:bg-black shadow rounded-lg p-6 w-full">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-[17px] font-semibold">Inbox</span>
            <span className="text-[14px] text-gray-500">
              List of all messages
            </span>
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
                  Send At
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
              ) : inbox.length === 0 ? (
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
                  {inbox.map((message: any, index) => (
                    <SingleInbox
                      updateSeenStatus={updateSeenStatus}
                      message={message}
                      index={index}
                      key={message.id}
                      removeProfile={removeProfile}
                    />
                  ))}
                </>
              )}
            </tbody>
          </table>
        </div>
        <Pagination
          totalPages={totalPage}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </div>
    </>
  );
}
