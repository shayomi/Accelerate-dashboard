// pages/create.tsx
import React from "react";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import CreateCohort from "@/pages/components/cohort/createCohort";

const CreatePage = () => {
	return (
		<>
			<div className="container mx-auto p-6">
				<CreateCohort />
			</div>
		</>
	);
};

CreatePage.layout = "Contentlayout";
export default CreatePage;
