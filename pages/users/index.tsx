/* eslint-disable eol-last */
/* eslint-disable no-multiple-empty-lines */
import React, { Fragment, useState } from "react";
import Link from "next/link";
import Users from "@/components/user-management/users";
import Roles from "@/components/user-management/Roles";

const Index = () => {
  const [activeTab, setActiveTab] = useState("users");

  return (
    <Fragment>
      <div className="">
        <div className="w-full">
          <div className="border-b dark:border-defaultborder/10 border-dashed md:flex items-center justify-between mt-4">
            <nav className="-mb-0.5 sm:flex md:space-x-6 rtl:space-x-reverse pb-2">
              <Link
                className={`w-full sm:w-auto flex ${
                  activeTab === "users"
                    ? "hs-tab-active:font-semibold hs-tab-active:text-white hs-tab-active:bg-primary"
                    : "text-primary"
                } rounded-md py-2 px-4 text-sm`}
                href="#!"
                onClick={() => setActiveTab("users")}
                id="activity-tab"
                aria-controls="activity-tab-pane"
              >
                <i className="ri-gift-line align-middle inline-block me-1"></i>
                Users
              </Link>
              <Link
                className={`w-full sm:w-auto flex ${
                  activeTab === "roles"
                    ? "hs-tab-active:font-semibold hs-tab-active:text-white hs-tab-active:bg-primary"
                    : "text-primary"
                } rounded-md py-2 px-4 text-sm`}
                href="#!"
                onClick={() => setActiveTab("roles")} // Updated to "roles"
                id="posts-tab"
                aria-controls="posts-tab-pane"
              >
                <i className="ri-bill-line me-1 align-middle inline-block"></i>
                Roles
              </Link>
            </nav>
          </div>

          <div className="!p-4">
            <div className="tab-content" id="myTabContent">
              {activeTab === "users" && (
                <div
                  className="tab-pane show active fade !p-0 !border-0"
                  id="activity-tab-pane"
                  role="tabpanel"
                  aria-labelledby="activity-tab"
                >
                  <Users />
                </div>
              )}
              {activeTab === "roles" && (
                <div
                  className="tab-pane fade !p-0 !border-0"
                  id="posts-tab-pane"
                  role="tabpanel"
                  aria-labelledby="posts-tab"
                >
                  <Roles />
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
