import { useRouter } from "next/router";
import EventDetail from "../components/event/event-details/eventdetail";

const EventPage = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <EventDetail eventId={Number(id)} />
    </div>
  );
};

EventPage.layout = "Contentlayout";
export default EventPage;
