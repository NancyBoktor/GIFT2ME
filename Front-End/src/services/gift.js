import axios from "axios";

export const createGift = async ({
  event_id,
  gift_name,
  price,
  notes,
  store_url,
  quantity,
  most_wanted,
}) => {
  console.log("+++++++++++", event_id);
  return axios({
    url: "http://localhost:3001/api/gifts",
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
    url: "http://localhost:3001/api/gifts",
    method: "get",
    data: {},
    withCredentials: true,
  });
};
