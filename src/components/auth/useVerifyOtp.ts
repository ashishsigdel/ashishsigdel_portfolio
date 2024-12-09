import { setMessage } from "@/redux/features/popupMessageSlice";

import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import toast from "react-hot-toast";

const BASE_DOMAIN = process.env.NEXT_PUBLIC_BASE_DOMAIN;
const NODE_ENV = process.env.NODE_ENV;

export default function useVerifyOtp() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState<any>({
    otp: "",
  });

  const { otp } = formData;

  const [otpError, setOtpError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [countdown, setCountdown] = useState<number | null>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (countdown !== null && countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const updatedFormData = {
      ...formData,
      [event.target.name]: event.target.value,
    };
    setFormData(updatedFormData);
  };

  const validateOtp = () => {
    if (otpInputs.join("")) {
      if (!(otpInputs.length === 6)) {
        setOtpError("Otp invalid!");
      } else {
        setOtpError("");
      }
    } else {
      setOtpError("Otp Required!");
    }
  };

  const resendOTP = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.success("Otp sent.");
  };

  const [otpInputs, setOtpInputs] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const handleOtpInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const input = e.target.value;
    if (/^\d$/.test(input)) {
      const newOtpInputs = [...otpInputs];
      newOtpInputs[index] = input;
      setOtpInputs(newOtpInputs);

      if (index < 5 && input !== "") {
        const nextInputRef = inputRefs[index + 1];
        if (nextInputRef.current) {
          nextInputRef.current.focus();
        }
      }
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace") {
      if (otpInputs[index] === "" && index > 0) {
        const prevInputRef = inputRefs[index - 1];
        if (prevInputRef.current) {
          prevInputRef.current.focus();
        }
      }
      const newOtpInputs = [...otpInputs];
      newOtpInputs[index] = "";
      setOtpInputs(newOtpInputs);
    }
  };

  const isVerifyButtonEnabled = otpInputs.every((input) => input !== "");

  // Function to reset OTP input and error message
  const resetOtpInput = () => {
    setOtpInputs(["", "", "", "", "", ""]);
    if (otpError) {
      setOtpError("");
    }
  };

  const onSubmitOTPVefify = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    validateOtp();
    const otp = otpInputs.join("");
    const stringOTP = otp.toString();
    if (!otpError) {
      setIsLoading(true);
      try {
        if (otp === "153490") {
          toast.success("OTP verified!");
          router.push(
            `${
              NODE_ENV === "development" ? "http" : "https"
            }://admin.${BASE_DOMAIN}`
          );
        } else {
          toast.error("Invalid OTP!");
          resetOtpInput();
          return;
        }
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
              if (key === "otp") {
                setOtpError(value);
              }
            });
          }
          dispatch(
            setMessage({
              message: error.response.data.message,
              type: "error",
              showOn: "verify-otp",
            })
          );
          return;
        }
        dispatch(
          setMessage({
            message: "Something went wrong",
            type: "error",
            showOn: "verify-otp",
          })
        );
      } finally {
        setIsLoading(false);
      }
    }
  };

  return {
    otp,
    formData,
    otpError,
    isLoading,
    otpInputs,
    inputRefs,
    isVerifyButtonEnabled,
    router,
    handleChange,
    validateOtp,
    onSubmitOTPVefify,
    handleOtpInputChange,
    resetOtpInput,
    handleKeyDown,
    resendOTP,
    useEffect,
    dispatch,
    countdown,
    setCountdown,
  };
}
