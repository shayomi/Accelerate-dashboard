"use client";

import React from "react";
import { Event } from "@/shared/types"; // Assuming the Event type and events data is imported from a data file

interface InformationDetailsProps {
  event: Event;
}

const InformationDetails = ({ event }: InformationDetailsProps) => {
  return (
    <div className="box custom-card">
      {/* Header */}
      <div className="box-header justify-between gap-8 mb-4 items-center">
        <h1 className="text-2xl font-bold text-blue-700">{event.name}</h1>
        <div className="text-gray-500">
          {new Date(event.dateTime).toLocaleDateString()} at{" "}
          {new Date(event.dateTime).toLocaleTimeString()}
        </div>
      </div>

      {/* Event Information */}
      <div className="box-body grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <h2 className="text-lg font-semibold">Event Type</h2>
          <p>{event.eventType}</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Location</h2>
          <p>{event.location}</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Max Attendees</h2>
          <p>{event.maxAttendees}</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Registration Deadline</h2>
          <p>{new Date(event.registrationDeadline).toLocaleDateString()}</p>
        </div>
      </div>

      {/* Event Description */}
      <div className="box-body mt-4">
        <h2 className="text-lg font-semibold">Description</h2>
        <p>{event.description}</p>
      </div>

      {/* Sponsors */}
      <div className="box-body mt-4">
        <h2 className="text-lg font-semibold">Sponsors</h2>
        <ul className="list-disc pl-5">
          {event.sponsors.map((sponsor, index) => (
            <li key={index}>{sponsor}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InformationDetails;
