// components/RegistrationDetails.tsx

"use client";

import React, { Fragment, useState } from "react";
import { Event } from "@/shared/types";
import { FaEye, FaTrash } from "react-icons/fa";
import Link from "next/link";
import { exportToCsv } from "@/shared/exportToCsv";

interface RegistrationDetailsProps {
  event: Event;
}

const RegistrationDetails: React.FC<RegistrationDetailsProps> = ({ event }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  if (!event) {
    return <div>Event not found</div>;
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleExport = () => {
    const csvData = event.registeredPeople.map((person) => ({
      Name: person.name,
      Email: person.email,
      Company: person.company,
      Status: person.status,
    }));
    exportToCsv("registrations.csv", csvData);
  };

  const filteredPeople = event.registeredPeople.filter((person) => {
    const matchesSearch =
      person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      person.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      filterStatus === "All" || person.status === filterStatus;

    return matchesSearch && matchesStatus;
  });

  return (
    <Fragment>
      <div className="box custom-card">
        <div className="box-header flex flex-row  gap-8 mb-2 items-center">
          <h1 className="box-title">Registrations</h1>

          <div className="flex gap-4">
            <input
              type="text"
              className="ti-form-control form-control-lg"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
            />

            <select
              className="ti-form-control form-control-lg"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Waitlisted">Waitlisted</option>
              <option value="Cancelled">Cancelled</option>
            </select>

            <button
              className="ti-btn ti-btn-md ti-btn-primary"
              onClick={handleExport}
            >
              Export to CSV
            </button>
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
                      value=""
                      aria-label="..."
                    />
                  </th>
                  <th className="!text-start !text-[0.85rem] min-w-[200px] p-2">
                    Name
                  </th>
                  <th className="!text-start !text-[0.85rem] p-2">Email</th>
                  <th className="!text-start !text-[0.85rem] p-2">Company</th>
                  <th className="!text-start !text-[0.85rem] p-2">Status</th>
                  <th className="!text-start !text-[0.85rem] p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredPeople.length > 0 ? (
                  filteredPeople.map((person, index) => (
                    <tr
                      key={index}
                      className="border border-inherit border-solid hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light"
                    >
                      <td scope="row" className="!ps-4 !pe-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          aria-label="..."
                        />
                      </td>
                      <td className="p-2">{person.name}</td>
                      <td className="p-2">{person.email}</td>
                      <td className="p-2">{person.company}</td>
                      <td
                        className={`p-2 ${
                          person.status === "Confirmed"
                            ? "text-success"
                            : person.status === "Waitlisted"
                            ? "text-warning"
                            : "text-danger"
                        }`}
                      >
                        {person.status}
                      </td>
                      <td className="p-2">
                        <div className="flex flex-row gap-4 items-center">
                          <button className="ti-btn ti-btn-warning ti-btn-md">
                            <FaEye size={20} />
                          </button>
                          <button className="ti-btn ti-btn-danger ti-btn-md">
                            <FaTrash size={20} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="text-center p-4">
                      No registrations available.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="box-footer">
        <div className="sm:flex items-center">
          <div className="text-white">
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

export default RegistrationDetails;
