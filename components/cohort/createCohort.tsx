"use client";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import React, { Fragment, useState, useEffect } from "react";

const CreateCohort = ({ cohort }: any) => {
  const [name, setName] = useState("");
  const [shortName, setShortName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [schedule, setSchedule] = useState<string[]>([]);
  const [selectedStartups, setSelectedStartups] = useState<string[]>([]);

  useEffect(() => {
    if (cohort) {
      setName(cohort.name || "");
      setShortName(cohort.shortName || "");
      setStartDate(cohort.startDate || "");
      setEndDate(cohort.endDate || "");
      setDescription(cohort.description || "");
      setSchedule(cohort.schedule || []);
      setSelectedStartups(cohort.startups || []);
    }
  }, [cohort]);

  const handleScheduleChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const selectedValue = e.target.value;
    if (selectedValue && !schedule.includes(selectedValue)) {
      setSchedule([...schedule, selectedValue]);
    }
  };

  const handleRemoveSchedule = (item: string): void => {
    setSchedule(schedule.filter((i) => i !== item));
  };

  const handleStartupChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const selectedValue = e.target.value;
    if (selectedValue && !selectedStartups.includes(selectedValue)) {
      setSelectedStartups([...selectedStartups, selectedValue]);
    }
  };

  const handleRemoveStartup = (startup: string): void => {
    setSelectedStartups(selectedStartups.filter((item) => item !== startup));
  };

  return (
    <Fragment>
      <Seo title={"Cohort Management"} />
      <Pageheader
        currentpage={cohort ? "Edit Cohort" : "Create New Cohort"}
        activepage="Dashboards"
        mainpage="Cohorts"
      />
      <div className="">
        <div className="xl:col-span-6 col-span-12">
          <div className="grid grid-cols-12 sm:gap-x-6 sm:gap-y-4">
            {/* Cohort Name */}
            <div className="md:col-span-6 col-span-12 mb-4">
              <label className="form-label">Cohort Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter cohort name"
                aria-label="Cohort Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Short Name */}
            <div className="md:col-span-6 col-span-12 mb-4">
              <label className="form-label">Short Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter short name"
                aria-label="Short Name"
                value={shortName}
                onChange={(e) => setShortName(e.target.value)}
              />
            </div>

            {/* Start Date */}
            <div className="md:col-span-6 col-span-12 mb-4">
              <label className="form-label">Start Date</label>
              <input
                type="date"
                className="form-control"
                aria-label="Start Date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>

            {/* End Date */}
            <div className="md:col-span-6 col-span-12 mb-4">
              <label className="form-label">End Date</label>
              <input
                type="date"
                className="form-control"
                aria-label="End Date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>

            {/* Description */}
            <div className="md:col-span-12 col-span-12 mb-4">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                placeholder="Enter cohort description"
                aria-label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            {/* Schedule */}
            <div className="md:col-span-12 col-span-12 mb-4">
              <label className="form-label">Schedule</label>
              <select className="form-control" onChange={handleScheduleChange}>
                <option value="">Select schedule item</option>
                {/* Add options here */}
                <option value="Week 1">Week 1</option>
                <option value="Week 2">Week 2</option>
                <option value="Week 3">Week 3</option>
                <option value="Week 4">Week 4</option>
              </select>
              <ul className="mt-2">
                {schedule.map((item) => (
                  <li key={item} className="flex justify-between">
                    {item}
                    <button
                      type="button"
                      onClick={() => handleRemoveSchedule(item)}
                      className="text-red-500"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Startups */}
            <div className="md:col-span-12 col-span-12 mb-4">
              <label className="form-label">Startups</label>
              <select className="form-control" onChange={handleStartupChange}>
                <option value="">Select startup</option>
                {/* Add options here */}
                <option value="Startup A">Startup A</option>
                <option value="Startup B">Startup B</option>
                <option value="Startup C">Startup C</option>
              </select>
              <ul className="mt-2">
                {selectedStartups.map((startup) => (
                  <li key={startup} className="flex justify-between">
                    {startup}
                    <button
                      type="button"
                      onClick={() => handleRemoveStartup(startup)}
                      className="text-red-500"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="md:col-span-12 col-span-12 flex flex-row gap-4 mt-6 items-end">
              <button
                type="button"
                className="ti-btn bg-none text-red rounded-sm !mb-0"
              >
                <a href="/cohorts">Cancel</a>
              </button>
              <button
                type="submit"
                className="ti-btn bg-green rounded-sm !mb-0"
              >
                {cohort ? "Update Cohort" : "Create Cohort"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

CreateCohort.layout = "Contentlayout";
export default CreateCohort;
