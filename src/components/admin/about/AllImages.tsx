"use client";
import React, { useState } from "react";
import { profile } from "@/data/dashboard";
import SingleLineImage from "./SingleLineImage";
import { Pagination, SingleLineLoading } from "@/components/common";
import { Modal } from "@/components/modal";
import { AddProfileModal } from "@/components/admin/about";

export default function AllImages() {
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState<boolean>(false);
  const updateProfileStatus = (id: string, isActive: boolean) => {};
  const removeProfile = (id: string) => {};

  const [showModal, setShowModal] = useState<boolean>(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  return (
    <>
      <div className="bg-white dark:bg-black shadow rounded-lg p-6 w-full">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-[17px] font-semibold">All Images</span>
            <span className="text-[14px] text-gray-500">
              List of all profile
            </span>
          </div>
          <button
            className="py-1.5 px-3 bg-blue-500 text-[16px] font-semibold text-white rounded-md"
            onClick={openModal}
          >
            Add New
          </button>
        </div>
        <div className="relative overflow-x-auto my-5">
          <table className="w-full text-sm text-left rtl:text-right">
            <thead className="text-xs uppercase border-b border-dashed border-color text-gray-700 dark:text-gray-300 font-normal">
              <tr className="px-2">
                <th scope="col" className="pr-6 py-3 whitespace-nowrap">
                  SN
                </th>
                <th scope="col" className="pr-6 py-3 whitespace-nowrap">
                  Profile
                </th>
                <th scope="col" className="pr-6 py-3 whitespace-nowrap">
                  Status
                </th>
                <th scope="col" className="pr-6 py-3 whitespace-nowrap">
                  Uploaded at
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
              ) : profile.length === 0 ? (
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
                  {profile.map((image: any, index) => (
                    <SingleLineImage
                      updateProfileStatus={updateProfileStatus}
                      image={image}
                      index={index}
                      key={image.id}
                      removeProfile={removeProfile}
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
        <Modal isOpen={showModal}>
          <AddProfileModal closeModal={closeModal} setRefresh={setRefresh} />
        </Modal>
      </div>
    </>
  );
}
