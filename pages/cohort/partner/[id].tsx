import React from "react";
import { useRouter } from "next/router";
import { Partner } from "@/shared/types";
import { partners } from "@/shared/data/partnerdata";
import PartnerDetails from "@/pages/components/cohort/partnerdetails";

const PartnerDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const partner = partners.find((partner: Partner) => partner.id === id);

  if (!partner) {
    return <div>Partner not found</div>;
  }

  return <PartnerDetails partner={partner} />;
};

PartnerDetailPage.layout = "Contentlayout";

export default PartnerDetailPage;
