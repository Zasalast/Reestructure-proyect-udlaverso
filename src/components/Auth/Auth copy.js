import React, { useState } from "react";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import { LoginService } from "../../service/UserService.js";
import {
  Token,
  getToken,
  setToken,
  isTokenValid,
} from "./../../common/Storage/Token";
const FakeAuthProvider = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [access_token, setAccessToken] = useState(null);
  const signin = async (callback) => {
    FakeAuthProvider.isAuthenticated = true;
    /*  try {
      const user = await LoginService.login({
        email,
        password,
      });
      window.localStorage.setItem("loggedNoteAppUser", JSON.stringify(user));
      setToken(user);
    } catch (error) {
      console.log(error);
    } */
    setTimeout(callback, 100); // fake async
  };
  const signout = (callback) => {
    FakeAuthProvider.setIsAuthenticated(false);
    setTimeout(callback, 100);
  };
};
let AuthContext = React.createContext(null);
function AuthProvider({ children }) {
  let [user, setUser] = React.useState(null);
  let signin = (newUser, callback) => {
    return FakeAuthProvider.signin(() => {
      setUser(newUser);
      callback();
    });
  };
  let signout = (callback) => {
    return FakeAuthProvider.signout(() => {
      setUser(null);
      callback();
    });
  };
  let value = { user, signin, signout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
function useAuth() {
  return React.useContext(AuthContext);
}
function AuthStatus() {
  let auth = useAuth();
  let navigate = useNavigate();
  if (!auth.user) {
    return <> ''</>;
  }
  return (
    <>
      {auth.user}
      {""}
      <button
        onClick={() => {
          auth.signout(() => navigate("/home"));
        }}
      >
        Sign out
      </button>
    </>
  );
}
function RequireAuth({ children }) {
  let auth = useAuth();
  let location = useLocation();
  if (!auth.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}
export { RequireAuth, AuthStatus, useAuth, AuthProvider, FakeAuthProvider };
