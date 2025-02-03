import * as z from "zod";

export const adminLoginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Password must contain at least 8 characters"),
});
