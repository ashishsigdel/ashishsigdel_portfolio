"use client";
import Image from "next/image";
import { Switch } from "@/components/common";
import { BiEdit, BiTrash } from "react-icons/bi";
import { FaCircle, FaEye } from "react-icons/fa";
import { useState } from "react";
import LogoImage from "@/assets/image-placeholder.png";
import { Modal } from "@/components/modal";
import { ViewModal } from "@/components/admin/inbox";
import toast from "react-hot-toast";
import { GoDotFill } from "react-icons/go";

export default function SingleInbox({
  message,
  index,
  updateSeenStatus,
  removeProfile,
  refresh,
}: {
  message: any;
  index: number;
  updateSeenStatus: (id: number) => void;
  removeProfile: (id: string) => void;
  refresh?: () => void;
}) {
  const [showViewModal, setShowViewModal] = useState<boolean>(false);
  const openViewModal = () => {
    if (!message.seen) {
      updateSeenStatus(message.id);
    }
    setShowViewModal(true);
  };
  const closeViewModal = () => setShowViewModal(false);

  return (
    <>
      <tr className="border-b border-dashed border-color ">
        <td
          scope="row"
          className={`pr-6 py-4 whitespace-nowrap text-graycolor ${
            message.seen ? "font-normal" : "font-semibold"
          }`}
        >
          {index + 1}
        </td>
        <td
          scope="row"
          className={`pr-6 py-4 whitespace-nowrap text-graycolor ${
            message.seen ? "font-normal" : "font-semibold"
          }`}
        >
          <div className="flex gap-2 items-center">
            {message.fullName}
            {!message.seen && <GoDotFill className="text-blue-500" size={20} />}
          </div>
        </td>
        <td
          scope="row"
          className={`pr-6 py-4 whitespace-nowrap text-graycolor ${
            message.seen ? "font-normal" : "font-semibold"
          }`}
        >
          {message.email}
        </td>

        <td
          scope="row"
          className={`pr-6 py-4 whitespace-nowrap text-graycolor ${
            message.seen ? "font-normal" : "font-semibold"
          }`}
        >
          {message.createdAt}
        </td>

        <td className="px-6 py-4 font-semibold whitespace-nowrap text-graycolor ">
          <div className="flex gap-2 ">
            <button
              onClick={openViewModal}
              className="bg-skin p-2 text-white rounded-sm"
            >
              <FaEye size={18} />
            </button>
          </div>
          <Modal isOpen={showViewModal}>
            <ViewModal closeModal={closeViewModal} message={message} />
          </Modal>
        </td>
      </tr>
    </>
  );
}
