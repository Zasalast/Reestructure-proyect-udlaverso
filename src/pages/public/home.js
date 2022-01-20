import React, { useEffect, useState } from "react";
import LoginService from "../../service/LoginService";
import { saveState, loadState } from "../../utils/localStorage";

function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [access_token, setAccessToken] = useState(null);
  const config = {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  };
  const handleLogin = async (event) => {
    event.preventDefault();
    console.log(event.target.value, "hola");
    try {
      const user = await LoginService.login({
        email,
        password,
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

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedNoteAppUser");
    if (loggedUserJSON) {
      /* const user = JSON.parse(loggedUserJSON);
      setUser(user); */
      /*   noteService.setToken(user.token) */
    }
  }, []);

  return (
    <div>
      <p>{access_token + ""}</p>
      <form onSubmit={handleLogin}>
        <div class="input input-fullWidth">
          <input
            type="text"
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
        <button className="button button--small button--primary">login</button>
      </form>

      {console.log(access_token, "jj")}
    </div>
  );
}

export default Home;
