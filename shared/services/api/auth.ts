import exp from "constants";
import axiosInstance from "../axios";

export const adminRegister = async (registerData: any) => {
  const registrationData = {
    ...registerData,
    username: registerData.email,
  };

  const { data } = await axiosInstance.post(
    "/auth/local/register",
    registrationData,
    {
      params: { public: true },
    }
  );

  return data;
};

export const adminLogin = async (loginData: any) => {
  const { data } = await axiosInstance.post(
    "/auth/local",
    {
      identifier: loginData.email,
      password: loginData.password,
    },
    { params: { public: true } }
  );

  return data;
};

export const fetchUserProfile = async () => {
  const { data } = await axiosInstance.get("/users/me");
  return data;
};

export const updateProfile = async (profileData: any) => {
  const { userId, ...rest } = profileData;
  const { data } = await axiosInstance.put(`/users/${userId}`, rest);
  return data;
};

export const adminForgotPassword = async (email: string) => {
  const { data } = await axiosInstance.post(
    "/auth/forgot-password",
    {
      email,
    },
    { params: { public: true } }
  );

  return data;
};

export const adminResetPassword = async (resetData: any) => {
  const { data } = await axiosInstance.post(
    "/auth/reset-password",
    {
      code: resetData.code,
      password: resetData.password,
      passwordConfirmation: resetData.passwordConfirmation,
    },
    { params: { public: true } }
  );

  return data;
};

export const changePassword = async (passwordData: any) => {
  const { data } = await axiosInstance.post(
    "/auth/change-password",
    passwordData
  );

  return data;
};
