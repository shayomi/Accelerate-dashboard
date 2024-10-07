import React from "react";
import { useRouter } from "next/router";
import { Cohort } from "@/shared/types";
import cohorts from "@/components/cohort/cohorts";
import CohortDetail from "@/components/cohort/cohortdetails";
import { cohortsList } from "@/shared/data/cohortsdata";

const CohortDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const cohort = cohortsList.find((cohort: Cohort) => cohort.id === id);

  if (!cohort) {
    return <div>Cohort not found</div>;
  }

  return <CohortDetail cohort={cohort} />;
};

CohortDetailPage.layout = "Contentlayout";

export default CohortDetailPage;
