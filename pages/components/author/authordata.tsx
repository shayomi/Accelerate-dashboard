import { Authors } from "@/types";

export const authorsList: Authors[] = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    profilePic: "https://example.com/profiles/john-doe.jpg",
    articles: [
      { id: 1, title: "Understanding AI and Machine Learning" },
      { id: 2, title: "The Future of Renewable Energy" },
    ],
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    profilePic: "https://example.com/profiles/jane-smith.jpg",
    articles: [
      { id: 2, title: "The Future of Renewable Energy" },
      { id: 3, title: "Global Market Trends in 2024" },
    ],
  },
  {
    id: 3,
    firstName: "Alex",
    lastName: "Johnson",
    profilePic: "https://example.com/profiles/alex-johnson.jpg",
    articles: [
      { id: 1, title: "Understanding AI and Machine Learning" },
      { id: 3, title: "Global Market Trends in 2024" },
    ],
  },
  {
    id: 4,
    firstName: "Emily",
    lastName: "Brown",
    profilePic: "https://example.com/profiles/emily-brown.jpg",
    articles: [
      { id: 2, title: "The Future of Renewable Energy" },
      { id: 4, title: "How to Improve Work-Life Balance" },
    ],
  },
];
