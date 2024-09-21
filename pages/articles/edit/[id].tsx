import React from "react";
import { useRouter } from "next/router";
import { Article } from "@/types";

import CreateArticle from "@/pages/components/article/createarticle";
import { articlesData } from "@/pages/components/article/articledata";

const EditArticlePage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Ensure id is a number
  const articleId = typeof id === "string" ? parseInt(id, 10) : undefined;

  // Find the article by id
  const article = articlesData.find(
    (article: Article) => article.id === articleId
  );

  if (!article) {
    return <div>Article not found</div>;
  }

  // Pass the article data to the CreateArticle component for editing
  return <CreateArticle article={article} />;
};

EditArticlePage.layout = "Contentlayout";

export default EditArticlePage;
