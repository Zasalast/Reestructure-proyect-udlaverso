import axios from "axios";
import { getConfig } from "@testing-library/react";
const url = getConfig.baseUrl;
const baseUrl = `${url}+task`;

let token = null;

export const setToken = (newToken) => {
  const config = {
    headers: {
      Authorization: `Bearer ${newToken}`,
    },
  };
  token = config;
};

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (newObject) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };

  const request = axios.post(baseUrl, newObject, config);
  return request.then((response) => response.data);
};

const update = (id, newObject) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };

  const request = axios.put(`${baseUrl}/${id}`, newObject, config);
  return request.then((response) => response.data);
};

export default { getAll, create, update, setToken };
