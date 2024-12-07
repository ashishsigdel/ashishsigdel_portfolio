import React, { ChangeEvent, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
type Props = {
  closeModal: () => void;
  message: any;
};

export default function ViewModal({ closeModal, message }: Props) {
  return (
    <div className="relative z-[50] max-w-[500px] min-w-[300px] w-full rounded-lg bg-white shadow-xl dark:bg-black">
      <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-color">
        <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
          Full Message Detail
        </h3>
        <button
          type="button"
          className="text-gray-500 dark:text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-base w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          onClick={closeModal}
        >
          <IoClose />
        </button>
      </div>
      {/* Modal body */}
      <div className="p-4 md:p-5 w-full">
        <div className="space-y-4">
          <div>
            <h5 className="text-sm font-medium text-gray-900 dark:text-white">
              Name
            </h5>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {message.fullName}
            </p>
          </div>
          <div>
            <h5 className="text-sm font-medium text-gray-900 dark:text-white">
              Email
            </h5>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {message.email}
            </p>
          </div>
          <div>
            <h5 className="text-sm font-medium text-gray-900 dark:text-white">
              Company
            </h5>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {message.company ? message.company : "-"}
            </p>
          </div>
          <div className="mx-2">
            <h5 className="text-sm font-medium text-gray-900 dark:text-white">
              Message
            </h5>
            <p className="text-sm text-gray-500 dark:text-gray-400 whitespace-pre-wrap bg-white dark:bg-black border border-color rounded-lg px-3 py-2 font-geist">
              {message.message}
            </p>
          </div>
          <div className="">
            <h5 className="text-sm font-medium text-gray-900 dark:text-white">
              Received At
            </h5>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {message.createdAt}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
