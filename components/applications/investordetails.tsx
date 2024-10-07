import React, { Fragment } from "react";
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";

interface Action {
  date: string;
  action: string;
}

interface Investor {
  id: string;
  name: string;
  company: string;
  dateApplied: string;
  status: string;
  actions: Action[];
}

interface InvestorDetailsProps {
  investor?: Investor; // Allow 'investor' to be undefined
}

const InvestorDetails: React.FC<InvestorDetailsProps> = ({ investor }) => {
  // Render a not found message if the investor is not provided
  if (!investor) {
    return <p>Investor not found...</p>;
  }

  return (
    <Fragment>
      <Seo title={"Investor Details"} />
      <Pageheader
        currentpage="Investor Detail"
        activepage="Investors"
        mainpage="Dashboard"
      />

      <div className="">
        <div className="bg-white hs-dark-mode-active:bg-[#1a1e25] rounded-md overflow-hidden">
          <div className="box-body !p-0">
            {/* Profile Header */}
            <div className="md:flex items-start md:items-center p-6 bg-[#E3E4E8]">
              <div>
                <span className="avatar avatar-xxl avatar-rounded online me-4">
                  <img src="../../../assets/images/faces/9.jpg" alt="" />
                </span>
              </div>
              <div className="flex-grow main-profile-info">
                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center !justify-between">
                  <div>
                    <h6 className="font-semibold mb-1 text-black text-[1rem]">
                      {investor.name}
                    </h6>
                    <p className="mb-1 !text-black opacity-[0.7]">
                      {investor.company}
                    </p>
                    <p className="text-[0.75rem] text-black mb-6 opacity-[0.5]">
                      <span className="me-4 inline-flex">
                        <i className="ri-calendar-line me-1 align-middle"></i>
                        Applied on {investor.dateApplied}
                      </span>
                    </p>
                  </div>

                  <div className="">
                    <p className="text-[.9375rem] text-black mb-2 me-6 font-semibold">
                      Contact Information :
                    </p>
                    <div className="text-black ">
                      <p className="mb-2">
                        <span className="avatar avatar-sm avatar-rounded me-2 bg-light text-black/50 dark:text-white/50">
                          <i className="ri-mail-line align-middle text-[.875rem] text-black/50 dark:text-white/50"></i>
                        </span>
                        contact@{investor.company.toLowerCase()}.com
                      </p>
                      <p className="mb-0 text-black">
                        <span className="avatar avatar-sm avatar-rounded me-2 bg-light text-black/50 dark:text-white/50">
                          <i className="ri-map-pin-line align-middle text-[.875rem] text-black/50 dark:text-white/50"></i>
                        </span>
                        Address: 123 Main St, City, Country
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Bio */}
            <div className="p-6 border-b border-dashed dark:border-defaultborder/10">
              <div className="mb-6">
                <p className="text-[.9375rem] mb-2 font-semibold text-black hs-dark-mode-active:text-white">
                  Company Details :
                </p>
                <p className="text-[0.75rem] text-black/50 dark:text-white/50 opacity-[0.7] mb-0">
                  {investor.company}
                </p>
              </div>
            </div>

            {/* Timeline of Actions */}
            <div className="p-6">
              <p className="text-[.9375rem] mb-2 me-6 font-semibold">
                Timeline of Actions :
              </p>
              <ul className="list-group">
                {investor.actions.map((action, idx) => (
                  <li className="list-group-item" key={idx}>
                    <div className="sm:flex items-start">
                      <div className="sm:ms-2 ms-0 sm:mt-0 mt-1 font-semibold flex-grow flex-row gap-2 items-center">
                        <p className="mb-0 leading-none">{action.action}</p>
                        <span className="text-[.6875rem] text-[#8c9097] dark:text-white/50 opacity-[0.7]">
                          {action.date}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default InvestorDetails;
