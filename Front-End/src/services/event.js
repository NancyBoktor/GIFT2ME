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

export const getEvents = async (user_id) => {
  return axios({
    url: `http://localhost:3001/api/events/${user_id}`,
    method: "get",
    data: user_id,
    withCredentials: true,
  });
};
