import axios from "axios";
import { getConfig } from "@testing-library/react";
const url = getConfig.baseUrl;
const url2 = "https://udlaverso.herokuapp.com";
const baseUrl = `${url2}/persons`;

let token = null;

const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

export const getAll = () => {
  console.log(baseUrl, "2");
  const request = axios.get(baseUrl);
  console.log(request, "3");
  return request.then((response) => response.data);
};

export const create = (newObject) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };

  const request = axios.post(baseUrl, newObject, config);
  return request.then((response) => response.data);
};

export const update = (id, newObject) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };

  const request = axios.put(`${baseUrl}/${id}`, newObject, config);
  return request.then((response) => response.data);
};

export default { getAll, create, update, setToken };
