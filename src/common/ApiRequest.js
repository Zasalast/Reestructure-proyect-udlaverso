import { apiUrl } from "./Config/Enviriments";
import { Token } from "./Storage/Token";
import { store } from "../index";
import { auth } from "../service/Auth/AuthActions";
import axios from "axios";
const postApi = async (url, credentials) => {
  console.log(url, credentials, "LoginService");
  const data = await axios.post(`${apiUrl}${url}`, credentials);
  console.log(data, "postApi postApi");
  /*  if (data.status === 401) {
    store.dispatch(auth.logout());
    console.log(data, "postApi postApi 401");
    return data;
  } */
  return data;
};

const putApi = (url, data, header) => {
  let isFormData = data instanceof FormData;

  return fetch(`${apiUrl}${url}`, {
    method: "PUT",
    headers: header
      ? header
      : isFormData
      ? { Authorization: `Bearer ${Token.getToken()}` }
      : {
          Accept: isFormData ? "" : "application/json",
          "Content-type": isFormData ? "" : "application/json",
          Authorization: `Bearer ${Token.getToken()}`,
        },
    body: isFormData ? data : JSON.stringify(data),
  })
    .then(async (response) => {
      if (response.status === 401) {
        store.dispatch(auth.logout());
        return response;
      }
      response.payload = await response.json();
      return response;
    })
    .catch((err) => err);
};
const getApi = (url, params) => {
  url = new URL(`${apiUrl}${url}`);
  if (params)
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );
  return fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${Token.getToken()}`,
    },
  })
    .then(async (response) => {
      if (response.status === 401) {
        store.dispatch(auth.logout());
        return response;
      }
      response.payload = await response.json();
      return response;
    })
    .catch((err) => err);
};
export { getApi, postApi, putApi };
