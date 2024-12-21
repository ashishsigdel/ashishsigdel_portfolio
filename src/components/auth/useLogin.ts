"use client";
import { setCredientials } from "@/redux/features/guestSlice";
import { encryptAccessToken } from "@/helper/Helper";
import { setAuth } from "@/redux/features/authSlice";
import { setMessage } from "@/redux/features/popupMessageSlice";
import { login } from "@/services/loginServices";
import { userLogin } from "@/types/user";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const protocal = process.env.NODE_ENV === "development" ? "http" : "https";

export default function useLogin() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState<userLogin>({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [usernameError, setUsernameError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const updatedFormData = {
      ...formData,
      [event.target.name]: event.target.value,
    };
    setFormData(updatedFormData);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateUsername = () => {
    if (!username) {
      setUsernameError("Username is required!");
    } else {
      setUsernameError(null);
    }
  };

  const validatePassword = () => {
    if (!password) {
      setPasswordError("Password is required!");
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters!");
    } else {
      setPasswordError(null);
    }
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    validateUsername();
    validatePassword();

    if (username && password && !usernameError && !passwordError) {
      setIsLoading(true);
      try {
        setIsLoading(true);

        const response = await login({
          username,
          password,
        });

        const data = response.data;

        if (data.twoFactorEnable) {
          dispatch(
            setCredientials({
              email: username,
              password: password,
            })
          );
          toast.success("Otp Sent.");
          router.push("/auth/verify-otp");
          return;
        }

        const accessToken: string = data.accessToken;
        const encryptedAccessToken: string = encryptAccessToken(accessToken);

        const user = data.user;
        if (user.role === "user") {
          toast.error("Unauthorized access");
          throw new Error("Unauthorized access");
        }
        const userData = JSON.stringify(user);
        localStorage.setItem("accessToken", encryptedAccessToken);
        localStorage.setItem("user", userData);

        dispatch(setAuth(data.user));
        toast.success(`Login as ${user.role}.`);
        router.push("/");
      } catch (error: any) {
        toast.error(error?.response?.data?.message || "Something went wrong");
      } finally {
        setIsLoading(false);
      }
    }
  };

  const redirectIfAuthenticate = useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      router.push(`${protocal}://admin.${process.env.NEXT_PUBLIC_BASE_DOMAIN}`);
    }
  }, [router]);

  return {
    username,
    password,
    formData,
    showPassword,
    usernameError,
    passwordError,
    isLoading,
    redirectIfAuthenticate,
    handleChange,
    togglePasswordVisibility,
    validateUsername,
    validatePassword,
    onSubmit,
  };
}
