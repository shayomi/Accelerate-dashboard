import ManageIndustry from "@/components/startup/createIndustry";
import { StartupsList } from "@/shared/data/startupsdata";
import React from "react";

const CreateIndustryPage = () => {
  // Ensure startups list is correctly initialized
  const startupOptions =
    StartupsList?.map((startup) => startup.companyName) || [];

  // Valid industry data structure
  const industryData = { id: 0, name: "", slug: "", startupIds: [] };

  return (
    <div>
      <ManageIndustry
        startupOptions={startupOptions}
        industryData={industryData}
      />
    </div>
  );
};

CreateIndustryPage.layout = "Contentlayout";
export default CreateIndustryPage;
