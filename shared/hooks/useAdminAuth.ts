import { useMutation, useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import {
  adminLogin,
  changePassword,
  fetchUserProfile,
  updateProfile,
} from "../services/api/auth";
import { adminUserAtom, isAdminAuthenticatedAtom } from "../store/authAtoms";

export const useAdminAuth = () => {
  const router = useRouter();
  const [adminUser, setAdminUser] = useAtom(adminUserAtom);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useAtom(
    isAdminAuthenticatedAtom
  );

  const getAdminLoggedIn = (data: any) => {
    const { jwt, user } = data;

    if (user?.profileType !== "Admin") {
      window.alert("Authentication failed. Please try again.");
      return;
    }

    if (typeof window !== "undefined") {
      localStorage.setItem("adminAuthToken", jwt);
    }
    setAdminUser(user);
    setIsAdminAuthenticated(true);
    router.push("/app/dashboard");
  };

  const { mutate: loginAdmin, isPending: isAdminLoginLoading } = useMutation({
    mutationFn: adminLogin,
    onSuccess: (data) => {
      getAdminLoggedIn(data);
    },
    onError: (error: any) => {
      console.error("Admin login error:", error);
      window.alert(error.response.data.error.message);
    },
  });

  const {
    data: adminData,
    isLoading: isAdminProfileLoading,
    refetch: refetchAdminProfile,
  } = useQuery({
    queryKey: ["adminProfile"],
    queryFn: fetchUserProfile,
    enabled:
      typeof window !== "undefined" && !!localStorage.getItem("adminAuthToken"),
  });

  useEffect(() => {
    if (adminData) {
      setAdminUser(adminData);
      setIsAdminAuthenticated(true);
    }
  }, [adminData, setAdminUser, setIsAdminAuthenticated]);

  const { mutate: updateAdminProfile } = useMutation({
    mutationFn: updateProfile,
    onError: (error: any) => {
      window.alert(error.response.data.error.message);
    },
    onSuccess() {
      refetchAdminProfile();
      window.alert("Profile updated successfully");
    },
  });

  const { mutate: adminChangePassword } = useMutation({
    mutationFn: changePassword,
    onError: (error: any) => {
      window.alert(error.response.data.error.message);
    },
    onSuccess() {
      window.alert("Password changed successfully");
    },
  });

  const adminLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("adminAuthToken");
    }
    setAdminUser(null);
    setIsAdminAuthenticated(false);
    router.push("/login");
  };

  return {
    adminUser,
    isAdminAuthenticated,
    loginAdmin,
    isAdminLoggingIn: isAdminLoginLoading,
    isAdminProfileLoading,
    updateAdminProfile,
    refetchAdminProfile,
    adminLogout,
    getAdminLoggedIn,
    adminChangePassword,
  };
};
