"use client";

import { store } from "@/redux/store";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";

interface Props {
  children: React.ReactNode;
}

export default function StoreProvider({ children }: Props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;
  return <Provider store={store}>{children}</Provider>;
}
