import Link from "next/link";
import React from "react";
// import { messages } from "@/data/dashboard";

export default function RecentMessages({ messages }: { messages: any }) {
  return (
    <div className="bg-white dark:bg-black shadow rounded-lg p-6 w-full">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-[17px] font-semibold">Recent Messages</span>
          <span className="text-[14px] text-gray-500">
            List of messages received recently
          </span>
        </div>
        <Link href={"/inbox"}>
          <div className="py-2 px-3 bg-blue-500 text-[14px] font-normal text-white rounded-md">
            View All Messages
          </div>
        </Link>
      </div>
      <div className="relative overflow-x-auto my-5">
        <table className="w-full text-sm text-left rtl:text-right">
          <thead className="text-xs uppercase border-b border-dashed border-color text-gray-700 dark:text-gray-300 font-normal">
            <tr className="px-2">
              <th scope="col" className="pr-6 py-3 whitespace-nowrap">
                SN
              </th>
              <th scope="col" className="pr-6 py-3 whitespace-nowrap">
                Full Name
              </th>
              <th scope="col" className="pr-6 py-3 whitespace-nowrap">
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            {messages &&
              messages.length > 0 &&
              messages.map((message: any, index: number) => (
                <tr
                  key={message.id}
                  className="border-b border-dashed border-color hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer rounded-sm px-2"
                >
                  <td
                    scope="row"
                    className="pr-6 py-4 font-normal whitespace-nowrap  text-gray-600 dark:text-gray-400"
                  >
                    {index + 1}
                  </td>
                  <td
                    scope="row"
                    className="pr-6 py-4 font-normal whitespace-nowrap text-gray-600 dark:text-gray-400"
                  >
                    <p>{message.fullName}</p>
                  </td>
                  <td
                    scope="row"
                    className="pr-6 py-4 font-normal whitespace-nowrap text-gray-600 dark:text-gray-400"
                  >
                    <p>{message.email}</p>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
