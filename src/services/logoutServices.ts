import { myAxios } from "./apiService";

export const logout = async () => {
  const response = await myAxios.post("/auth/logout");
  return response.data;
};

export const logoutAll = async () => {
  const response = await myAxios.post("/auth/logout-all");
  return response.data;
};
