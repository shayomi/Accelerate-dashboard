import * as z from "zod";

export const adminRegistrationSchema = z.object({
  name: z
    .string()
    .min(2, "Name must contain at least 2 characters")
    .max(50, "Name can contain up to 50 characters"),
  email: z.string().email("Invalid email"),
  companyName: z.string().min(1, "Please provide the name of your company."),
  profileType: z.string().min(1, "Please select your profile type."),
  country: z.string().min(1, "Please provide your country."),
  password: z.string().min(8, "Password must contain at least 8 characters"),
});
