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

export const getGifts = async (event_id) => {
  return axios({
    url: "http://localhost:3001/api/gifts",
    method: "get",
    params: { event_id },
    withCredentials: true,
  });
};

// export const updateGift = async (event_id) => {
//   return axios({
//     url: `http://localhost:3001/api/gift/${gift_id}`,
//     method: "put",
//     data: { event_id },
//     withCredentials: true,
//   });
// };
