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
      <div className="container mx-auto px-4 py-8 hs-dark-mode-active:!text-white">
        {/* Header */}
        <div className="box p-6 rounded-md mb-6">
          {/* Top Row */}
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-bold text-gray-800 hs-dark-mode-active:text-white">
              {user.firstName} {user.lastName}
            </h1>
            <div className="flex items-center space-x-4">
              <p className="text-sm text-gray-600">
                <strong>Email:</strong> {user.email}
              </p>
              <div className="flex items-center space-x-2">
                <span
                  className={`w-3 h-3 rounded-full ${
                    user.status === "Active" ? "bg-green-500" : "bg-red-500"
                  }`}
                ></span>
                <p className="text-sm text-gray-600">
                  <strong>Status:</strong> {user.status}
                </p>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-500">User ID: {user.id}</p>
        </div>

        {/* Dashboard Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Personal Information */}
          <div className="box p-6 rounded-md">
            <h2 className="text-xl font-semibold text-gray-800 hs-dark-mode-active:text-white mb-4">
              Personal Information
            </h2>
            <div className="mb-2">
              <p className="text-sm text-gray-600">
                <strong>Email:</strong> {user.email}
              </p>
            </div>
            <div className="mb-2">
              <p className="text-sm text-gray-600">
                <strong>Status:</strong> {user.status}
              </p>
            </div>
          </div>

          {/* Associated Entities */}
          <div className="box p-6 rounded-md md:col-span-2">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 hs-dark-mode-active:text-white">
              Associated Entities
            </h2>
            <div className="mb-2">
              <p className="text-sm text-gray-600">
                <strong>Investors:</strong>{" "}
                {user.associatedEntities.investors?.join(", ") || "None"}
              </p>
            </div>
            <div className="mb-2">
              <p className="text-sm text-gray-600">
                <strong>Advisors:</strong>{" "}
                {user.associatedEntities.advisors?.join(", ") || "None"}
              </p>
            </div>
            <div className="mb-2">
              <p className="text-sm text-gray-600">
                <strong>Partners:</strong>{" "}
                {user.associatedEntities.partners?.join(", ") || "None"}
              </p>
            </div>
            <div className="mb-2">
              <p className="text-sm text-gray-600">
                <strong>Founders:</strong>{" "}
                {user.associatedEntities.founders?.join(", ") || "None"}
              </p>
            </div>
          </div>
        </div>

        {/* Activity Log Table */}
        <div className="box p-6 rounded-md mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 hs-dark-mode-active:text-white">
            Activity Log
          </h2>
          <table className="min-w-full text-left table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b-2 border-gray-200">Date</th>
                <th className="px-4 py-2 border-b-2 border-gray-200">Action</th>
              </tr>
            </thead>
            <tbody>
              {user.activityLog.map((activity, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border-b border-gray-200 text-gray-600">
                    {activity.date}
                  </td>
                  <td className="px-4 py-2 border-b border-gray-200 text-gray-600">
                    {activity.action}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Edit User Button */}
        <div className="flex justify-end mt-6">
          <button className="border-[1px] bg-transparent text-primary border-primary py-2 px-4 rounded-md transition">
            <Link href={`/users/edit/${user.id}`}>edit user</Link>
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Userdetails;
