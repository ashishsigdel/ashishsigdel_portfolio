import { EmailManage } from "@/components/admin/email-manage";
import { AdminLayout } from "@/components/layout";
import React from "react";

export default function page() {
  return (
    <AdminLayout>
      <EmailManage />
    </AdminLayout>
  );
}
