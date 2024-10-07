import React, { useState } from "react";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import { FaFileCsv, FaEnvelope } from "react-icons/fa";

const registrantsData = [
  {
    name: "John Doe",
    email: "johndoe@example.com",
    company: "TechCorp",
    status: "Confirmed",
  },
  {
    name: "Jane Smith",
    email: "janesmith@example.com",
    company: "StartupX",
    status: "Waitlisted",
  },
  {
    name: "Bob Johnson",
    email: "bobjohnson@example.com",
    company: "DevHub",
    status: "Cancelled",
  },
];

const Registration = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [selectedRegistrants, setSelectedRegistrants] = useState<string[]>([]);

  const filteredRegistrants = registrantsData.filter((registrant) => {
    const matchesStatus = filterStatus
      ? registrant.status === filterStatus
      : true;
    const matchesSearch =
      registrant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      registrant.email.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const toggleSelectRegistrant = (email: string) => {
    if (selectedRegistrants.includes(email)) {
      setSelectedRegistrants(selectedRegistrants.filter((e) => e !== email));
    } else {
      setSelectedRegistrants([...selectedRegistrants, email]);
    }
  };

  const handleExportCSV = () => {
    alert("Exporting to CSV...");
  };

  const handleBulkEmail = () => {
    alert(`Sending bulk emails to: ${selectedRegistrants.join(", ")}`);
  };

  return (
    <div className="box">
      <Seo title="Event Registrations" />
      <Pageheader
        currentpage="Registrations"
        activepage="Events"
        mainpage="Event Management"
      />

      {/* Header and Actions */}
      <div className="box-header justify-between gap-8">
        <h1 className="box-title">Event Registrations</h1>
        <div className="flex gap-2">
          <button
            className="ti-btn ti-btn-primary bg-blue text-white py-2 px-4 rounded-md flex items-center gap-2"
            onClick={handleExportCSV}
          >
            <FaFileCsv /> Export to CSV
          </button>
          <button
            className="ti-btn ti-btn-primary bg-green text-white py-2 px-4 rounded-md flex items-center gap-2"
            onClick={handleBulkEmail}
            disabled={!selectedRegistrants.length}
          >
            <FaEnvelope /> Send Bulk Email
          </button>
        </div>
      </div>

      {/* Search and Filter Options */}
      <div className="box-body mb-6">
        <div className="flex flex-col md:flex-row gap-4 justify-end">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by name or email"
            className="ti-form-control form-control-md "
          />

          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="ti-form-control form-control-md"
          >
            <option value="">All Statuses</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Waitlisted">Waitlisted</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      {/* Registrants Table */}
      <div className="box-body">
        <div className="overflow-x-auto">
          <table className="table min-w-full whitespace-nowrap table-hover border table-bordered">
            <thead>
              <tr className="border border-inherit border-solid dark:border-defaultborder/10">
                <th scope="row" className="!ps-4 !pe-5">
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      setSelectedRegistrants(
                        e.target.checked
                          ? filteredRegistrants.map((r) => r.email)
                          : []
                      )
                    }
                  />
                </th>
                <th className="!text-start !text-[0.85rem] min-w-[200px]">
                  Name
                </th>
                <th className="!text-start !text-[0.85rem]">Email</th>
                <th className="!text-start !text-[0.85rem]">Company</th>
                <th className="!text-start !text-[0.85rem]">Status</th>
                <th className="!text-start !text-[0.85rem]">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredRegistrants.map((registrant, index) => (
                <tr
                  className="border border-inherit border-solid hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light"
                  key={index}
                >
                  <th scope="row" className="!ps-4 !pe-5">
                    <input
                      type="checkbox"
                      checked={selectedRegistrants.includes(registrant.email)}
                      onChange={() => toggleSelectRegistrant(registrant.email)}
                    />
                  </th>
                  <td>{registrant.name}</td>
                  <td>{registrant.email}</td>
                  <td>{registrant.company}</td>
                  <td
                    className={
                      registrant.status === "Confirmed"
                        ? "text-green"
                        : registrant.status === "Waitlisted"
                          ? "text-yellow"
                          : "text-red"
                    }
                  >
                    {registrant.status}
                  </td>
                  <td>
                    <div className="flex gap-4 items-center">
                      <button className="bg-transparent border-[1px] border-primary text-primary px-3 py-1.5 rounded-md">
                        Edit
                      </button>
                      <button className="text-red">Remove</button>
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
            Showing {filteredRegistrants.length} Entries{" "}
            <i className="bi bi-arrow-right ms-2 font-semibold"></i>
          </div>
          <div className="ms-auto">
            <nav aria-label="Page navigation" className="pagination-style-4">
              <ul className="ti-pagination mb-0">
                <li className="page-item disabled">
                  <button className="page-link">Prev</button>
                </li>
                <li className="page-item">
                  <button className="page-link active">1</button>
                </li>
                <li className="page-item">
                  <button className="page-link">2</button>
                </li>
                <li className="page-item">
                  <button className="page-link text-primary">Next</button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

Registration.layout = "Contentlayout";

export default Registration;
