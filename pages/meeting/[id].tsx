import React from "react";
import { useRouter } from "next/router";
import { meetings } from "../../shared/data/meetingsdata";
import MeetingDetail from "../../components/meetings/details";

const MeetingDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the meeting by ID
  const meeting = meetings.find((meeting) => meeting.id === id);

  if (!meeting) {
    return <div>Meeting not found</div>;
  }

  return <MeetingDetail meeting={meeting} />;
};

MeetingDetailPage.layout = "Contentlayout";

export default MeetingDetailPage;
