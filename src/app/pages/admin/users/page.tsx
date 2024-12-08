import { Users } from "@/components/admin/users";
import { AdminLayout } from "@/components/layout";
import React from "react";

export default function page() {
  return (
    <AdminLayout>
      <Users />
    </AdminLayout>
  );
}
