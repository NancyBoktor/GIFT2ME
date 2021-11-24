import axios from "axios";

export const createEvent = async ({
  event_name,
  date,
  address,
  description,
}) => {
  return axios({
    url: "http://localhost:3001/api/events",
    method: "post",
    data: { event_name, date, address, description },
    withCredentials: true,
  });
};

