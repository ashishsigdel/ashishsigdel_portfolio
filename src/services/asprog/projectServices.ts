import { ProjectCreate, ProjectUpdate } from "@/types/asprog";
import { myAxios } from "../apiService";

export const create = async (formData: ProjectCreate) => {
  const form = new FormData();
  form.append("title", formData.title);
  form.append("description", formData.description);
  if (formData.tags) {
    formData.tags.forEach((tag, index) => {
      form.append(`tags`, tag);
    });
  }
  form.append("coverPhoto", formData.coverImage);
  if (formData.demoLink) form.append("demoLink", formData.demoLink);
  if (formData.resourceLink) form.append("resourceLink", formData.resourceLink);
  if (formData.price) form.append("price", formData.price.toString());
  if (formData.actualPrice)
    form.append("actualPrice", formData.actualPrice.toString());

  try {
    const response = await myAxios.post("/creation/create", form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error: any) {
    throw error;
  }
};
export const update = async (formData: ProjectUpdate, uuid: string) => {
  const form = new FormData();
  form.append("title", formData.title);
  form.append("description", formData.description);
  if (formData.tags) {
    formData.tags.forEach((tag, index) => {
      form.append(`tags`, tag);
    });
  }
  form.append("resourceLink", formData.resourceLink);
  if (formData.coverImage) form.append("coverPhoto", formData.coverImage);
  if (formData.demoLink) form.append("demoLink", formData.demoLink);
  if (formData.price) form.append("price", formData.price.toString());
  if (formData.actualPrice)
    form.append("actualPrice", formData.actualPrice.toString());

  try {
    const response = await myAxios.post(`/creation/update/${uuid}`, form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

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
      `/creation/get-all?page=${page}&limit=${limit}&search=${search}`
    );
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

export const fetchUnique = async ({ uId }: { uId: string }) => {
  try {
    const response = await myAxios.get(`/creation/get-admin/${uId}`);
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

export const changeVisiblility = async (uuid: string) => {
  try {
    const response = await myAxios.put(`/creation/update-status/${uuid}`);
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

export const deleteProject = async (uuid: string) => {
  try {
    const response = await myAxios.delete(`/creation/delete/${uuid}`);
    return response.data;
  } catch (error: any) {
    throw error;
  }
};
