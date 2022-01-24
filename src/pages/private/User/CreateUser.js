import React, { useState } from "react";

import { useNavigate, useLocation } from "react-router-dom";

import { useAuth } from "./../../../components/Auth/Auth";
import { setToken, CreateUserService } from "../../../service/UserService";
function CreateUser() {
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
  let auth = useAuth();
  let from = location.state?.from?.pathname || "/";
  function handleSubmit(event) {
    event.preventDefault();
    let formData = new FormData(event.currentTarget);
    let username = formData.get("username");
    auth.signin(username, () => {
      navigate(from, { replace: true });
    });
  }
  const handleCreateUser = async (event) => {
    event.preventDefault();
    console.log(event.target.value, "hola");
    try {
      const user = await CreateUserService({
        email,
        password,
        role: "invitado",
      });
      console.log(user);
      /*   window.localStorage.setItem(
            'loggedNoteAppUser', JSON.stringify(user)
          ) */
      /*  noteService.setToken(user.token) */
      setUser(user);
      let { access_token } = user;

      setAccessToken(access_token);

      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedNoteAppUser");
    if (loggedUserJSON) {
      /* const user = JSON.parse(loggedUserJSON);
      setUser(user); */
      /*   noteService.setToken(user.token) */
    }
  }, []);
  return (
    <div>
      Create User{" "}
      <form onSubmit={handleCreateUser}>
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
    </div>
  );
}

export { CreateUser };