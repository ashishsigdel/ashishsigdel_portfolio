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
