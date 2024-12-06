import { About } from "@/components/admin/about";
import { AdminLayout } from "@/components/layout";
import React from "react";

export default function page() {
  return (
    <AdminLayout>
      <About />
    </AdminLayout>
  );
}
