// import React from "react";
// import { useRouter } from "next/router";
// import { eventsData } from "@/pages/components/event/eventdata";
// import EventDetail from "@/pages/components/event/eventdetail";

// const EventDetailPage = () => {
//   const router = useRouter();
//   const { id } = router.query;

//   // Ensure id is a string and then find the event by ID
//   const eventId = Array.isArray(id) ? id[0] : id;
//   const event = eventsData.find((event) => event.id.toString() === eventId);

//   if (!event) {
//     return <div>Event not found</div>;
//   }

//   return <EventDetail event={event} />;
// };

// EventDetailPage.layout = "Contentlayout";

// export default EventDetailPage;
