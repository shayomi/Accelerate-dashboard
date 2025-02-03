import { atom } from "jotai";

export interface AdminUser {
  id: number;
  username: string;
  email: string;
  name: string;
  country: string;
  profileType: string;
  companyName: string;
}

export const adminUserAtom = atom<AdminUser | null>(null);
export const isAdminAuthenticatedAtom = atom(false);
