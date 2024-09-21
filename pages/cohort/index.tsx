import React, { Fragment } from "react";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import Cohorts from "../components/cohort/cohorts";
import Partners from "../components/applications/partners";
import ProgramPartner from "../components/cohort/programpartner";

const index = () => {
  return (
    <Fragment>
      <Seo title={"Cohort Management"} />
      <Pageheader
        currentpage="Cohort"
        activepage="Dashboard"
        mainpage="Cohort"
      />

      <div className="px-4 py-4 w-full mb-12">
        <div className="w-full">
          <div className="!p-4 border-b dark:border-defaultborder/10 border-dashed md:flex items-center justify-between">
            <nav className="-mb-0.5 sm:flex md:space-x-6 rtl:space-x-reverse pb-2">
              <Link
                className="w-full sm:w-auto flex active hs-tab-active:font-semibold  hs-tab-active:text-white hs-tab-active:bg-primary rounded-md py-2 px-4 text-primary text-sm"
                href="#!"
                id="activity-tab"
                data-hs-tab="#activity-tab-pane"
                aria-controls="activity-tab-pane"
              >
                <i className="ri-gift-line  align-middle inline-block me-1"></i>
                Cohorts
              </Link>
              <Link
                className="w-full sm:w-auto flex hs-tab-active:font-semibold  hs-tab-active:text-white hs-tab-active:bg-primary rounded-md  py-2 px-4 text-primary text-sm"
                href="#!"
                id="posts-tab"
                data-hs-tab="#posts-tab-pane"
                aria-controls="posts-tab-pane"
              >
                <i className="ri-bill-line me-1 align-middle inline-block"></i>
                Partner
              </Link>
            </nav>
          </div>

          <div className="!p-4">
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane show active fade !p-0 !border-0"
                id="activity-tab-pane"
                role="tabpanel"
                aria-labelledby="activity-tab"
              >
                <Cohorts />
              </div>
              <div
                className="tab-pane fade !p-0 !border-0 hidden !rounded-md"
                id="posts-tab-pane"
                role="tabpanel"
                aria-labelledby="posts-tab"
              >
                <ProgramPartner />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

index.layout = "Contentlayout";
export default index;
