"use client";

import React, { Fragment, useState, useEffect } from "react";
import { Event, Speaker } from "@/types";
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import { speakersData } from "./speakerdata";

interface EventFormProps {
  eventData?: Event;
  onSubmit: (event: Event) => void;
}

const EventForm = ({ eventData, onSubmit }: EventFormProps) => {
  const [eventName, setEventName] = useState(eventData?.name || "");
  const [slug, setSlug] = useState(eventData?.slug || "");
  const [dateTime, setDateTime] = useState(eventData?.dateTime || "");
  const [location, setLocation] = useState(eventData?.location || "");
  const [eventType, setEventType] = useState(eventData?.eventType || "");
  const [description, setDescription] = useState(eventData?.description || "");
  const [bannerImage, setBannerImage] = useState(eventData?.bannerImage || "");
  const [maxAttendees, setMaxAttendees] = useState(
    eventData?.maxAttendees || ""
  );
  const [registrationDeadline, setRegistrationDeadline] = useState(
    eventData?.registrationDeadline || ""
  );
  const [agenda, setAgenda] = useState(eventData?.agenda || []);
  const [selectedSpeakers, setSelectedSpeakers] = useState<Speaker[]>(
    eventData?.speakers || []
  );

  const [speakerOptions] = useState<Speaker[]>(speakersData);

  const handleSpeakerChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIds = Array.from(event.target.selectedOptions, (option) =>
      parseInt(option.value)
    );
    const newSelectedSpeakers = speakerOptions.filter((speaker) =>
      selectedIds.includes(speaker.id)
    );
    setSelectedSpeakers(newSelectedSpeakers);
  };

  const removeSpeaker = (speaker: Speaker) => {
    setSelectedSpeakers(selectedSpeakers.filter((s) => s.id !== speaker.id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newEvent: Event = {
      id: eventData?.id ?? Date.now(),
      name: eventName,
      slug,
      dateTime,
      location,
      eventType,
      description,
      bannerImage,
      maxAttendees,
      registrationDeadline,
      agenda,
      status: "draft",
      speakers: selectedSpeakers,
      registrationFields: [],
      sponsors: [],
      relatedCohort: "",
    };

    onSubmit(newEvent);
  };

  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  };

  useEffect(() => {
    if (eventName) {
      setSlug(generateSlug(eventName));
    }
  }, [eventName]);

  return (
    <Fragment>
      <Seo title={eventData ? "Edit Event" : "Create Event"} />
      <Pageheader
        currentpage={eventData ? "Edit Event" : "Create Event"}
        activepage="Events Management"
        mainpage="Events"
      />
      <div className="xl:col-span-6 col-span-12">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-12 sm:gap-x-6 sm:gap-y-4">
            <div className="md:col-span-6 col-span-12 mb-4">
              <label className="form-label">Event Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Event Name"
                aria-label="Event Name"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                required
              />
            </div>

            <div className="md:col-span-6 col-span-12 mb-4">
              <label className="form-label">Slug</label>
              <div className="flex items-center">
                <input
                  type="text"
                  className="form-control flex-grow"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setSlug(generateSlug(eventName))}
                  className="ml-2 bg-gray-200 p-2 rounded"
                >
                  Refresh
                </button>
              </div>
            </div>

            <div className="md:col-span-6 col-span-12 mb-4">
              <label className="form-label">Date and Time</label>
              <input
                type="datetime-local"
                className="form-control"
                value={dateTime}
                onChange={(e) => setDateTime(e.target.value)}
              />
            </div>

            <div className="md:col-span-6 col-span-12 mb-4">
              <label className="form-label">Location</label>
              <input
                type="text"
                className="form-control"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div className="md:col-span-6 col-span-12 mb-4">
              <label className="form-label">Event Type</label>
              <input
                type="text"
                className="form-control"
                placeholder="Event Type"
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
              />
            </div>

            <div className="md:col-span-12 col-span-12 mb-4">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                placeholder="Event Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="md:col-span-12 col-span-12 mb-4">
              <label className="form-label">Banner Image URL</label>
              <input
                type="text"
                className="form-control"
                placeholder="Banner Image URL"
                value={bannerImage}
                onChange={(e) => setBannerImage(e.target.value)}
              />
            </div>

            <div className="md:col-span-6 col-span-12 mb-4">
              <label className="form-label">Max Attendees</label>
              <input
                type="number"
                className="form-control"
                placeholder="Max Attendees"
                value={maxAttendees}
                onChange={(e) => setMaxAttendees(e.target.value)}
              />
            </div>

            <div className="md:col-span-6 col-span-12 mb-4">
              <label className="form-label">Registration Deadline</label>
              <input
                type="date"
                className="form-control"
                value={registrationDeadline}
                onChange={(e) => setRegistrationDeadline(e.target.value)}
              />
            </div>

            <div className="md:col-span-12 col-span-12 mb-4">
              <label className="form-label">Agenda</label>
              {/* Add agenda fields if required */}
            </div>

            <div className="md:col-span-12 col-span-12 mb-4">
              <label className="form-label">Speakers</label>
              <select
                multiple
                className="form-control"
                onChange={handleSpeakerChange}
                value={selectedSpeakers.map((speaker) => speaker.id.toString())}
              >
                <option value="" disabled>
                  Select speakers
                </option>
                {speakerOptions.map((speaker) => (
                  <option key={speaker.id} value={speaker.id}>
                    {speaker.name}
                  </option>
                ))}
              </select>
              <ul className="mt-2">
                {selectedSpeakers.map((speaker) => (
                  <li
                    key={speaker.id}
                    className="flex justify-between items-center"
                  >
                    {speaker.name}
                    <button
                      type="button"
                      onClick={() => removeSpeaker(speaker)}
                      className="text-red-500 ml-2"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-12 col-span-12 flex flex-row gap-4 mt-6 items-end">
              <button
                type="button"
                className="ti-btn bg-none text-red rounded-sm !mb-0"
              >
                Save as Draft
              </button>
              <button
                type="submit"
                className="ti-btn bg-green rounded-sm !mb-0"
              >
                {eventData ? "Update Event" : "Create Event"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

EventForm.layout = "Contentlayout";
export default EventForm;
