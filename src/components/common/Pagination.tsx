"use client";
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  handlePageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  handlePageChange,
}: PaginationProps) {
  return (
    <div className="mt-[15px] flex w-full items-center justify-between border-t-[1px] border-solid border-color pt-[15px] max-[575px]:flex-col">
      <span className="text-[14px] text-gray-600 dark:text-gray-400">
        Showing page {currentPage} of {totalPages} pages
      </span>
      <ul className="flex items-center">
        {currentPage > 1 && (
          <li
            className="mr-[5px] cursor-pointer"
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <p className="flex h-[32px] items-center justify-center rounded-[5px] bg-[#eee] dark:bg-[#222] px-[10px] text-[16px] font-light text-blue-500 hover:bg-[#6a8ac8] hover:text-white">
              <FaChevronLeft className="mr-[5px]" /> Prev
            </p>
          </li>
        )}
        {[...Array(totalPages)].map((_, i) => {
          const page = i + 1;
          return (
            <li
              key={page}
              className={`mr-[5px] cursor-pointer ${
                totalPages < page && "hidden"
              }`}
            >
              <p
                className={`flex h-[32px] w-[32px] items-center justify-center rounded-[5px] text-[16px] font-light ${
                  currentPage === page
                    ? "bg-[#6a8ac8] text-white"
                    : "bg-[#eee] dark:bg-[#222] text-blue-500"
                } hover:bg-[#6a8ac8] hover:text-white`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </p>
            </li>
          );
        })}
        {currentPage < totalPages && (
          <li
            className="cursor-pointer"
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <p className="flex h-[32px] items-center justify-center rounded-[5px] bg-[#eee] dark:bg-[#222] px-[10px] text-[16px] font-light text-blue-500 hover:bg-[#6a8ac8] hover:text-white">
              Next <FaChevronRight className="ml-[5px]" />
            </p>
          </li>
        )}
      </ul>
    </div>
  );
}
