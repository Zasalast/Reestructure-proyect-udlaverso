import axios from "axios";
const baseUrl = "https://udlaverso.herokuapp.com/auth/login";
const baseUrlUser = "https://udlaverso.herokuapp.com/users";
export const LoginService = async (credentials) => {
  console.log(baseUrl, credentials);
  const { data } = await axios.post(baseUrl, credentials);
  return data;
};

export const CreateUserService = async (credentials) => {
  console.log(baseUrlUser, credentials);
  const { data } = await axios.post(baseUrlUser, credentials);
  return data;
};
/* export { login, CreateUserService }; */
