"use client";

import React, { useState, useEffect, Fragment } from "react";
import { useRouter } from "next/router";
import { FaSave, FaTrash } from "react-icons/fa";
import { Event } from "@/shared/types";
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";

interface EventFormProps {
  event?: Event;
}

const EventForm = ({ event }: EventFormProps) => {
  const [formData, setFormData] = useState({
    name: event?.name || "",
    slug: event?.slug || "",
    dateTime: event?.dateTime || "",
    location: event?.location || "",
    eventType: event?.eventType || "Conference",
    description: event?.description || "",
    bannerImage: event?.bannerImage || "",
    maxAttendees: event?.maxAttendees || 100,
    registrationDeadline: event?.registrationDeadline || "",
    agenda: event?.agenda || [{ time: "", activity: "" }],
    speakers: event?.speakers || [{ name: "", email: "", company: "" }],
    sponsors: event?.sponsors || [""],
    relatedCohort: event?.relatedCohort || "",
    registrationFields: event?.registrationFields || ["Name", "Email"],
    status: event?.status || "upcoming",
  });

  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
    field: string
  ) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleAgendaChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>,
    field: "time" | "activity"
  ) => {
    const newAgenda = [...formData.agenda];
    newAgenda[index][field] = e.target.value;
    setFormData({ ...formData, agenda: newAgenda });
  };

  const handleAddAgendaItem = () => {
    setFormData({
      ...formData,
      agenda: [...formData.agenda, { time: "", activity: "" }],
    });
  };

  const handleRemoveAgendaItem = (index: number) => {
    const newAgenda = formData.agenda.filter((_, i) => i !== index);
    setFormData({ ...formData, agenda: newAgenda });
  };

  const handleSpeakerChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>,
    field: "name" | "email" | "company"
  ) => {
    const newSpeakers = [...formData.speakers];
    newSpeakers[index][field] = e.target.value;
    setFormData({ ...formData, speakers: newSpeakers });
  };

  const handleAddSpeaker = () => {
    setFormData({
      ...formData,
      speakers: [...formData.speakers, { name: "", email: "", company: "" }],
    });
  };

  const handleRemoveSpeaker = (index: number) => {
    const newSpeakers = formData.speakers.filter((_, i) => i !== index);
    setFormData({ ...formData, speakers: newSpeakers });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add logic to submit data
    console.log(formData);
    if (event) {
      // If editing, submit to edit event API
    } else {
      // If creating, submit to create event API
    }
    router.push("/events");
  };

  return (
    <Fragment>
      <Seo title="Events Management" />
      <Pageheader
        currentpage="Events"
        activepage="Dashboards"
        mainpage="Event Management"
      />
      <div className="xl:col-span-6 col-span-12">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-12 sm:gap-x-6 sm:gap-y-4"
        >
          {/* Event Name */}
          <div className="md:col-span-6 col-span-12 mb-4">
            <label className="form-label">Event Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange(e, "name")}
              placeholder="Enter event name"
              className="form-control"
              required
            />
          </div>

          {/* Slug */}
          <div className="md:col-span-6 col-span-12 mb-4">
            <label className="form-label">Slug</label>
            <input
              type="text"
              value={formData.slug}
              onChange={(e) => handleChange(e, "slug")}
              placeholder="Enter event slug"
              className="form-control"
              required
            />
          </div>

          {/* Date and Time */}
          <div className="md:col-span-6 col-span-12 mb-4">
            <label className="form-label">Date and Time</label>
            <input
              type="datetime-local"
              value={formData.dateTime}
              onChange={(e) => handleChange(e, "dateTime")}
              className="form-control"
              required
            />
          </div>

          {/* Location */}
          <div className="md:col-span-6 col-span-12 mb-4">
            <label className="form-label">Location</label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => handleChange(e, "location")}
              placeholder="Enter event location"
              className="form-control"
              required
            />
          </div>

          {/* Event Type */}
          <div className="md:col-span-6 col-span-12 mb-4">
            <label className="form-label">Event Type</label>
            <select
              value={formData.eventType}
              onChange={(e) => handleChange(e, "eventType")}
              className="form-control"
              required
            >
              <option value="Conference">Conference</option>
              <option value="Summit">Summit</option>
              <option value="Meetup">Meetup</option>
            </select>
          </div>

          {/* Description */}
          <div className="md:col-span-12 col-span-12 mb-4">
            <label className="form-label">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => handleChange(e, "description")}
              placeholder="Enter event description"
              className="form-control"
              required
            ></textarea>
          </div>

          {/* Banner Image */}
          <div className="md:col-span-6 col-span-12 mb-4">
            <label className="form-label">Banner Image URL</label>
            <input
              type="text"
              value={formData.bannerImage}
              onChange={(e) => handleChange(e, "bannerImage")}
              placeholder="Enter banner image URL"
              className="form-control"
              required
            />
          </div>

          {/* Max Attendees */}
          <div className="md:col-span-6 col-span-12 mb-4">
            <label className="form-label">Max Attendees</label>
            <input
              type="number"
              value={formData.maxAttendees}
              onChange={(e) => handleChange(e, "maxAttendees")}
              className="form-control"
              required
            />
          </div>

          {/* Registration Deadline */}
          <div className="md:col-span-6 col-span-12 mb-4">
            <label className="form-label">Registration Deadline</label>
            <input
              type="datetime-local"
              value={formData.registrationDeadline}
              onChange={(e) => handleChange(e, "registrationDeadline")}
              className="form-control"
              required
            />
          </div>

          {/* Agenda */}
          <div className="md:col-span-12 col-span-12 mb-4">
            <label className="form-label">Agenda</label>
            {formData.agenda.map((item, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="time"
                  value={item.time}
                  onChange={(e) => handleAgendaChange(index, e, "time")}
                  className="form-control"
                />
                <input
                  type="text"
                  value={item.activity}
                  onChange={(e) => handleAgendaChange(index, e, "activity")}
                  className="form-control"
                  placeholder="Enter activity"
                />
                <button
                  type="button"
                  className="ti-btn ti-btn-danger"
                  onClick={() => handleRemoveAgendaItem(index)}
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              className="ti-btn ti-btn-light"
              onClick={handleAddAgendaItem}
            >
              Add Agenda Item
            </button>
          </div>

          {/* Speakers */}
          <div className="md:col-span-12 col-span-12 mb-4">
            <label className="form-label">Speakers</label>
            {formData.speakers.map((speaker, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={speaker.name}
                  onChange={(e) => handleSpeakerChange(index, e, "name")}
                  className="form-control"
                  placeholder="Enter speaker name"
                  required
                />
                <input
                  type="email"
                  value={speaker.email}
                  onChange={(e) => handleSpeakerChange(index, e, "email")}
                  className="form-control"
                  placeholder="Enter speaker email"
                  required
                />
                <input
                  type="text"
                  value={speaker.company}
                  onChange={(e) => handleSpeakerChange(index, e, "company")}
                  className="form-control"
                  placeholder="Enter speaker company"
                />
                <button
                  type="button"
                  className="ti-btn ti-btn-danger"
                  onClick={() => handleRemoveSpeaker(index)}
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              className="ti-btn ti-btn-light"
              onClick={handleAddSpeaker}
            >
              Add Speaker
            </button>
          </div>

          {/* Submit Button */}
          <div className="col-span-12 mt-6 flex flex-row gap-4 justify-end mb-12">
            <button type="submit" className="ti-btn ti-btn-success ti-btn-lg">
              Save
            </button>
            <button type="submit" className="ti-btn ti-btn-primary ti-btn-lg">
              Publish
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default EventForm;
