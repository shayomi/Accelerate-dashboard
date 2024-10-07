"use client";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment, useState } from "react";

const CreatePartner = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [partnerType, setPartnerType] = useState("");
  const [dateApplied, setDateApplied] = useState("");
  const [companyDetails, setCompanyDetails] = useState("");
  const [supportingDocuments, setSupportingDocuments] = useState<string[]>([]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files).map((file) => file.name);
      setSupportingDocuments(files);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the form submission
    const newPartner = {
      name,
      company,
      partnerType,
      dateApplied,
      companyDetails,
      supportingDocuments,
      actions: [],
    };
    console.log("New Partner Created:", newPartner);
    // Perform further actions such as sending data to the server
  };

  return (
    <Fragment>
      <Seo title={"Partner Management"} />
      <Pageheader
        currentpage="Create New Partner"
        activepage="Dashboards"
        mainpage="Partner Management"
      />
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-12 sm:gap-x-6 sm:gap-y-4">
            <div className="md:col-span-6 col-span-12 mb-4">
              <label className="form-label">Partner Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Partner Name"
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
              <label className="form-label">Partner Type</label>
              <select
                className="form-control"
                value={partnerType}
                onChange={(e) => setPartnerType(e.target.value)}
              >
                <option value="" disabled>
                  Select Partner Type
                </option>
                <option value="Corporate">Corporate</option>
                <option value="Sponsor">Sponsor</option>
                <option value="Service Provider">Service Provider</option>
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
            <div className="md:col-span-12 col-span-12 mb-4">
              <label className="form-label">Company Details</label>
              <textarea
                className="form-control"
                placeholder="Company Details"
                value={companyDetails}
                onChange={(e) => setCompanyDetails(e.target.value)}
              />
            </div>
            <div className="md:col-span-12 col-span-12 mb-4">
              <label className="form-label">Supporting Documents</label>
              <input
                type="file"
                className="form-control"
                multiple
                onChange={handleFileUpload}
              />
            </div>

            <div className="md:col-span-12 col-span-12 flex flex-row gap-4 mt-6 items-end">
              <button
                type="button"
                className="ti-btn bg-none text-red rounded-sm !mb-0"
              >
                <Link href="/partners">Cancel</Link>
              </button>
              <button
                type="submit"
                className="ti-btn bg-green rounded-sm !mb-0"
              >
                Create Partner
              </button>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

CreatePartner.layout = "Contentlayout";
export default CreatePartner;
