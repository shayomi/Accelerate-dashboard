import React from "react";

export type Founder = {
  name: string;
  role: string;
  linkedin: string;
  image: string;
};

export type Startup = {
  id: string;
  companyName: string;
  industry: string;
  cohort: string;
  founders: Founder[];
  description: string;
  pitchVideoLink: string;
  companyLogo: string;
  companyEmail: string;
  website: string;
  location: {
    city: string;
    country: string;
  };
  companySize: number;
  fundraisingAmount: number;
  valuation: number;
  industries: string[];
  founded: number;
  pitchDeckLink: string;
  calendlyLink: string;
  status: string;
};

// types.ts
export type Industry = {
  id: number;
  name: string;
  slug?: string;
  startupIds: number[];
};

export type Advisor = {
  name: string;
  focusAreas: string[]; // Updated to store multiple focus areas
  companyName: string;
  location: string;
  bio?: string;
  linkedin?: string;
  twitter?: string;
  image?: string; // Optional image URL or File path
};

// types.ts
export type Meeting = {
  id: string;
  date: string;
  time: string;
  participants: string;
  type: string;
  status: string;
  summary?: string;
  notes?: string;
};

export type Cohort = {
  id: string;
  name: string;
  shortName: string;
  startDate: string;
  endDate: string;
  description: string;
  startups: Startup[];
  schedule: string;
};

export type Partner = {
  id: string;
  name: string;
  type: string;
  status: string;
  contributionDetails: string;
  associatedEntities: string[];
  contactInfo: {
    email: string;
    phone: string;
    address: string;
  };
};

// types.ts
export type Author = {
  id: number;
  name: string;
};

export type Article = {
  id: number;
  title: string;
  slug: string;
  category: string;
  content: string; // HTML content
  publicationDate: string;
  externalLink: string;
  excerpt: string;
  featured: boolean;
  authors: Author[];
  status: string;
};

export type Authors = {
  id: number;
  firstName: string;
  lastName: string;
  profilePic: string;
  articles: { id: number; title: string }[]; // Array of article objects with IDs and titles
};

// types.ts

export type Speaker = {
  id: number;
  name: string;
  bio?: string;
  profilePic?: string;
};

export type Event = {
  id: number;
  name?: string;
  slug?: string;
  dateTime?: string;
  location?: string;
  eventType?: string;
  description?: string;
  bannerImage: string;
  maxAttendees?: string;
  registrationDeadline?: string;
  agenda?: Array<{ time: string; activity: string }>;
  speakers: Speaker[];
  sponsors?: string[];
  relatedCohort?: string;
  registrationFields?: string[];
  status: "draft" | "published";
};
