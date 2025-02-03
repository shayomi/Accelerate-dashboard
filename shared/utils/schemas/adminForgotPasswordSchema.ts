import * as z from "zod";

export const adminForgotPasswordSchema = z.object({
  email: z.string().email("Invalid email"),
});
