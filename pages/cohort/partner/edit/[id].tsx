import React from "react";
import { useRouter } from "next/router";
import { Partner } from "@/types";
import { partners } from "@/pages/components/cohort/partnerdata";
import PartnerForm from "@/pages/components/cohort/partnerform";

const Edit = () => {
  const router = useRouter();
  const { id } = router.query;

  const partner = partners.find((partner: Partner) => partner.id === id);

  if (!partner) {
    return <div>Partner not found</div>;
  }

  return (
    <div>
      <h1>Edit Partner</h1>
      <PartnerForm partner={partner} />
    </div>
  );
};

Edit.layout = "Contentlayout";

export default Edit;
