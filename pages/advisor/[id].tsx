// pages/advisors/[id].tsx
import React, { Fragment } from "react";
import { useRouter } from "next/router";
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import { AdvisorList } from "@/shared/data/advisorsdata";
import AdvisorDetails from "../../components/advisor/advisordetails";

const AdvisorDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Check if the id is a string and find the advisor by id
  const advisor =
    typeof id === "string"
      ? AdvisorList.find((advisor) => advisor.name === id)
      : undefined;

  if (!advisor) {
    return <div>Advisor not found</div>;
  }

  return (
    <Fragment>
      <AdvisorDetails advisor={advisor} />
    </Fragment>
  );
};

AdvisorDetailPage.layout = "Contentlayout";

export default AdvisorDetailPage;
