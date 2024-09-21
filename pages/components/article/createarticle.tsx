import React, { Fragment, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import { Article } from "@/types";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

type Author = {
  id: number;
  name: string;
};

const authorsList: Author[] = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Alex Johnson" },
];

type CreateArticleProps = {
  article?: Article; // Optional for edit mode
};

const CreateArticle = ({ article }: CreateArticleProps) => {
  const [title, setTitle] = useState(article?.title || "");
  const [slug, setSlug] = useState(article?.slug || "");
  const [category, setCategory] = useState(article?.category || "");
  const [content, setContent] = useState(article?.content || "");
  const [publicationDate, setPublicationDate] = useState(
    article?.publicationDate || ""
  );
  const [externalLink, setExternalLink] = useState(article?.externalLink || "");
  const [excerpt, setExcerpt] = useState(article?.excerpt || "");
  const [featured, setFeatured] = useState(article?.featured || false);
  const [selectedAuthors, setSelectedAuthors] = useState<Author[]>(
    article?.authors || []
  );
  const [status, setStatus] = useState(article?.status || "Draft");

  // Slug generation logic
  const handleSlugGeneration = () => {
    setSlug(title.toLowerCase().replace(/\s+/g, "-"));
  };

  // Handle selecting an author
  const handleAuthorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const authorId = parseInt(e.target.value);
    const selectedAuthor = authorsList.find((author) => author.id === authorId);
    if (
      selectedAuthor &&
      !selectedAuthors.some((author) => author.id === selectedAuthor.id)
    ) {
      setSelectedAuthors([...selectedAuthors, selectedAuthor]);
    }
  };

  // Handle removing an author
  const removeAuthor = (authorId: number) => {
    setSelectedAuthors(
      selectedAuthors.filter((author) => author.id !== authorId)
    );
  };

  return (
    <Fragment>
      <Seo title={article ? "Edit Article" : "Create Article"} />
      <Pageheader
        currentpage={article ? "Edit Article" : "Create Article"}
        activepage="Articles"
        mainpage="Article Management"
      />
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-700">
          {article ? "Edit Article" : "Create New Article"}
        </h1>
        <div className="flex space-x-4">
          <button
            type="submit"
            className="bg-primary text-white py-2 px-4 rounded-md"
          >
            Save
          </button>
          <button
            type="button"
            className="bg-primary/20 text-primary py-2 px-4 rounded-md"
          >
            {article ? "Update" : "Publish"}
          </button>
        </div>
      </div>

      {/* Form Layout */}
      <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Title Field */}
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter article title"
            className="form-control mt-1"
          />
        </div>

        {/* Slug Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Slug
          </label>
          <div className="flex items-center mt-1">
            <input
              type="text"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              placeholder="Auto-generated slug"
              className="form-control mt-1"
            />
            <button
              type="button"
              onClick={handleSlugGeneration}
              className="ml-2 px-3 text-white py-2 bg-[#1a1e25] rounded-md"
            >
              Refresh
            </button>
          </div>
        </div>

        {/* Category Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="form-control mt-1"
          >
            <option value="">Select Category</option>
            <option value="Insights">Insights</option>
            <option value="Technology">Technology</option>
            <option value="Business">Business</option>
            <option value="Lifestyle">Lifestyle</option>
          </select>
        </div>

        {/* Image Upload */}
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">
            Upload Image
          </label>
          <input
            type="file"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>

        {/* Authors Selection */}
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">
            Authors
          </label>
          <select
            className="form-control mt-1"
            onChange={handleAuthorChange}
            defaultValue=""
          >
            <option value="" disabled>
              Select authors
            </option>
            {authorsList.map((author) => (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            ))}
          </select>

          {/* Selected Authors */}
          <div className="mt-2">
            {selectedAuthors.map((author) => (
              <div
                key={author.id}
                className="flex items-center justify-between p-2 bg-gray-100 rounded mb-2"
              >
                <span>{author.name}</span>
                <button
                  type="button"
                  className="text-red"
                  onClick={() => removeAuthor(author.id)}
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Content Field */}
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            Content
          </label>
          <ReactQuill
            value={content}
            onChange={setContent}
            className="form-control mt-1"
            theme="snow"
          />
        </div>

        {/* Publication Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Publication Date
          </label>
          <input
            type="date"
            value={publicationDate}
            onChange={(e) => setPublicationDate(e.target.value)}
            className="form-control mt-1"
          />
        </div>

        {/* External Link */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            External Link
          </label>
          <input
            type="url"
            value={externalLink}
            onChange={(e) => setExternalLink(e.target.value)}
            placeholder="Enter external link"
            className="form-control mt-1"
          />
        </div>

        {/* Excerpt Field */}
        <div className="col-span-1 mb-6">
          <label className="block text-sm font-medium text-gray-700">
            Excerpt
          </label>
          <textarea
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            placeholder="Enter a short description of the article"
            className="form-control mt-1"
          />
        </div>

        {/* Featured Toggle */}
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">
            Featured
          </label>
          <div className="mt-2 flex items-center mb-6">
            <input
              type="checkbox"
              checked={featured}
              onChange={() => setFeatured(!featured)}
              className="h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-gray-700">Mark as Featured</span>
          </div>
        </div>

        {/* Status Field */}
        <div className="col-span-1 mb-8">
          <label className="block text-sm font-medium text-gray-700">
            Status
          </label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="form-control mt-1"
          >
            <option value="Draft">Draft</option>
            <option value="Published">Published</option>
            <option value="Under Review">Under Review</option>
          </select>
        </div>
      </form>
    </Fragment>
  );
};

CreateArticle.layout = "Contentlayout";

export default CreateArticle;
