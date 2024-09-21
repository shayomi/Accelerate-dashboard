import React from "react";

const EventDetailsTab = () => {
	return (
		<div>
			<h2 className="text-xl font-semibold mb-6">Event Details</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div className="space-y-1">
					<h3 className="text-sm font-semibold">Event Name</h3>
					<p>Demo Day 2024</p>
				</div>
				<div className="space-y-1">
					<h3 className="text-sm font-semibold">Slug</h3>
					<p>demo-day-2024</p>
				</div>
				<div className="space-y-1">
					<h3 className="text-sm font-semibold">Date and Time</h3>
					<p>January 15-16, 2024, 9:00 AM - 5:00 PM</p>
				</div>
				<div className="space-y-1">
					<h3 className="text-sm font-semibold">Location</h3>
					<p>123 Main St, San Francisco, CA</p>
					<p>
            Virtual Link:{" "}
						<a href="#" className="text-blue underline">
              Zoom Link
						</a>
					</p>
				</div>
				<div className="space-y-1">
					<h3 className="text-sm font-semibold">Event Type</h3>
					<p>Workshop</p>
				</div>
				<div className="space-y-1">
					<h3 className="text-sm font-semibold">Maximum Attendees</h3>
					<p>200</p>
				</div>
				<div className="space-y-1">
					<h3 className="text-sm font-semibold">Registration Deadline</h3>
					<p>January 10, 2024</p>
				</div>
				<div className="col-span-1 md:col-span-2 space-y-1">
					<h3 className="text-sm font-semibold">Event Description</h3>
					<p>
            This event showcases the latest technology innovations, bringing
            together tech leaders, industry experts, and innovators to discuss
            the future of technology and how it can shape the world.
					</p>
				</div>
			</div>
		</div>
	);
};

export default EventDetailsTab;
