/* eslint-disable indent */
import React, { useState } from "react";
import { Event } from "./eventData";

interface CreateEditEventProps {
  event?: Event; // Optional for edit mode
}

const CreateEditEvent = ({ event }: CreateEditEventProps) => {
  const [name, setName] = useState(event?.name || "");
  const [slug, setSlug] = useState(event?.slug || "");
  const [dateTime, setDateTime] = useState(event?.dateTime || "");
  const [location, setLocation] = useState(event?.location || "");
  const [eventType, setEventType] = useState(event?.eventType || "Conference");
  const [status, setStatus] = useState(event?.status || "Upcoming");
  const [maxAttendees, setMaxAttendees] = useState(event?.maxAttendees || 100);
  const [registrationDeadline, setRegistrationDeadline] = useState(
    event?.registrationDeadline || ""
  );
  const [agenda, setAgenda] = useState(event?.agenda.join("\n") || "");
  const [selectedSpeakers, setSelectedSpeakers] = useState<number[]>(
    event?.speakers || []
  );
  const [sponsors, setSponsors] = useState(event?.sponsors?.join(", ") || "");
  const [relatedCohort, setRelatedCohort] = useState(
    event?.relatedCohort || ""
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission and data saving
  };

  const handleSpeakerSelection = (speakerId: number) => {
    setSelectedSpeakers((prev) =>
      prev.includes(speakerId)
        ? prev.filter((id) => id !== speakerId)
        : [...prev, speakerId]
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label>Event Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
        />
      </div>

      <div>
        <label>Slug</label>
        <input
          type="text"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          className="form-control"
        />
        <button
          type="button"
          onClick={() => setSlug(name.toLowerCase().replace(/\s+/g, "-"))}
          className="btn btn-secondary"
        >
          Generate Slug
        </button>
      </div>

      <div>
        <label>Date and Time</label>
        <input
          type="datetime-local"
          value={dateTime}
          onChange={(e) => setDateTime(e.target.value)}
          className="form-control"
        />
      </div>

      <div>
        <label>Location</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="form-control"
        />
      </div>

      <div>
        <label>Event Type</label>
        <select
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
          className="form-control"
        >
          <option value="Workshop">Workshop</option>
          <option value="Conference">Conference</option>
          <option value="Demo Day">Demo Day</option>
        </select>
      </div>

      <div>
        <label>Status</label>
        <select
          value={status}
          onChange={(e) =>
            setStatus(e.target.value as "Upcoming" | "Ongoing" | "Past")
          } // Type assertion
          className="form-control"
        >
          <option value="Upcoming">Upcoming</option>
          <option value="Ongoing">Ongoing</option>
          <option value="Past">Past</option>
        </select>
      </div>

      <div>
        <label>Maximum Attendees</label>
        <input
          type="number"
          value={maxAttendees}
          onChange={(e) => setMaxAttendees(parseInt(e.target.value))}
          className="form-control"
        />
      </div>

      <div>
        <label>Registration Deadline</label>
        <input
          type="date"
          value={registrationDeadline}
          onChange={(e) => setRegistrationDeadline(e.target.value)}
          className="form-control"
        />
      </div>

      <div>
        <label>Agenda</label>
        <textarea
          value={agenda}
          onChange={(e) => setAgenda(e.target.value)}
          className="form-control"
          placeholder="Enter each agenda item on a new line"
        />
      </div>

      {/* <div>
        <label>Speakers</label>
        {speakers.map((speaker) => (
          <div key={speaker.id}>
            <input
              type="checkbox"
              id={`speaker-${speaker.id}`}
              checked={selectedSpeakers.includes(speaker.id)}
              onChange={() => handleSpeakerSelection(speaker.id)}
            />
            <label htmlFor={`speaker-${speaker.id}`}>{speaker.name}</label>
          </div>
        ))}
      </div> */}

      <div>
        <label>Sponsors (comma-separated)</label>
        <input
          type="text"
          value={sponsors}
          onChange={(e) => setSponsors(e.target.value)}
          className="form-control"
        />
      </div>

      <div>
        <label>Related Cohort</label>
        <input
          type="text"
          value={relatedCohort}
          onChange={(e) => setRelatedCohort(e.target.value)}
          className="form-control"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        {event ? "Update Event" : "Create Event"}
      </button>
    </form>
  );
};

export default CreateEditEvent;
