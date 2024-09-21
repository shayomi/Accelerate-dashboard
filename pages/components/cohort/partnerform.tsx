import React, { useState, useEffect, Fragment } from "react";
import { Partner } from "@/shared/types";
import { useRouter } from "next/router";
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";

interface AddNewPartnerProps {
  partner?: Partner;
}

const PartnerForm = ({ partner }: AddNewPartnerProps) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const [contributionDetails, setContributionDetails] = useState("");
  const [associatedEntities, setAssociatedEntities] = useState<string[]>([]);
  const [contactInfo, setContactInfo] = useState({
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    if (partner) {
      setName(partner.name || "");
      setType(partner.type || "");
      setStatus(partner.status || "");
      setContributionDetails(partner.contributionDetails || "");
      setAssociatedEntities(partner.associatedEntities || []);
      setContactInfo(
        partner.contactInfo || { email: "", phone: "", address: "" }
      );
    }
  }, [partner]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Fragment>
      <Seo title="Cohort Management" />
      <Pageheader
        currentpage="Add partners"
        activepage="Dashboards"
        mainpage="Cohort Management"
      />
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <div className="mb-4">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Partner Name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Type</label>
          <input
            type="text"
            className="form-control"
            value={type}
            onChange={(e) => setType(e.target.value)}
            placeholder="Type"
            required
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Status</label>
          <select
            className="form-control"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          >
            <option value="" disabled>
              Select status
            </option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="form-label">Contribution Details</label>
          <textarea
            className="form-control"
            value={contributionDetails}
            onChange={(e) => setContributionDetails(e.target.value)}
            placeholder="Contribution Details"
            required
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Associated Entities</label>
          <input
            type="text"
            className="form-control"
            value={associatedEntities.join(", ")}
            onChange={(e) =>
              setAssociatedEntities(
                e.target.value.split(", ").map((item) => item.trim())
              )
            }
            placeholder="Associated Entities (comma separated)"
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Contact Email</label>
          <input
            type="email"
            className="form-control"
            value={contactInfo.email}
            onChange={(e) =>
              setContactInfo({ ...contactInfo, email: e.target.value })
            }
            placeholder="Contact Email"
            required
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Contact Phone</label>
          <input
            type="text"
            className="form-control"
            value={contactInfo.phone}
            onChange={(e) =>
              setContactInfo({ ...contactInfo, phone: e.target.value })
            }
            placeholder="Contact Phone"
            required
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Contact Address</label>
          <input
            type="text"
            className="form-control"
            value={contactInfo.address}
            onChange={(e) =>
              setContactInfo({ ...contactInfo, address: e.target.value })
            }
            placeholder="Contact Address"
            required
          />
        </div>

        <div className="flex gap-4 mt-12 mb-8 justify-end">
          <button type="button" className="ti-btn bg-none text-red rounded-sm">
            Cancel
          </button>
          <button type="submit" className="ti-btn bg-green rounded-sm">
            {partner ? "Update Partner" : "Add Partner"}
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default PartnerForm;
