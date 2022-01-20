import axios from "axios";
const baseUrl = "https://udlaverso.herokuapp.com/categories";
const CreateCategoryService = async (credentials) => {
  console.log(baseUrl, credentials);
  const { data } = await axios.post(baseUrl, credentials);
  return data;
};
export { CreateCategoryService };
