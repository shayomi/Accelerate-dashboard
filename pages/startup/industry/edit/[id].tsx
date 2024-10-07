import React from "react";
import { useRouter } from "next/router";
import { IndustriesList } from "@/components/startup/industry";
import { StartupsList } from "@/shared/data/startupsdata";
import ManageIndustry from "@/components/startup/createIndustry";

const EditIndustryPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the industry by ID
  const industry = IndustriesList.find(
    (industry) => industry.id === Number(id)
  ) || {
    id: Number(id),
    name: "",
    slug: "",
    startupIds: [],
  };

  // Extract startup names for the multi-select dropdown
  const startupOptions = StartupsList.map((startup) => startup.companyName);

  return (
    <div>
      <ManageIndustry
        industryData={industry} // Ensure industryData matches the expected type
        startupOptions={startupOptions}
      />
    </div>
  );
};

EditIndustryPage.layout = "Contentlayout";

export default EditIndustryPage;
