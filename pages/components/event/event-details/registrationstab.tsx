// components/RegistrationDetails.tsx

"use client";

import React, { Fragment } from "react";
import { Event } from "@/shared/types"; // Adjust the path to where your Event interface is defined
import { FaEye, FaTrash } from "react-icons/fa";
import Link from "next/link";

// Props to pass the event data
interface RegistrationDetailsProps {
  event: Event;
}

const RegistrationDetails: React.FC<RegistrationDetailsProps> = ({ event }) => {
  return (
    <Fragment>
      <div className="box custom-card">
        {/* Header */}
        <div className="box-header justify-between gap-8 mb-2 items-center">
          <h1 className="text-xl font-bold">Registrations</h1>
        </div>

        {/* Registrations Table */}
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
                  <th className="!text-start !text-[0.85rem] p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {event.registeredPeople.length > 0 ? (
                  event.registeredPeople.map((person, index) => (
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
                    <td colSpan={4} className="text-center p-4">
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
