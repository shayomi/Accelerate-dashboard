/* eslint-disable indent */
import React from "react";
import { eventsData } from "@/shared/data/eventData";
import { useRouter } from "next/router";

const EventDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const event = eventsData.find((e) => e.id === parseInt(id as string));

  if (!event) return <div>Event not found</div>;

  // Example registration data for demonstration
  const registrationData = [
    { name: "John Doe", email: "john@example.com", status: "Confirmed" },
    { name: "Jane Smith", email: "jane@example.com", status: "Waitlisted" },
  ];

  return (
    <div>
      {/* Event Details Section */}
      <section>
        <h1>{event.name}</h1>
        <p>
          <strong>Date:</strong> {event.dateTime}
        </p>
        <p>
          <strong>Location:</strong> {event.location}
        </p>
        <p>
          <strong>Status:</strong> {event.status}
        </p>
        <p>
          <strong>Event Type:</strong> {event.eventType}
        </p>
      </section>

      {/* Registrations Section */}
      <section>
        <h3>Registrations</h3>
        {registrationData.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {registrationData.map((reg, index) => (
                <tr key={index}>
                  <td>{reg.name}</td>
                  <td>{reg.email}</td>
                  <td>{reg.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No registrations available for this event.</p>
        )}
      </section>

      {/* Speakers Section */}
      <section>
        <h3>Speakers</h3>
        {event.speakers.length > 0 ? (
          <ul>
            {event.speakers.map((speaker, index) => (
              <li key={index}>{speaker}</li>
            ))}
          </ul>
        ) : (
          <p>No speakers assigned to this event.</p>
        )}
      </section>

      {/* Agenda Section */}
      <section>
        <h3>Agenda</h3>
        {event.agenda.length > 0 ? (
          <ul>
            {event.agenda.map((session, index) => (
              <li key={index}>
                {session.time} - {session.title}
              </li>
            ))}
          </ul>
        ) : (
          <p>No agenda available for this event.</p>
        )}
      </section>
    </div>
  );
};

export default EventDetails;
