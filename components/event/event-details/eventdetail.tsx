import React, { Fragment, useState } from "react";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import InformationDetails from "./eventdetailtab";
import RegistrationDetails from "./registrationstab";
import SpeakersDetails from "./speakertab";
import AgendaDetails from "./agendatab";
import { eventsData } from "@/shared/data/event/eventdata";

const EventDetail = ({ eventId }: { eventId: number }) => {
  const event = eventsData.find((e) => e.id === eventId);

  const [activeTab, setActiveTab] = useState("activity");

  if (!event) {
    return <div>Event not found</div>;
  }

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
                className={`w-full sm:w-auto flex ${
                  activeTab === "activity"
                    ? "hs-tab-active:font-semibold hs-tab-active:text-white hs-tab-active:bg-primary"
                    : "text-primary"
                } rounded-md py-2 px-4 text-sm`}
                href="#!"
                onClick={() => setActiveTab("activity")}
              >
                <i className="ri-gift-line align-middle inline-block me-1"></i>
                Event details
              </Link>
              <Link
                className={`w-full sm:w-auto flex ${
                  activeTab === "registrations"
                    ? "hs-tab-active:font-semibold hs-tab-active:text-white hs-tab-active:bg-primary"
                    : "text-primary"
                } rounded-md py-2 px-4 text-sm`}
                href="#!"
                onClick={() => setActiveTab("registrations")}
              >
                <i className="ri-bill-line me-1 align-middle inline-block"></i>
                Registrations
              </Link>
              <Link
                className={`w-full sm:w-auto flex ${
                  activeTab === "speakers"
                    ? "hs-tab-active:font-semibold hs-tab-active:text-white hs-tab-active:bg-primary"
                    : "text-primary"
                } rounded-md py-2 px-4 text-sm`}
                href="#!"
                onClick={() => setActiveTab("speakers")}
              >
                <i className="ri-money-dollar-box-line me-1 align-middle inline-block"></i>
                Speakers
              </Link>
              <Link
                className={`w-full sm:w-auto flex ${
                  activeTab === "agenda"
                    ? "hs-tab-active:font-semibold hs-tab-active:text-white hs-tab-active:bg-primary"
                    : "text-primary"
                } rounded-md py-2 px-4 text-sm`}
                href="#!"
                onClick={() => setActiveTab("agenda")}
              >
                <i className="ri-exchange-box-line me-1 align-middle inline-block"></i>
                Agenda
              </Link>
            </nav>
          </div>

          <div className="!p-4">
            <div className="tab-content" id="myTabContent">
              {activeTab === "activity" && (
                <div className="tab-pane show active fade !p-0 !border-0">
                  <InformationDetails event={event} />
                </div>
              )}
              {activeTab === "registrations" && (
                <div className="tab-pane fade !p-0 !border-0">
                  <RegistrationDetails event={event} />
                </div>
              )}
              {activeTab === "speakers" && (
                <div className="tab-pane fade !p-0 !border-0">
                  <SpeakersDetails event={event} />
                </div>
              )}
              {activeTab === "agenda" && (
                <div className="tab-pane fade !p-0 !border-0">
                  <AgendaDetails event={event} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

EventDetail.layout = "Contentlayout";
export default EventDetail;
