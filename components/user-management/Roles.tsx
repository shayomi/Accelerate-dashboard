import React, { Fragment } from "react";
import { FaEye, FaPencilAlt } from "react-icons/fa";
import Link from "next/link";
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";

const roles = [
  {
    id: 1,
    title: "Founder",
    details:
      "Start up founders whose startups have been accepted in any cohort of Accelerate Africa",
  },
  {
    id: 2,
    title: "Advisors",
    details:
      "Start up advisors helping startups in any cohort of Accelerate Africa",
  },
  {
    id: 3,
    title: "Venture Partners",
    details:
      "Venture partners whose ventures have invested in startups accepted in any cohort of Accelerate Africa",
  },
  {
    id: 4,
    title: "Investors",
    details:
      "Investors who have provided funding to startups accepted in any cohort of Accelerate Africa",
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
      <div className="">
        <div className="box custom-card">
          <div className="box-header flex flex-col md:flex-row items-start md:items-center md:justify-between gap-8">
            <div className="box-title">Roles List</div>
          </div>
          <div className="box-body">
            <div className="overflow-x-auto">
              <table className="table min-w-full whitespace-nowrap table-hover border table-bordered">
                <thead>
                  <tr className="border border-inherit border-solid dark:border-defaultborder/10">
                    <th scope="row" className="!ps-4 !pe-5">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="checkboxNoLabel1"
                        value=""
                        aria-label="..."
                      />
                    </th>
                    <th className="!ps-4 !pe-5">Role</th>
                    <th className="!text-start !text-[0.85rem]">Details</th>
                    <th className="!text-start !text-[0.85rem]">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {roles.map((role) => (
                    <tr
                      key={role.id}
                      className="border border-inherit border-solid hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light"
                    >
                      <td scope="row" className="!ps-4 !pe-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="checkboxNoLabel1"
                          value=""
                          aria-label="..."
                        />
                      </td>
                      <td className="!ps-4 !pe-5">{role.title}</td>
                      <td>{role.details}</td>
                      <td>
                        <div className="flex gap-4 items-center">
                          <Link href={`/roles/edit/${role.id}`}>
                            <button className="ti-btn ti-btn-md ti-btn-warning">
                              <FaPencilAlt size={20} />
                            </button>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Roles;
