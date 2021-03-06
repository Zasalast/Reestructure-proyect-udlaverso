import React, { useState } from "react";

import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";

/* import { useAuth } from "../../components/Auth/Auth.js"; */
import { LoginService } from "../../service/UserService.js";
import { Token } from "./../../common/Storage/Token";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [access_token, setAccessToken] = useState(null);
  const config = {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  };

  let navigate = useNavigate();
  let location = useLocation();
  /* let auth = useAuth(); */
  let from = location.state?.from?.pathname || "/";
  /*  function handleSubmit(event) {
    event.preventDefault();
    let formData = new FormData(event.currentTarget);
    let username = formData.get("username");
    auth.signin(username, () => {
      navigate(from, { replace: true });
    });
  } */
  function handleLogout(event) {
    setAccessToken(null);
  }
  const handleLogin = async (target) => {
    target.preventDefault();
    console.log(target.value, "hola");
    try {
      const user = await LoginService({
        email,
        password,
      });
      console.log(user);
      window.localStorage.setItem("loggedNoteAppUser", JSON.stringify(user));
      /*  noteService.setToken(user.token) */
      setUser(user);
      let { access_token } = user;
      window.localStorage.setItem("loggedNoteAppUser", JSON.stringify(user));
      console.log(access_token, "access_token");
      setAccessToken(access_token);
      Token.setToken(access_token);
      console.log("   getToken()   ", Token.getToken(), "   getToken()   ");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    /* const loggedUserJSON = window.localStorage.getItem("loggedNoteAppUser"); */
    /* if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      console.log(user.token, "user.token"); */
    /*  setUser(user);  */
    /*   noteService.setToken(user.token) */
    /*  } */
  }, []);

  return (
    <div className="container m-medium border  ">
      <div className="row p-huge">
        <p>{access_token + ""}</p>
        {!access_token ? (
          <form onSubmit={handleLogin}>
            <h1 className="text-center text-uppercase text-success text-big aligner aligner--centerHoritzontal aligner--centerVertical">
              login
            </h1>
            <div class="input input-fullWidth">
              <input
                type="email"
                name="Email"
                value={email}
                placeholder="Email"
                onChange={({ target }) => setEmail(target.value)}
              />
            </div>
            <div class="input input-fullWidth">
              <input
                id="test10"
                type="password"
                name="Password"
                value={password}
                placeholder="Password"
                onChange={({ target }) => setPassword(target.value)}
              />
            </div>
            <div className="aligner aligner--centerHoritzontal aligner--centerVertical">
              <button className="button  button--small button--primary ">
                login
              </button>
            </div>
          </form>
        ) : (
          <button onClick={handleLogout}>cerrar session</button>
        )}

        {console.log(access_token, "jj")}
      </div>
    </div>
  );
}
export { LoginPage };
