import React, { useState } from "react";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";

interface PartnerDetailsProps {
  partner?: {
    id: string;
    name: string;
    company: string;
    partnerType: string;
    dateApplied: string;
    status: string;
    companyDetails: string;
    actions: { actionType: string; date: string; reason?: string }[];
    supportingDocuments: string[];
  };
}

const PartnerDetails: React.FC<PartnerDetailsProps> = ({ partner }) => {
  const [rejectionReason, setRejectionReason] = useState("");
  const [showRejectReason, setShowRejectReason] = useState(false);

  // Handle the case when partner is undefined
  if (!partner) {
    return <div>Partner not found.</div>;
  }

  const handleApprove = () => {
    alert("Partner Approved");
  };

  const handleReject = () => {
    setShowRejectReason(true);
  };

  const handleSubmitRejection = () => {
    alert(`Partner Rejected. Reason: ${rejectionReason}`);
  };

  return (
    <>
      <Seo title={`${partner.name} - Partner Details`} />
      <Pageheader
        currentpage="Partner Detail"
        activepage="Partners"
        mainpage="Dashboard"
      />

      <div className="rounded-md overflow-hidden">
        <div className="box-body !p-0">
          {/* Profile Header */}
          <div className="md:flex items-start md:items-center p-6 ">
            <div>
              <span className="avatar avatar-xxl avatar-rounded online me-4">
                <img src="../../../assets/images/faces/9.jpg" alt="" />
              </span>
            </div>
            <div className="flex-grow main-profile-info">
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center !justify-between">
                <div>
                  <h6 className="font-semibold mb-1 text-sm">{partner.name}</h6>
                  <p className="mb-1 text-sm opacity-[0.7]">
                    {partner.partnerType}
                  </p>
                  <p className="text-sm mb-6 opacity-[0.5]">
                    <span className="me-4 inline-flex">
                      <i className="ri-building-line me-1 align-middle"></i>
                      {partner.company}
                    </span>
                    <span className="inline-flex">
                      <i className="ri-calendar-line me-1 align-middle"></i>
                      Applied on {partner.dateApplied}
                    </span>
                  </p>
                </div>

                <div className="">
                  <p className="text-sm mb-2 me-6 font-semibold">
                    Contact Information:
                  </p>
                  <div className="text-sm">
                    <p className="mb-2">
                      <span className="avatar avatar-sm avatar-rounded me-2 bg-light text-sm">
                        <i className="ri-mail-line align-middle text-sm"></i>
                      </span>
                      contact@{partner.company.toLowerCase()}.com
                    </p>
                    <p className="mb-0 text-sm">
                      <span className="avatar avatar-sm avatar-rounded me-2 bg-light text-sm">
                        <i className="ri-map-pin-line align-middle text-[.875rem] text-black/50 dark:text-white/50"></i>
                      </span>
                      Address: 123 Main St, City, Country
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Company Details */}
          <div className="p-6 border-b border-dashed dark:border-defaultborder/10">
            <div className="mb-6">
              <p className="text-sm mb-2 font-semibold ">Company Details:</p>
              <p className="text-sm opacity-[0.7] mb-0">
                {partner.companyDetails}
              </p>
            </div>
          </div>

          {/* Supporting Documents */}
          <div className="p-6 border-b border-dashed dark:border-defaultborder/10">
            <p className="text-sm mb-2 font-semibold">Supporting Documents:</p>
            <div className="mb-0">
              {partner.supportingDocuments.map((doc, index) => (
                <p className="mb-1" key={index}>
                  <a href={`#${doc}`} className="text-primary">
                    <u>{doc}</u>
                  </a>
                </p>
              ))}
            </div>
          </div>

          {/* Timeline of Actions */}
          <div className="p-6">
            <p className="text-sm mb-2 me-6 font-semibold">
              Timeline of Actions:
            </p>
            <ul className="list-group">
              {partner.actions.map((action, idx) => (
                <li className="list-group-item" key={idx}>
                  <div className="sm:flex items-start">
                    <div className="sm:ms-2 ms-0 sm:mt-0 mt-1 font-semibold flex-grow flex-row gap-2 items-center">
                      <p className="mb-0 leading-none">{action.actionType}</p>
                      <span className="text-sm opacity-[0.7]">
                        {action.date}
                      </span>
                    </div>
                    {action.reason && (
                      <p className="text-sm">Reason: {action.reason}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div className="p-6 border-b dark:border-defaultborder/10 border-dashed">
            <p className="text-sm mb-2 me-6 font-semibold">Actions:</p>
            <div className="flex items-center mb-2">
              <button
                onClick={handleApprove}
                className="ti-btn ti-btn-success me-2"
              >
                Approve
              </button>
              <button onClick={handleReject} className="ti-btn ti-btn-danger">
                Reject
              </button>
            </div>
            {showRejectReason && (
              <div className="mt-2">
                <textarea
                  placeholder="Reason for rejection (if any)"
                  value={rejectionReason}
                  onChange={(e) => setRejectionReason(e.target.value)}
                  className="form-textarea w-full border border-gray-300 rounded-md p-2"
                ></textarea>
                <button
                  onClick={handleSubmitRejection}
                  className="ti-btn ti-btn-danger mt-2"
                >
                  Submit Rejection
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerDetails;
