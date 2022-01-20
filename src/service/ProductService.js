import axios from "axios";
const baseUrl = "https://udlaverso.herokuapp.com/products";
const CreateProductService = async (credentials) => {
  console.log(baseUrl, credentials);
  const { data } = await axios.post(baseUrl, credentials);
  return data;
};
export { CreateProductService };
