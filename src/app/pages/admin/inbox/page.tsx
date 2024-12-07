import { Inbox } from "@/components/admin/inbox";
import { AdminLayout } from "@/components/layout";
import React from "react";

export default function page() {
  return (
    <AdminLayout>
      <Inbox />
    </AdminLayout>
  );
}
