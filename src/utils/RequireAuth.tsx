"use client";
import { setAuth } from "@/redux/features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Spinner } from "@/components/common";
import { useRouter } from "next/navigation";

const RequireAuth = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: any) => state.auth.isAuthenticated
  );

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      router.push(`/auth`);
    }

    const user = localStorage.getItem("user");
    if (user) {
      dispatch(setAuth(JSON.parse(user)));
    }
  }, [dispatch, router]);

  if (isAuthenticated) {
    return <>{children}</>;
  } else {
    return <Spinner />;
  }
};

export default RequireAuth;
