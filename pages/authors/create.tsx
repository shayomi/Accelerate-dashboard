import React from "react";
import { authorsList } from "../../shared/data/authordata";
import AuthorForm from "../../components/author/createauthor";

const CreateAuthorPage = () => {
  const handleCreateAuthor = (newAuthor: any) => {
    authorsList.push(newAuthor);
    console.log("Author created:", newAuthor);
  };

  return (
    <div>
      <AuthorForm onSubmit={handleCreateAuthor} />
    </div>
  );
};

CreateAuthorPage.layout = "Contentlayout";

export default CreateAuthorPage;
