import React, { Fragment } from "react";
import { Partner } from "@/types";
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";

interface PartnerDetailsProps {
  partner: Partner;
}

const PartnerDetails: React.FC<PartnerDetailsProps> = ({ partner }) => {
  return (
    <Fragment>
      <Seo title="Cohorts Management" />
      <Pageheader
        currentpage="Cohort Details"
        activepage="Dashboards"
        mainpage="Cohort"
      />
      <div className="box custom-card">
        <div className="box-header justify-between gap-8">
          <div className="box-title">Partner Details</div>
        </div>
        <div className="box-body">
          <div className="grid grid-cols-1 gap-6">
            <div className="col-span-1 mb-4">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                aria-label="Name"
                value={partner.name}
                readOnly
              />
            </div>
            <div className="col-span-1 mb-4">
              <label className="form-label">Type</label>
              <input
                type="text"
                className="form-control"
                placeholder="Type"
                aria-label="Type"
                value={partner.type}
                readOnly
              />
            </div>
            <div className="col-span-1 mb-4">
              <label className="form-label">Status</label>
              <input
                type="text"
                className="form-control"
                placeholder="Status"
                aria-label="Status"
                value={partner.status}
                readOnly
              />
            </div>
            <div className="col-span-1 mb-4">
              <label className="form-label">Contribution Details</label>
              <textarea
                className="form-control"
                placeholder="Contribution Details"
                aria-label="Contribution Details"
                value={partner.contributionDetails}
                readOnly
                rows={4}
              />
            </div>
            <div className="col-span-1 mb-4">
              <label className="form-label">Associated Entities</label>
              <input
                type="text"
                className="form-control"
                placeholder="Associated Entities"
                aria-label="Associated Entities"
                value={partner.associatedEntities.join(", ")}
                readOnly
              />
            </div>
            <div className="col-span-1 mb-4">
              <label className="form-label">Contact Email</label>
              <input
                type="text"
                className="form-control"
                placeholder="Contact Email"
                aria-label="Contact Email"
                value={partner.contactInfo.email}
                readOnly
              />
            </div>
            <div className="col-span-1 mb-4">
              <label className="form-label">Contact Phone</label>
              <input
                type="text"
                className="form-control"
                placeholder="Contact Phone"
                aria-label="Contact Phone"
                value={partner.contactInfo.phone}
                readOnly
              />
            </div>
            <div className="col-span-1 mb-4">
              <label className="form-label">Contact Address</label>
              <input
                type="text"
                className="form-control"
                placeholder="Contact Address"
                aria-label="Contact Address"
                value={partner.contactInfo.address}
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PartnerDetails;
