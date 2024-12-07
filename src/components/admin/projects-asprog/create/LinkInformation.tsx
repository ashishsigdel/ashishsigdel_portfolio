import React from "react";
import { AiOutlineCopy } from "react-icons/ai";

interface LinkInformationProps {
  resourceLink: string;
  previewLink: string;
  setResourceLink: React.Dispatch<React.SetStateAction<string>>;
  setPreviewLink: React.Dispatch<React.SetStateAction<string>>;
  pasteFromClipboard: (
    setLink: React.Dispatch<React.SetStateAction<string>>
  ) => Promise<void>;
}

export default function LinkInformation({
  resourceLink,
  previewLink,
  setResourceLink,
  setPreviewLink,
  pasteFromClipboard,
}: LinkInformationProps) {
  return (
    <>
      <div className="card mb-4">
        <div className="w-full px-4 sm:px-6 md:px-8 border-b-[1px] border-color pb-4">
          <h3 className="font-semibold text-[17.5px] leading-5 text-gray-700 dark:text-gray-300 uppercase">
            Links
          </h3>
        </div>
        <div className="w-full pt-5 px-4 sm:px-6 md:px-8">
          <div className="mb-4">
            <div className="flex flex-col gap-x-2">
              <label className="text-sm text-hardgray dark:text-lightgray font-normal">
                Resource
              </label>
              <div className="flex items-center">
                <input
                  type="text"
                  value={resourceLink}
                  onChange={(e) => setResourceLink(e.target.value)}
                  className={`w-full py-[10px] px-5 items-center rounded-lg bg-form-background dark:bg-dark-form-background border-[1px] border-color`}
                  placeholder="Resource Link"
                />
                <button
                  className="ml-2"
                  onClick={() => pasteFromClipboard(setResourceLink)}
                  title="Paste from clipboard"
                >
                  <AiOutlineCopy size={20} />
                </button>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex flex-col gap-x-2">
              <label className="text-sm text-hardgray dark:text-lightgray font-normal">
                Preview
              </label>
              <div className="flex items-center">
                <input
                  type="text"
                  value={previewLink}
                  onChange={(e) => setPreviewLink(e.target.value)}
                  className={`w-full py-[10px] px-5 items-center rounded-lg bg-form-background dark:bg-dark-form-background border-[1px] border-color`}
                  placeholder="Preview Deployed Link"
                />
                <button
                  className="ml-2"
                  onClick={() => pasteFromClipboard(setPreviewLink)}
                  title="Paste from clipboard"
                >
                  <AiOutlineCopy size={20} /> {/* Paste icon */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
