import { Settings } from "@/components/admin/settings";
import { AdminLayout } from "@/components/layout";
import React from "react";

export default function page() {
  return (
    <AdminLayout>
      <Settings />
    </AdminLayout>
  );
}
