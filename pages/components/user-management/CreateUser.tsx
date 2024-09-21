"use client";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment, useState, useEffect } from "react";

const CreateUser = ({ user }: any) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName || "");
      setLastName(user.lastName || "");
      setEmail(user.email || "");
      setRole(user.role || "");
    }
  }, [user]);

  return (
    <Fragment>
      <Seo title={"User Management"} />
      <Pageheader
        currentpage={user ? "Edit User" : "Create New User"}
        activepage="Dashboards"
        mainpage="User Management"
      />
      <div className="">
        <div className="xl:col-span-6 col-span-12">
          <div className="grid grid-cols-12 sm:gap-x-6 sm:gap-y-4">
            <div className="md:col-span-6 col-span-12 mb-4">
              <label className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                aria-label="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="md:col-span-6 col-span-12 mb-4">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                aria-label="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="md:col-span-6  col-span-12">
              <div className="grid grid-cols-12">
                <div className="xl:col-span-12 col-span-12 mb-4">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    aria-label="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="xl:col-span-12 col-span-12"></div>
              </div>
            </div>
            <div className="md:col-span-6  col-span-12">
              <div className="grid grid-cols-12">
                <div className="xl:col-span-12 col-span-12 mb-4">
                  <label className="form-label">Role</label>
                  {/* Dropdown for Role */}
                  <select
                    className="form-control"
                    aria-label="Role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option value="" disabled>
                      Select role
                    </option>
                    <option value="founder">Founder</option>
                    <option value="investor">Investor</option>
                    <option value="partner">Partner</option>
                    <option value="advisor">Advisor</option>
                  </select>
                </div>

                <div className="xl:col-span-12 col-span-12"></div>
              </div>
            </div>
            <div className="md:col-span-6 col-span-12 mb-4 sm:mb-0">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="password"
                aria-label="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="md:col-span-6 col-span-12 mb-4 sm:mb-0">
              <label className="form-label">Confirm password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm password"
                aria-label="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <div className="md:col-span-12 col-span-12 flex flex-row gap-4 mt-6 items-end">
              <button
                type="button"
                className="ti-btn bg-none text-red rounded-sm !mb-0"
              >
                <Link href="/users">cancel</Link>
              </button>
              <button
                type="submit"
                className="ti-btn bg-green rounded-sm !mb-0"
              >
                {user ? "Update User" : "Create User"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

CreateUser.layout = "Contentlayout";
export default CreateUser;
