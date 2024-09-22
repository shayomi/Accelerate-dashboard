import React, { Fragment } from "react";
import { Event } from "@/shared/types";

interface AgendaDetailsProps {
  event: Event;
}

const AgendaDetails = ({ event }: AgendaDetailsProps) => {
  return (
    <Fragment>
      <div className="box custom-card">
        <div className="box-header justify-between gap-8 mb-2 items-center">
          <h2 className="text-xl font-bold">Agenda</h2>
        </div>
        <div className="box-body">
          <div className="overflow-x-auto">
            <table className="table min-w-full whitespace-nowrap table-hover border table-bordered">
              <thead>
                <tr className="border border-inherit border-solid dark:border-defaultborder/10">
                  <th className="p-2">Time</th>
                  <th className="p-2">Activity</th>
                </tr>
              </thead>
              <tbody>
                {event.agenda.length > 0 ? (
                  event.agenda.map(({ time, activity }, index) => (
                    <tr key={index} className="border hover:bg-gray-100">
                      <td className="p-2">{time}</td>
                      <td className="p-2">{activity}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={2} className="p-2 text-center">
                      No agenda available
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
            Showing {event.agenda.length} Entries{" "}
            <i className="bi bi-arrow-right ms-2 font-semibold"></i>
          </div>
          <div className="ms-auto">
            <nav aria-label="Page navigation" className="pagination-style-4">
              <ul className="ti-pagination mb-0">
                <li className="page-item disabled">
                  <a className="page-link" href="#!">
                    Prev
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link active" href="#!">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#!">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link !text-primary" href="#!">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AgendaDetails;
