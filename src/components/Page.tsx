"use client";
import { useParams } from "next/navigation";
import React from "react";

export default function Page() {
  const params = useParams<{ client: string }>();

  return (
    <div className="flex w-full h-screen items-center justify-center">
      <h1 className="text-4xl font-bold">{`This is ${params.client}'s page`}</h1>
    </div>
  );
}
