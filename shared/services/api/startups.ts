import qs from "qs";
import axiosInstance from "../axios";

export const fetchStartups = async ({ queryKey }: any) => {
  const [, filter] = queryKey;

  let url =
    "/startups?populate=founders.photo&populate=logo&populate=industries&populate=cohort&sort[0]=name:asc";

  if (filter !== "all") {
    const query = qs.stringify(
      {
        filters: {
          industries: {
            $in: [filter],
          },
        },
      },
      {
        encodeValuesOnly: true,
      }
    );

    url += `&${query}`;
  }

  const { data } = await axiosInstance.get(url);
  return data;
};

export const fetchStartupDetail = async ({ slug }: { slug: string }) => {
  const { data } = await axiosInstance.get(
    `/startups?filters[slug][$eq]=${slug}&populate=founders.photo&populate=logo&populate=industries&populate=cohort`
  );

  return data.data[0];
};

export const fetchIndustries = async () => {
  const { data } = await axiosInstance.get("/industries");

  return data;
};

export const recordCalendlyBooking = async (bookingData: any) => {
  const { data } = await axiosInstance.post(
    "/investor-startup-meeting-bookings",
    {
      data: bookingData,
    }
  );

  return data;
};

export const recordInvestorInterest = async (interestData: any) => {
  const { data } = await axiosInstance.post("/investor-startup-interests", {
    data: interestData,
  });

  return data;
};

export const checkIfInterested = async (interestData: any) => {
  const { startupId, investorId } = interestData.queryKey[1];
  const { data } = await axiosInstance.get(
    `/investor-startup-interests?filters[startup][$eq]=${startupId}&filters[user][$eq]=${investorId}`
  );

  return data;
};
