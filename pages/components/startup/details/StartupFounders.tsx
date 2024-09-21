import { Founder } from "@/types";
import React from "react";

type Props = {
  founders: Founder[];
};

const StartupFounders: React.FC<Props> = ({ founders }) => {
  return (
    <section className="p-6">
      <h5 className="mb-5 font-medium text-xl">Founders</h5>

      <div className="flex flex-col gap-6 flex-wrap">
        {founders.map((founder) => (
          <div key={founder.name} className="flex items-center gap-4">
            <img
              src={founder.image}
              alt={founder.name}
              className="w-12 h-12 object-cover object-top rounded-full"
            />
            <div>
              <div className="flex items-center">
                <span className="text-sm font-semibold hs-dark-mode-active:text-white">
                  {founder.name}
                </span>
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assets/images/linkedin-colored.svg"
                    alt="LinkedIn Logo"
                    className="w-5 h-5 inline ml-1"
                  />
                </a>
              </div>
              <div>
                <span className="text-black/50 text-sm font-normal hs-dark-mode-active:text-white">
                  {founder.role}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StartupFounders;
