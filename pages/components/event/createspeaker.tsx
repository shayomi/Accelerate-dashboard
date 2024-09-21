import React, { Fragment, useState } from "react";
import dynamic from "next/dynamic";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const events = [
  { id: 1, name: "Tech Conference" },
  { id: 2, name: "Startup Summit" },
  { id: 3, name: "Developer Meetup" },
];

const CreateSpeaker = () => {
  const [bio, setBio] = useState("");
  const [selectedEventsList, setSelectedEventsList] = useState<string[]>([]);

  const handleBioChange = (value: string) => {
    setBio(value);
  };

  const handleEventSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const eventId = Number(event.target.value);
    const selected = events.find((e) => e.id === eventId);
    if (selected && !selectedEventsList.includes(selected.name)) {
      setSelectedEventsList([...selectedEventsList, selected.name]);
    }
  };

  const handleEventRemove = (eventName: string) => {
    setSelectedEventsList(selectedEventsList.filter((e) => e !== eventName));
  };

  return (
    <Fragment>
      <Seo title="Create Speaker" />
      <Pageheader
        currentpage="Create Speaker"
        mainpage="Events"
        activepage="Event Management"
      />
      <div className="flex flex-col sm:flex-row justify-between">
        <h1 className="text-2xl font-bold mb-6">Create Speaker</h1>
        <div className="flex justify-end gap-4">
          <button className="bg-primary text-white py-2 px-4 rounded-md">
            Save
          </button>
          <button className="bg-primary/20 text-primary hs-dark-mode-active:bg-[#ffffff]  py-2 px-4 rounded-md">
            Publish
          </button>
        </div>
      </div>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name Field */}
        <div>
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Speaker Name"
          />
        </div>

        {/* Company Name Field */}
        <div>
          <label className="form-label">Company Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Company Name"
          />
        </div>

        {/* Image Upload Field */}
        <div>
          <label className="form-label">Profile Picture</label>
          <input type="file" className="form-control" />
        </div>

        {/* LinkedIn Profile Field */}
        <div>
          <label className="form-label">LinkedIn Profile</label>
          <input
            type="text"
            className="form-control"
            placeholder="LinkedIn URL"
          />
        </div>

        {/* Twitter Handle Field */}
        <div>
          <label className="form-label">Twitter Handle</label>
          <input
            type="text"
            className="form-control"
            placeholder="@twitterhandle"
          />
        </div>

        {/* Location Field */}
        <div>
          <label className="form-label">Location</label>
          <input type="text" className="form-control" placeholder="Location" />
        </div>

        {/* Bio Field */}
        <div className="col-span-2">
          <label className="form-label">Bio</label>
          <ReactQuill
            value={bio}
            onChange={handleBioChange}
            className="form-control"
            theme="snow"
          />
        </div>

        {/* Event Selection Field */}
        <div className="col-span-2">
          <label className="form-label">Select Events</label>
          <select
            className="form-control"
            onChange={handleEventSelect}
            defaultValue=""
          >
            <option value="" disabled>
              Select event
            </option>
            {events.map((event) => (
              <option key={event.id} value={event.id}>
                {event.name}
              </option>
            ))}
          </select>

          {/* Display selected events */}
          <div className="mt-2 mb-8">
            {selectedEventsList.map((event, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 bg-gray-100 rounded mb-2"
              >
                <span>{event}</span>
                <button
                  type="button"
                  className="text-red-500"
                  onClick={() => handleEventRemove(event)}
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        </div>
      </form>
    </Fragment>
  );
};

// Layout configuration
CreateSpeaker.layout = "Contentlayout";

export default CreateSpeaker;
