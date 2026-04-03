"use client";

import { SidebarProvider } from "@/contexts/SidebarContext";
import { ReactNode } from "react";

export default function ClientProviders({ children }: { children: ReactNode }) {
  return <SidebarProvider>{children}</SidebarProvider>;
}
