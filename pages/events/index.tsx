/* eslint-disable eol-last */
/* eslint-disable no-multiple-empty-lines */
import React, { Fragment, useState } from "react";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import Events from "../../components/event/events";
import Speaker from "../../components/event/speakers";

const Index = () => {
  const [activeTab, setActiveTab] = useState("events");

  return (
    <Fragment>
      <div className="">
        <div className="w-full">
          <div className="border-b dark:border-defaultborder/10 border-dashed md:flex items-center justify-between mt-4">
            <nav className="-mb-0.5 sm:flex md:space-x-6 rtl:space-x-reverse pb-2">
              <Link
                className={`w-full sm:w-auto flex ${
                  activeTab === "events"
                    ? "hs-tab-active:font-semibold hs-tab-active:text-white hs-tab-active:bg-primary"
                    : "text-primary"
                } rounded-md py-2 px-4 text-sm`}
                href="#!"
                onClick={() => setActiveTab("events")}
                id="activity-tab"
                aria-controls="activity-tab-pane"
              >
                <i className="ri-gift-line align-middle inline-block me-1"></i>
                Events
              </Link>
              <Link
                className={`w-full sm:w-auto flex ${
                  activeTab === "speakers"
                    ? "hs-tab-active:font-semibold hs-tab-active:text-white hs-tab-active:bg-primary"
                    : "text-primary"
                } rounded-md py-2 px-4 text-sm`}
                href="#!"
                onClick={() => setActiveTab("speakers")}
                id="posts-tab"
                aria-controls="posts-tab-pane"
              >
                <i className="ri-bill-line me-1 align-middle inline-block"></i>
                Speakers
              </Link>
            </nav>
          </div>

          <div className="!p-4">
            <div className="tab-content" id="myTabContent">
              {activeTab === "events" && (
                <div
                  className="tab-pane show active fade !p-0 !border-0"
                  id="activity-tab-pane"
                  role="tabpanel"
                  aria-labelledby="activity-tab"
                >
                  <Events />
                </div>
              )}
              {activeTab === "speakers" && (
                <div
                  className="tab-pane fade !p-0 !border-0"
                  id="posts-tab-pane"
                  role="tabpanel"
                  aria-labelledby="posts-tab"
                >
                  <Speaker />
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
