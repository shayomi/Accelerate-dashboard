import Link from "next/link";
import React from "react";

const speakersData = [
  { name: "John Doe", topic: "Future of AI" },
  { name: "Jane Smith", topic: "Blockchain Revolution" },
  { name: "Robert Lee", topic: "Cybersecurity Trends" },
  { name: "Robert Lee", topic: "Cybersecurity Trends" },
  { name: "Robert Lee", topic: "Cybersecurity Trends" },
  { name: "Robert Lee", topic: "Cybersecurity Trends" },
  { name: "Robert Lee", topic: "Cybersecurity Trends" },
  { name: "Robert Lee", topic: "Cybersecurity Trends" },
];

const SpeakersTab = () => {
  return (
    <div>
      <div className="box-body">
        <div className="overflow-x-auto">
          <table className="table min-w-full whitespace-nowrap table-hover border table-bordered">
            <thead>
              <tr className="">
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Speaker
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Topic
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {speakersData.map((speaker, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {speaker.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {speaker.topic}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="box-footer">
        <div className="sm:flex items-center">
          <div className="text-defaulttextcolor dark:text-defaulttextcolor/70">
            Showing {speakersData.length} Entries{" "}
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
    </div>
  );
};

export default SpeakersTab;
