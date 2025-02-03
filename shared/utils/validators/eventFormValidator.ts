import {
  accreditedInvestorSchema,
  angelNetworkDescriptionSchema,
  angelNetworkSchema,
  eventRegformSchema,
  eventTypesSchema,
  hasInvestedInStartupBeforeSchema,
  howRecentlyInvestedInStartupSchema,
  intendedInvestmentAmountSchema,
  roomNeedSchema,
  visaSupportSchema,
} from "@/utils/schemas/eventRegSchema";
import { z } from "zod";

export const validateInvestorSection = (
  values: z.infer<typeof eventRegformSchema>,
  form: any
) => {
  let isValid = true;

  if (values.profileType === "Investor") {
    if (!intendedInvestmentAmountSchema.safeParse(values).success) {
      form.setError("intendedInvestmentAmount", {
        type: "manual",
        message: "Please describe your intended investment amount.",
      });
      isValid = false;
    }

    if (!accreditedInvestorSchema.safeParse(values).success) {
      form.setError("isAccreditedInvestor", {
        type: "manual",
        message: "Please select if you are an accredited investor.",
      });
      isValid = false;
    }

    if (!hasInvestedInStartupBeforeSchema.safeParse(values).success) {
      form.setError("hasInvestedInStartupBefore", {
        type: "manual",
        message: "Please select if you have invested in a startup before.",
      });
      isValid = false;
    }

    if (
      values.hasInvestedInStartupBefore === "Yes" &&
      !howRecentlyInvestedInStartupSchema.safeParse(values).success
    ) {
      form.setError("howRecentlyInvestedInStartup", {
        type: "manual",
        message: "Please describe how recently you invested in a startup.",
      });
      isValid = false;
    }

    if (!eventTypesSchema.safeParse(values).success) {
      form.setError("eventTypes", {
        type: "manual",
        message: "Please select at least one event.",
      });
      isValid = false;
    } else {
      form.clearErrors("eventTypes");
    }

    if (!angelNetworkSchema.safeParse(values).success) {
      form.setError("isPartOfAngelNetwork", {
        type: "manual",
        message: "Please select if you are part of an angel network.",
      });
      isValid = false;
    } else {
      form.clearErrors("isPartOfAngelNetwork");
    }
  } else {
    form.clearErrors("intendedInvestmentAmount");
    form.clearErrors("isAccreditedInvestor");
    form.clearErrors("hasInvestedInStartupBefore");
    form.clearErrors("howRecentlyInvestedInStartup");
    form.clearErrors("eventTypes");
    form.clearErrors("isPartOfAngelNetwork");
  }

  return isValid;
};
