"use client";

import React, { Fragment } from "react";
import { Event } from "@/shared/types";
import { FaEye, FaTrash } from "react-icons/fa";
import Link from "next/link";

interface SpeakersDetailsProps {
  event: Event;
}
const SpeakersDetails = ({ event }: SpeakersDetailsProps) => {
  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <Fragment>
      <div className="box custom-card">
        <div className="box-header justify-between gap-8 mb-2 items-center">
          <h1 className="text-xl font-bold">Speakers</h1>
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
                  <th className="!text-start !text-[0.85rem] p-2">Name</th>
                  <th className="!text-start !text-[0.85rem] p-2">Email</th>
                  <th className="!text-start !text-[0.85rem] p-2">Compnay</th>
                </tr>
              </thead>
              <tbody>
                {event.speakers.length > 0 ? (
                  event.speakers.map(({ name, email, company }, index) => (
                    <tr key={index} className="border hover:bg-gray-100">
                      <td scope="row" className="!ps-4 !pe-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          aria-label="..."
                        />
                      </td>
                      <td className="!text-start !text-[0.85rem] p-2">
                        {name}
                      </td>
                      <td className="!text-start !text-[0.85rem] p-2">
                        {email}
                      </td>
                      <td className="!text-start !text-[0.85rem] p-2">
                        {company}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3} className="p-2 text-center">
                      No speakers available
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

export default SpeakersDetails;
