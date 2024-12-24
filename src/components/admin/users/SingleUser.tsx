"use client";
import Image from "next/image";
import { Switch } from "@/components/common";
import { BiEdit, BiTrash } from "react-icons/bi";
import { FaCircle } from "react-icons/fa";
import { useState } from "react";
import LogoImage from "@/assets/image-placeholder.png";
import { Modal } from "@/components/modal";
import DeleteModal from "@/components/modal/DeleteModal";
import toast from "react-hot-toast";

export default function SingleTag({
  user,
  index,
  updateUserStatus,
  removeUser,
  refresh,
}: {
  user: any;
  index: number;
  updateUserStatus: (id: string, isActive: boolean) => void;
  removeUser: (id: string) => void;
  refresh?: () => void;
}) {
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const openDeleteModal = () => setShowDeleteModal(true);
  const closeDeleteModal = () => setShowDeleteModal(false);

  const changeStatus = async (id: string, status: boolean) => {};

  const initiateDelete = async (id: string) => {
    closeDeleteModal();
  };

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
          {user.fullName}
        </td>
        <td
          scope="row"
          className="pr-6 py-4 font-semibold whitespace-nowrap text-graycolor "
        >
          {user.email}
        </td>

        <td
          scope="row"
          className={`pr-6 py-4 font-semibold whitespace-nowrap ${
            user.role === "admin"
              ? "text-green-500"
              : user.role === "editor"
              ? "text-blue-500"
              : "text-gray-500"
          }`}
        >
          {user.role}
        </td>

        <td className="px-6 py-4 font-semibold whitespace-nowrap text-graycolor ">
          <div className="flex gap-2 item-center">
            <button
              onClick={openDeleteModal}
              className="bg-danger dark:bg-red-500 p-2 text-white rounded-sm"
            >
              <BiTrash size={18} />
            </button>
          </div>
          <Modal isOpen={showDeleteModal}>
            <DeleteModal
              initiateDelete={initiateDelete}
              closeModal={closeDeleteModal}
              id={user.id}
            />
          </Modal>
        </td>
      </tr>
    </>
  );
}
