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

export default function SingleProject({
  project,
  index,
  updateProjectStatus,
  removeProject,
  refresh,
}: {
  project: any;
  index: number;
  updateProjectStatus: (id: number, isActive: boolean) => void;
  removeProject: (id: number) => void;
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
          <div className="border-[1px] w-[160px] h-[90px] bg-white border-skin/40 rounded-md flex justify-center images-center">
            <Image
              width={160}
              height={90}
              alt={"Project"}
              src={project.coverPhoto || LogoImage}
              className="max-h-[90px] max-w-[160px] object-cover rounded-md"
              priority={true}
              quality={100}
            />
          </div>
        </td>
        <td
          scope="row"
          className="pr-6 py-4 font-semibold whitespace-nowrap text-graycolor"
        >
          <p className="whitespace-pre-wrap"> {project.title}</p>
          <p className="text-skin">
            {project.actualPrice ? (
              <>
                <span className="line-through text-gray-500">
                  Rs. {project.price}
                </span>
                <span className="ml-2 font-semibold">
                  Rs. {project.actualPrice}
                </span>
              </>
            ) : (
              <span>Rs. {project.price}</span>
            )}
          </p>
        </td>
        <td
          scope="row"
          className="pr-6 py-4 font-semibold whitespace-nowrap text-graycolor"
        >
          {project.createdAt}
        </td>
        <td
          scope="row"
          className="pr-6 py-4 font-semibold whitespace-nowrap text-graycolor"
        >
          <Switch
            id={project.id}
            status={project.isPublic}
            changeStatus={changeStatus}
          />
        </td>

        <td className="px-6 py-4 font-semibold whitespace-nowrap text-graycolor ">
          <div className="flex gap-2 items-center">
            <a
              href={`project/create?project=${project.id}`}
              className="bg-skin p-2 text-white rounded-sm"
            >
              <BiEdit />
            </a>
            <button
              onClick={openDeleteModal}
              className="bg-danger dark:bg-red-500 p-2 text-white rounded-sm"
            >
              <BiTrash />
            </button>
          </div>
          <Modal isOpen={showDeleteModal}>
            <DeleteModal
              initiateDelete={initiateDelete}
              closeModal={closeDeleteModal}
              id={project.id}
            />
          </Modal>
        </td>
      </tr>
    </>
  );
}
