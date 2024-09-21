import Link from "next/link";
import React from "react";

const registrationData = [
  { name: "Alice Johnson", email: "alice@example.com", company: "TechCorp" },
  { name: "Bob Brown", email: "bob@example.com", company: "InnovateInc" },
  {
    name: "Charlie Davis",
    email: "charlie@example.com",
    company: "CodeMasters",
  },
  {
    name: "Charlie Davis",
    email: "charlie@example.com",
    company: "CodeMasters",
  },
  {
    name: "Charlie Davis",
    email: "charlie@example.com",
    company: "CodeMasters",
  },
  {
    name: "Charlie Davis",
    email: "charlie@example.com",
    company: "CodeMasters",
  },
];

const RegistrationsTab = () => {
  return (
    <div>
      <div className="box-body">
        <div className="overflow-x-auto">
          <table className="table min-w-full whitespace-nowrap table-hover border table-bordered">
            <thead>
              <tr className="">
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Company
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {registrationData.map((registration, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {registration.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {registration.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {registration.company}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="box-footer">
        <div className="sm:flex items-center">
          <div className="text-defaulttextcolor dark:text-defaulttextcolor/70">
            Showing {registrationData.length} Entries{" "}
            <i className="bi bi-arrow-right ms-2 font-semibold"></i>
          </div>
          <div className="ms-auto">
            <nav aria-label="Page navigation" className="pagination-style-4">
              <ul className="ti-pagination mb-0">
                <li className="page-item disabled">
                  <Link className="page-link" href="#!">
                    Prev
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link active" href="#!">
                    1
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" href="#!">
                    2
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link !text-primary" href="#!">
                    Next
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationsTab;
