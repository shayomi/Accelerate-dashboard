import { Userslists } from "@/shared/data/dashboards/usermanagementdata";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import { FaEye, FaPencilAlt } from "react-icons/fa";

const Users = () => {
	return (
		<Fragment>
			<Seo title={"User Management"} />
			<Pageheader
				currentpage="Users List"
				activepage="Dashboards"
				mainpage="User Management"
			/>

			<div className="flex justify-end"> 
				<button
					type="button"
					className="bg-green text-white px-3 py-1.5 rounded-md"
				>
					<Link href="/users/create">Create New User</Link>
				</button>
			</div>
			<div className="mt-8">
				<div className="box custom-card">
					<div className="box-header flex flex-col md:flex-row items-start md:items-center md:justify-between gap-8">
						
						<div className="box-title">Users List</div>
						<div className="flex gap-6 flex-col sm:flex-row">
							<div>
								<input
									className="ti-form-control form-control-sm"
									type="text"
									placeholder="Search Here"
									aria-label=".form-control-sm example"
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
                      Founders
										</Link>
									</li>
									<li>
										<Link
											className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
											href="#!"
										>
                      Advisors
										</Link>
									</li>
									<li>
										<Link
											className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
											href="#!"
										>
                      Investors
										</Link>
									</li>
									<li>
										<Link
											className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
											href="#!"
										>
                      Partners
										</Link>
									</li>
								</ul>
								
							</div>
						
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
												id="checkboxNoLabel1"
												value=""
												aria-label="..."
											/>
										</th>
										<th
											scope="col"
											className="!text-start !text-[0.85rem] min-w-[200px]"
										>
                      First Name
										</th>
										<th
											scope="col"
											className="!text-start !text-[0.85rem] min-w-[200px]"
										>
                      Last Name
										</th>
										<th scope="col" className="!text-start !text-[0.85rem]">
                      Role
										</th>
										<th scope="col" className="!text-start !text-[0.85rem]">
                      Email
										</th>
										<th scope="col" className="!text-start !text-[0.85rem]">
                      Status
										</th>

										<th scope="col" className="!text-start !text-[0.85rem]">
                      Actions
										</th>
									</tr>
								</thead>
								<tbody>
									{Userslists.map((idx) => (
										<tr
											className="border border-inherit border-solid hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light"
											key={idx.id}
										>
											<th scope="row" className="!ps-4 !pe-5">
												<input
													className="form-check-input"
													type="checkbox"
													defaultChecked={idx.checked === "defaultChecked"}
													value=""
													aria-label="..."
												/>
											</th>
											<td>{idx.firstName}</td>
											<td>{idx.lastName}</td>
											<td>{idx.role}</td>
											<td>{idx.email}</td>
											<td
												className={
													idx.status === "Active" ? "text-green" : "text-danger"
												}
											>
												{idx.status}
											</td>

											<td>
												<div className="flex flex-row gap-6 items-center">
													<Link href={`/users/${idx.id}`}>
														<button className="ti-btn ti-btn-md ti-btn-secondary !me-[0.375rem]">
															<FaEye size={20} />
														</button>
													</Link>

													<button className="ti-btn ti-btn-md ti-btn-warning !me-[0.375rem]">
														<Link href={`/users/edit/${idx.id}`}>
															<FaPencilAlt size={20} />
														</Link>
													</button>
													<button className="text-red">Deactivate</button>
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
            Showing 5 Entries{" "}
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
Users.layout = "Contentlayout";

export default Users;
