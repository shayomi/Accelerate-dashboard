import React, { useState, useEffect, Fragment } from "react";
import { useRouter } from "next/router";
import { Authors } from "@/types";
import { articlesData } from "../article/articledata";
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";

interface AuthorFormProps {
  authorData?: Authors;
  onSubmit: (author: Authors) => void;
}

const AuthorForm = ({ authorData, onSubmit }: AuthorFormProps) => {
  const [firstName, setFirstName] = useState(authorData?.firstName || "");
  const [lastName, setLastName] = useState(authorData?.lastName || "");
  const [profilePic, setProfilePic] = useState(authorData?.profilePic || "");
  const [selectedArticles, setSelectedArticles] = useState<number[]>(
    authorData?.articles.map((article) => article.id) || []
  );

  const handleArticleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!selectedArticles.includes(value)) {
      setSelectedArticles((prev) => [...prev, value]);
    }
  };

  const removeArticle = (id: number) => {
    setSelectedArticles((prev) => prev.filter((articleId) => articleId !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newAuthor: Authors = {
      id: authorData ? authorData.id : Date.now(), // Generate unique ID for new authors
      firstName,
      lastName,
      profilePic,
      articles: selectedArticles.map((id) => {
        const article = articlesData.find((article) => article.id === id);
        return { id, title: article?.title || "Unknown" };
      }),
    };

    onSubmit(newAuthor);
  };

  return (
    <Fragment>
      <Seo title={authorData ? "Edit Author" : "Create Author"} />
      <Pageheader
        currentpage={authorData ? "Edit Author" : "Create Author"}
        activepage="Authors Management"
        mainpage="Authors"
      />

      <div className="box custom-card">
        <div className="box-body">
          <form onSubmit={handleSubmit} className="">
            <div className="mb-4">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="form-control mt-2"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="form-control mt-2"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="profilePic"
                className="block text-sm font-medium text-gray-700"
              >
                Profile Picture URL
              </label>
              <input
                type="file"
                className="form-control flex justify-center"
                id="profilePic"
                value={profilePic}
                onChange={(e) => setProfilePic(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="articles"
                className="block text-sm font-medium text-gray-700"
              >
                Select Articles
              </label>
              <select
                id="articles"
                onChange={handleArticleChange}
                className="form-control mt-2"
                defaultValue=""
              >
                <option value="" disabled>
                  Choose an article
                </option>
                {articlesData.map((article) => (
                  <option key={article.id} value={article.id}>
                    {article.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Selected Articles
              </label>
              <div className="mt-2">
                {selectedArticles.map((articleId) => {
                  const article = articlesData.find((a) => a.id === articleId);
                  return (
                    <div
                      key={articleId}
                      className="flex items-center justify-between p-2 border border-gray-300 rounded-md mb-2"
                    >
                      <span className="text-sm text-gray-700">
                        {article?.title || "Unknown Article"}
                      </span>
                      <button
                        type="button"
                        className="text-red-500 text-sm"
                        onClick={() => removeArticle(articleId)}
                      >
                        Remove
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-blue-500 text-sm px-4 py-2 rounded-md hover:bg-blue-600 transition"
              >
                {authorData ? "Update Author" : "Create Author"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

AuthorForm.layout = "Contentlayout";
export default AuthorForm;
