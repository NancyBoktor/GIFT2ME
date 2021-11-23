import axios from "axios";

export const confirm = async ({ event_name, date, address, description }) => {
  return axios({
    url: "http://localhost:3001/api/create-event",
    method: "post",
    data: { event_name, date, address, description },
    withCredentials: true,
  });
};
