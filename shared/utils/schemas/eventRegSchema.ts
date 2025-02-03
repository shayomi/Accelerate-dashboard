import * as z from "zod";

export const eventRegformSchema = z.object({
  name: z
    .string()
    .min(2, "Name must contain at least 2 characters")
    .max(50, "Name can contain up to 50 characters"),
  email: z.string().email("Invalid email"),
  companyName: z.string().min(1, "Please provide the name of your company."),
  profileType: z.string().min(1, "Please select your profile type."),
  country: z.string().min(1, "Please provide your country."),
  attendanceType: z.string().min(1, "Please confirm your attendance type."),
  visaSupport: z.string().optional(),
  roomNeed: z.string().optional(),
  eventTypes: z.array(z.string()).optional(),
  isPartOfAngelNetwork: z.string().optional(),
  angelNetworkDescription: z.string().optional(),
  intendedInvestmentAmount: z.string().optional(),
  isAccreditedInvestor: z.string().optional(),
  hasInvestedInStartupBefore: z.string().optional(),
  howRecentlyInvestedInStartup: z.string().optional(),
});

export const visaSupportSchema = z.object({
  visaSupport: z.string().min(1, "Please select if you need visa support."),
});

export const roomNeedSchema = z.object({
  roomNeed: z.string().min(1, "Please select if you need a hotel room."),
});

export const eventTypesSchema = z.object({
  eventTypes: z.array(z.string()).min(1, "Please select at least one event."),
});

export const angelNetworkSchema = z.object({
  isPartOfAngelNetwork: z
    .string()
    .min(1, "Please select if you are part of an angel network."),
});

export const angelNetworkDescriptionSchema = z.object({
  angelNetworkDescription: z
    .string()
    .min(1, "Please describe your angel network."),
});

export const intendedInvestmentAmountSchema = z.object({
  intendedInvestmentAmount: z
    .string()
    .min(1, "Please describe your intended investment amount."),
});

export const accreditedInvestorSchema = z.object({
  isAccreditedInvestor: z
    .string()
    .min(1, "Please select if you are an accredited investor."),
});

export const hasInvestedInStartupBeforeSchema = z.object({
  hasInvestedInStartupBefore: z
    .string()
    .min(1, "Please select if you have invested in a startup before."),
});

export const howRecentlyInvestedInStartupSchema = z.object({
  howRecentlyInvestedInStartup: z
    .string()
    .min(1, "Please describe how recently you invested in a startup."),
});