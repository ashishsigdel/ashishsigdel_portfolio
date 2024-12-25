import { myAxios } from "../apiService";

export const getAll = async ({
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
      `/user/get-all?page=${page}&limit=${limit}&search=${search}`
    );

    return response.data;
  } catch (error: any) {
    throw error;
  }
};

export const deleteUser = async (id: number | string) => {
  try {
    const response = await myAxios.delete(`/user/delete/${id}`);

    return response.data;
  } catch (error: any) {
    throw error;
  }
};

export const getAllSubscriber = async ({
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
      `/newsletter/fetch-subscriber?page=${page}&limit=${limit}&search=${search}`
    );

    return response.data;
  } catch (error: any) {
    throw error;
  }
};
