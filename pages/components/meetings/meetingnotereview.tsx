import React, { useState, useEffect, Fragment } from "react";
import dynamic from "next/dynamic"; // Dynamically import the Quill editor
import "react-quill/dist/quill.snow.css"; // Import styles for the rich text editor
import Pageheader from "@/shared/layout-components/page-header/pageheader";

// Dynamically import ReactQuill with no SSR (Server-Side Rendering)
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface Meeting {
  id: string;
  date: string;
  participants: string[];
  type: string;
  status: string;
  noteStatus: string;
  notes: string;
}

const meetings: Meeting[] = [
  {
    id: "1",
    date: "2024-09-10",
    participants: ["John Doe", "Jane Smith"],
    type: "Team Meeting",
    status: "Reviewed",
    noteStatus: "Reviewed",
    notes: "These are the detailed notes of the meeting...",
  },
  {
    id: "2",
    date: "2024-09-11",
    participants: ["Alice Johnson", "Bob Davis"],
    type: "Client Meeting",
    status: "Submitted",
    noteStatus: "Draft",
    notes: "This is the draft for the client meeting...",
  },
];

const MeetingNoteReview = () => {
  const [expandedMeetingId, setExpandedMeetingId] = useState<string | null>(
    null
  );
  const [currentNotes, setCurrentNotes] = useState<string>("");

  const toggleMeetingNotes = (meeting: Meeting) => {
    if (expandedMeetingId === meeting.id) {
      setExpandedMeetingId(null);
    } else setExpandedMeetingId(meeting.id);
    setCurrentNotes(meeting.notes);
  };

  return (
    <Fragment>
      <Pageheader
        currentpage="Meeting Note Reviews"
        activepage="Dashboards"
        mainpage="Meetings"
      />
      <h1 className="text-xl font-bold mb-4">Note Review</h1>
      <div className="space-y-4">
        {meetings.map((meeting) => (
          <div
            key={meeting.id}
            className="border border-black hs-dark-mode-active:bg-[#1a1e25] rounded-md p-4"
          >
            <div
              className="cursor-pointer flex justify-between"
              onClick={() => toggleMeetingNotes(meeting)}
            >
              <div className="flex flex-col space-y-4">
                <p className="font-semibold">
                  <span className="font-bold text-blue hs-dark-mode-active:text-white">
                    Date:
                  </span>{" "}
                  {meeting.date}
                </p>
                <p>
                  <span className="font-bold text-yellow">Participants:</span>{" "}
                  {meeting.participants.join(", ")}
                </p>
                <p>
                  <span className="font-bold text-green">Status:</span>{" "}
                  {meeting.status}, Note Status: {meeting.noteStatus}
                </p>
              </div>
              <button className="text-red font-medium">View Notes</button>
            </div>

            {expandedMeetingId === meeting.id && (
              <div className="mt-4">
                <ReactQuill
                  value={currentNotes}
                  onChange={setCurrentNotes}
                  theme="snow"
                />

                <div className="flex space-x-4 mt-4">
                  <button className="bg-green text-white px-4 py-2 rounded-md">
                    Approve
                  </button>
                  <button className="bg-yellow text-white px-4 py-2 rounded-md">
                    Request Changes
                  </button>
                  <button className="bg-red text-white px-4 py-2 rounded-md">
                    Flag Sensitive
                  </button>
                </div>

                <div className="mt-4">
                  <textarea
                    className="w-full border border-gray-300 p-2 rounded-md"
                    placeholder="Leave feedback on the notes..."
                  />
                  <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md">
                    Submit Feedback
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </Fragment>
  );
};

MeetingNoteReview.layout = "Contentlayout";

export default MeetingNoteReview;
