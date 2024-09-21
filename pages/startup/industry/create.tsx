import ManageIndustry from "@/pages/components/startup/createIndustry";
import { StartupsList } from "@/shared/data/dashboards/startupsdata";
import React from "react";

const CreateIndustryPage = () => {
	// Extract startup names for the multi-select dropdown
	const startupOptions = StartupsList.map((startup) => startup.companyName);

	return (
		<div>
			<ManageIndustry startupOptions={startupOptions} />
		</div>
	);
};

CreateIndustryPage.layout = "Contentlayout";

export default CreateIndustryPage;
