import { Article } from "@/types";

export const articlesData: Article[] = [
  {
    id: 1,
    title: "Understanding AI and Machine Learning",
    slug: "understanding-ai-and-machine-learning",
    category: "Technology",
    content:
      "<p>Artificial Intelligence (AI) and Machine Learning (ML) are...</p>", // Example HTML content
    publicationDate: "2024-08-15",
    externalLink: "https://example.com/ai-machine-learning",
    excerpt: "A comprehensive guide to AI and machine learning.",
    featured: true,
    status: "Published",
    authors: [{ id: 1, name: "John Doe" }],
  },
  {
    id: 2,
    title: "The Future of Renewable Energy",
    slug: "the-future-of-renewable-energy",
    category: "Science",
    content: "<p>Renewable energy sources are...</p>", // Example HTML content
    publicationDate: "2024-09-01",
    externalLink: "https://example.com/renewable-energy",
    excerpt: "Exploring the advancements in renewable energy.",
    featured: false,
    status: "Draft",
    authors: [{ id: 2, name: "Jane Smith" }],
  },
  {
    id: 3,
    title: "Global Market Trends in 2024",
    slug: "global-market-trends-in-2024",
    category: "Business",
    content: "<p>Global market trends are...</p>", // Example HTML content
    publicationDate: "2024-07-23",
    externalLink: "https://example.com/global-market-trends",
    excerpt: "Analyzing market trends for 2024.",
    featured: true,
    status: "Published",
    authors: [{ id: 3, name: "Alan Brown" }],
  },
  {
    id: 4,
    title: "How to Improve Work-Life Balance",
    slug: "how-to-improve-work-life-balance",
    category: "Lifestyle",
    content: "<p>Improving work-life balance involves...</p>", // Example HTML content
    publicationDate: "2024-06-12",
    externalLink: "https://example.com/work-life-balance",
    excerpt: "Strategies for enhancing work-life balance.",
    featured: false,
    status: "Under Review",
    authors: [{ id: 4, name: "Emily Davis" }],
  },
];
