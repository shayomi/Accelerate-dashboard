import * as z from "zod";

export const adminResetPasswordSchema = z
  .object({
    password: z.string().min(8, "Password must contain at least 8 characters"),
    passwordConfirmation: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords don't match",
    path: ["passwordConfirmation"],
  });
