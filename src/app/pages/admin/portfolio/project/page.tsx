import { Project } from "@/components/admin/projects";
import { AdminLayout } from "@/components/layout";
import React from "react";

export default function page() {
  return (
    <AdminLayout>
      <Project />
    </AdminLayout>
  );
}
