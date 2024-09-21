import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import { TestimonialList } from "../../../shared/data/testimonaildata";
import { FaEye, FaPencilAlt } from "react-icons/fa";

const Testimonials = () => {
  return (
    <Fragment>
      <Seo title={"Testimonial Management"} />
      <Pageheader
        currentpage="Testimonials List"
        activepage="Dashboards"
        mainpage="Testimonial"
      />

      <div className="box custom-card">
        <div className="box-header justify-between gap-8">
          <div className="box-title">Testimonials List</div>
          <div>
            <button
              type="button"
              className="bg-green text-white px-3 py-1.5 rounded-md"
            >
              <Link href="/testimonials/create"> Add New Testimonial</Link>
            </button>
          </div>
        </div>

        <div className="box-body">
          <div className="overflow-x-auto">
            <table className="table min-w-full whitespace-nowrap table-hover border table-bordered">
              <thead>
                <tr className="border border-inherit border-solid dark:border-defaultborder/10">
                  <th scope="row" className="!ps-4 !pe-5">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      aria-label="..."
                    />
                  </th>
                  <th
                    scope="col"
                    className="!text-start !text-[0.85rem] min-w-[200px]"
                  >
                    Name
                  </th>
                  <th scope="col" className="!text-start !text-[0.85rem]">
                    Link
                  </th>
                  <th scope="col" className="!text-start !text-[0.85rem]">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {TestimonialList.map((testimonial) => (
                  <tr
                    className="border border-inherit border-solid hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light"
                    key={testimonial.id}
                  >
                    <th scope="row" className="!ps-4 !pe-5">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        aria-label="..."
                      />
                    </th>
                    <td className="text-sm">{testimonial.name}</td>
                    <td className="text-sm">
                      <Link
                        href={testimonial.embeddedLink}
                        className="text-primary hover:underline"
                      >
                        {" "}
                        View Testimonial
                      </Link>
                    </td>
                    <td>
                      <div className="flex flex-row gap-6 items-center">
                        <Link href={`/testimonials/edit/${testimonial.id}`}>
                          <button className="ti-btn ti-btn-md ti-btn-warning !me-[0.375rem]">
                            <FaPencilAlt size={20} />
                          </button>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="box-footer">
        <div className="sm:flex items-center">
          <div className="text-defaulttextcolor dark:text-defaulttextcolor/70">
            Showing {TestimonialList.length} Entries{" "}
            <i className="bi bi-arrow-right ms-2 font-semibold"></i>
          </div>
          <div className="ms-auto">
            <nav aria-label="Page navigation" className="pagination-style-4">
              <ul className="ti-pagination mb-0">
                <li className="page-item disabled">
                  <Link className="page-link" href="#!">
                    Prev
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link active" href="#!">
                    1
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" href="#!">
                    2
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link !text-primary" href="#!">
                    Next
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Testimonials.layout = "Contentlayout";

export default Testimonials;
