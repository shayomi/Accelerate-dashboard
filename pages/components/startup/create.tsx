import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import React, { ChangeEvent, Fragment, useState, useEffect } from "react";
import { Startup, Founder } from "@/types"; // Adjust import path as needed

interface CreateStartupProps {
  startupData?: Startup; // Optional prop to receive startup data for editing
}

const CreateStartup = ({ startupData }: CreateStartupProps) => {
  const [companyName, setCompanyName] = useState(
    startupData?.companyName || ""
  );
  const [slug, setSlug] = useState(""); // Will be auto-generated
  const [companyEmail, setCompanyEmail] = useState(
    startupData?.companyEmail || ""
  );
  const [city, setCity] = useState(startupData?.location?.city || "");
  const [country, setCountry] = useState(startupData?.location?.country || "");
  const [website, setWebsite] = useState(startupData?.website || "");
  const [companySize, setCompanySize] = useState<number | undefined>(
    startupData?.companySize
  );
  const [companyDescription, setCompanyDescription] = useState(
    startupData?.description || ""
  );
  const [fundraisingAmount, setFundraisingAmount] = useState<
    number | undefined
  >(startupData?.fundraisingAmount);
  const [valuation, setValuation] = useState<number | undefined>(
    startupData?.valuation
  );
  const [yearFounded, setYearFounded] = useState<number | undefined>(
    startupData?.founded
  );
  const [pitchVideoLink, setPitchVideoLink] = useState(
    startupData?.pitchVideoLink || ""
  );
  const [pitchDeckLink, setPitchDeckLink] = useState(
    startupData?.pitchDeckLink || ""
  );
  const [calendlyLink, setCalendlyLink] = useState(
    startupData?.calendlyLink || ""
  );
  const [cohort, setCohort] = useState(startupData?.cohort || "");

  const [selectedIndustries, setSelectedIndustries] = useState<string[]>(
    startupData?.industries || []
  );
  const [selectedFounders, setSelectedFounders] = useState<Founder[]>(
    startupData?.founders || []
  );

  const industryOptions: string[] = [
    "Tech",
    "Finance",
    "Healthcare",
    "Education",
  ];
  const founderOptions: string[] = [
    "Alice Johnson",
    "Bob Smith",
    "Claire Adams",
    "David Lee",
  ]; // These could be fetched from an API

  // Handle Industry Change
  const handleIndustryChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    const selectedValue = e.target.value;
    if (selectedValue && !selectedIndustries.includes(selectedValue)) {
      setSelectedIndustries([...selectedIndustries, selectedValue]);
    }
  };

  // Handle Founder Change
  const handleFounderChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    const selectedValue = e.target.value;
    const founderData: Founder = {
      // Placeholder for actual founder data
      name: selectedValue,
      role: "Unknown",
      linkedin: "",
      image: "https://via.placeholder.com/50",
    };
    if (
      selectedValue &&
      !selectedFounders.some((founder) => founder.name === selectedValue)
    ) {
      setSelectedFounders([...selectedFounders, founderData]);
    }
  };

  // Remove a selected industry
  const removeIndustry = (industry: string): void => {
    setSelectedIndustries(
      selectedIndustries.filter((item) => item !== industry)
    );
  };

  // Remove a selected founder
  const removeFounder = (founder: Founder): void => {
    setSelectedFounders(
      selectedFounders.filter((item) => item.name !== founder.name)
    );
  };

  useEffect(() => {
    // Generate slug when company name changes
    if (companyName) {
      const generatedSlug = companyName.toLowerCase().replace(/\s+/g, "-");
      setSlug(generatedSlug);
    }
  }, [companyName]);

  return (
    <Fragment>
      <Seo title={"Startup Management"} />
      <Pageheader
        currentpage="Create Startup"
        activepage="Dashboards"
        mainpage="Startups"
      />
      <div className="">
        <div className="col-span-12">
          <div className="flex flex-row gap-4 justify-end">
            <button type="button" className="ti-btn ti-btn-primary-full">
              Save
            </button>
            <button
              type="button"
              className="ti-btn bg-yellow ti-btn-yellow-full"
            >
              Publish
            </button>
          </div>
        </div>

        <div className="xl:col-span-6 col-span-12">
          <div className="grid grid-cols-12 sm:gap-x-6 sm:gap-y-4">
            {/* Company Logo */}
            <div className="col-span-12 mb-4">
              <label className="form-label mt-4">Company Logo</label>
              <div className="border-2 border-dashed bg-[#E3E4E8] hs-dark-mode-active:bg-[#1a1e25] p-6 text-center square-container w-[30%] h-48 flex flex-col gap-4 items-center mx-auto justify-center">
                <p className="mb-2">
                  Drag & drop your image here or click to upload
                </p>
                <input
                  type="file"
                  className="form-control flex justify-center"
                />
              </div>
            </div>

            {/* Company Name */}
            <div className="md:col-span-6 col-span-12 mb-4">
              <label className="form-label">Company Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter company name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                minLength={2}
              />
            </div>

            {/* Slug */}
            <div className="md:col-span-6 col-span-12 mb-4">
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
                  onClick={() =>
                    setSlug(companyName.toLowerCase().replace(/\s+/g, "-"))
                  }
                >
                  Refresh
                </button>
              </div>
            </div>

            {/* Company Email */}
            <div className="md:col-span-6 col-span-12 mb-4">
              <label className="form-label">Company Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter company email"
                value={companyEmail}
                onChange={(e) => setCompanyEmail(e.target.value)}
              />
            </div>

            {/* Location */}
            <div className="md:col-span-6 col-span-12 mb-4">
              <label className="form-label">Location</label>
              <div className="grid grid-cols-12 sm:gap-x-4">
                <div className="xl:col-span-6 col-span-12 mb-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
                <div className="xl:col-span-6 col-span-12 mb-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Website */}
            <div className="md:col-span-6 col-span-12 mb-4">
              <label className="form-label">Website</label>
              <input
                type="url"
                className="form-control"
                placeholder="Enter website URL"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>

            {/* Company Size */}
            <div className="md:col-span-6 col-span-12 mb-4">
              <label className="form-label">Company Size</label>
              <input
                type="number"
                className="form-control"
                placeholder="Number of employees"
                value={companySize}
                onChange={(e) => setCompanySize(Number(e.target.value))}
              />
            </div>

            {/* Company Description */}
            <div className="md:col-span-12 col-span-12 mb-4">
              <label className="form-label">Company Description</label>
              <textarea
                className="form-control"
                placeholder="Enter company description"
                value={companyDescription}
                onChange={(e) => setCompanyDescription(e.target.value)}
              />
            </div>

            {/* Fundraising Amount */}
            <div className="md:col-span-6 col-span-12 mb-4">
              <label className="form-label">Fundraising Amount</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter fundraising amount"
                value={fundraisingAmount}
                onChange={(e) => setFundraisingAmount(Number(e.target.value))}
              />
            </div>

            {/* Valuation */}
            <div className="md:col-span-6 col-span-12 mb-4">
              <label className="form-label">Valuation</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter valuation"
                value={valuation}
                onChange={(e) => setValuation(Number(e.target.value))}
              />
            </div>

            {/* Year Founded */}
            <div className="md:col-span-6 col-span-12 mb-4">
              <label className="form-label">Year Founded</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter year founded"
                value={yearFounded}
                onChange={(e) => setYearFounded(Number(e.target.value))}
              />
            </div>

            {/* Pitch Video Link */}
            <div className="md:col-span-6 col-span-12 mb-4">
              <label className="form-label">Pitch Video Link</label>
              <input
                type="url"
                className="form-control"
                placeholder="Enter pitch video link"
                value={pitchVideoLink}
                onChange={(e) => setPitchVideoLink(e.target.value)}
              />
            </div>

            {/* Pitch Deck Link */}
            <div className="md:col-span-6 col-span-12 mb-4">
              <label className="form-label">Pitch Deck Link</label>
              <input
                type="url"
                className="form-control"
                placeholder="Enter pitch deck link"
                value={pitchDeckLink}
                onChange={(e) => setPitchDeckLink(e.target.value)}
              />
            </div>

            {/* Calendly Link */}
            <div className="md:col-span-6 col-span-12 mb-4">
              <label className="form-label">Calendly Link</label>
              <input
                type="url"
                className="form-control"
                placeholder="Enter Calendly link"
                value={calendlyLink}
                onChange={(e) => setCalendlyLink(e.target.value)}
              />
            </div>

            {/* Cohort */}
            <div className="md:col-span-6 col-span-12 mb-4">
              <label className="form-label">Cohort</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter cohort"
                value={cohort}
                onChange={(e) => setCohort(e.target.value)}
              />
            </div>

            {/* Industries */}
            <div className="md:col-span-12 col-span-12 mb-4">
              <label className="form-label">Industries</label>
              <select className="form-control" onChange={handleIndustryChange}>
                <option value="">Select industry</option>
                {industryOptions.map((industry) => (
                  <option key={industry} value={industry}>
                    {industry}
                  </option>
                ))}
              </select>
              <ul className="mt-2">
                {selectedIndustries.map((industry) => (
                  <li key={industry} className="flex justify-between">
                    {industry}
                    <button
                      type="button"
                      onClick={() => removeIndustry(industry)}
                      className="text-red-500"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Founders */}
            <div className="md:col-span-12 col-span-12 mb-4">
              <label className="form-label">Founders</label>
              <select className="form-control" onChange={handleFounderChange}>
                <option value="">Select founder</option>
                {founderOptions.map((founder) => (
                  <option key={founder} value={founder}>
                    {founder}
                  </option>
                ))}
              </select>
              <ul className="mt-2">
                {selectedFounders.map((founder) => (
                  <li key={founder.name} className="flex justify-between">
                    {founder.name}
                    <button
                      type="button"
                      onClick={() => removeFounder(founder)}
                      className="text-red-500"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CreateStartup;
