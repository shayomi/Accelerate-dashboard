import React, { Fragment, useState } from "react";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";

// Sample speaker and events data for the purpose of display
const speakerData = {
  name: "John Doe",
  company: "Tech Innovators Inc.",
  bio: "John has over 15 years of experience in the tech industry, speaking at major conferences and events worldwide.",
  linkedin: "https://linkedin.com/in/johndoe",
  twitter: "https://twitter.com/johndoe",
  location: "New York, USA",
  image: "/path/to/image.jpg", // Replace with actual image path
  events: ["Tech Conference", "Startup Summit", "Developer Meetup"],
};

const allEvents = [
  { id: 1, name: "Tech Conference" },
  { id: 2, name: "Startup Summit" },
  { id: 3, name: "Developer Meetup" },
];

const SpeakerDetails = () => {
  const [selectedEvent, setSelectedEvent] = useState("");
  const [speakerEvents, setSpeakerEvents] = useState(speakerData.events);

  const handleEventSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedEventName = e.target.value;
    if (selectedEventName && !speakerEvents.includes(selectedEventName)) {
      setSpeakerEvents([...speakerEvents, selectedEventName]);
    }
  };

  return (
    <Fragment>
      <Seo title="Speaker Details" />

      <Pageheader
        currentpage="Speaker Details"
        mainpage="Speakers"
        activepage="Event Management"
      />
      <div className="box p-4">
        <div className="grid grid-cols-1  gap-6 mt-4">
          <div className="col-span-1">
            <div className="box p-6 shadow-lg">
              <img
                src={speakerData.image}
                alt={speakerData.name}
                className="rounded-md mb-4"
                style={{ width: "100%", height: "auto" }}
              />
              <h2 className="text-2xl font-bold mb-2">{speakerData.name}</h2>
              <p className="text-gray-500 mb-2">{speakerData.company}</p>
              <p className="text-gray-600 mb-4">{speakerData.bio}</p>

              <div className="mb-4">
                <a
                  href={speakerData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 mr-4"
                >
                  LinkedIn
                </a>
                <a
                  href={speakerData.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  Twitter
                </a>
              </div>

              <p className="text-gray-500">
                <strong>Location:</strong> {speakerData.location}
              </p>
            </div>
          </div>

          {/* Associated Events Section */}
          <div className="col-span-1">
            <div className="box p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Associated Events</h3>
              <ul className="mb-4">
                {speakerEvents.map((event, index) => (
                  <li
                    key={index}
                    className="p-2 bg-gray-100 hs-dark-mode-active:bg-[#1a1e25] rounded-md mb-2 flex justify-between items-center"
                  >
                    {event}
                    <button
                      className="text-primary"
                      onClick={() =>
                        setSpeakerEvents(
                          speakerEvents.filter((e) => e !== event)
                        )
                      }
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>

              {/* Add Speaker to Event */}
              <h4 className="text-lg font-semibold mb-2">Add to Event</h4>
              <select
                className="form-control mb-4"
                value={selectedEvent}
                onChange={handleEventSelect}
              >
                <option value="">Select Event</option>
                {allEvents.map((event) => (
                  <option key={event.id} value={event.name}>
                    {event.name}
                  </option>
                ))}
              </select>

              <button
                className="bg-blue-500 text-white py-2 px-4 rounded-md"
                onClick={() => {
                  if (selectedEvent && !speakerEvents.includes(selectedEvent)) {
                    setSpeakerEvents([...speakerEvents, selectedEvent]);
                    setSelectedEvent("");
                  }
                }}
              >
                Add to Event
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

SpeakerDetails.layout = "Contentlayout";

export default SpeakerDetails;
