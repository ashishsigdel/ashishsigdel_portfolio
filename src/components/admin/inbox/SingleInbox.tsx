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

export default function SingleInbox({
  message,
  index,
  updateProfileStatus,
  removeProfile,
  refresh,
}: {
  message: any;
  index: number;
  updateProfileStatus: (id: number, isActive: boolean) => void;
  removeProfile: (id: number) => void;
  refresh?: () => void;
}) {
  const [showViewModal, setShowViewModal] = useState<boolean>(false);
  const openViewModal = () => setShowViewModal(true);
  const closeViewModal = () => setShowViewModal(false);

  return (
    <>
      <tr className="border-b border-dashed border-color ">
        <td
          scope="row"
          className="pr-6 py-4 font-semibold whitespace-nowrap text-graycolor "
        >
          {index + 1}
        </td>
        <td
          scope="row"
          className="pr-6 py-4 font-semibold whitespace-nowrap text-graycolor "
        >
          {message.fullName}
        </td>
        <td
          scope="row"
          className="pr-6 py-4 font-semibold whitespace-nowrap text-graycolor "
        >
          {message.email}
        </td>

        <td
          scope="row"
          className="pr-6 py-4 font-semibold whitespace-nowrap text-graycolor"
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
