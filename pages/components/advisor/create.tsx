import React, { ChangeEvent, Fragment, useState, useEffect } from "react";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import { Advisor } from "@/shared/types";

interface CreateAdvisorProps {
  advisorData?: Advisor;
}

const CreateAdvisor = ({ advisorData }: CreateAdvisorProps) => {
  const [name, setName] = useState(advisorData?.name || "");
  const [selectedFocusAreas, setSelectedFocusAreas] = useState<string[]>(
    advisorData?.focusAreas || []
  );
  const [companyName, setCompanyName] = useState(
    advisorData?.companyName || ""
  );
  const [location, setLocation] = useState(advisorData?.location || "");
  const [bio, setBio] = useState(advisorData?.bio || "");
  const [linkedin, setLinkedin] = useState(advisorData?.linkedin || "");
  const [twitter, setTwitter] = useState(advisorData?.twitter || "");
  const [advisorImage, setAdvisorImage] = useState<File | null>(null);

  const focusAreaOptions: string[] = [
    "Corporate Strategy",
    "Marketing",
    "Finance",
    "Technology",
    "Leadership",
  ];

  const handleFocusAreaChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    const selectedValue = e.target.value;
    if (selectedValue && !selectedFocusAreas.includes(selectedValue)) {
      setSelectedFocusAreas([...selectedFocusAreas, selectedValue]);
    }
  };

  const removeFocusArea = (area: string): void => {
    setSelectedFocusAreas(selectedFocusAreas.filter((item) => item !== area));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files && e.target.files.length > 0) {
      setAdvisorImage(e.target.files[0]);
    }
  };

  return (
    <Fragment>
      <Seo title="Advisor" />
      <Pageheader
        currentpage="Create Advisor"
        activepage="Dashboard"
        mainpage="Advisors"
      />
      <div>
        {/* Other form fields */}
        <div className="mb-4">
          <label className="form-label">Name*</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter advisor's name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Focus Areas */}
        <div className="mb-4">
          <label className="form-label">Focus Areas*</label>
          <select
            className="form-select"
            onChange={handleFocusAreaChange}
            defaultValue=""
          >
            <option value="" disabled>
              Select focus areas
            </option>
            {focusAreaOptions.map((area, idx) => (
              <option key={idx} value={area}>
                {area}
              </option>
            ))}
          </select>
          <div className="mt-2">
            {selectedFocusAreas.map((area, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-2 bg-white/10 rounded mb-2"
              >
                <span>{area}</span>
                <button
                  type="button"
                  className="text-red-500"
                  onClick={() => removeFocusArea(area)}
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Company Name */}
        <div className="mb-4">
          <label className="form-label">Company Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter company name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>

        {/* Location */}
        <div className="mb-4">
          <label className="form-label">Location (Country)</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        {/* LinkedIn and Twitter */}
        <div className="mb-4">
          <label className="form-label">LinkedIn Profile URL*</label>
          <input
            type="url"
            className="form-control"
            placeholder="Enter LinkedIn profile URL"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="form-label">Twitter Handle URL</label>
          <input
            type="url"
            className="form-control"
            placeholder="Enter Twitter handle URL"
            value={twitter}
            onChange={(e) => setTwitter(e.target.value)}
          />
        </div>

        {/* Save Button */}
        <div className="flex gap-4 mb-8">
          <button type="button" className="ti-btn ti-btn-primary-full">
            Save
          </button>
        </div>
      </div>
    </Fragment>
  );
};

CreateAdvisor.layout = "Contentlayout";

export default CreateAdvisor;
