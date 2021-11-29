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
    url: `http://localhost:3001/api/events`,
    method: "get",
    data: user_id,
    withCredentials: true,
  });
};

export const getEvent = async (event_id) => {
  return axios({
    url: `http://localhost:3001/api/events/${event_id}`,
    method: "get",
    data: event_id,
    withCredentials: true,
  });
};

export const editEvent = async ({
  event_id,
  event_name,
  date,
  address,
  description,
}) => {
  return axios({
    url: `http://localhost:3001/api/events/${event_id}`,
    method: "put",
    data: { event_name, date, address, description },
    withCredentials: true,
  });
};
