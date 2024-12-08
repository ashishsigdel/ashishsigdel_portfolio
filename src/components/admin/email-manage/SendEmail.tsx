"use client";

import React, { useState } from "react";
import { Description } from "@/components/admin/email-manage";
import toast from "react-hot-toast";

type SendEmailProps = {
  selectedUserIds: number[];
};

export default function SendEmail({ selectedUserIds }: SendEmailProps) {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [messageError, setMessageError] = useState<string>("");

  const resetForm = () => {
    setMessage("");
    setSubject("");
  };

  const handleSendEmail = () => {
    if (!subject) {
      setSubjectError("Subject is required!");
      return;
    }
    if (!message) {
      setMessageError("Message is required!");
      return;
    }

    console.log(message);

    toast.success("Message sent successfully!");
    resetForm();
  };

  return (
    <div className="bg-white dark:bg-black shadow rounded-lg p-6 w-full border border-color">
      <div className="flex-col xl:flex xl:flex-row">
        <div className="card">
          <div className="w-full px-4 sm:px-6 md:px-8 border-b-[1px] border-color pb-4 mb-8">
            <h3 className="font-semibold text-[17.5px] leading-5 text-gray-700 dark:text-gray-300 uppercase">
              Send Newsletter
            </h3>
          </div>
          <div className="w-full">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendEmail();
              }}
            >
              <div className="flex flex-col gap-x-2 mb-4">
                <label className="text-sm text-dark-black dark:text-light-white font-normal">
                  Subject *
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className={`w-full py-[10px] px-5 items-center rounded-lg bg-form-background dark:bg-dark-form-background focus:bg-form-background-focus focus:dark:bg-dark-form-background-focus text-form-color dark:text-dark-form-color focus:outline-none border-[1px] ${
                    subjectError ? "border-danger" : "border-color"
                  }`}
                  placeholder="Type Subject"
                />
                {subjectError && (
                  <span className="text-danger text-[12px] font-normal tracking-[0] mt-1 italic leading-[1] w-full">
                    Subject is required
                  </span>
                )}
              </div>
              <Description
                description={message}
                descriptionError={messageError}
                setDescriptionError={setMessageError}
                setDescription={setMessage}
              />

              <button
                type="submit"
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500"
              >
                Send Email
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-4">
              {selectedUserIds.length > 0
                ? `Email will be sent to user IDs: ${selectedUserIds.join(
                    ", "
                  )}`
                : "Email will be sent to all users."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
