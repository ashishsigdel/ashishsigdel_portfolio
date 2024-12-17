import { userLogin } from "@/types/user";
import { myAxios } from "./apiService";

export const login = async (formData: userLogin) => {
  try {
    const response = await myAxios.post("/auth/login", {
      username: formData.username,
      password: formData.password,
    });
    console.log(response);

    return response.data;
  } catch (error: any) {
    throw error;
    console.log(error);
  }
};
