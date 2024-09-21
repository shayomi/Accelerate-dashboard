import { AdvisorList } from "@/shared/data/dashboards/advisorsdata";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import { FaEdit, FaEye, FaPencilAlt } from "react-icons/fa";

const Advisors = () => {
	return (
		<Fragment>
			<Seo title={"Advisor Management"} />
			<Pageheader
				currentpage="Advisors List"
				activepage="Dashboards"
				mainpage="Advisor"
			/>

			<div className="">
				<div className="box custom-card">
					<div className="box-header justify-between gap-8">
						<div className="box-title">Advisors List</div>
						<div className="flex flex-wrap gap-2">
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
                      Technology
										</Link>
									</li>
									<li>
										<Link
											className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
											href="#!"
										>
                      Strategy
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
								<Link href="/advisor/create">Add new advisor</Link>
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
												id="checkboxNoLabel1"
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
                      Focus Area
										</th>
										<th scope="col" className="!text-start !text-[0.85rem]">
                      Company Name
										</th>
										<th scope="col" className="!text-start !text-[0.85rem]">
                      Location
										</th>

										<th scope="col" className="!text-start !text-[0.85rem]">
                      Actions
										</th>
									</tr>
								</thead>
								<tbody>
									{AdvisorList.map((advisor, idx) => (
										<tr
											className="border border-inherit border-solid hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light"
											key={idx}
										>
											<th scope="row" className="!ps-4 !pe-5">
												<input
													className="form-check-input"
													type="checkbox"
													value=""
													aria-label="..."
												/>
											</th>
											<td className="text-black/70 hs-dark-mode-active:text-white">
												{advisor.name}
											</td>
											<td className="text-black/70 hs-dark-mode-active:text-white">
												{advisor.focusAreas}
											</td>
											<td className="text-black/70 hs-dark-mode-active:text-white">
												{advisor.companyName}
											</td>
											<td className="text-black/70 hs-dark-mode-active:text-white">
												{advisor.location}
											</td>

											<td>
												<div className="flex flex-row gap-8 items-center">
													<Link href={`/advisor/${advisor.name}`}>
														<button className="ti-btn ti-btn-md ti-btn-secondary !me-[0.375rem]">
															<FaEye size={20} />
														</button>
													</Link>
													<Link href={`/advisor/edit/${advisor.name}`}>
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
			</div>
			<div className="box-footer">
				<div className="sm:flex items-center">
					<div className="text-defaulttextcolor dark:text-defaulttextcolor/70">
            Showing {AdvisorList.length} Entries{" "}
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
Advisors.layout = "Contentlayout";

export default Advisors;
