/* eslint-disable indent */
export interface AgendaItem {
  time: string;
  title: string;
}

export interface Event {
  id: number;
  name: string;
  slug: string;
  dateTime: string;
  location: string;
  eventType: string;
  status: "Upcoming" | "Ongoing" | "Past";
  maxAttendees: number;
  registrationDeadline: string;
  agenda: AgendaItem[]; // Updated to use AgendaItem[]
  speakers: number[]; // IDs of Speaker objects
  sponsors?: string[];
  relatedCohort?: string;
}

export const eventsData: Event[] = [
  {
    id: 1,
    name: "React Conference 2024",
    slug: "react-conference-2024",
    dateTime: "2024-09-30 09:00 AM",
    location: "Lagos",
    eventType: "Conference",
    status: "Upcoming",
    maxAttendees: 200,
    registrationDeadline: "2024-09-25",
    agenda: [
      { time: "09:00 AM", title: "Opening Session" },
      { time: "10:00 AM", title: "React Features" },
      { time: "11:30 AM", title: "Networking Break" },
    ],
    speakers: [1, 2],
    sponsors: ["Company A", "Company B"],
    relatedCohort: "Cohort 2024",
  },
  {
    id: 2,
    name: "Vue.js Summit",
    slug: "vuejs-summit-2024",
    dateTime: "2024-10-05 10:00 AM",
    location: "New York",
    eventType: "Summit",
    status: "Upcoming",
    maxAttendees: 150,
    registrationDeadline: "2024-09-30",
    agenda: [
      { time: "10:00 AM", title: "Introduction to Vue.js 3" },
      { time: "11:00 AM", title: "Advanced Vue Techniques" },
      { time: "12:30 PM", title: "Lunch Break" },
    ],
    speakers: [3],
    sponsors: ["Company C"],
    relatedCohort: "Cohort 2023",
  },
  // Add more events here
];
