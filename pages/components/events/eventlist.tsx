/* eslint-disable indent */
import React, { useState } from "react";
import Link from "next/link";
import { FaEye, FaPencilAlt } from "react-icons/fa";
import { eventsData } from "@/shared/data/eventData";

const Events = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterLocation, setFilterLocation] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

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
    <div className="box custom-card">
      <div className="box-header flex justify-between items-center mb-2">
        <h1 className="text-2xl font-bold text-blue-700">Events</h1>
        <div className="flex gap-4">
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
            <option value="">Location</option>
            <option value="Lagos">Lagos</option>
            <option value="Kenya">Kenya</option>
          </select>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="form-control"
          >
            <option value="">Status</option>
            <option value="Upcoming">Upcoming</option>
            <option value="Ongoing">Ongoing</option>
            <option value="Past">Past</option>
          </select>
        </div>
        <button className="bg-green text-white py-2 px-4 rounded-md">
          <Link href="/events/create-event">Create New Event</Link>
        </button>
      </div>

      <div className="box-body">
        <table className="table min-w-full">
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Date</th>
              <th>Location</th>
              <th>Status</th>
              <th>Registrations</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredEvents.map((event) => (
              <tr key={event.id}>
                <td>{event.name}</td>
                <td>{event.dateTime}</td>
                <td>{event.location}</td>
                <td>{event.status}</td>
                <td>{event.maxAttendees}</td>
                <td>
                  <Link href={`/events/${event.id}`}>
                    <FaEye />
                  </Link>
                  <Link href={`/events/${event.id}/edit`}>
                    <FaPencilAlt />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Events;
