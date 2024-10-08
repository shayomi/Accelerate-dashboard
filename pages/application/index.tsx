import React, { Fragment, useState } from "react";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import Investors from "../../components/applications/investors";
import Partners from "../../components/applications/partners";

const Index = () => {
  const [activeTab, setActiveTab] = useState("investors");

  return (
    <Fragment>
      <div className="">
        <div className="w-full">
          <div className="mt-4 border-b dark:border-defaultborder/10 border-dashed flex flex-col sm:flex-row items-center justify-between">
            <nav className="-mb-0.5 sm:flex md:space-x-6 rtl:space-x-reverse pb-2">
              <Link
                className={`w-full sm:w-auto flex ${
                  activeTab === "investors"
                    ? "text-white bg-primary"
                    : "text-sm"
                } rounded-md py-2 px-4 text-sm`}
                href="#!"
                onClick={() => setActiveTab("investors")}
                id="activity-tab"
                aria-controls="activity-tab-pane"
              >
                <i className="ri-gift-line align-middle inline-block me-1"></i>
                Investors
              </Link>
              <Link
                className={`w-full sm:w-auto flex ${
                  activeTab === "partners" ? "text-white bg-primary" : "text-sm"
                } rounded-md py-2 px-4 text-sm`}
                href="#!"
                onClick={() => setActiveTab("partners")}
                id="posts-tab"
                aria-controls="posts-tab-pane"
              >
                <i className="ri-bill-line me-1 align-middle inline-block"></i>
                Partners
              </Link>
            </nav>
            <div className="flex justify-end mb-4">
              <button className="bg-green text-white py-2 px-4 rounded-md mr-3">
                <Link href="/application/investor/create">Add Investors</Link>
              </button>
              <button className="bg-purple text-white py-2 px-4 rounded-md">
                <Link href="/application/partner/create">Add Partner</Link>
              </button>
            </div>
          </div>

          <div className="!p-4">
            <div className="tab-content" id="myTabContent">
              {activeTab === "investors" && (
                <div
                  className="tab-pane show active fade !p-0 !border-0"
                  id="activity-tab-pane"
                  role="tabpanel"
                  aria-labelledby="activity-tab"
                >
                  <Investors />
                </div>
              )}
              {activeTab === "partners" && (
                <div
                  className="tab-pane fade !p-0 !border-0"
                  id="posts-tab-pane"
                  role="tabpanel"
                  aria-labelledby="posts-tab"
                >
                  <Partners />
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
