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

export const getGifts = async (event_id) => {
  return axios({
    url: "http://localhost:3001/api/gifts",
    method: "get",
    params: { event_id },
    withCredentials: true,
  });
};

export const updateGift = async (event_id, gift_id) => {
  return axios({
    url: `http://localhost:3001/api/gift/${gift_id}`,
    method: "put",
    data: { event_id },
    withCredentials: true,
  });
};
export const getGiftInfo = async (event_id, gift_id) => {
  return axios({
    url: `http://localhost:3001/api/gift/${gift_id}/edit`,
    method: "get",
    params: { event_id },
    withCredentials: true,
  });
};

export const EditGiftInfo = async (
  name,
  quantity,
  store_url,
  most_wanted,
  price,
  notes,
  event_id,
  gift_id
) => {
  return axios({
    url: `http://localhost:3001/api/gift/${gift_id}/edit`,
    method: "put",
    data: { name, quantity, store_url, most_wanted, price, notes, event_id },
    withCredentials: true,
  });
};
