// pages/partners/[id].tsx
import PartnerDetails from "@/pages/components/applications/partnerdetails";
import { PartnersList } from "@/shared/data/dashboards/applicationdata";
import { useRouter } from "next/router";

import React from "react";

const PartnerDetailPage = () => {
	const router = useRouter();
	const { id } = router.query; // Get the 'id' from the URL

	// Find the partner by 'id'
	const partner = PartnersList.find((p) => p.id === id);

	return (
		<div>
			<PartnerDetails partner={partner} />
		</div>
	);
};

PartnerDetailPage.layout = "Contentlayout";
export default PartnerDetailPage;
