import axiosInstance from "../axios";

// Function to generate a random password
const generatePassword = (length: number) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }

  return password;
};

// Create a new user
export const createUser = async (registrationData: any) => {
  const generatedPassword = generatePassword(12);

  const userData = {
    username: registrationData.email,
    email: registrationData.email,
    password: generatedPassword,
    name: registrationData.name,
    country: registrationData.country,
    companyName: registrationData.companyName,
    profileType: registrationData.profileType,
    isPartOfAngelNetwork:
      registrationData.profileType === "Investor"
        ? registrationData.isPartOfAngelNetwork
        : undefined,
    intendedInvestmentAmount:
      registrationData.profileType === "Investor"
        ? registrationData.intendedInvestmentAmount
        : undefined,
    isAccreditedInvestor:
      registrationData.profileType === "Investor"
        ? registrationData.isAccreditedInvestor
        : undefined,
    hasInvestedInStartupBefore:
      registrationData.profileType === "Investor"
        ? registrationData.hasInvestedInStartupBefore
        : undefined,
    howRecentlyInvestedInStartup:
      registrationData.profileType === "Investor" &&
      registrationData.hasInvestedInStartupBefore === "Yes"
        ? registrationData.howRecentlyInvestedInStartup
        : undefined,
  };

  const { data } = await axiosInstance.post("/auth/local/register", userData, {
    params: { public: true },
  });

  const eventData = {
    attendanceType: registrationData.attendanceType,
    eventTypes:
      registrationData.profileType === "Investor"
        ? registrationData.eventTypes
        : undefined,
    user: data.user.id,
  };

  const response = await createDemoDayRegistration(eventData);
  return response;
};

// Create demo day registration
export const createDemoDayRegistration = async (registrationData: any) => {
  const { data } = await axiosInstance.post(
    "/aa-c1-demo-day-registrations",
    {
      data: registrationData,
    },
    { params: { public: true } }
  );

  return data;
};

// Get the list of articles
export const fetchArticles = async ({ queryKey }: any) => {
  const sortData = "desc";
  const filterData = queryKey[1];
  const page = 1;
  const pageSize = queryKey[2];

  let url = `/articles?sort[0]=publicationDate:${sortData}&populate=image&pagination[page]=${page}&pagination[pageSize]=${pageSize}`;

  if (filterData !== "all") {
    const filterQuery = `filters[articleType][$eq]=${filterData}`;
    url += `&${filterQuery}`;
  }

  const { data } = await axiosInstance.get(url, { params: { public: true } });

  return data;
};

// Fetch a single article based on slug
export const fetchArticle = async (slug: string) => {
  const { data } = await axiosInstance.get(
    `/articles?filters[slug][$eq]=${slug}&populate=image&populate=author`,
    { params: { public: true } }
  );
  return data;
};

// Create newsletter contact
export const createNewsletterContact = async (contactData: any) => {
  const { data } = await axiosInstance.post(
    "/contacts",
    {
      data: contactData,
    },
    { params: { public: true } }
  );
  return data;
};

// Fetch the list of Program Team Members
export const fetchProgramTeamMembers = async () => {
  const { data } = await axiosInstance.get(
    "/program-team-members?sort[0]=order:asc&populate=image",
    { params: { public: true } }
  );
  return data;
};

// Fetch the list of Advisors
export const fetchAdvisors = async () => {
  const { data } = await axiosInstance.get(
    "/advisors?sort[0]=name:asc&populate=image",
    { params: { public: true } }
  );
  return data;
};

// Fetch the list of Demo Day Speakers
export const fetchSpeakers = async () => {
  const { data } = await axiosInstance.get(
    "/speakers?sort[0]=name:asc&populate=image",
    { params: { public: true } }
  );
  return data;
};

// Fetch the list of Demo Day Angel Network Partners
export const fetchAngelNetworkPartners = async () => {
  const { data } = await axiosInstance.get(
    "/angel-network-partners?sort[0]=name:asc&populate=logo",
    { params: { public: true } }
  );
  return data;
};

// Fetch the list of C1 event types
export const fetchEventTypes = async () => {
  const { data } = await axiosInstance.get("/c1-event-types", {
    params: { public: true },
  });

  return data;
};

// Fetch the list of Testimonials
export const fetchTestimonials = async () => {
  const { data } = await axiosInstance.get("/testimonials?populate=embedLink", {
    params: { public: true },
  });
  return data;
};
