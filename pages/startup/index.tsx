import React, { Fragment, useState } from "react";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Investors from "../../components/applications/investors";
import Partners from "../../components/applications/partners";
import Startups from "../../components/startup/startups";
import Industry from "../../components/startup/industry";

const Index = () => {
  const [activeTab, setActiveTab] = useState("startups");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <Fragment>
      <div className="">
        <div className="w-full">
          <div className="mt-4 border-b dark:border-defaultborder/10 border-dashed md:flex items-center justify-between">
            <nav className="-mb-0.5 sm:flex md:space-x-6 rtl:space-x-reverse pb-2">
              <button
                className={`w-full sm:w-auto flex ${
                  activeTab === "startups"
                    ? "hs-tab-active:font-semibold hs-tab-active:text-white hs-tab-active:bg-primary"
                    : "text-white"
                } rounded-md py-2 px-4 text-primary text-sm`}
                onClick={() => handleTabClick("startups")}
              >
                <i className="ri-gift-line  align-middle inline-block me-1"></i>
                Startups
              </button>
              <button
                className={`w-full sm:w-auto flex ${
                  activeTab === "industry"
                    ? "hs-tab-active:font-semibold hs-tab-active:text-white hs-tab-active:bg-primary"
                    : "text-white"
                } rounded-md py-2 px-4 text-primary text-sm`}
                onClick={() => handleTabClick("industry")}
              >
                <i className="ri-bill-line me-1 align-middle inline-block"></i>
                Industry
              </button>
            </nav>
          </div>

          <div className="!p-4">
            <div className="tab-content" id="myTabContent">
              {activeTab === "startups" && (
                <div className="tab-pane show active fade !p-0 !border-0">
                  <Startups />
                </div>
              )}
              {activeTab === "industry" && (
                <div className="tab-pane show active fade !p-0 !border-0">
                  <Industry />
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
