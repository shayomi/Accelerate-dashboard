import React, { Fragment, useState } from "react";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Cohorts from "../../components/cohort/cohorts";
import ProgramPartner from "../../components/cohort/programpartner";

const Index = () => {
  const [activeTab, setActiveTab] = useState("cohorts"); // Active tab state

  return (
    <Fragment>
      <div className="">
        <div className="w-full">
          <div className="mt-4 border-b dark:border-defaultborder/10 border-dashed md:flex items-center justify-between">
            <nav className="-mb-0.5 sm:flex md:space-x-6 rtl:space-x-reverse pb-2">
              <button
                className={`w-full sm:w-auto flex rounded-md py-2 px-4 text-primary text-sm ${
                  activeTab === "cohorts" ? "text-white bg-primary" : "text-sm"
                }`}
                onClick={() => setActiveTab("cohorts")}
                aria-controls="activity-tab-pane"
                aria-selected={activeTab === "cohorts"}
              >
                <i className="ri-gift-line align-middle inline-block me-1"></i>
                Cohorts
              </button>
              <button
                className={`w-full sm:w-auto flex rounded-md py-2 px-4 text-primary text-sm ${
                  activeTab === "partner" ? "text-white bg-primary" : "text-sm"
                }`}
                onClick={() => setActiveTab("partner")}
                aria-controls="posts-tab-pane"
                aria-selected={activeTab === "partner"}
              >
                <i className="ri-bill-line me-1 align-middle inline-block"></i>
                Partner
              </button>
            </nav>
          </div>

          <div className="!p-4">
            <div className="tab-content" id="myTabContent">
              {/* Cohorts tab content */}
              {activeTab === "cohorts" && (
                <div
                  className="tab-pane show active fade !p-0 !border-0"
                  id="activity-tab-pane"
                  role="tabpanel"
                  aria-labelledby="activity-tab"
                >
                  <Cohorts />
                </div>
              )}

              {/* Program Partner tab content */}
              {activeTab === "partner" && (
                <div
                  className="tab-pane fade !p-0 !border-0 show active"
                  id="posts-tab-pane"
                  role="tabpanel"
                  aria-labelledby="posts-tab"
                >
                  <ProgramPartner />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Index.layout = "Contentlayout";
export default Index;
