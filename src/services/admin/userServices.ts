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
export const getAllStudyhere = async ({
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
      `/user/get-all-studyhere?page=${page}&limit=${limit}&search=${search}`
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

export const getProfile = async () => {
  try {
    const response = await myAxios.get(`/user/get`);

    return response.data;
  } catch (error: any) {
    throw error;
  }
};

export const update = async (email: string, fullName: string) => {
  try {
    const response = await myAxios.put("/user/update", {
      email,
      fullName,
    });

    return response.data;
  } catch (error: any) {
    throw error;
  }
};

export const changePassword = async (
  oldPassword: string,
  password: string,
  confirmPassword: string
) => {
  try {
    const response = await myAxios.put("/user/update-password", {
      oldPassword,
      password,
      confirmPassword,
    });

    return response.data;
  } catch (error: any) {
    throw error;
  }
};

export const toggle2FA = async () => {
  try {
    const response = await myAxios.put("/user/toggletwofactor", {});

    return response.data;
  } catch (error: any) {
    throw error;
  }
};
