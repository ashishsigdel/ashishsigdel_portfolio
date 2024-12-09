"use client";
// import { encryptAccessToken } from "@/helper/Helper";
// import { setAuth } from "@/redux/features/authSlice";
import { setMessage } from "@/redux/features/popupMessageSlice";
// import { logout, logoutAll } from "@/services/authService";
// import { login } from "@/services/guestService";
// import { Login } from "@/types/guest";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

export default function useLogin() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState<any>({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string | null>(null);
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

  const validateEmail = () => {
    if (!email) {
      setEmailError("Email is required!");
    } else {
      setEmailError(null);
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

    validateEmail();
    validatePassword();

    if (email && password && !emailError && !passwordError) {
      setIsLoading(true);
      try {
        setIsLoading(true);
        // const response = await login({
        //   email,
        //   password,
        // });

        // const data = response.data;

        // const accessToken: string = data.accessToken;
        // const encryptedAccessToken: string = encryptAccessToken(accessToken);

        // const user = data.user;
        // if (user.role === "user") {
        //   dispatch(
        //     setMessage({
        //       message: "Unauthorized access!",
        //       type: "error",
        //       showOn: "login",
        //     })
        //   );
        //   throw new Error("Unauthorized access");
        // }
        // const userData = JSON.stringify(user);
        // localStorage.setItem("accessToken", encryptedAccessToken);
        // localStorage.setItem("user", userData);

        // dispatch(setAuth(data.user));
        toast.success("Login Successful.");

        router.push("/verify-otp");
      } catch (error: any) {
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status < 500
        ) {
          if (error.response.data.errors) {
            const errors = error.response.data.errors;
            errors.map((error: any) => {
              const key = Object.keys(error)[0];
              const value = error[key];
              if (key === "email") {
                setEmailError(value);
              }
              if (key === "password") {
                setPasswordError(value);
              }
            });
          }
        }
        console.log(error);
        dispatch(
          setMessage({
            message: error.response.data?.message || "Something went wrong",
            type: "error",
            showOn: "login",
          })
        );
      } finally {
        setIsLoading(false);
      }
    }
  };

  const redirectIfAuthenticate = useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      router.push("/dashboard");
    }
  }, [router]);

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      //   const response = await logout();
      //   localStorage.removeItem("accessToken");
      //   localStorage.removeItem("user");
      //   dispatch(setAuth(null));
    } catch (error: any) {
    } finally {
      router.push("/");
      setIsLoading(false);
    }
  };

  const handleLogoutAll = async () => {
    try {
      //   const response = await logoutAll();
      //   setIsLoading(true);
      //   localStorage.removeItem("accessToken");
      //   localStorage.removeItem("user");
      //   dispatch(setAuth(null));
    } catch (error: any) {
    } finally {
      router.push("/");
      setIsLoading(false);
    }
  };

  return {
    email,
    password,
    formData,
    showPassword,
    emailError,
    passwordError,
    isLoading,
    redirectIfAuthenticate,
    handleChange,
    togglePasswordVisibility,
    validateEmail,
    validatePassword,
    onSubmit,
    handleLogout,
    handleLogoutAll,
  };
}
