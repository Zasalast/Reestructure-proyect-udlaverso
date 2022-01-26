import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL;
const baseUrlUser = process.env.REACT_APP_API_URL + "/users";
console.log(baseUrlUser, "env3");
let token = null;

const setToken = (newToken) => {
  const config = {
    headers: {
      Authorization: `Bearer ${newToken}`,
    },
  };
  token = config;
};

const LoginService = async (credentials) => {
  console.log(baseUrl, credentials);
  const { data } = await axios.post(baseUrl, credentials);
  return data;
};

const CreateUserService = async (credentials) => {
  console.log(baseUrlUser, credentials);
  const { data } = await axios.post(baseUrlUser, credentials);
  return data;
};
export { LoginService, CreateUserService };
