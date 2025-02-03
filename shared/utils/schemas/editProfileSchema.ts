import * as z from "zod";

export const editProfileSchema = z.object({
  name: z
    .string()
    .min(2, "Name must contain at least 2 characters")
    .max(50, "Name can contain up to 50 characters"),
  companyName: z.string().min(1, "Please provide the name of your company."),
  email: z.string().email("Please provide a valid email address.").optional(),
  country: z.string().min(1, "Please provide your country."),
});
