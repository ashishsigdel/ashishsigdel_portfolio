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

export default function SingleLineImage({
  image,
  index,
  updateProfileStatus,
  removeProfile,
  refresh,
}: {
  image: any;
  index: number;
  updateProfileStatus: (id: number, isActive: boolean) => void;
  removeProfile: (id: number) => void;
  refresh?: () => void;
}) {
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const openDeleteModal = () => setShowDeleteModal(true);
  const closeDeleteModal = () => setShowDeleteModal(false);

  const changeStatus = async (id: number, status: boolean) => {};

  const initiateDelete = async (id: number) => {
    toast.promise(
      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (id % 2 === 0) {
            resolve("Deleted successfully");
          } else {
            reject("Failed to delete");
          }
        }, 1500);
      }),
      {
        loading: "Deleting...",
        success: "Item deleted successfully",
        error: "Error to delete!",
      },
      {
        id: "toast",
      }
    );
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
        <td scope="row" className="py-4 pr-6 font-semibold whitespace-nowrap">
          <div className="border-[1px] w-[100px] h-[100px] bg-white border-skin/40 rounded-md flex justify-center images-center">
            <Image
              width={98}
              height={98}
              alt={"profile"}
              src={LogoImage}
              className="max-h-[98px] max-w-[98px] object-cover rounded-md"
              priority={true}
              quality={100}
            />
          </div>
        </td>
        <td
          scope="row"
          className="pr-6 py-4 font-semibold whitespace-nowrap text-graycolor"
        >
          <Switch
            id={image.id}
            status={image.isActive}
            changeStatus={changeStatus}
          />
        </td>
        <td
          scope="row"
          className="pr-6 py-4 font-semibold whitespace-nowrap text-graycolor"
        >
          {image.createdAt}
        </td>

        <td className="px-6 py-4 font-semibold whitespace-nowrap text-graycolor ">
          <div className="flex gap-2 images-center">
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
              id={image.id}
            />
          </Modal>
        </td>
      </tr>
    </>
  );
}
