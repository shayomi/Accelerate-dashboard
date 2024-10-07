import React from "react";

const DashboardIcon = <i className="bx bx-home side-menu__icon"></i>;
const UserIcon = <i className="bx bx-user side-menu__icon"></i>;
const ApplicationIcon = <i className="bx bx-file side-menu__icon"></i>;
const StartupIcon = <i className="bx bx-rocket side-menu__icon"></i>;
const AdvisorIcon = <i className="bx bx-user-voice side-menu__icon"></i>;
const MeetingsIcon = <i className="bx bx-calendar side-menu__icon"></i>;
const CohortIcon = <i className="bx bx-group side-menu__icon"></i>;
const ArticlesIcon = <i className="bx bx-news side-menu__icon"></i>;
const AuthorsIcon = <i className="bx bx-pencil side-menu__icon"></i>;
const TestimonialsIcon = (
  <i className="bx bx-message-square-dots side-menu__icon"></i>
);
const EventsIcon = <i className="bx bx-calendar-event side-menu__icon"></i>;

const PagesIcon = <i className="bx bx-file-blank side-menu__icon"></i>;

const TaskIcon = <i className="bx bx-task side-menu__icon"></i>;

const AuthenticationIcon = (
  <i className="bx bx-fingerprint side-menu__icon"></i>
);

const ErrorIcon = <i className="bx bx-error side-menu__icon"></i>;

const UiElementsIcon = <i className="bx bx-box side-menu__icon"></i>;

const Utilities = <i className="bx bx-medal side-menu__icon"></i>;

const FormsIcon = <i className="bx bx-file  side-menu__icon"></i>;

const AdvancedUiIcon = <i className="bx bx-party side-menu__icon"></i>;

const WidgetsIcon = <i className="bx bx-gift side-menu__icon"></i>;

const AppsIcon = <i className="bx bx-grid-alt side-menu__icon"></i>;

const NestedmenuIcon = <i className="bx bx-layer side-menu__icon"></i>;

const TablesIcon = <i className="bx bx-table side-menu__icon"></i>;

const ChartsIcon = <i className="bx bx-bar-chart-square side-menu__icon"></i>;

const MapsIcon = <i className="bx bx-map side-menu__icon"></i>;

const Icons = <i className="bx bx-store-alt side-menu__icon"></i>;

const badge = (
  <span className="badge !bg-warning/10 !text-warning !py-[0.25rem] !px-[0.45rem] !text-[0.75em] ms-2">
    4
  </span>
);
const badge1 = (
  <span className="text-secondary text-[0.75em] rounded-sm !py-[0.25rem] !px-[0.45rem] badge !bg-secondary/10 ms-2">
    New
  </span>
);
const badge2 = (
  <span className="text-danger text-[0.75em] rounded-sm badge !py-[0.25rem] !px-[0.45rem] !bg-danger/10 ms-2">
    Hot
  </span>
);
const badge4 = (
  <span className="text-success text-[0.75em] badge !py-[0.25rem] !px-[0.45rem] rounded-sm bg-success/10 ms-2">
    3
  </span>
);

export const MenuItems: any = [
  {
    menutitle: "MAIN",
  },

  {
    icon: DashboardIcon,
    title: "Dashboard", // Update title to match the desired link text
    path: "/dashboard", // Direct path to /dashboard
    type: "link", // Indicates it's a direct link
    active: false,
    selected: false,
  },

  {
    icon: UserIcon,
    title: "Users", // Updated title to match the desired link text
    path: "/users", // Direct path to /users
    type: "link",
    active: false,
    selected: false,
  },

  {
    icon: ApplicationIcon,
    title: "Application",
    path: "/application",
    type: "link",
    active: false,
    selected: false,
  },

  {
    icon: StartupIcon,
    title: "Startups",
    path: "/startup",
    type: "link",
    active: false,
    selected: false,
  },

  {
    icon: AdvisorIcon,
    title: "Advisor",
    path: "/advisor",
    type: "link",
    active: false,
    selected: false,
  },

  {
    icon: MeetingsIcon,
    title: "Meetings",
    path: "/meeting",
    type: "link",
    active: false,
    selected: false,
  },

  {
    icon: CohortIcon,
    title: "Cohort",
    path: "/cohort",
    type: "link",
    active: false,
    selected: false,
  },

  {
    icon: ArticlesIcon,
    title: "Articles",
    path: "/articles",
    type: "link",
    active: false,
    selected: false,
  },

  {
    icon: AuthorsIcon,
    title: "Authors",
    path: "/authors",
    type: "link",
    active: false,
    selected: false,
  },

  {
    icon: TestimonialsIcon,
    title: "Testimonials",
    path: "/testimonials",
    type: "link",
    active: false,
    selected: false,
  },

  {
    icon: EventsIcon,
    title: "Events",
    path: "/events",
    type: "link",
    active: false,
    selected: false,
  },
];
export default MenuItems;
