import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { articlesData } from "../../../shared/data/articledata";
import { FaEye, FaPencilAlt } from "react-icons/fa";

const Articles = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredArticles, setFilteredArticles] = useState(articlesData);

  // Search and Filter Logic
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredArticles(
      articlesData.filter(
        (article) =>
          article.title.toLowerCase().includes(query) ||
          article.category.toLowerCase().includes(query) ||
          article.authors.some((author) =>
            author.name.toLowerCase().includes(query)
          )
      )
    );
  };

  return (
    <Fragment>
      <Seo title={"Article Management"} />
      <Pageheader
        currentpage="Articles"
        activepage="Dashboards"
        mainpage="Article Management"
      />
      <div className="box custom-card">
        <div className="box-header justify-between gap-8">
          <div className="box-title">Article List</div>
          <div className="flex flex-wrap gap-2">
            <div>
              <input
                className="ti-form-control form-control-sm"
                type="text"
                placeholder="Search Here"
                aria-label=".form-control-sm example"
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
            <div className="hs-dropdown ti-dropdown">
              <Link
                href="#!"
                className="ti-btn ti-btn-primary !bg-primary !text-white !py-1 !px-2 !text-[0.75rem] !m-0 !gap-0 !font-medium"
                aria-expanded="false"
              >
                Filter By
                <i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
              </Link>
              <ul
                className="hs-dropdown-menu ti-dropdown-menu !-mt-2 hidden"
                role="menu"
              >
                <li>
                  <Link
                    className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                    href="#!"
                  >
                    Published
                  </Link>
                </li>
                <li>
                  <Link
                    className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                    href="#!"
                  >
                    Draft
                  </Link>
                </li>
                <li>
                  <Link
                    className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                    href="#!"
                  >
                    Under Review
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <button
              type="button"
              className="bg-green text-white px-3 py-1.5 rounded-md"
            >
              <Link href="/articles/create">Create new article</Link>
            </button>
          </div>
        </div>

        {/* Articles Table */}
        <div className="box-body">
          <div className="overflow-x-auto">
            <table className="table min-w-full whitespace-nowrap table-hover border table-bordered">
              <thead>
                <tr className="text-left text-sm font-semibold ">
                  <th scope="row" className="!ps-4 !pe-5">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      aria-label="..."
                    />
                  </th>
                  <th className="px-4 py-2">Title</th>
                  <th className="px-4 py-2">Category</th>
                  <th className="px-4 py-2">Authors</th>
                  <th className="px-4 py-2">Publication Date</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredArticles.map((article) => (
                  <tr
                    key={article.id}
                    className="border border-inherit border-solid hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light"
                  >
                    <th scope="row" className="!ps-4 !pe-5">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        aria-label="..."
                      />
                    </th>
                    <td className="px-4 py-2 text-sm">{article.title}</td>
                    <td className="px-4 py-2 text-sm">{article.category}</td>
                    <td className="px-4 py-2 text-sm">
                      {article.authors.map((author) => author.name).join(", ")}
                    </td>
                    <td className="px-4 py-2 text-sm">
                      {article.publicationDate}
                    </td>
                    <td
                      className={
                        article.status === "Published"
                          ? "text-green"
                          : article.status === "Draft"
                          ? "text-yellow"
                          : "text-red"
                      }
                    >
                      {article.status}
                    </td>
                    <td className="px-4 py-2 border-b flex flex-row gap-6 items-center">
                      <Link
                        href={`/articles/edit/${article.id}`}
                        className="ti-btn ti-btn-md ti-btn-warning !me-[0.375rem]"
                      >
                        <FaPencilAlt size={20} />
                      </Link>
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
            Showing {filteredArticles.length} Entries
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

Articles.layout = "Contentlayout";
export default Articles;
