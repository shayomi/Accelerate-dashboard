export interface Founder {
  name: string;
  role: string;
  linkedin: string;
  image: string;
}

export interface Startupdata {
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
}

// types.ts
export interface Industry {
  id: number | null;
  name: string;
  slug?: string;
  startupIds: number[];
}

export interface Advisor {
  name: string;
  focusAreas: string[];
  companyName: string;
  location: string;
  bio: string;
  linkedin: string;
  twitter: string;
  image: string;
}

// types.ts
export interface Meeting {
  id: string;
  date: string;
  time: string;
  participants: string;
  type: string;
  status: string;
  summary?: string;
  notes?: string;
}

export interface Cohort {
  id: string;
  name: string;
  shortName: string;
  startDate: string;
  endDate: string;
  description: string;
  startups: Startupdata[];
  schedule: string;
}

export interface Partner {
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
}

// types.ts
export interface Author {
  id: number;
  name: string;
}

export interface Article {
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
}

export interface Authors {
  id: number;
  firstName: string;
  lastName: string;
  profilePic: string;
  articles: { id: number; title: string }[]; // Array of article objects with IDs and titles
}

// types.ts

export interface Speaker {
  id: number;
  name: string;
  bio?: string;
  profilePic?: string;
}

export interface Event {
  id: number;
  name: string;
  slug: string;
  dateTime: string;
  location: string;
  eventType: string;
  description: string;
  bannerImage: string;
  maxAttendees: number;
  registrationDeadline: string;
  agenda: { time: string; activity: string }[];
  speakers: { name: string; email: string; company: string }[]; // Updated speaker details
  sponsors: string[];
  relatedCohort: string;
  registrationFields: string[];
  status: string;
  registeredPeople: {
    name: string;
    email: string;
    company: string;
    status: string;
  }[];
}
