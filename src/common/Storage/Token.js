const jwtDecode = require("jwt-decode");

const Token = () => {
  const decode = (token) => jwtDecode(token || this.getToken());

  const isTokenValid = () => {
    try {
      return jwtDecode(this.getToken()) !== undefined;
    } catch (e) {
      return false;
    }
  };

  const getToken = () => {
    return localStorage.getItem("token") || sessionStorage.getItem("token");
  };

  const setToken = (type, token) => {
    if (type == "local") return localStorage.setItem("token", token);
    return sessionStorage.setItem("token", token);
  };
};
export { Token };
