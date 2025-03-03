"use client";

import { useState } from "react";
import { UserListStudyHere } from "@/types/user";
import Image from "next/image";
import { Modal } from "@/components/modal";

export default function SingleTag({
  user,
  index,
}: {
  user: UserListStudyHere;
  index: number;
  updateUserStatus: (id: string, isActive: boolean) => void;
  removeUser: (id: number | string) => void;
  refresh?: () => void;
}) {
  const [showFullImage, setShowFullImage] = useState(false);

  return (
    <>
      <tr className="border-b border-dashed border-color">
        <td className="pr-6 py-4 font-semibold whitespace-nowrap text-graycolor">
          {index + 1}
        </td>
        <td className="pr-6 py-4 font-semibold whitespace-nowrap text-graycolor">
          <div className="flex gap-x-2 items-center">
            {/* Clicking the image opens full-screen modal */}
            <img
              src={user.profilePic}
              alt={user.fullName}
              className="w-12 h-12 object-cover rounded-lg cursor-pointer"
              onClick={() => setShowFullImage(true)}
            />
            {user.fullName}
            {/* Full-Screen Image Modal */}

            <Modal isOpen={showFullImage}>
              <div
                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
                onClick={() => setShowFullImage(false)}
              >
                <div className="relative">
                  <img
                    src={user.profilePic}
                    alt={user.fullName}
                    className="max-w-full max-h-screen object-contain w-[400px]"
                  />
                </div>
              </div>
            </Modal>
          </div>
        </td>
        <td className="pr-6 py-4 font-semibold whitespace-nowrap text-graycolor">
          {user.email}
        </td>
        <td
          className={`pr-6 py-4 font-semibold whitespace-nowrap ${
            user.role === "admin" ? "text-green-500" : "text-gray-500"
          }`}
        >
          {user.role}
        </td>
      </tr>
    </>
  );
}
