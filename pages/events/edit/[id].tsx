import React from "react";

import { eventsData } from "@/shared/data/event/eventdata";
import { useRouter } from "next/router";
import EventForm from "@/components/event/eventform";

const EditEvent = () => {
  const router = useRouter();
  const { id } = router.query;
  const event = eventsData.find((e) => e.id === Number(id));

  if (!event) return <div>Event not found</div>;

  return (
    <div>
      <EventForm event={event} />
    </div>
  );
};

EditEvent.layout = "Contentlayout";
export default EditEvent;
