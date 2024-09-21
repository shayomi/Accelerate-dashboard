import React, { Fragment } from "react";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import EventDetailsTab from "./eventdetailtab";
import RegistrationsTab from "./registrationstab";
import SpeakersTab from "./speakertab";
import AgendaTab from "./agendatab";

const EventDetail = () => {
	return (
		<Fragment>
			<Seo title={"Event Management"} />
			<Pageheader
				currentpage="Event Details"
				activepage="Dashboard"
				mainpage="Events"
			/>
			<div className="flex justify-end mb-4">
				<button className="bg-blue text-white py-2 px-4 rounded-md mr-3">
          Edit Event
				</button>
				<button className="bg-green text-white py-2 px-4 rounded-md mr-3">
          Manage Registrations
				</button>
				<button className="bg-purple text-white py-2 px-4 rounded-md">
          Add Speakers
				</button>
			</div>

			<div className="px-4 py-4 w-full mb-12">
				<div className="w-full">
					<div className="!p-4 border-b dark:border-defaultborder/10 border-dashed md:flex items-center justify-between">
						<nav className="-mb-0.5 sm:flex md:space-x-6 rtl:space-x-reverse pb-2">
							<Link
								className="w-full sm:w-auto flex active hs-tab-active:font-semibold  hs-tab-active:text-white hs-tab-active:bg-primary rounded-md py-2 px-4 text-primary text-sm"
								href="#!"
								id="activity-tab"
								data-hs-tab="#activity-tab-pane"
								aria-controls="activity-tab-pane"
							>
								<i className="ri-gift-line  align-middle inline-block me-1"></i>
                Event details
							</Link>
							<Link
								className="w-full sm:w-auto flex hs-tab-active:font-semibold  hs-tab-active:text-white hs-tab-active:bg-primary rounded-md  py-2 px-4 text-primary text-sm"
								href="#!"
								id="posts-tab"
								data-hs-tab="#posts-tab-pane"
								aria-controls="posts-tab-pane"
							>
								<i className="ri-bill-line me-1 align-middle inline-block"></i>
                Registrations
							</Link>
							<Link
								className="w-full sm:w-auto flex hs-tab-active:font-semibold  hs-tab-active:text-white hs-tab-active:bg-primary rounded-md  py-2 px-4 text-primary text-sm"
								href="#!"
								id="followers-tab"
								data-hs-tab="#followers-tab-pane"
								aria-controls="followers-tab-pane"
							>
								<i className="ri-money-dollar-box-line me-1 align-middle inline-block"></i>
                Speakers
							</Link>
							<Link
								className="w-full sm:w-auto flex hs-tab-active:font-semibold  hs-tab-active:text-white hs-tab-active:bg-primary rounded-md  py-2 px-4 text-primary text-sm"
								href="#!"
								id="gallery-tab"
								data-hs-tab="#gallery-tab-pane"
								aria-controls="gallery-tab-pane"
							>
								<i className="ri-exchange-box-line me-1 align-middle inline-block"></i>
                Agenda
							</Link>
						</nav>
					</div>

					<div className="!p-4">
						<div className="tab-content" id="myTabContent">
							<div
								className="tab-pane show active fade !p-0 !border-0"
								id="activity-tab-pane"
								role="tabpanel"
								aria-labelledby="activity-tab"
							>
								<EventDetailsTab />
							</div>
							<div
								className="tab-pane fade !p-0 !border-0 hidden !rounded-md"
								id="posts-tab-pane"
								role="tabpanel"
								aria-labelledby="posts-tab"
							>
								<RegistrationsTab />
							</div>
							<div
								className="tab-pane fade !p-0 !border-0 hidden"
								id="followers-tab-pane"
								role="tabpanel"
								aria-labelledby="followers-tab"
							>
								<SpeakersTab />
							</div>
							<div
								className="tab-pane fade !p-0 !border-0 hidden"
								id="gallery-tab-pane"
								role="tabpanel"
								aria-labelledby="gallery-tab"
							>
								<AgendaTab />
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

EventDetail.layout = "Contentlayout";
export default EventDetail;
