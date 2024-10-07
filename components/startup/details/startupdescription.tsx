import React from "react";
import AdvisorsList from "./advisorslist";
import StartupFounders from "./StartupFounders";
import { Startupdata } from "@/shared/types";

interface StartupProps {
  startup: Startupdata;
}

const StartupDescription = ({ startup }: StartupProps) => {
  if (!startup) {
    return <div>Startup not found</div>;
  }

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="box flex flex-col w-full md:w-[55%] gap-6 p-6">
        <div className="flex flex-col gap-4 w-full">
          <h5 className="font-medium text-xl">Pitch Presentation</h5>

          <div className="h-[18rem] sm:h-[18rem] rounded-lg overflow-hidden">
            <iframe
              src={
                startup.pitchDeckLink ||
                "https://www.youtube.com/embed/dQw4w9WgXcQ"
              }
              title="Pitch Presentation"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full object-cover rounded-lg"
            ></iframe>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="font-medium text-xl">About the Company</h5>

          <p className="text-sm text-gray-700 leading-relaxed hs-dark-mode-active:!text-white">
            {startup.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4 text-red font-bold">
            <p>Cohorts: {startup.cohort}</p>
            <p>Fundraising: {startup.fundraisingAmount}</p>
            <p>Valuation: {startup.valuation}</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[45%] box">
        <StartupFounders founders={startup.founders} />
        <AdvisorsList /> {/* Update if advisors need to be dynamic */}
      </div>
    </div>
  );
};

export default StartupDescription;
