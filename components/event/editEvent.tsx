import React, { Fragment, useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";

// Load React Quill dynamically
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const speakersList = ["Speaker 1", "Speaker 2", "Speaker 3"];
const sponsorsList = ["Sponsor 1", "Sponsor 2", "Sponsor 3"];
const cohortsList = ["Cohort 1", "Cohort 2", "Cohort 3"];

const EditEvent = () => {
  const [selectedSpeakers, setSelectedSpeakers] = useState<string[]>([]);
  const [selectedSponsors, setSelectedSponsors] = useState<string[]>([]);
  const [selectedCohort, setSelectedCohort] = useState<string | null>(null); // Single cohort

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");

  // Add and remove speaker from selection
  const handleSpeakerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSpeaker = e.target.value;
    if (!selectedSpeakers.includes(selectedSpeaker)) {
      setSelectedSpeakers([...selectedSpeakers, selectedSpeaker]);
    }
  };

  const removeSpeaker = (speaker: string) => {
    setSelectedSpeakers(selectedSpeakers.filter((s) => s !== speaker));
  };

  // Add and remove sponsor from selection
  const handleSponsorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSponsor = e.target.value;
    if (!selectedSponsors.includes(selectedSponsor)) {
      setSelectedSponsors([...selectedSponsors, selectedSponsor]);
    }
  };

  const removeSponsor = (sponsor: string) => {
    setSelectedSponsors(selectedSponsors.filter((s) => s !== sponsor));
  };

  // Single cohort selection logic
  const handleCohortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCohort(e.target.value);
  };

  const removeCohort = () => {
    setSelectedCohort(null);
  };

  return (
    <Fragment>
      <Seo title={"Event Management"} />
      <Pageheader
        currentpage="Create Event"
        activepage="Dashboards"
        mainpage="Event Management"
      />
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-700">Edit Event</h1>
        <div className="flex space-x-4">
          <button className="bg-primary text-white py-2 px-4 rounded-md">
            Save Changes
          </button>
        </div>
      </div>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Event Name */}
        <div className="col-span-2">
          <label className="block text-sm font-medium">Event Name</label>
          <input
            type="text"
            placeholder="Enter event name"
            className="form-control"
          />
        </div>

        {/* Slug Field */}
        <div>
          <label className="block text-sm font-medium">Slug</label>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Auto-generated slug"
              className="form-control"
            />
            <button
              type="button"
              className="ml-2 px-3 py-2 bg-[#1a1e25] text-white rounded-md"
            >
              Refresh
            </button>
          </div>
        </div>

        {/* Date and Time */}
        <div>
          <label className="block text-sm font-medium ">Date and Time</label>
          <input type="datetime-local" className="form-control" />
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium ">Location</label>
          <input
            type="text"
            placeholder="Enter location"
            className="form-control"
          />
        </div>

        {/* Event Type */}
        <div>
          <label className="block text-sm font-medium ">Event Type</label>
          <select className="form-control">
            <option value="">Select Type</option>
            <option value="Workshop">Workshop</option>
            <option value="Conference">Conference</option>
            <option value="Demo Day">Demo Day</option>
          </select>
        </div>

        {/* Event Banner Image */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Event Banner Image
          </label>
          <input type="file" className="form-control" />
        </div>

        {/* Maximum Attendees */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Maximum Attendees
          </label>
          <input
            type="number"
            placeholder="Enter max attendees"
            className="form-control"
          />
        </div>

        {/* Registration Deadline */}
        <div>
          <label className="block text-sm font-medium">
            Registration Deadline
          </label>
          <input type="date" className="form-control" />
        </div>

        {/* Event Agenda */}
        <div className="col-span-2">
          <label className="block text-sm font-medium ">Event Agenda</label>
          <textarea
            placeholder="Enter event agenda"
            className="form-control"
            rows={3}
          ></textarea>
        </div>

        {/* Description */}
        <div className="col-span-2">
          <label className="block text-sm font-mediu">Description</label>
          <ReactQuill
            className="mt-1 bg-[#e6e6e6] hs-dark-mode-active:bg-[#1a1e25] rounded-md"
            theme="snow"
          />
        </div>

        {/* Speakers */}
        <div className="col-span-1">
          <label className="block text-sm font-medium">Speakers</label>
          <select className="form-control" onChange={handleSpeakerChange}>
            <option value="">Select Speaker</option>
            {speakersList.map((speaker, idx) => (
              <option key={idx} value={speaker}>
                {speaker}
              </option>
            ))}
          </select>

          {/* Selected Speakers */}
          <div className="mt-2">
            {selectedSpeakers.map((speaker, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-2 bg-gray-100 rounded mb-2"
              >
                <span>{speaker}</span>
                <button
                  type="button"
                  className="text-red-500"
                  onClick={() => removeSpeaker(speaker)}
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Sponsors */}
        <div className="col-span-1">
          <label className="block text-sm font-medium ">Sponsors</label>
          <select className="form-control" onChange={handleSponsorChange}>
            <option value="">Select Sponsor</option>
            {sponsorsList.map((sponsor, idx) => (
              <option key={idx} value={sponsor}>
                {sponsor}
              </option>
            ))}
          </select>

          {/* Selected Sponsors */}

          <div className="mt-2">
            {selectedSponsors.map((sponsor, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-2 bg-gray-100 rounded mb-2"
              >
                <span>{sponsor}</span>
                <button
                  type="button"
                  className="text-red-500"
                  onClick={() => removeSponsor(sponsor)}
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Related Cohort */}
        <div className="col-span-1">
          <label className="block text-sm font-medium ">Related Cohort</label>
          <select className="form-control" onChange={handleCohortChange}>
            <option value="">Select Cohort</option>
            {cohortsList.map((cohort, idx) => (
              <option key={idx} value={cohort}>
                {cohort}
              </option>
            ))}
          </select>

          {/* Selected Cohort */}
          <div className="mt-2">
            {selectedCohort && (
              <div className="flex items-center justify-between p-2 bg-gray-100 rounded mb-2">
                <span>{selectedCohort}</span>
                <button
                  type="button"
                  className="text-red-500"
                  onClick={removeCohort}
                >
                  &times;
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Registration Form Fields */}
        <div className="col-span-2">
          <label className="block text-sm font-medium">
            Registration Form Fields
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Company"
              className="form-control"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
        </div>
      </form>
      <div className="flex space-x-4 mb-6 mt-8 justify-end">
        <button className="text-primary hs-dark-mode-active:bg-[#ffffff] rounded-md px-3 py-1.5 hover:underline">
          Save as new
        </button>
      </div>
    </Fragment>
  );
};

EditEvent.layout = "Contentlayout";
export default EditEvent;
