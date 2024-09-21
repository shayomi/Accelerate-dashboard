// components/meetings/MeetingDetail.tsx
import React, { Fragment, useState } from "react";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import { Meeting } from "@/shared/types";

interface MeetingDetailProps {
  meeting: Meeting;
}

const MeetingDetail = ({ meeting }: MeetingDetailProps) => {
  const [feedback, setFeedback] = useState("");
  const [submittedFeedback, setSubmittedFeedback] = useState<string | null>(
    null
  );

  const handleFeedbackChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFeedback(e.target.value);
  };

  const handleFeedbackSubmit = () => {
    if (feedback.trim()) {
      setSubmittedFeedback(feedback);
      setFeedback("");
    }
  };

  if (!meeting) {
    return <p>Loading cohort details...</p>; // Or a better fallback message
  }

  return (
    <Fragment>
      <Seo title={`Meeting Detail - ${meeting.date}`} />
      <Pageheader
        currentpage="Meeting Detail"
        activepage="Dashboards"
        mainpage="Meeting"
      />

      <div className="mx-auto p-6 shadow-sm rounded-lg">
        <div className="flex flex-col md:flex-row md:items-start">
          <div className="flex-shrink-0 mb-6 md:mb-0">
            <img
              src="https://via.placeholder.com/250"
              alt="Meeting"
              className="w-full max-w-sm md:max-w-md h-auto rounded-lg object-cover border-2 border-gray-300"
            />
          </div>
          <div className="md:ml-6">
            <h1 className="text-md font-extrabold mb-4">{meeting.date}</h1>
            <p className="text-lsm mb-2">
              <span className="font-semibold">Time:</span> {meeting.time}
            </p>
            <p className="text-sm mb-2">
              <span className="font-semibold">Participants:</span>{" "}
              {meeting.participants}
            </p>
            <p className="text-sm mb-4">
              <span className="font-semibold">Type:</span> {meeting.type}
            </p>

            {meeting.summary && (
              <div className="mb-6">
                <h2 className="text-lg mb-2">Summary</h2>
                <p className="text-sm">{meeting.summary}</p>
              </div>
            )}

            {meeting.notes && (
              <div>
                <h2 className="text-md font-semibold 0 mb-2">Notes</h2>
                <p className="text-sm">{meeting.notes}</p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 p-6 rounded-lg ">
          <h3 className="text-md font-semibold mb-4">Feedback</h3>
          {submittedFeedback ? (
            <div className="p-4 rounded-md border border-gray-300">
              <p className="font-semibold">Submitted Feedback:</p>
              <p>{submittedFeedback}</p>
            </div>
          ) : (
            <div className="flex flex-col space-y-4">
              <textarea
                className="form-control border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
                placeholder="Provide your feedback about the meeting"
                value={feedback}
                onChange={handleFeedbackChange}
              />
              <button
                className="bg-blue-500 text-danger px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={handleFeedbackSubmit}
              >
                Submit Feedback
              </button>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

MeetingDetail.layout = "Contentlayout";

export default MeetingDetail;
