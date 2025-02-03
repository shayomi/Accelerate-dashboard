import * as z from "zod";

export const changePasswordSchema = z.object({
  currentPassword: z
    .string()
    .min(8, "Password must contain at least 8 characters"),
  password: z.string().min(8, "Password must contain at least 8 characters"),
  passwordConfirmation: z.string(),
});
