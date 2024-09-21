// pages/authors/create.tsx
import React from "react";
import { authorsList } from "../components/author/authordata";
import AuthorForm from "../components/author/createauthor";

const CreateAuthorPage = () => {
	const handleCreateAuthor = (newAuthor: any) => {
		// Here, you would typically add the new author to your data source
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
