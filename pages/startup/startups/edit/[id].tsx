import React from "react";
import { useRouter } from "next/router";
import { StartupsList } from "@/shared/data/dashboards/startupsdata";
import CreateStartup from "@/pages/components/startup/create";

const EditStartupPage = () => {
	const router = useRouter();
	const { id } = router.query;

	// Find the startup by ID
	const startup = StartupsList.find((startup) => startup.id === id);

	if (!startup) {
		return <div>Startup not found</div>;
	}

	// Pass the startup data to the CreateStartup component for editing
	return <CreateStartup startupData={startup} />;
};

EditStartupPage.layout = "Contentlayout";

EditStartupPage.layout = "Contentlayout";

export default EditStartupPage;
