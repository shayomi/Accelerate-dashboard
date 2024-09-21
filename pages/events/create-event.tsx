import React from "react";

import { Event } from "@/types";
import EventForm from "../components/event/eventform";

const CreateEvent = () => {
	const handleCreateEvent = (newEvent: Event) => {
		// Handle the creation logic, e.g., updating the state or sending the data to the server
		console.log("New event created:", newEvent);
	};

	return (
		<div>
			<EventForm onSubmit={handleCreateEvent} />
		</div>
	);
};

CreateEvent.layout = "Contentlayout";
export default CreateEvent;
