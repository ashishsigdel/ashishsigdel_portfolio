"use client";
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  // eslint-disable-next-line no-unused-vars
  handlePageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  handlePageChange,
}: PaginationProps) {
  return (
    <div className="gi-pro-pagination mt-[15px] flex w-full items-center justify-between border-t-[1px] border-solid border-[#eee] pt-[15px] dark:border-primary/30 max-[575px]:flex-col">
      <span className="text-[14px] text-gray-600 dark:text-gray-300 max-[575px]:mb-[10px]">
        Showing page {currentPage} of {totalPages} pages
      </span>
      <ul className="gi-pro-pagination-inner">
        {currentPage > 1 && (
          <li
            className="float-left mr-[5px] inline-block cursor-pointer"
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <p
              className={`flex h-[32px] items-center justify-center rounded-[5px] bg-[#eee] p-[2px] px-[5px] text-center align-top text-[16px] font-light leading-[32px] text-blue-500 hover:bg-[#6a8ac8] hover:text-[#fff]`}
            >
              <FaChevronLeft className="ml-[3px] size-[12px]" /> Prev
            </p>
          </li>
        )}
        <li className="float-left mr-[5px] inline-block cursor-pointer">
          <p
            className={`flex h-[32px] w-[32px] items-center justify-center rounded-[5px] p-[0] text-center align-top text-[16px] font-light leading-[32px] hover:bg-[#6a8ac8] hover:text-[#fff] ${
              currentPage === 1
                ? "bg-primary-blue text-[#fff]"
                : "bg-[#eee] text-primary-blue"
            }`}
            onClick={() => handlePageChange(1)}
          >
            {1}
          </p>
        </li>
        <li className="float-left mr-[5px] inline-block cursor-pointer">
          <p
            className={`flex h-[32px] w-[32px] items-center justify-center rounded-[5px] p-[0] text-center align-top text-[16px] font-light leading-[32px] hover:bg-[#6a8ac8] hover:text-[#fff] ${
              currentPage === 2
                ? "bg-[#6d5caf] text-[#fff]"
                : "bg-[#eee] text-primary-blue"
            } ${totalPages < 2 && "hidden"}`}
            onClick={() => handlePageChange(2)}
          >
            {2}
          </p>
        </li>
        <li className="float-left mr-[5px] inline-block cursor-pointer">
          <p
            className={`flex h-[32px] w-[32px] items-center justify-center rounded-[5px] p-[0] text-center align-top text-[16px] font-light leading-[32px] hover:bg-[#6a8ac8] hover:text-[#fff] ${
              currentPage === 3
                ? "bg-[#5c7caf] text-[#fff]"
                : "bg-[#eee] text-primary-blue"
            } ${totalPages < 3 && "hidden"}`}
            onClick={() => handlePageChange(3)}
          >
            {3}
          </p>
        </li>
        <li className="float-left mr-[5px] inline-block cursor-pointer">
          <p
            className={`flex h-[32px] w-[32px] items-center justify-center rounded-[5px] p-[0] text-center align-top text-[16px] font-light leading-[32px] hover:bg-[#6a8ac8] hover:text-[#fff] ${
              currentPage === 4
                ? "bg-[#6a8ac8] text-[#fff]"
                : "bg-[#eee] text-primary-blue"
            } ${totalPages < 4 && "hidden"}`}
            onClick={() => handlePageChange(4)}
          >
            {4}
          </p>
        </li>
        <li className="float-left mr-[5px] inline-block cursor-pointer">
          <p
            className={`flex h-[32px] w-[32px] items-center justify-center rounded-[5px] p-[0] text-center align-top text-[16px] font-light leading-[32px] hover:bg-[#6a8ac8] hover:text-[#fff] ${
              currentPage === 5
                ? "bg-[#6a8ac8] text-[#fff]"
                : "bg-[#eee] text-primary-blue"
            } ${totalPages < 5 && "hidden"}`}
            onClick={() => handlePageChange(5)}
          >
            {5}
          </p>
        </li>
        {totalPages > 5 && currentPage > 5 && currentPage < totalPages && (
          <>
            <li
              className={`float-left mr-[5px] inline-block cursor-pointer ${
                totalPages === 6 && currentPage === 5 && "hidden"
              } ${
                currentPage > 5 && currentPage === totalPages - 1 && "hidden"
              }`}
            >
              <span className="block w-[20px] text-center text-primary-blue">
                ...
              </span>
            </li>
            <li className="float-left mr-[5px] inline-block cursor-pointer">
              <p
                className={`"} flex h-[32px] w-[32px] items-center justify-center rounded-[5px] bg-[#6a8ac8] p-[0] text-center align-top text-[16px] font-light leading-[32px] text-[#fff]`}
              >
                {currentPage}
              </p>
            </li>
          </>
        )}
        {totalPages >= 6 && (
          <>
            <li
              className={`float-left mr-[5px] inline-block cursor-pointer ${
                totalPages === 6 && currentPage === 5 && "hidden"
              } ${
                currentPage > 5 && currentPage === totalPages - 1 && "hidden"
              }`}
            >
              <span className="block w-[20px] text-center text-primary-blue">
                ...
              </span>
            </li>
            <li className="float-left mr-[5px] inline-block cursor-pointer">
              <p
                className={`flex h-[32px] w-[32px] items-center justify-center rounded-[5px] p-[0] text-center align-top text-[16px] font-light leading-[32px] hover:bg-[#6a8ac8] hover:text-[#fff] ${
                  currentPage === totalPages
                    ? "bg-[#6a8ac8] text-[#fff]"
                    : "bg-[#eee] text-primary-blue"
                }`}
              >
                {totalPages}
              </p>
            </li>
          </>
        )}
        {currentPage < totalPages && (
          <li
            className="float-left inline-block cursor-pointer"
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <p
              className={`flex h-[32px] items-center justify-center rounded-[5px] bg-[#eee] p-[2px] px-[5px] text-center align-top text-[16px] font-light leading-[32px] text-primary-blue hover:bg-[#6a8ac8] hover:text-[#fff]`}
            >
              Next <FaChevronRight className="ml-[3px] size-[12px]" />
            </p>
          </li>
        )}
      </ul>
    </div>
  );
}
