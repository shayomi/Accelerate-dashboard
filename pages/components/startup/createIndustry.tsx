import { Industry } from "@/shared/types";
import React, { useState, useEffect, Fragment } from "react";

interface ManageIndustryProps {
  industryData?: Industry;
  startupOptions: string[];
}

const ManageIndustry = ({
  industryData,
  startupOptions,
}: ManageIndustryProps) => {
  const [name, setName] = useState(industryData?.name || "");
  const [slug, setSlug] = useState(industryData?.slug || "");
  const [selectedStartups, setSelectedStartups] = useState<string[]>(
    industryData?.startupIds
      ? industryData.startupIds.map((id) => id.toString())
      : []
  );

  useEffect(() => {
    if (name) {
      setSlug(name.toLowerCase().replace(/\s+/g, "-"));
    }
  }, [name]);

  const handleStartupChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (!selectedStartups.includes(value)) {
      setSelectedStartups([...selectedStartups, value]);
    }
  };

  const removeStartup = (startup: string) => {
    setSelectedStartups(selectedStartups.filter((id) => id !== startup));
  };

  return (
    <Fragment>
      <div className="p-4">
        <div className="mb-4">
          <label className="form-label">Industry Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter industry name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            minLength={2}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="form-label">Slug</label>
            <div className="flex">
              <input
                type="text"
                className="form-control"
                placeholder="Auto-generated slug"
                value={slug}
                readOnly
              />
              <button
                type="button"
                className="ti-btn ti-btn-light"
                onClick={() => setSlug(name.toLowerCase().replace(/\s+/g, "-"))}
              >
                Refresh
              </button>
            </div>
          </div>
          <div className="mb-4">
            <label className="form-label">Associated Startups</label>
            <select
              className="form-select"
              onChange={handleStartupChange}
              defaultValue=""
            >
              <option value="" disabled>
                Select startups
              </option>
              {startupOptions.map((startup, idx) => (
                <option key={idx} value={startup}>
                  {startup}
                </option>
              ))}
            </select>
            <div className="mt-2">
              {selectedStartups.map((startup, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-2 bg-white/10 rounded mb-2"
                >
                  <span>{startup}</span>
                  <button
                    type="button"
                    className="text-red-500"
                    onClick={() => removeStartup(startup)}
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <button type="button" className="ti-btn ti-btn-primary-full">
            Save
          </button>
        </div>
      </div>
    </Fragment>
  );
};

ManageIndustry.layout = "Contentlayout";
export default ManageIndustry;
