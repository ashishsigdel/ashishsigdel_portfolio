import React from "react";
import { Header } from "@/components/admin/header";
import { Sidebar } from "@/components/admin/sidebar";
import { Footer } from "@/components/admin/footer";
// import { RequireAdmin, RequireAuth } from "@/utils";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <RequireAuth>
    //   <RequireAdmin>
    <div className="flex w-full max-w-screen">
      <div className="hidden md:inline-block">
        <Sidebar />
      </div>
      <div className="w-full">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
    //   </RequireAdmin>
    // </RequireAuth>
  );
}
