import React from "react";
import { useRouter } from "next/router";
import { Userslists } from "@/shared/data/dashboards/usermanagementdata";
import CreateUser from "@/pages/components/user-management/CreateUser";

const EditUserPage = () => {
	const router = useRouter();
	const { id } = router.query;

	// Find the user by ID
	const user = Userslists.find((user) => user.id === id);

	if (!user) {
		return <div>User not found</div>;
	}

	return <CreateUser user={user} />;
};

EditUserPage.layout = "Contentlayout";

export default EditUserPage;
