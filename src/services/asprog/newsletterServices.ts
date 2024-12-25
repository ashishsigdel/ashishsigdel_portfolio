import { myAxios } from "../apiService";

export const subscribe = async (email: string, fullName: string) => {
  try {
    const response = await myAxios.post("/newsletter/subscribe", {
      fullName,
      email,
    });

    return response.data;
  } catch (error: any) {
    throw error;
    console.log(error);
  }
};

export const getEmail = async (uuid: string) => {
  try {
    const response = await myAxios.get(`/newsletter/get-email/${uuid}`);
    return response.data;
  } catch (error: any) {
    throw error;
    console.log(error);
  }
};

export const unsubscribe = async (email: string) => {
  try {
    const response = await myAxios.post("/newsletter/unsubscribe", {
      email,
    });

    return response.data;
  } catch (error: any) {
    throw error;
  }
};

export const sendNewsletter = async ({
  selectedUserIds,
  subject,
  message,
}: {
  selectedUserIds: number[];
  subject: string;
  message: string;
}) => {
  try {
    const response = await myAxios.post("/newsletter/send", {
      selectedIds: selectedUserIds,
      subject,
      description: message,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
