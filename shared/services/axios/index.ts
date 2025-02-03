import axios, { AxiosError } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://devapi.acceler8.africa/api/v1",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const adminAuthToken =
      typeof window !== "undefined" && localStorage.getItem("adminAuthToken");
    if (!config.params || !config.params.public) {
      if (adminAuthToken) {
        config.headers["Authorization"] = `Bearer ${adminAuthToken}`;
      }
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (
      (error.response && error.response.status === 401) ||
      error.response.status === 403
    ) {
      if (typeof window !== "undefined") {
        localStorage.removeItem("adminAuthToken");
        localStorage.removeItem("adminUser");
      }

      if (
        typeof window !== "undefined" &&
        window.location.pathname.startsWith("/admins/")
      ) {
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
