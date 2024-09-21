import React, { Fragment, useState } from "react";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import { meetings } from "../../../shared/data/meetingsdata";
import Link from "next/link";
import { FaEye } from "react-icons/fa";

const Meeting = () => {
  const [filter, setFilter] = useState({
    dateRange: "",
    meetingType: "",
    status: "",
  });

  // Separate handler for input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilter((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Separate handler for select change
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilter((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Fragment>
      <Seo title={"Meeting Management"} />
      <Pageheader
        currentpage="Meetings List"
        activepage="Dashboards"
        mainpage="Meeting Management"
      />

      <div className="box custom-card">
        <div className="box-header justify-between gap-8">
          <div className="box-title">Meetings List</div>
          <div className="flex flex-wrap gap-2">
            <div>
              <input
                className="ti-form-control form-control-sm"
                type="text"
                placeholder="Date Range"
                aria-label="Date Range"
                name="dateRange"
                value={filter.dateRange}
                onChange={handleInputChange} // Use input change handler
              />
            </div>
            <div>
              <select
                className="ti-form-control form-control-sm"
                name="meetingType"
                value={filter.meetingType}
                onChange={handleSelectChange} // Use select change handler
              >
                <option value="">Meeting Type</option>
                <option value="Internal">Internal</option>
                <option value="Client">Client</option>
              </select>
            </div>
            <div>
              <select
                className="ti-form-control form-control-sm"
                name="status"
                value={filter.status}
                onChange={handleSelectChange} // Use select change handler
              >
                <option value="">Status</option>
                <option value="Scheduled">Scheduled</option>
                <option value="Completed">Completed</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>
          </div>
        </div>

        <div className="box-body">
          <div className="overflow-x-auto">
            <table className="table min-w-full whitespace-nowrap table-hover border table-bordered">
              <thead>
                <tr className="border border-inherit border-solid dark:border-defaultborder/10">
                  <th className="!ps-4 !pe-5">Date</th>
                  <th>Time</th>
                  <th>Participants</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {meetings
                  .filter((meeting) => {
                    const { dateRange, meetingType, status } = filter;
                    const meetsTypeFilter = meetingType
                      ? meeting.type === meetingType
                      : true;
                    const meetsStatusFilter = status
                      ? meeting.status === status
                      : true;
                    return meetsTypeFilter && meetsStatusFilter;
                  })
                  .map((meeting) => (
                    <tr
                      key={meeting.id}
                      className="border border-inherit border-solid hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light"
                    >
                      <td>{meeting.date}</td>
                      <td>{meeting.time}</td>
                      <td>{meeting.participants}</td>
                      <td>{meeting.type}</td>
                      <td
                        className={
                          meeting.status === "Scheduled"
                            ? "text-green"
                            : meeting.status === "Completed"
                            ? "text-yellow"
                            : "text-red"
                        }
                      >
                        {meeting.status}
                      </td>
                      <td>
                        <button className="ti-btn ti-btn-md ti-btn-secondary !me-[0.375rem]">
                          <Link href={`/meeting/${meeting.id}`}>
                            {" "}
                            <FaEye size={20} />
                          </Link>
                        </button>
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
              Showing {meetings.length} Entries{" "}
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
      </div>
    </Fragment>
  );
};

Meeting.layout = "Contentlayout";

export default Meeting;
