import axios from "axios";

export const createEvent = async ({
  event_name,
  date,
  address,
  description,
}) => {
  const res = axios({
    url: "http://localhost:3001/api/events",
    method: "post",
    data: { event_name, date, address, description },
    withCredentials: true,
  });
  console.log("res", res);
  return res;
};
