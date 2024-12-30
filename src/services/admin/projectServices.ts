import { myAxios } from "../apiService";

export const create = async (
  title: string,
  description: string,
  tags: string[],
  coverImage: File,
  githubLink: string,
  previewLink: string,
  previewImages: File[]
) => {
  const form = new FormData();
  form.append("title", title);
  form.append("description", description);
  if (tags) {
    tags.forEach((tag, index) => {
      form.append(`tags`, tag);
    });
  }
  form.append("coverPhoto", coverImage);
  if (previewImages.length > 0) {
    previewImages.forEach((previewPic, index) => {
      form.append(`previewPic`, previewPic);
    });
  }
  if (githubLink) form.append("githubLink", githubLink);
  if (previewLink) form.append("previewLink", previewLink);

  try {
    const response = await myAxios.post("/project/create", form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

export const update = async (
  title: string,
  description: string,
  tags: string[],
  coverImage: File | null,
  githubLink: string,
  previewLink: string,
  previewImages: File[],
  uuid: string
) => {
  const form = new FormData();
  form.append("title", title);
  form.append("description", description);
  if (tags) {
    tags.forEach((tag, index) => {
      form.append(`tags`, tag);
    });
  }
  if (coverImage) form.append("coverPhoto", coverImage);
  form.append("githubLink", githubLink);
  form.append("previewLink", previewLink);
  if (previewImages.length > 0) {
    previewImages.forEach((previewPic, index) => {
      form.append(`previewPic`, previewPic);
    });
  }

  try {
    const response = await myAxios.put(`/project/update/${uuid}`, form, {
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
      `/project/get-all?page=${page}&limit=${limit}&search=${search}`
    );
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

export const fetchUnique = async ({ uId }: { uId: string }) => {
  try {
    const response = await myAxios.get(`/project/get-admin/${uId}`);
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

export const changeVisiblility = async (uuid: string) => {
  try {
    const response = await myAxios.put(`/project/update-status/${uuid}`);
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

export const deleteProject = async (uuid: string) => {
  try {
    const response = await myAxios.delete(`/project/delete/${uuid}`);
    return response.data;
  } catch (error: any) {
    throw error;
  }
};
