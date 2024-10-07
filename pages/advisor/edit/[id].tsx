import React from "react";
import { useRouter } from "next/router";
import { AdvisorList } from "@/shared/data/advisorsdata";
import CreateAdvisor from "@/components/advisor/create";

const EditAdvisorPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the advisor by ID
  const advisor = AdvisorList.find((advisor) => advisor.name === id);

  if (!advisor) {
    return <div>Advisor not found</div>;
  }

  return <CreateAdvisor advisorData={advisor} />;
};

EditAdvisorPage.layout = "Contentlayout";

export default EditAdvisorPage;
