import Link from "next/link";
import React from "react";

const agendaData = [
	{ session: "Opening Keynote", time: "09:00 AM", speaker: "John Doe" },
	{ session: "Tech Innovations", time: "10:30 AM", speaker: "Jane Smith" },
	{ session: "Panel Discussion", time: "01:00 PM", speaker: "Panelists" },
	{ session: "Panel Discussion", time: "01:00 PM", speaker: "Panelists" },
	{ session: "Panel Discussion", time: "01:00 PM", speaker: "Panelists" },
	{ session: "Panel Discussion", time: "01:00 PM", speaker: "Panelists" },
	{ session: "Panel Discussion", time: "01:00 PM", speaker: "Panelists" },
];

const AgendaTab = () => {
	return (
		<div>
			<div className="box-body">
				<div className="overflow-x-auto">
					<table className="table min-w-full whitespace-nowrap table-hover border table-bordered">
						<thead>
							<tr className="">
								<th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Session
								</th>
								<th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Time
								</th>
								<th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Speaker
								</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-gray-200">
							{agendaData.map((item, index) => (
								<tr key={index}>
									<td className="px-6 py-4 whitespace-nowrap">
										{item.session}
									</td>
									<td className="px-6 py-4 whitespace-nowrap">{item.time}</td>
									<td className="px-6 py-4 whitespace-nowrap">
										{item.speaker}
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
            Showing {agendaData.length} Entries{" "}
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

export default AgendaTab;
