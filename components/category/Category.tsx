import Link from "next/link";
import React, { Fragment } from "react";
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import { FaPencilAlt } from "react-icons/fa";

// Category data
export const categorydata = [
  { id: 1, name: "Technology" },
  { id: 2, name: "Lifestyle" },
  { id: 3, name: "Science" },
  { id: 4, name: "Finance" },
];

const Categories = () => {
  return (
    <Fragment>
      <Seo title={"Category Management"} />
      <Pageheader
        currentpage="Category List"
        activepage="Dashboards"
        mainpage="Categories Management"
      />

      <div className="box custom-card">
        <div className="box-header justify-between gap-8 border-b-2 border-white ">
          <div className="box-title">Categories List</div>
          <button className="ti-btn ti-btn-success-full">
            <Link href="/category/create">Create New Category</Link>
          </button>
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
                  <th className="!text-start !text-[0.85rem] min-w-[200px]">
                    Category Name
                  </th>
                  <th className="!text-start !text-[0.85rem]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {categorydata.map((category) => (
                  <tr
                    className="border border-inherit border-solid hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light"
                    key={category.id}
                  >
                    <th scope="row" className="!ps-4 !pe-5">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        aria-label="..."
                      />
                    </th>
                    <td className="px-4 py-2 text-sm">{category.name}</td>
                    <td>
                      <div className="flex gap-6 items-center">
                        <Link href={`category/edit/${category.id}`}>
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

      {/* Pagination */}
      <div className="box-footer">
        <div className="sm:flex items-center">
          <div className="text-defaulttextcolor dark:text-defaulttextcolor/70">
            Showing 4 Entries{" "}
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
                    next
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

Categories.layout = "Contentlayout";
export default Categories;
