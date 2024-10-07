import { useState } from "react";
import { PartnersList } from "@/shared/data/applicationdata"; // Import your Partners data
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import { FaEye } from "react-icons/fa";

const Partners = () => {
  const [searchQuery, setSearchQuery] = useState<string>(""); // State for search
  const [filterStatus, setFilterStatus] = useState<string>("All"); // Initial state set to "All"

  // Filter and search partners based on search query and filter status
  const filteredPartners = PartnersList.filter((partner) => {
    const matchesSearch =
      partner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      partner.company.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter =
      filterStatus === "All" || partner.status === filterStatus;

    return matchesSearch && matchesFilter;
  });

  const handleFilter = (status: string) => {
    setFilterStatus(status);
  };

  return (
    <Fragment>
      <Seo title={"Applications"} />
      <Pageheader
        currentpage="Applications"
        activepage="Dashboards"
        mainpage="Partners list"
      />
      <div className="">
        <div className="box custom-card">
          <div className="box-header justify-between gap-8">
            <div className="box-title">Partners List</div>
            <div className="flex flex-wrap gap-2">
              <div>
                <input
                  className="ti-form-control form-control-sm"
                  type="text"
                  placeholder="Search Here"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label=".form-control-sm example"
                />
              </div>
              <div className="hs-dropdown ti-dropdown">
                <button
                  className="ti-btn ti-btn-primary !bg-primary !text-white !py-1 !px-2 !text-[0.75rem] !m-0 !gap-0 !font-medium"
                  aria-expanded="false"
                >
                  Filter By
                  <i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                </button>
                <ul
                  className="hs-dropdown-menu ti-dropdown-menu !-mt-2 hidden"
                  role="menu"
                >
                  <li onClick={() => handleFilter("All")}>
                    <Link
                      href="#!"
                      className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                    >
                      All
                    </Link>
                  </li>
                  <li onClick={() => handleFilter("Pending")}>
                    <Link
                      href="#!"
                      className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                    >
                      Pending
                    </Link>
                  </li>
                  <li onClick={() => handleFilter("Approved")}>
                    <Link
                      href="#!"
                      className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                    >
                      Approved
                    </Link>
                  </li>
                  <li onClick={() => handleFilter("Rejected")}>
                    <Link
                      href="#!"
                      className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                    >
                      Rejected
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
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
                        aria-label="..."
                      />
                    </th>
                    <th
                      scope="col"
                      className="!text-start !text-[0.85rem] min-w-[200px]"
                    >
                      Name
                    </th>
                    <th scope="col" className="!text-start !text-[0.85rem]">
                      Company
                    </th>
                    <th scope="col" className="!text-start !text-[0.85rem]">
                      Date Applied
                    </th>
                    <th scope="col" className="!text-start !text-[0.85rem]">
                      Partner Type
                    </th>
                    <th scope="col" className="!text-start !text-[0.85rem]">
                      Status
                    </th>
                    <th scope="col" className="!text-start !text-[0.85rem]">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPartners.length > 0 ? (
                    filteredPartners.map((partner) => (
                      <tr
                        className="border border-inherit border-solid hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light"
                        key={partner.id}
                      >
                        <td scope="row" className="!ps-4 !pe-5">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            aria-label="..."
                          />
                        </td>
                        <td>{partner.name}</td>
                        <td>{partner.company}</td>
                        <td>{partner.dateApplied}</td>
                        <td>{partner.partnerType}</td>
                        <td>{partner.status}</td>
                        <td>
                          <div className="flex flex-row items-center gap-5">
                            <Link href={`/application/partner/${partner.id}`}>
                              <button className="ti-btn ti-btn-md ti-btn-secondary !me-[0.375rem]">
                                <FaEye size={20} />
                              </button>
                            </Link>
                            <button className="ti-btn ti-btn-lg ti-btn-success">
                              Approve
                            </button>
                            <button className="text-danger hover:underline">
                              Reject
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="text-center p-4">
                        No partners found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="box-footer">
        <div className="sm:flex items-center">
          <div className="text-defaulttextcolor dark:text-defaulttextcolor/70">
            Showing {filteredPartners.length} Entries{" "}
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
    </Fragment>
  );
};

export default Partners;
