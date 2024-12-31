import { myAxios } from "../apiService";

export const getDashboard = async () => {
  try {
    const response = await myAxios.get(`/dashboard`);
    return response.data;
  } catch (error: any) {
    throw error;
  }
};
