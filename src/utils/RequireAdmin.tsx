"use client";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Spinner } from "@/components/common";
import toast from "react-hot-toast";

const RequireAdmin = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const isAuthenticated = useSelector(
    (state: any) => state.auth.isAuthenticated
  );

  const [isAdmin, setIsAdmin] = useState(false);
  const [isWatcher, setIsWatcher] = useState(false);
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      router.push("/auth");
    }

    if (isAuthenticated) {
      let admin = false;
      let watcher = false;
      const user = JSON.parse(localStorage.getItem("user") || "{}");

      if (user) {
        const role = user.role;
        if (role === "admin") {
          admin = true;
          setIsAdmin(admin);
        } else if (role === "watcher") {
          watcher = true;
          setIsWatcher(watcher);
        }
        if (!admin && !watcher) {
          toast.error("You are not authorized to access.");
          router.push("/auth");
        }
      }
    }
  }, [isAuthenticated]);

  if (isAuthenticated) {
    if (isAdmin || isWatcher) {
      return <>{children}</>;
    } else {
      return <Spinner />;
    }
  } else {
    return <Spinner />;
  }
};

export default RequireAdmin;
