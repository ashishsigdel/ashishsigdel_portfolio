import React from "react";
import { AiOutlineCopy } from "react-icons/ai";

interface PriceInformationProps {
  price: number | undefined;
  actualPrice: number | undefined;
  setPrice: any;
  setActualPrice: any;
}

export default function PriceInformation({
  price,
  actualPrice,
  setPrice,
  setActualPrice,
}: PriceInformationProps) {
  return (
    <>
      <div className="card mb-4">
        <div className="w-full px-4 sm:px-6 md:px-8 border-b-[1px] border-color pb-4">
          <h3 className="font-semibold text-[17.5px] leading-5 text-gray-700 dark:text-gray-300 uppercase">
            Pricing
          </h3>
        </div>
        <div className="w-full pt-5 px-4 sm:px-6 md:px-8">
          <div className="mb-4">
            <div className="flex flex-col gap-x-2">
              <label className="text-sm text-hardgray dark:text-lightgray font-normal">
                Price
              </label>
              <div className="flex items-center">
                <input
                  type="text"
                  value={price ? price : ""}
                  onChange={(e) => setPrice(e.target.value)}
                  className={`w-full py-[10px] px-5 items-center rounded-lg bg-form-background dark:bg-dark-form-background border-[1px] border-color`}
                  placeholder="$"
                />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex flex-col gap-x-2">
              <label className="text-sm text-hardgray dark:text-lightgray font-normal">
                Actual Price
              </label>
              <div className="flex items-center">
                <input
                  type="text"
                  value={actualPrice ? actualPrice : ""}
                  onChange={(e) => setActualPrice(e.target.value)}
                  className={`w-full py-[10px] px-5 items-center rounded-lg bg-form-background dark:bg-dark-form-background border-[1px] border-color`}
                  placeholder="$"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
