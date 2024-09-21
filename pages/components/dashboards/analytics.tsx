import {
  ActiveAdvisors,
  AudienceReport,
  Bouncerate,
  Clicks,
  Countries,
  Impressions,
  Investor,
  PlatformEngagement,
  Sessionbydevice,
  Sessionduration,
  Startups,
  Totalusers,
  UpcomingMeetings,
  UsersByCategory,
  Visitorsbychannel,
} from "@/shared/data/dashboards/analyticsdata";
import {
  Customers,
  Deals,
  Ratio,
  Revenue,
  Revenueanalytics,
} from "@/shared/data/dashboards/crmdata";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";

const applications = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  name: `User ${i + 1}`,
  composition: i % 2 === 0 ? "Founder" : "Advisor",
  position: `Position ${i + 1}`,
  dateApplied: `${i + 1} days ago`,
}));

const Analytics = () => {
  return (
    <Fragment>
      <Seo title={"Analytics"} />
      <Pageheader
        currentpage="Analytics"
        activepage="Dashboards"
        mainpage="Analytics"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* user by role */}
        <div className="">
          <div className="box">
            <div className="box-header justify-between">
              <div className="box-title">Total Users By Role</div>
              <div>
                <button
                  type="button"
                  className="ti-btn ti-btn-primary 1 !text-[0.85rem] !m-0 !font-medium"
                >
                  View All
                </button>
              </div>
            </div>
            <div className="box-body !my-2 !py-6 !px-2">
              <div id="sessions">
                <UsersByCategory />
              </div>
            </div>
            <div className="box-footer !p-0">
              <div className="grid grid-cols-12 justify-center">
                <div className="col-span-3 pe-0 text-center">
                  <div className="sm:p-4  p-2 ">
                    <span className="text-[#8c9097] dark:text-white/50 text-[0.6875rem]">
                      Founders
                    </span>
                    <span className="block text-[1rem] font-semibold">
                      68.3%
                    </span>
                  </div>
                </div>
                <div className="col-span-3 px-0 text-center">
                  <div className="sm:p-4 p-2">
                    <span className="text-[#8c9097] dark:text-white/50 text-[0.6875rem]">
                      Advisors
                    </span>
                    <span className="block text-[1rem] font-semibold">
                      17.68%
                    </span>
                  </div>
                </div>
                <div className="col-span-3 px-0 text-center">
                  <div className="sm:p-4 p-2 ">
                    <span className="text-[#8c9097] dark:text-white/50 text-[0.6875rem]">
                      Venture Partners
                    </span>
                    <span className="block text-[1rem] font-semibold">
                      10.5%
                    </span>
                  </div>
                </div>
                <div className="col-span-3 px-0 text-center">
                  <div className="sm:p-4 p-2">
                    <span className="text-[#8c9097] dark:text-white/50 text-[0.6875rem]">
                      Investors
                    </span>
                    <span className="block text-[1rem] font-semibold">
                      5.16%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* platform activity over time */}
        <div className="">
          <div className="box">
            <div className="box-header justify-between">
              <div className="box-title">Platform engagement over time</div>
              <div className="hs-dropdown ti-dropdown">
                <Link
                  href="#!"
                  className="px-2 font-normal text-[0.75rem] text-[#8c9097] dark:text-white/50"
                  aria-expanded="false"
                >
                  View All
                  <i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                </Link>
                <ul
                  className="hs-dropdown-menu ti-dropdown-menu hidden"
                  role="menu"
                >
                  <li>
                    <Link
                      className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                      href="#!"
                    >
                      Today
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                      href="#!"
                    >
                      This Week
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                      href="#!"
                    >
                      Last Week
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="box-body ">
              <div id="session-users">
                <PlatformEngagement />
              </div>
            </div>
          </div>
        </div>

        {/* Recent applications */}

        <div className="">
          <div className="box overflow-hidden">
            <div className="box-header justify-between">
              <div className="box-title">Recent Applications</div>
              <div className="hs-dropdown ti-dropdown">
                <Link
                  href="#!"
                  className="text-[0.75rem] px-2 font-normal text-[#8c9097] dark:text-white/50"
                  aria-expanded="false"
                >
                  View All
                  <i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                </Link>
                <ul
                  className="hs-dropdown-menu ti-dropdown-menu hidden"
                  role="menu"
                >
                  <li>
                    <Link
                      className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                      href="#!"
                    >
                      Today
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                      href="#!"
                    >
                      This Week
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                      href="#!"
                    >
                      Last Week
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="box-body !p-0">
              <ul
                className="list-group list-group-flush max-h-[22.5rem] overflow-auto"
                id="recent-applications"
              >
                {applications.map((app) => (
                  <li
                    key={app.id}
                    className="list-group-item !border-t-0 !border-s-0 !border-e-0"
                  >
                    <Link href="#!">
                      <div className="flex items-center">
                        <div className="me-2 leading-none">
                          <span className="!text-primary inline-flex items-center justify-center avatar avatar-md avatar-rounded bg-primary/10">
                            {app.name.charAt(0)}
                          </span>
                        </div>
                        <div className="flex-grow">
                          <p className="mb-0 font-semibold">{app.name}</p>
                          <p className="text-[0.75rem] text-[#8c9097] dark:text-white/50 mb-0">
                            {app.position} - {app.dateApplied}
                          </p>
                        </div>
                        <div className="text-end">
                          <p className="mb-0 text-[0.75rem]">
                            {app.composition}
                          </p>
                          <span
                            className={`badge ${
                              app.composition === "Founder"
                                ? "bg-primary/10 !text-primary"
                                : "bg-secondary/10 !text-secondary"
                            }`}
                          >
                            {app.composition}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Quick stats */}

        {/* total startup */}
        <div className="">
          <div className="overflow-hidden">
            <div className="grid grid-cols-12 gap-x-2">
              <div className="xxl:col-span-6 xl:col-span-6 col-span-12">
                <div className="box overflow-hidden">
                  <div className="box-body">
                    <div className="flex items-top justify-between">
                      <div>
                        <span className="!text-[0.8rem]  !w-[2.5rem] !h-[2.5rem] !leading-[2.5rem] !rounded-full inline-flex items-center justify-center bg-primary">
                          <i className="ti ti-users text-[1rem] text-white"></i>
                        </span>
                      </div>
                      <div className="flex-grow ms-4">
                        <div className="flex items-center justify-between flex-wrap">
                          <div>
                            <p className="text-[#8c9097] dark:text-white/50 text-[0.813rem] mb-0">
                              Total Startups
                            </p>
                            <h4 className="font-semibold  text-[1.5rem] !mb-2 ">
                              1,02,890
                            </h4>
                          </div>
                          <div id="crm-total-customers">
                            <Startups />
                          </div>
                        </div>
                        <div className="flex items-center justify-between !mt-1">
                          <div>
                            <Link
                              className="text-primary text-[0.813rem]"
                              href="#!"
                            >
                              View All
                              <i className="ti ti-arrow-narrow-right ms-2 font-semibold inline-block"></i>
                            </Link>
                          </div>
                          <div className="text-end">
                            <p className="mb-0 text-success text-[0.813rem] font-semibold">
                              +40%
                            </p>
                            <p className="text-[#8c9097] dark:text-white/50 opacity-[0.7] text-[0.6875rem]">
                              this month
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* total investors */}
              <div className="xxl:col-span-6 xl:col-span-6 col-span-12">
                <div className="box overflow-hidden">
                  <div className="box-body">
                    <div className="flex items-top justify-between">
                      <div>
                        <span className="!text-[0.8rem]  !w-[2.5rem] !h-[2.5rem] !leading-[2.5rem] !rounded-full inline-flex items-center justify-center bg-secondary">
                          <i className="ti ti-users text-[1rem] text-white"></i>
                        </span>
                      </div>
                      <div className="flex-grow ms-4">
                        <div className="flex items-center justify-between flex-wrap">
                          <div>
                            <p className="text-[#8c9097] dark:text-white/50 text-[0.813rem] mb-0">
                              Total Investors
                            </p>
                            <h4 className="font-semibold text-[1.5rem] !mb-2 ">
                              100
                            </h4>
                          </div>
                          <div id="crm-total-revenue">
                            <Investor />
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-1">
                          <div>
                            <Link
                              className="text-secondary text-[0.813rem]"
                              href="#!"
                            >
                              View All
                              <i className="ti ti-arrow-narrow-right ms-2 font-semibold inline-block"></i>
                            </Link>
                          </div>
                          <div className="text-end">
                            <p className="mb-0 text-success text-[0.813rem] font-semibold">
                              +25%
                            </p>
                            <p className="text-[#8c9097] dark:text-white/50 opacity-[0.7] text-[0.6875rem]">
                              this month
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* upcoming meetings */}
              <div className="xxl:col-span-6 xl:col-span-6 col-span-12">
                <div className="box overflow-hidden">
                  <div className="box-body">
                    <div className="flex items-top justify-between">
                      <div>
                        <span className="!text-[0.8rem]  !w-[2.5rem] !h-[2.5rem] !leading-[2.5rem] !rounded-full inline-flex items-center justify-center bg-warning">
                          <i className="ti ti-briefcase text-[1rem] text-white"></i>
                        </span>
                      </div>
                      <div className="flex-grow ms-4">
                        <div className="flex items-center justify-between flex-wrap">
                          <div>
                            <p className="text-[#8c9097] dark:text-white/50 text-[0.813rem] mb-0">
                              Upcoming meetings
                            </p>
                            <h4 className="font-semibold text-[1.5rem] !mb-2 ">
                              2,543
                            </h4>
                          </div>
                          <div id="crm-total-deals">
                            <UpcomingMeetings />
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-1">
                          <div>
                            <Link
                              className="text-warning text-[0.813rem]"
                              href="#!"
                            >
                              View All
                              <i className="ti ti-arrow-narrow-right ms-2 font-semibold inline-block"></i>
                            </Link>
                          </div>
                          <div className="text-end">
                            <p className="mb-0 text-success text-[0.813rem] font-semibold">
                              +19%
                            </p>
                            <p className="text-[#8c9097] dark:text-white/50  opacity-[0.7] text-[0.6875rem]">
                              this month
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Active advisors */}
              <div className="xxl:col-span-6 xl:col-span-6 col-span-12">
                <div className="box overflow-hidden">
                  <div className="box-body">
                    <div className="flex items-top justify-between">
                      <div>
                        <span className="!text-[0.8rem]  !w-[2.5rem] !h-[2.5rem] !leading-[2.5rem] !rounded-full inline-flex items-center justify-center bg-warning">
                          <i className="ti ti-users text-[1rem] text-white"></i>
                        </span>
                      </div>
                      <div className="flex-grow ms-4">
                        <div className="flex items-center justify-between flex-wrap">
                          <div>
                            <p className="text-[#8c9097] dark:text-white/50 text-[0.813rem] mb-0">
                              Active Advisors
                            </p>
                            <h4 className="font-semibold text-[1.5rem] !mb-2 ">
                              2,543
                            </h4>
                          </div>
                          <div id="crm-total-deals">
                            <ActiveAdvisors />
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-1">
                          <div>
                            <Link
                              className="text-warning text-[0.813rem]"
                              href="#!"
                            >
                              View All
                              <i className="ti ti-arrow-narrow-right ms-2 font-semibold inline-block"></i>
                            </Link>
                          </div>
                          <div className="text-end">
                            <p className="mb-0 text-success text-[0.813rem] font-semibold">
                              +19%
                            </p>
                            <p className="text-[#8c9097] dark:text-white/50  opacity-[0.7] text-[0.6875rem]">
                              this month
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* old seo */}
    </Fragment>
  );
};
Analytics.layout = "Contentlayout";

export default Analytics;
