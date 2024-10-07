import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Link from "next/link";
import React, { Fragment } from "react";
import { partners } from "../../shared/data/partnerdata";
import { FaEye, FaPencilAlt } from "react-icons/fa";
import Seo from "@/shared/layout-components/seo/seo";

const ProgramPartner = () => {
  return (
    <Fragment>
      <Seo title={"Cohort Management"} />
      <Pageheader
        currentpage="Partner's List"
        activepage="Dashboards"
        mainpage="Cohort Management"
      />
      <div className=" ">
        <div className="box custom-card">
          <div className="box-header justify-between gap-8">
            <div className="box-title">Program Partner</div>
            <button className="bg-primary text-white px-3 py-2 rounded-md">
              <Link href="/cohort/partner/create">Add New Partner</Link>
            </button>
          </div>

          <div className="box-body overflow-x-auto">
            <table className="table min-w-full whitespace-nowrap table-hover border table-bordered">
              <thead className="">
                <tr>
                  <th scope="row" className="!ps-4 !pe-5">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      aria-label="..."
                    />
                  </th>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y ">
                {partners.map((partner) => (
                  <tr
                    key={partner.id}
                    className="border border-inherit border-solid hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light"
                  >
                    <th scope="row" className="!ps-4 !pe-5">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        aria-label="..."
                      />
                    </th>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {partner.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {partner.type}
                    </td>
                    <td
                      className={
                        partner.status === "Active"
                          ? "text-green"
                          : "text-danger"
                      }
                    >
                      {partner.status}
                    </td>
                    <td className="px-6 py-4 whitespace-nowra">
                      <div className="flex gap-6 items-center">
                        <button className="ti-btn ti-btn-md ti-btn-secondary !me-[0.375rem]">
                          <Link href={`/cohort/partner/${partner.id}`}>
                            <FaEye size={20} />
                          </Link>
                        </button>
                        <button className="ti-btn ti-btn-md ti-btn-warning !me-[0.375rem]">
                          <Link href={`/cohort/partner/edit/${partner.id}`}>
                            <FaPencilAlt size={20} />
                          </Link>
                        </button>
                      </div>
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
              Showing 5 Entries{" "}
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
                      next
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

ProgramPartner.layout = "Contentlayout";
export default ProgramPartner;
