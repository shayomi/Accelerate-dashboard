// pages/users/[id].tsx
import React from "react";
import { useRouter } from "next/router";
import { Userslists } from "@/shared/data/usermanagementdata";
import Userdetails from "../../components/user-management/Userdetails";

const UserDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the user by ID
  const user = Userslists.find((user) => user.id === id);

  // Provide default values for associatedEntities
  const userWithDefaults = user
    ? {
        ...user,
        associatedEntities: {
          investors: user.associatedEntities.investors || [],
          advisors: user.associatedEntities.advisors || [],
          partners: user.associatedEntities.partners || [],
          founders: user.associatedEntities.founders || [],
        },
      }
    : null;

  if (!userWithDefaults) {
    return <p>User not found</p>;
  }

  return <Userdetails user={userWithDefaults} />;
};

UserDetailPage.layout = "Contentlayout";
export default UserDetailPage;
