/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { Fragment, useState } from "react";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import { eventsData } from "../../shared/data/event/eventdata";
import { FaEye, FaPencilAlt } from "react-icons/fa";

interface EventDetailProps {
  event: Event;
}

const Events = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [filterLocation, setFilterLocation] = useState("");

  const filteredEvents = eventsData.filter((event) => {
    const matchesStatus = filterStatus ? event.status === filterStatus : true;
    const matchesLocation = filterLocation
      ? event.location.includes(filterLocation)
      : true;
    const matchesSearch = event.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesStatus && matchesLocation && matchesSearch;
  });

  return (
    <Fragment>
      <Seo title="Events Management" />
      <Pageheader
        currentpage="Events"
        activepage="Dashboards"
        mainpage="Event Management"
      />

      <div className="box custom-card">
        <div className="box-header flex justify-between items-center mb-2">
          <div className="box-title">Events</div>
          <div className="flex flex-col md:flex-row w-[60%] gap-4">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by event name"
              className="form-control"
            />

            <select
              value={filterLocation}
              onChange={(e) => setFilterLocation(e.target.value)}
              className="form-control"
            >
              <option value="">locations</option>
              <option value="Upcoming">Lagos</option>
              <option value="Ongoing">Kenya</option>
            </select>
          </div>
          <button className="ti-btn ti-btn-success-full">
            <Link href="/events/create-event">Create New Event</Link>
          </button>
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
                  <th className="px-4 py-2">Event Name</th>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Location</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Registrations</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredEvents.map((event, index) => (
                  <tr
                    key={index}
                    className="border border-inherit border-solid hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light"
                  >
                    <th scope="row" className="!ps-4 !pe-5">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        aria-label="..."
                      />
                    </th>
                    <td className="text-sm px-4 py-2">{event.name}</td>
                    <td className="text-sm px-4 py-2">{event.dateTime}</td>
                    <td className="text-sm px-4 py-2">{event.location}</td>
                    <td className="text-sm px-4 py-2">
                      <span
                        className={`px-2 py-1 rounded-full text-sm ${
                          event.status === "upcoming"
                            ? "text-green"
                            : event.status === "ongoing"
                            ? "text-yellow"
                            : "text-danger"
                        }`}
                      >
                        {event.status}
                      </span>
                    </td>
                    <td className="px-4 py-2">{event.maxAttendees}</td>
                    <td className="p-2 flex flex-row gap-6">
                      <Link href={`/events/${event.id}`}>
                        <button className="ti-btn ti-btn-md ti-btn-primary">
                          <FaEye size={20} />
                        </button>
                      </Link>
                      <Link href={`/events/edit/${event.id}`}>
                        <button className="ti-btn ti-btn-md ti-btn-warning">
                          <FaPencilAlt size={20} />
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
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

Events.layout = "Contentlayout";

export default Events;
