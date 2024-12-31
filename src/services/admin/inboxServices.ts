import { myAxios } from "../apiService";

export const fetchAll = async (page: number) => {
  try {
    const response = await myAxios.get(
      `/contact/get-all?page=${page}&limit=10`
    );
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

export const updateSeen = async (id: number) => {
  try {
    const response = await myAxios.put(`/contact/seen/${id}`, {});
    return response.data;
  } catch (error: any) {
    throw error;
  }
};
