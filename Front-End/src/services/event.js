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

export const createItem = async ({
  event_id,
  gift_name,
  price,
  notes,
  store_url,
  quantity,
  most_wanted,
}) => {
  return axios({
    url: "http://localhost:3001/api/events/create-gifts",
    method: "post",
    data: {
      event_id,
      gift_name,
      price,
      notes,
      store_url,
      quantity,
      most_wanted,
    },
    withCredentials: true,
  });
};
export const getGifts = async () => {
  return axios({
    url: "http://localhost:3001/api/events/get-gifts",
    method: "get",
    data: {},
    withCredentials: true,
  });
};
