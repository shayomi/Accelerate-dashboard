import React, { Fragment } from "react";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import { Cohort } from "@/types";

interface CohortDetailProps {
  cohort: Cohort;
}

const CohortDetail: React.FC<CohortDetailProps> = ({ cohort }) => {
  return (
    <Fragment>
      <Seo title={`Cohort Details - ${cohort.name}`} />
      <Pageheader
        currentpage="Cohort Details"
        activepage="Dashboards"
        mainpage="Cohort Management"
      />

      <div className="container mx-auto p-6 shadow-lg rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="flex flex-col">
            <span className="text-md font-semibold">Name:</span>
            <p className="text-sm">{cohort.name}</p>
          </div>
          <div className="flex flex-col">
            <span className="text-md">Short Name:</span>
            <p className="text-sm text-black bg-yellow px-2 py-1 rounded-md w-[80px]">
              {cohort.shortName}
            </p>
          </div>
          <div className="flex flex-col">
            <span className="text-md">Start Date:</span>
            <p className="text-sm">{cohort.startDate}</p>
          </div>
          <div className="flex flex-col">
            <span className="text-md font-semibold">End Date:</span>
            <p className="text-sm">{cohort.endDate}</p>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-bold">Description</h2>
          <p className="text-sm">{cohort.description}</p>
        </div>

        <div className="mb-6">
          <h2 className="text-md font-bold mb-4">Enrolled Startups</h2>
          <table className="min-w-full">
            <thead className="">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium">
                  Startup Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium ">
                  Industry
                </th>
              </tr>
            </thead>
            <tbody className="">
              {cohort.startups.map((startup) => (
                <tr key={startup.id}>
                  <td className="px-6 py-3 whitespace-nowrap text-sm">
                    {startup.companyName}
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap text-sm ">
                    {startup.industry}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mb-6">
          <h2 className="text-md font-bold mb-4">Program Schedule Overview</h2>
          <p className="text-sm">{cohort.schedule}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default CohortDetail;
