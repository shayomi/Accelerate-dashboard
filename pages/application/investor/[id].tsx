import InvestorDetails from "@/components/applications/investordetails";
import { InvestorsList } from "@/shared/data/applicationdata";
import { useRouter } from "next/router";

import React from "react";

const InvestorDetailPage = () => {
  const router = useRouter();
  const { id } = router.query; // Get the 'id' from the URL

  // Find the investor by 'id'
  const investor = InvestorsList.find((inv) => inv.id === id);

  return (
    <div>
      <InvestorDetails investor={investor} />
    </div>
  );
};

InvestorDetailPage.layout = "Contentlayout";
export default InvestorDetailPage;
