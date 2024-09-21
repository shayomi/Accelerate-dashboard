"use client";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import React, { Fragment, useState } from "react";

const roles = [
  {
    title: "Founder",
    details:
      "Start up founders whose startups has been accepted in any cohort of accelerate africa",
  },
  {
    title: "Advisors",
    details:
      "Start up founders whose startups has been accepted in any cohort of accelerate africa",
  },
  {
    title: "Venture Partners",
    details:
      "Start up founders whose startups has been accepted in any cohort of accelerate africa",
  },
  {
    title: "Investors",
    details:
      "Start up founders whose startups has been accepted in any cohort of accelerate africa",
  },
];

const Roles = () => {
  return (
    <Fragment>
      <Seo title={"User Management"} />
      <Pageheader
        currentpage="Roles"
        activepage="Dashboards"
        mainpage="User Management"
      />
      <div className="box">
        <div className="flex flex-col gap-4"></div>
      </div>
    </Fragment>
  );
};

Roles.layout = "Contentlayout";
export default Roles;
