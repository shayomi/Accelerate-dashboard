import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import { Advisor } from "@/shared/types";
import React, { Fragment } from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

interface AdvisorDetailsProps {
  advisor: {
    name: string;
    focusAreas: string[];
    companyName: string;
    location: string;
    bio: string;
    linkedin: string;
    twitter: string;
    image: string;
  };
}

const AdvisorDetails = ({ advisor }: AdvisorDetailsProps) => {
  if (!advisor) {
    return <p>No advisor data available</p>; // Handle missing advisor
  }
  return (
    <Fragment>
      <Seo title="Advisor Management" />
      <Pageheader
        currentpage="Advisor details"
        activepage="Advisors List"
        mainpage="Advisors"
      />
      <div className="box custom-card">
        <div className="box-body">
          <div className="flex flex-col gap-6 sm:flex-row items-start">
            <div className="flex flex-col items-center space-y-3 border-secondary/30 pb-12 border-r-0 sm:border-r pr-4  w-full sm:w-[25%]">
              <div className="flex-shrink-0  main-profile-cover w-full p-6 flex items-center rounded-md justify-center">
                <span className="avatar avatar-xxl avatar-rounded online me-4 items-center mt-8">
                  <img
                    src={advisor.image || "/default-image.png"}
                    alt={advisor.name || "Advisor Name"}
                    className=""
                  />
                </span>
              </div>
              <h1 className="text-xl font-bold text-gra mb-2">
                {advisor.name || "N/A"}
              </h1>
              <div className="items-center flex-col flex gap-2">
                <h2 className="text-md text-warning">Company</h2>
                <p className="text-sm">{advisor.companyName}</p>
              </div>
              <div className="items-center flex-col flex gap-2">
                <h2 className="text-warning">Location</h2>
                <p className="text-sm">{advisor.location}</p>
              </div>
              <button className="ti-btn ti-btn-lg ti-btn-secondary-full !me-[0.375rem]">
                Send email
              </button>
              <div className="flex flex-row gap-2 items-center">
                <p className="text-sm">
                  <a
                    href={advisor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    <FaLinkedin />
                  </a>
                </p>
                <p className="text-sm">
                  <a
                    href={advisor.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    <FaTwitter />
                  </a>
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4  w-full sm:w-[65%] pb-12 items-start">
              <div className="box-header border-b border-secondary/30">
                <h4 className="text-md">About Advisor</h4>
                <p className="text-sm mt-3">{advisor.bio}</p>
              </div>
              <div className="box-header flex-col gap-2 items-start justify-start">
                <h4 className="text-md">Focus Area</h4>
                <ul className="list-disc list-inside mt-2 text-sm">
                  {advisor.focusAreas.map((area, idx) => (
                    <li key={idx} className="ml-4">
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AdvisorDetails;
