"use client";
import React, { FormEvent, useEffect, useState } from "react";
import { ButtonLoader, Spinner } from "@/components/common";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { getEmail, unsubscribe } from "@/services/asprog/newsletterServices";

export default function Unsubscribe() {
  const router = useRouter();
  const params = useParams<{ uuid: string }>();
  const uuid = params.uuid;
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [isUnsubscribed, setIsUnsubscribed] = useState(false);

  useEffect(() => {
    const fetchEmail = async () => {
      try {
        const response = await getEmail(uuid);
        setEmail(response.data.email);
      } catch (error) {
        toast.error("Invalid Link.");
      }
    };
    fetchEmail();
  }, [uuid]);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) {
      toast.error("Invalid Link.");
      return;
    }
    try {
      setIsLoading(true);
      const response = await unsubscribe(email);
      toast.success("You have been unsubscribed.");
      setIsUnsubscribed(true);
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isUnsubscribed) {
    return (
      <div className="flex flex-col lg:flex-row gap-8 p-8 max-w-7xl mx-auto h-[calc(100vh-6rem)] items-center justify-center">
        <div className="max-w-2xl mx-auto p-6">
          <h1 className="text-2xl md:text-3xl leading-tight font-poppins font-bold text-gray-800 dark:text-white mb-5">
            You have been Unsubscribed!
          </h1>

          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-700 dark:text-gray-300 ">
              You are always welcome to subscribe for free at any time.
            </span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col lg:flex-row gap-8 p-8 max-w-7xl mx-auto h-[calc(100vh-6rem)] items-center justify-center">
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-4xl md:text-5xl leading-tight font-poppins font-bold text-gray-800 dark:text-white">
          Unsubscribe
        </h1>
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mt-4 font-geist">
          Are you sure, you want to unsubscribe from these emails?
        </p>
        <form onSubmit={onSubmit} className="flex flex-col gap-6 mt-10">
          {/* Email Field */}
          <div>
            <label className="block text-gray-800 dark:text-gray-300 font-medium mb-[6px]">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={email}
              disabled
              placeholder="Your email address"
              className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Submit Button */}
          <div className="mb-6 w-full text-center">
            {isLoading ? (
              <ButtonLoader bgColor="purple-500" />
            ) : (
              <button
                type="submit"
                className="bg-purple-500 w-full py-2.5 rounded-lg text-white font-semibold"
              >
                Unsubscribe
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
