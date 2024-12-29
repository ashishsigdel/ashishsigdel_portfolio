import { myAxios } from "../apiService";

export const create = async (profilePic: File) => {
  try {
    const response = await myAxios.post(
      "/profile/create",
      {
        profilePic,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

export const getAll = async (page: number) => {
  try {
    const response = await myAxios.get(
      `/profile/get-all?page=${page}&limit=10`
    );
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

export const update = async (id: string) => {
  try {
    const response = await myAxios.put(`/profile/update/${id}`, {});
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

export const deleteProfile = async (id: string) => {
  try {
    const response = await myAxios.delete(`/profile/delete/${id}`);
    return response.data;
  } catch (error: any) {
    throw error;
  }
};
