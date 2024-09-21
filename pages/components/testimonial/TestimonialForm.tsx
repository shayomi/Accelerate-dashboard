import React, { useState, useEffect, Fragment } from "react";
import { useRouter } from "next/router";
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";

interface TestimonialFormProps {
  testimonialData?: {
    id: number;
    name: string;
    testimonial: string;
    embeddedLink: string;
  };
  onSubmit: (testimonial: {
    id: number;
    name: string;
    testimonial: string;
    embeddedLink: string;
  }) => void;
}

const TestimonialForm = ({
  testimonialData,
  onSubmit,
}: TestimonialFormProps) => {
  const [name, setName] = useState(testimonialData?.name || "");
  const [testimonial, setTestimonial] = useState(
    testimonialData?.testimonial || ""
  );
  const [embeddedLink, setEmbeddedLink] = useState(
    testimonialData?.embeddedLink || ""
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newTestimonial = {
      id: testimonialData ? testimonialData.id : Date.now(), // Generate unique ID for new testimonials
      name,
      testimonial,
      embeddedLink,
    };

    onSubmit(newTestimonial);
  };

  return (
    <Fragment>
      <Seo
        title={testimonialData ? "Edit Testimonial" : "Create Testimonial"}
      />
      <Pageheader
        currentpage={
          testimonialData ? "Edit Testimonial" : "Create Testimonial"
        }
        activepage="Testimonials Management"
        mainpage="Testimonials"
      />

      <div className="box custom-card">
        <div className="box-body">
          <form onSubmit={handleSubmit} className="">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control mt-2"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="testimonial"
                className="block text-sm font-medium text-gray-700"
              >
                Testimonial
              </label>
              <textarea
                id="testimonial"
                value={testimonial}
                onChange={(e) => setTestimonial(e.target.value)}
                className="form-control mt-2"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="embeddedLink"
                className="block text-sm font-medium text-gray-700"
              >
                Embedded Link
              </label>
              <input
                type="text"
                id="embeddedLink"
                value={embeddedLink}
                onChange={(e) => setEmbeddedLink(e.target.value)}
                className="form-control mt-2"
                required
              />
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-blue-500 text-danger px-4 py-2 rounded-md hover:bg-blue-600 transition"
              >
                {testimonialData ? "Update Testimonial" : "Create Testimonial"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

TestimonialForm.layout = "Contentlayout";
export default TestimonialForm;
