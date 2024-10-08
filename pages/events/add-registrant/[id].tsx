import AddRegistrant from "@/components/event/event-details/addRegistrant";
import { useRouter } from "next/router";

const AddRegistrantPage = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) {
    return <div>Loading...</div>;
  }

  return <AddRegistrant eventId={Number(id)} />;
};

AddRegistrantPage.layout = "Contentlayout";
export default AddRegistrantPage;
