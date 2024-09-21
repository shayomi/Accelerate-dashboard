"use client";

import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import React, { useState, ChangeEvent, Fragment } from "react";

type Startup = {
  id: number;
  name: string;
  industry: string;
};

type Advisor = {
  id: number;
  name: string;
  focusArea: string;
};

const AdvisorAssignment = () => {
  const [searchStartups, setSearchStartups] = useState("");
  const [searchAdvisors, setSearchAdvisors] = useState("");
  const [selectedAssignments, setSelectedAssignments] = useState<
    { startupId: number; advisorIds: number[] }[]
  >([]);

  // Example startup and advisor data
  const startups: Startup[] = [
    { id: 1, name: "TechCorp", industry: "Technology" },
    { id: 2, name: "HealthPlus", industry: "Healthcare" },
    { id: 3, name: "EduStart", industry: "Education" },
  ];

  const advisors: Advisor[] = [
    { id: 1, name: "Alice Johnson", focusArea: "Corporate Strategy" },
    { id: 2, name: "Bob Smith", focusArea: "Finance" },
    { id: 3, name: "Claire Adams", focusArea: "Marketing" },
  ];

  const filteredStartups = startups.filter((startup) =>
    startup.name.toLowerCase().includes(searchStartups.toLowerCase())
  );
  const filteredAdvisors = advisors.filter((advisor) =>
    advisor.name.toLowerCase().includes(searchAdvisors.toLowerCase())
  );

  const handleAdvisorToggle = (startupId: number, advisorId: number) => {
    const existingAssignment = selectedAssignments.find(
      (assignment) => assignment.startupId === startupId
    );

    if (existingAssignment) {
      const updatedAdvisorIds = existingAssignment.advisorIds.includes(
        advisorId
      )
        ? existingAssignment.advisorIds.filter((id) => id !== advisorId)
        : [...existingAssignment.advisorIds, advisorId];

      setSelectedAssignments(
        selectedAssignments.map((assignment) =>
          assignment.startupId === startupId
            ? { ...assignment, advisorIds: updatedAdvisorIds }
            : assignment
        )
      );
    } else {
      setSelectedAssignments([
        ...selectedAssignments,
        { startupId, advisorIds: [advisorId] },
      ]);
    }
  };

  const isAdvisorAssigned = (startupId: number, advisorId: number) => {
    const assignment = selectedAssignments.find(
      (assignment) => assignment.startupId === startupId
    );
    return assignment?.advisorIds.includes(advisorId) || false;
  };

  const handleSaveAssignments = () => {
    console.log("Assignments saved:", selectedAssignments);
  };

  return (
    <Fragment>
      <Seo title={"Advisor Management"} />
      <Pageheader
        currentpage="Advisors Assignment"
        activepage="Dashboards"
        mainpage="Advisor"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="box custom-card">
          <div className="box-body flex-1 mr-4">
            {/* Startups Section */}
            <h3 className="font-bold mb-4">Startups</h3>
            <input
              type="text"
              placeholder="Search startups..."
              className="form-control mb-4"
              value={searchStartups}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setSearchStartups(e.target.value)
              }
            />

            <div className="  max-h-96 overflow-y-auto ">
              {filteredStartups.map((startup) => (
                <div key={startup.id} className="mb-4">
                  <h4 className="font-semibold">{startup.name}</h4>
                  <p className="text-sm text-gray-600">{startup.industry}</p>

                  {/* Advisor checkboxes for this startup */}
                  <div className="ml-4 mt-2">
                    {filteredAdvisors.map((advisor) => (
                      <div key={advisor.id} className="mb-2">
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            className="form-checkbox mr-2"
                            checked={isAdvisorAssigned(startup.id, advisor.id)}
                            onChange={() =>
                              handleAdvisorToggle(startup.id, advisor.id)
                            }
                          />
                          {advisor.name} - {advisor.focusArea}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="box custom-card">
          <div className="box-body flex-1 ml-4">
            {/* Advisors Section */}
            <h3 className="font-bold mb-4">Advisors</h3>
            <input
              type="text"
              placeholder="Search advisors..."
              className="form-control mb-4"
              value={searchAdvisors}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setSearchAdvisors(e.target.value)
              }
            />

            <div className="max-h-96 overflow-y-auto  p-4 rounded">
              {filteredAdvisors.map((advisor) => (
                <div key={advisor.id} className="mb-4">
                  <h4 className="font-semibold">{advisor.name}</h4>
                  <p className="text-sm text-gray-600">{advisor.focusArea}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-6 mb-6">
        <button
          type="button"
          className="bg-white text-primary px-3 py-1.5 rounded-md"
          onClick={handleSaveAssignments}
        >
          Save Assignments
        </button>
      </div>
    </Fragment>
  );
};

AdvisorAssignment.layout = "Contentlayout";

export default AdvisorAssignment;
