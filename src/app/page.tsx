import Link from "next/link";
import React from "react";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_DOMAIN;
const NODE_ENV = process.env.NODE_ENV;
const protocol = NODE_ENV === "production" ? "https" : "http";

export default function page() {
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center gap-5">
      <h1 className="text-4xl font-bold">{`This is home page`}</h1>
      <div className="my-5 border w-fit p-5">
        <Link href={`${protocol}://client1.${BASE_URL}`}>Go to Client 1</Link>
      </div>
      <div className="my-5 border w-fit p-5">
        <Link href={`${protocol}://client2.${BASE_URL}`}>Go to Client 2</Link>
      </div>
    </div>
  );
}
