import React, { Fragment, useState } from "react";
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";

const CreateTestimonial = () => {
  const [embeddedLink, setEmbeddedLink] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the form submission (e.g., send to API)
    console.log({
      embeddedLink,
    });
  };

  return (
    <Fragment>
      <Seo title={"Create New Testimonial"} />
      <Pageheader
        currentpage="Create Testimonial"
        activepage="Dashboards"
        mainpage="Testimonial Management"
      />
      <div className="">
        <div className="">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-blue-700">
              Create New Testimonial
            </h1>
            <button className="bg-primary text-white px-4 py-2 rounded-md">
              Save
            </button>
          </div>

          {/* Form Layout */}
          <div className="mb-6">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-8">
              {/* Embedded Link Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Embedded Link
                </label>
                <input
                  type="text"
                  value={embeddedLink}
                  onChange={(e) => setEmbeddedLink(e.target.value)}
                  placeholder="Enter embedded link"
                  className="form-control mt-1"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

CreateTestimonial.layout = "Contentlayout";
export default CreateTestimonial;
