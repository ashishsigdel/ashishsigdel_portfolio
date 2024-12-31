import { myAxios } from "../apiService";

export const sendMessage = async (
  fullName: string,
  email: string,
  company: string,
  message: string
) => {
  try {
    const response = await myAxios.post("/contact", {
      fullName,
      email,
      company,
      message,
    });
    return response.data;
  } catch (error: any) {
    throw error;
  }
};
