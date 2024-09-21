import { Startupdata } from "@/shared/types";
import React, { Fragment } from "react";

interface StartupProps {
  startup: Startupdata;
}

const StartupHighlight = ({ startup }: StartupProps) => {
  if (!startup) {
    return <div>Startup not found</div>;
  }
  return (
    <Fragment>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-center justify-center mx-auto gap-4">
          <img
            src={startup.companyLogo || "https://via.placeholder.com/250"}
            alt="Startup logo"
            className="w-full max-w-[250px] h-auto object-contain rounded-md"
          />

          <div>
            <span className="bg-[#E7D052] hover:bg-[#E7D0524D]/40 text-black text-sm font-medium py-1 px-3 rounded-md">
              {startup.cohort}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-end gap-4 mt-8">
          <div className="col-span-full sm:col-span-1 rounded border-secondary border rounded-[8px]">
            <div className="p-4">
              <div className="text-sm">
                <span className="mr-2 font-semibold">Headquarters:</span>
                <span className="font-normal ">{startup.location.city}</span>
              </div>

              <div className="mt-2 text-sm">
                <span className="mr-2 font-semibold">Company Size:</span>
                <span className="font-normal">
                  {startup.companySize} employees
                </span>
              </div>
            </div>
          </div>

          <div className="col-span-full sm:col-span-1 rounded border-secondary border rounded-[8px]">
            <div className="p-4">
              <div className="text-sm">
                <span className="mr-2 font-semibold">Email:</span>
                <span className="font-normal">{startup.companyEmail}</span>
              </div>

              <div className="mt-2">
                <span className="mr-2 font-semibold">Website:</span>
                <span className="font-normal text-accent hover:underline hs-dark-mode-active:!text-primary">
                  <a
                    href={startup.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {startup.website}
                  </a>
                </span>
              </div>
            </div>
          </div>

          <div className="col-span-full sm:col-span-1 rounded border-secondary border rounded-[8px]">
            <div className="p-4">
              <div>
                <span className="mr-2 text-sm">Founded:</span>
                <span className="font-normal text-sm">{startup.founded}</span>
              </div>

              <div className="mt-2">
                <span className="mr-2">Industry:</span>
                <span className="font-normal text-sm">{startup.industry}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default StartupHighlight;
