import axios from "axios";
const baseUrl = process.env.REACT_APP_API_URL + "/order";
let token = null;
export const setToken = (newToken) => {
  const config = {
    headers: {
      Authorization: `Bearer ${newToken}`,
    },
  };
  token = config;
};
export const CreateOrderService = async (credentials) => {
  console.log(baseUrl, credentials);
  const { data } = await axios.post(baseUrl, credentials, token);
  return data;
};
