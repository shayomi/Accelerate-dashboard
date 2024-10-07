import { useState } from "react";
import { InvestorsList } from "@/shared/data/applicationdata";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import { FaEye } from "react-icons/fa";

interface Investor {
  id: string;
  name: string;
  company: string;
  dateApplied: string;
  status: string;
  actions: {
    date: string;
    action: string;
  }[];
}

const Investors = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filterStatus, setFilterStatus] = useState<string>("All");

  const filteredInvestors = InvestorsList.filter((investor: Investor) => {
    const matchesSearch =
      investor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      investor.company.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter =
      filterStatus === "All" || investor.status === filterStatus;

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
        mainpage="Investors list"
      />
      <div className="">
        <div className="box custom-card">
          <div className="box-header flex flex-col md:flex-row items-start md:items-center md:justify-between gap-8">
            <div className="box-title">Investors List</div>
            <div className="flex flex-row gap-2 h-10 ">
              <input
                className="ti-form-control form-control-lg"
                type="text"
                placeholder="Search Here"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label=".form-control-sm example"
              />

              <div className="hs-dropdown ti-dropdown">
                <button className="ti-btn ti-btn-primary ">
                  Filter By
                  <i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                </button>
                <ul className="hs-dropdown-menu ti-dropdown-menu !-mt-2">
                  <li onClick={() => handleFilter("All")}>
                    <Link href="#!" className="ti-dropdown-item">
                      All
                    </Link>
                  </li>
                  <li onClick={() => handleFilter("Pending")}>
                    <Link href="#!" className="ti-dropdown-item">
                      Pending
                    </Link>
                  </li>
                  <li onClick={() => handleFilter("Approved")}>
                    <Link href="#!" className="ti-dropdown-item">
                      Approved
                    </Link>
                  </li>
                  <li onClick={() => handleFilter("Rejected")}>
                    <Link href="#!" className="ti-dropdown-item">
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
                  <tr className="border border-white/90 border-solid dark:border-defaultborder/10">
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
                      Status
                    </th>
                    <th scope="col" className="!text-start !text-[0.85rem]">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredInvestors.length > 0 ? (
                    filteredInvestors.map((investor: Investor) => (
                      <tr
                        key={investor.id}
                        className="border border-white/90 border-solid hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light"
                      >
                        <th scope="row" className="!ps-4 !pe-5">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            aria-label="..."
                          />
                        </th>
                        <td>{investor.name}</td>
                        <td>{investor.company}</td>
                        <td>{investor.dateApplied}</td>
                        <td>{investor.status}</td>
                        <td>
                          <div className="flex flex-row gap-6 items-center">
                            <Link href={`/application/investor/${investor.id}`}>
                              <button className="ti-btn ti-btn-md ti-btn-secondary">
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
                        No investors found
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
            Showing {filteredInvestors.length} Entries{" "}
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
    </Fragment>
  );
};

export default Investors;
