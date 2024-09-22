// components/Userdetails.tsx
import React, { Fragment } from "react";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";

interface ActivityLog {
  date: string;
  action: string;
}

interface AssociatedEntities {
  investors: string[];
  advisors: string[];
  partners: string[];
  founders: string[];
}

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  status: string;
  checked: string;
  activityLog: ActivityLog[];
  associatedEntities: AssociatedEntities;
}

interface UserDetailsProps {
  user: User;
}

const Userdetails: React.FC<UserDetailsProps> = ({ user }) => {
  // If the user object is not available, return null or a loading state
  if (!user) {
    return <div>Loading...</div>; // or return null; to render nothing
  }

  return (
    <Fragment>
      <Seo title={"User Management"} />
      <Pageheader
        currentpage="User Details"
        activepage="Dashboards"
        mainpage="User Management"
      />
      <div className="box custom-card">
        <div className="box-body">
          <div className="bg-light p-6 rounded-md mb-6">
            {/* Top Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-3">
                <h1 className="text-md font-bold">
                  {user.firstName} {user.lastName}
                </h1>
                <p className="text-sm">User ID: {user.id}</p>
              </div>

              <div className="flex flex-col gap-3 items-start">
                <p className="text-sm">
                  <strong>Email:</strong> {user.email}
                </p>
                <div className=" ">
                  <span
                    className={`w-3 h-3 rounded-full ${
                      user.status === "Active" ? "bg-success-full" : "bg-danger"
                    }`}
                  ></span>
                  <p className="text-sm ">
                    <strong>Status:</strong> {user.status}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Grid Layout */}
        <div className="box-body rounded-md">
          <div className="">
            {/* Associated Entities */}
            <div className=" md:col-span-2">
              <h2 className="text-xl font-semibold">Associated Entities</h2>
              <table className="table min-w-full whitespace-nowrap table-hover border table-bordered">
                <thead>
                  <tr className="border border-inherit border-solid dark:border-defaultborder/10">
                    <th className="!text-start !text-[0.85rem]">Investors</th>
                    <th className="!text-start !text-[0.85rem]">Advisors</th>
                    <th className="!text-start !text-[0.85rem]">Partners</th>
                    <th className="!text-start !text-[0.85rem]">Founders</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border border-inherit border-solid dark:border-defaultborder/10">
                    <td className="!ps-4 !pe-5">
                      {user.associatedEntities.investors?.join(", ") || "None"}
                    </td>
                    <td className="!ps-4 !pe-5">
                      {user.associatedEntities.advisors?.join(", ") || "None"}
                    </td>
                    <td className="!ps-4 !pe-5">
                      {user.associatedEntities.partners?.join(", ") || "None"}
                    </td>
                    <td className="!ps-4 !pe-5">
                      {user.associatedEntities.founders?.join(", ") || "None"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Activity Log Table */}
        <div className="box p-6 rounded-md mt-6">
          <h2 className="text-xl font-semibold">Activity Log</h2>
          <table className="table min-w-full whitespace-nowrap table-hover border table-bordered">
            <thead>
              <tr className="border border-inherit border-solid dark:border-defaultborder/10">
                <th className="!text-start !text-[0.85rem]">Date</th>
                <th className="!text-start !text-[0.85rem]">Action</th>
              </tr>
            </thead>
            <tbody>
              {user.activityLog.map((activity, index) => (
                <tr
                  key={index}
                  className="border border-inherit border-solid dark:border-defaultborder/10"
                >
                  <td className="ps-4 !pe-5">{activity.date}</td>
                  <td className="ps-4 !pe-5">{activity.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Edit User Button */}
        <div className="flex justify-end mt-6 p-8">
          <button className="ti-btn ti-btn-warning-full ti-btn-lg">
            <Link href={`/users/edit/${user.id}`}>edit user</Link>
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Userdetails;
