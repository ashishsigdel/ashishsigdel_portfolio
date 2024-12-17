import { decryptAccessToken, encryptAccessToken } from "@/helper/Helper";
import axios, { AxiosInstance } from "axios";

export const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/v1`;

const myAxios: AxiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

const refreshAccessToken = async () => {
  try {
    const accessToken = decryptAccessToken(
      localStorage.getItem("accessToken") || ""
    );
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/refresh-token`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
      }
    );

    const newAccessToken: string = response.data.data.accessToken;

    const encryptedAccessToken: string = encryptAccessToken(newAccessToken);
    localStorage.setItem("accessToken", encryptedAccessToken);

    return newAccessToken;
  } catch (error: any) {
    localStorage.clear();
    window.location.href = "/";
  }
};

myAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    // this url will not be checked for refresh token
    const byPassUrls = [
      "/auth/login",
      "/auth/login/otp",
      "/auth/refresh-token",
      "/auth/register",
      "/reset-password/forgot-password",
      "/reset-password/verify-otp",
      "/reset-password/update-password",
      "/auth/verify",
      "/auth/resend-otp",
    ];

    if (error.config && byPassUrls.includes(error.config.url)) {
      throw error;
    }

    if (error.response && error.response.status === 401) {
      const newAccessToken: any = await refreshAccessToken();

      const originalRequest: any = error.config;
      originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
      return myAxios(originalRequest);
    }
    throw error;
  }
);

myAxios.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    const decryptedToken = decryptAccessToken(accessToken);
    config.headers.Authorization = `Bearer ${decryptedToken}`;
  }
  return config;
});

// create a incerceptor to see the request
// myAxios.interceptors.request.use((config) => {
//   console.log("Request was sent with this config:", config);
//   return config;
// });
export { myAxios };
