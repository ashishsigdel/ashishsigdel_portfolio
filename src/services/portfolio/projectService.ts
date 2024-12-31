import { myAxios } from "../apiService";

export const fetchAll = async ({
  page = 1,
  limit = 10,
  search = "",
}: {
  page: number;
  limit: number;
  search?: string;
}) => {
  try {
    const response = await myAxios.get(
      `/project/get?page=${page}&limit=${limit}&search=${search}`
    );
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

export const fetchUnique = async (id: number) => {
  try {
    const response = await myAxios.get(`/project/get-by-id/${id}`);
    return response.data;
  } catch (error: any) {
    throw error;
  }
};
