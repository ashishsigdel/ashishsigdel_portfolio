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
      `/creation/get?page=${page}&limit=${limit}&search=${search}`
    );
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

export const fetchUnique = async ({ uId }: { uId: string }) => {
  try {
    const response = await myAxios.get(`/creation/get/${uId}`);
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

export const getResourceLink = async ({
  uId,
  email,
  fullName,
}: {
  uId: string;
  email: string;
  fullName: string;
}) => {
  try {
    const response = await myAxios.post(`/creation/get-link/${uId}`, {
      email,
      fullName,
    });
    return response.data;
  } catch (error: any) {
    throw error;
  }
};
