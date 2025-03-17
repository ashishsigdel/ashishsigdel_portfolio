"use client";
import { sendMessage } from "@/services/portfolio/contactService";
import React, { FormEvent, useState } from "react";

export default function useContact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [aggree, setAggree] = useState(false);
  const [nameError, setNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [messageError, setMessageError] = useState<string | null>(null);
  const [checkBoxError, setCheckBoxError] = useState<string | null>(null);
  const [responseMessage, setResponseMessage] = useState<string | undefined>(
    undefined
  );
  const [errorResponseMessage, setErrorResponseMessage] = useState<
    string | undefined
  >(undefined);
  const [loading, setLoading] = useState(false);

  const validateName = () => {
    if (!fullName) {
      setNameError("Name is required!");
    } else {
      setNameError(null);
    }
  };

  const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError("Email is required!");
    } else if (!emailPattern.test(email)) {
      setEmailError("Invalid email format!");
    } else {
      setEmailError(null);
    }
  };

  const validateMessage = () => {
    if (!message) {
      setMessageError("Message is required!");
    } else {
      setMessageError(null);
    }
  };
  const validateCheckbox = () => {
    if (!aggree) {
      setCheckBoxError("You must agree to send message!");
    } else {
      setCheckBoxError(null);
    }
  };

  const resetForm = () => {
    setFullName("");
    setEmail("");
    setCompany("");
    setMessage("");
    setAggree(false);
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Perform validations
    validateName();
    validateEmail();
    validateMessage();
    validateCheckbox();

    if (
      fullName &&
      email &&
      message &&
      !nameError &&
      !emailError &&
      !messageError &&
      aggree &&
      !checkBoxError
    ) {
      setLoading(true);
      try {
        // Send the email
        await sendMessage(fullName, email, company, message);

        resetForm();
        setResponseMessage("Message sent successfully!");
      } catch (error: any) {
        setErrorResponseMessage(
          error?.response?.data?.message ||
            "Failed to send message. Please try again later."
        );
      } finally {
        setLoading(false);
      }
    }
  };

  return {
    fullName,
    setFullName,
    email,
    setEmail,
    company,
    setCompany,
    message,
    setMessage,
    aggree,
    setAggree,
    onsubmit,
    validateName,
    validateEmail,
    validateMessage,
    validateCheckbox,
    nameError,
    emailError,
    messageError,
    checkBoxError,
    responseMessage,
    onSubmit,
    errorResponseMessage,
    setResponseMessage,
    loading,
  };
}
