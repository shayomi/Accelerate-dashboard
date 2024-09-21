"use client";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment, useState } from "react";

const CreateInvestor = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState("");
  const [dateApplied, setDateApplied] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newInvestor = {
      name,
      company,
      status,
      dateApplied,
      actions: [],
    };
    console.log("New Investor Created:", newInvestor);
  };

  return (
    <Fragment>
      <Seo title={"Investor Management"} />
      <Pageheader
        currentpage="Create New Investor"
        activepage="Dashboards"
        mainpage="Investor Management"
      />
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-12 sm:gap-x-6 sm:gap-y-4">
            <div className="md:col-span-6 col-span-12 mb-4">
              <label className="form-label">Investor Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Investor Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="md:col-span-6 col-span-12 mb-4">
              <label className="form-label">Company</label>
              <input
                type="text"
                className="form-control"
                placeholder="Company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
            <div className="md:col-span-6 col-span-12 mb-4">
              <label className="form-label">Status</label>
              <select
                className="form-control"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="" disabled>
                  Select Status
                </option>
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
                <option value="Interview Scheduled">Interview Scheduled</option>
              </select>
            </div>
            <div className="md:col-span-6 col-span-12 mb-4">
              <label className="form-label">Date Applied</label>
              <input
                type="date"
                className="form-control"
                value={dateApplied}
                onChange={(e) => setDateApplied(e.target.value)}
              />
            </div>

            <div className="md:col-span-12 col-span-12 flex flex-row gap-4 mt-6 items-end">
              <button
                type="button"
                className="ti-btn bg-none text-red rounded-sm !mb-0"
              >
                <Link href="/investors">Cancel</Link>
              </button>
              <button
                type="submit"
                className="ti-btn bg-green rounded-sm !mb-0"
              >
                Create Investor
              </button>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

CreateInvestor.layout = "Contentlayout";
export default CreateInvestor;
