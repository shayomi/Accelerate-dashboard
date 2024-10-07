import React, { Fragment, useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import Link from "next/link";
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";

// Define the role type
interface Role {
  id: string;
  title: string;
  details: string;
}

const roles: Role[] = [
  {
    id: "1",
    title: "Founder",
    details:
      "Start up founders whose startups have been accepted in any cohort of Accelerate Africa.",
  },
  {
    id: "2",
    title: "Advisor",
    details:
      "Advisors providing valuable guidance to startups in Accelerate Africa.",
  },
  {
    id: "3",
    title: "Venture Partner",
    details:
      "Partners investing in startups and helping them grow in Accelerate Africa.",
  },
  {
    id: "4",
    title: "Investor",
    details:
      "Investors supporting startups with financial resources in Accelerate Africa.",
  },
];

const Roles = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);

  const openModal = (role: Role) => {
    setSelectedRole(role);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedRole(null);
    setShowModal(false);
  };

  return (
    <Fragment>
      <Seo title={"User Management"} />
      <Pageheader
        currentpage="Roles List"
        activepage="Dashboards"
        mainpage="User Management"
      />
      <div>
        <div className="box custom-card">
          <div className="box-header flex flex-col md:flex-row items-start md:items-center md:justify-between gap-8">
            <div className="box-title">Roles List</div>
          </div>
          <div className="box-body">
            <div className="overflow-x-auto">
              <table className="table min-w-full whitespace-nowrap table-hover border table-bordered">
                <thead>
                  <tr className="border border-inherit border-solid dark:border-defaultborder/10">
                    <th className="!text-start !text-[0.85rem] min-w-[200px]">
                      Role
                    </th>
                    <th className="!text-start !text-[0.85rem] min-w-[200px]">
                      Details
                    </th>
                    <th className="!text-start !text-[0.85rem]">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {roles.map((role) => (
                    <tr
                      key={role.id}
                      className="border border-inherit border-solid hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light"
                    >
                      <td>{role.title}</td>
                      <td>{role.details}</td>
                      <td>
                        <div className="flex flex-row gap-6 items-center">
                          <button
                            className="ti-btn ti-btn-md ti-btn-warning !me-[0.375rem]"
                            onClick={() => openModal(role)}
                          >
                            <FaPencilAlt size={20} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="box-footer">
        <div className="sm:flex items-center">
          <div className="text-defaulttextcolor dark:text-defaulttextcolor/70">
            Showing {roles.length} Entries
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
                  <Link className="page-link !text-primary" href="#!">
                    Next
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && selectedRole && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-primary w-96 rounded-lg shadow-lg p-6">
            <h4 className="text-sm  mb-4">
              Edit Permission for {selectedRole.title}
            </h4>
            <div className="mb-4">
              <label htmlFor="permission-select" className="form-label">
                Select Permission
              </label>
              <select id="permission-select" className="form-control">
                <option value="admin">Admin</option>
                <option value="superadmin">Superadmin</option>
              </select>
            </div>
            <div className="flex justify-end">
              <button className="mr-2 ti-btn ti-btn-light" onClick={closeModal}>
                Cancel
              </button>
              <button
                className="ti-btn ti-btn-success-full text-white"
                onClick={closeModal}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Roles;
