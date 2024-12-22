"use client";
import Image from "next/image";
import profilePic from "@/assets/ashish-profile.jpg";
import ThemeToggle from "@/utils/ThemeToggler";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useState } from "react";
import { Modal } from "@/components/modal";
import { IoClose } from "react-icons/io5";
import useSignOut from "./useSignOut";

export default function ProfileMenuCard() {
  const [showModal, setShowModal] = useState<boolean>(false);

  const { handleSignOut, handleSignOutAll } = useSignOut();

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleSignOutClick = () => {
    closeModal();
    handleSignOut();
  };
  const handleSignOutAllClick = () => {
    closeModal();
    handleSignOutAll();
  };

  return (
    <div className="absolute top-16 right-12 bg-white dark:bg-black rounded-md shadow-md min-w-72 py-3 border border-color">
      <div className="flex gap-4 items-center border-b border-color dark:border-gray-500 p-5 ">
        <Image
          src={profilePic}
          alt="profile-pic"
          width={40}
          height={40}
          className="rounded-lg object-cover cursor-pointer"
        />
        <div>
          <h3 className="font-semibold leading-3 text[15px]">Ashish Sigdel</h3>
          <span className="text-[11px] text-gray-500">@ashishsigdel</span>
        </div>
      </div>

      <div className="">
        <ul className="flex flex-col gap-4 p-5">
          <li className="text-hardgray dark:text-lightgray hover:text-bluecolor text-[14px] font-[600] flex justify-between">
            <span>Mode</span>
            <ThemeToggle />
          </li>
          <li className="text-hardgray dark:text-lightgray hover:text-bluecolor text-[14px] font-[600] flex justify-between">
            <Link href={"/settings"}>Settings</Link>
          </li>

          <li
            className="text-hardgray dark:text-lightgray hover:text-bluecolor text-[14px] font-[600] cursor-pointer"
            onClick={openModal}
          >
            Sign Out
          </li>
        </ul>
      </div>
      <Modal isOpen={showModal}>
        <div className="relative z-[50] bg-white dark:bg-black rounded-lg shadow-3xl w-full max-w-xl mt-100">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Are you sure to sign out?
            </h3>
            <button
              type="button"
              className="text-gray-500 dark:text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="default-modal"
              onClick={closeModal}
            >
              <IoClose />
            </button>
          </div>
          {/* Modal body */}
          <div className="p-4 md:p-5 w-full">
            <div className="flex gap-3 justify-end">
              <button
                type="button"
                onClick={handleSignOutClick}
                className="py-1.5 px-3 bg-danger cursor-pointer text-[14px] font-semibold text-white rounded-md my-4"
              >
                Sign Out
              </button>
              <button
                type="button"
                onClick={handleSignOutAllClick}
                className="py-1.5 px-3 bg-danger cursor-pointer text-[14px] font-semibold text-white rounded-md my-4"
              >
                Sign Out All
              </button>
              <button
                type="button"
                onClick={closeModal}
                className="py-1.5 px-3 border-[1px] cursor-pointer border-gray-500 text-[14px] font-semibold rounded-md my-4"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
