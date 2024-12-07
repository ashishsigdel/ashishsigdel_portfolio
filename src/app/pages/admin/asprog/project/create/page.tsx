import { AddProject } from "@/components/admin/projects-asprog";
import { AdminLayout } from "@/components/layout";
import React from "react";

export default function page() {
  return (
    <AdminLayout>
      <AddProject />
    </AdminLayout>
  );
}
