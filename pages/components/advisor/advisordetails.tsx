// components/advisors/AdvisorDetails.tsx
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import { Advisor } from "@/types";
import React, { Fragment } from "react";

interface AdvisorDetailsProps {
  advisor: Advisor;
}

const AdvisorDetails: React.FC<AdvisorDetailsProps> = ({ advisor }) => {
  return (
    <Fragment>
      <Seo title={`Advisor - ${advisor.name}`} />
      <Pageheader
        currentpage={advisor.name}
        activepage="Advisors List"
        mainpage="Advisors"
      />
      <div className="container mx-auto p-6 shadow-lg rounded-lg">
        <div className="flex flex-col items-center md:flex-row md:items-start">
          <div className="flex-shrink-0">
            <img
              src={advisor.image}
              alt={advisor.name}
              className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-4 border-gray-200 shadow-md"
            />
          </div>
          <div className="md:ml-6">
            <h1 className="text-xl font-bold text-gra mb-2">{advisor.name}</h1>
            <p className="text-sm text-gray-700 mb-4">{advisor.bio}</p>
            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Focus Areas
                </h2>
                <ul className="list-disc list-inside mt-2 text-gray-600">
                  {advisor.focusAreas.map((area, idx) => (
                    <li key={idx} className="ml-4">
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    Company
                  </h2>
                  <p className="text-gray-600">{advisor.companyName}</p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    Location
                  </h2>
                  <p className="text-gray-600">{advisor.location}</p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">Links</h2>
                  <div className="flex flex-row gap-2 items-center">
                    <p className="text-gray-600">
                      <a
                        href={advisor.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        LinkedIn
                      </a>
                    </p>
                    <p className="text-gray-600">
                      <a
                        href={advisor.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        Twitter
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AdvisorDetails;
