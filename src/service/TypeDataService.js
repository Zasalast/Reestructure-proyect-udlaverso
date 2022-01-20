import axios from "axios";
const baseUrl = "https://udlaverso.herokuapp.com/typedata";
const CreateTypeDataService = async (credentials) => {
  console.log(baseUrl, credentials);
  const { data } = await axios.post(baseUrl, credentials);
  return data;
};
export { CreateTypeDataService };
