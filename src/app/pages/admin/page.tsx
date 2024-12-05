import { Dashboard } from "@/components/admin/dashboard";
import { AdminLayout } from "@/components/layout";
import React from "react";

export default function page() {
  return (
    <AdminLayout>
      <Dashboard />
    </AdminLayout>
  );
}
