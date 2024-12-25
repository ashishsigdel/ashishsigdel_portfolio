"use client";
import React from "react";
import { IoClose } from "react-icons/io5";

type Props = {
  closeModal: () => void;
  id: string | number;
  initiateDelete: (id: string | number) => void;
};

export default function DeleteModal({ closeModal, id, initiateDelete }: Props) {
  return (
    <div className="relative z-[50] bg-white dark:bg-black rounded-lg shadow-3xl w-full max-w-xl mt-100">
      <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          Are you sure you want to delete?
        </h3>
        <button
          type="button"
          className="text-gray-500 dark:text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          data-modal-hide="default-modal"
          onClick={closeModal}
        >
          <IoClose />
        </button>
      </div>
      {/* Modal body */}
      <div className="p-4 md:p-5 w-full">
        <div className="flex gap-3 justify-end">
          <button
            type="button"
            onClick={() => initiateDelete(id)}
            className="py-1.5 px-3 bg-danger cursor-pointer text-[14px] font-semibold text-white rounded-md my-4"
          >
            Confirm
          </button>
          <button
            type="button"
            onClick={closeModal}
            className="py-1.5 px-3 border-[1px] cursor-pointer border-gray-500 text-[14px] font-semibold rounded-md my-4"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
