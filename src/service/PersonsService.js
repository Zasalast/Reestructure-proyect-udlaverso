import axios from "axios";

const url2 = "https://udlaverso.herokuapp.com";
const baseUrl = `${url2}/persons`;

let token = null;

export const setToken = (newToken) => {
  const config = {
    headers: {
      Authorization: `Bearer ${newToken}`,
    },
  };
  token = config;
};

export const getAll = () => {
  console.log(baseUrl, "2");
  const request = axios.get(baseUrl);
  console.log(request, "3");
  return request.then((response) => response.data);
};

export const createPersonService = (newObject) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };
  const request = axios.post(baseUrl, newObject, config);
  return request.then((response) => response.data);
};

export const updatePersonService = (id, newObject) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };
  const request = axios.put(`${baseUrl}/${id}`, newObject, config);
  return request.then((response) => response.data);
};
