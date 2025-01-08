"use client";
import { BiTrash } from "react-icons/bi";
import { useState } from "react";
import { Modal } from "@/components/modal";
import DeleteModal from "@/components/modal/DeleteModal";
import { MdVerified } from "react-icons/md";
import { UserListAmdin } from "@/types/user";
import { RiErrorWarningFill } from "react-icons/ri";

export default function SingleTag({
  user,
  index,
  updateUserStatus,
  removeUser,
  refresh,
}: {
  user: UserListAmdin;
  index: number;
  updateUserStatus: (id: string, isActive: boolean) => void;
  removeUser: (id: number | string) => void;
  refresh?: () => void;
}) {
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const openDeleteModal = () => setShowDeleteModal(true);
  const closeDeleteModal = () => setShowDeleteModal(false);

  const initiateDelete = async (id: number | string) => {
    closeDeleteModal();
    removeUser(id);
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
          className="pr-6 py-4 font-semibold whitespace-nowrap text-graycolor"
        >
          <div className="flex gap-x-2 items-center">
            {user.fullName}
            {user.validEmail ? (
              <MdVerified
                className="cursor-pointer"
                size={18}
                color={
                  user.role === "admin" || user.role === "watcher"
                    ? "green"
                    : "#047ada"
                }
              />
            ) : (
              <RiErrorWarningFill
                className="cursor-pointer"
                size={18}
                color={"red"}
              />
            )}
          </div>
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
              : user.role === "watcher"
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
