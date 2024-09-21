// pages/authors/edit/[id].tsx
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { Authors } from "@/shared/types";
import { authorsList } from "@/shared/data/authordata";
import AuthorForm from "@/pages/components/author/createauthor";

const EditAuthorPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [author, setAuthor] = useState<Authors | undefined>();

  useEffect(() => {
    if (id) {
      const foundAuthor = authorsList.find((auth) => auth.id === Number(id));
      setAuthor(foundAuthor);
    }
  }, [id]);

  const handleEditAuthor = (updatedAuthor: Authors) => {
    // Update the author in the data source
    const index = authorsList.findIndex((auth) => auth.id === updatedAuthor.id);
    if (index !== -1) {
      authorsList[index] = updatedAuthor;
      console.log("Author updated:", updatedAuthor);
    }
  };

  return <AuthorForm authorData={author} onSubmit={handleEditAuthor} />;
};

EditAuthorPage.layout = "Contentlayout";
export default EditAuthorPage;
