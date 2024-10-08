"use client";

import { Fragment, useState } from "react";
import { useRouter } from "next/router";
import { Event } from "@/shared/types";

interface AddRegistrantProps {
  eventId: number;
}

const AddRegistrant = ({ eventId }: AddRegistrantProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    status: "Confirmed",
  });

  const router = useRouter();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Adding registrant:", formData);

    router.push(`/events/${eventId}`);
  };

  return (
    <Fragment>
      <div className="mt-12">
        <div className="box custom-card">
          <div className="box-header">
            <h2 className="text-xl font-bold">Add New Registrant</h2>
          </div>
          <div className="box-body">
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
              <div>
                <label className="ti-form-label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter full name"
                  required
                />
              </div>

              <div>
                <label className="ti-form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter email address"
                  required
                />
              </div>

              <div>
                <label className="ti-form-label">Company</label>
                <input
                  type="text"
                  name="company"
                  className="form-control"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Enter company name"
                />
              </div>

              <div>
                <label className="ti-form-label">Status</label>
                <select
                  name="status"
                  className="ti-form-control form-control-lg"
                  value={formData.status}
                  onChange={handleInputChange}
                >
                  <option value="Confirmed">Confirmed</option>
                  <option value="Waitlisted">Waitlisted</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>

              <div>
                <button
                  type="submit"
                  className="ti-btn ti-btn-md ti-btn-primary"
                >
                  Add Registrant
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AddRegistrant;
