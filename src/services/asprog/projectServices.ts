import { ProjectCreate } from "@/types/asprog";
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

export const fetchAll = async ({
  page = 1,
  limit = 10,
}: {
  page: number;
  limit: number;
}) => {
  try {
    const response = await myAxios.get(
      `/creation/get-all?page=${page}&limit=${limit}`
    );
    return response.data;
  } catch (error: any) {
    throw error;
  }
};
