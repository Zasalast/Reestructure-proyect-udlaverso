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
import {
  CreateTypeDataService,
  setToken,
} from "../../../service/TypeDataService.js";

/* import { useAuth } from "./../../../components/Auth/Auth"; */

function CreateTypeData() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [user, setUser] = useState(null);
  const [typedata, setTypeData] = useState(null);
  const [access_token, setAccessToken] = useState(null);
  const config = {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  };

  let navigate = useNavigate();
  let location = useLocation();
  /*  let auth = useAuth(); */
  let from = location.state?.from?.pathname || "/";
  /*   function handleSubmit(event) {
    event.preventDefault();
    let formData = new FormData(event.currentTarget);
    let username = formData.get("username");
    auth.signin(username, () => {
      navigate(from, { replace: true });
    });
  } */
  const handleLogin = async (event) => {
    event.preventDefault();
    console.log(event.target.value, "hola");
    try {
      setUser(user);
      let { access_token } = user;
      const user = await CreateTypeDataService(
        {
          name,
          image,
        },
        access_token
      );
      console.log(user);
      /*   window.localStorage.setItem(
            'loggedNoteAppUser', JSON.stringify(user)
          ) */
      /*  noteService.setToken(user.token) */

      setAccessToken(access_token);

      setName("");
      setImage("");
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedNoteAppUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      setToken(user.token);
    }
  }, []);
  return (
    <div>
      Create tyda data{" "}
      <form onSubmit={handleLogin}>
        <h1 className="text-center text-uppercase text-success text-big aligner aligner--centerHoritzontal aligner--centerVertical">
          login
        </h1>
        <div className="input input-fullWidth">
          <input
            type="text"
            name="Name"
            value={name}
            placeholder="Name"
            onChange={({ target }) => setName(target.value)}
          />
        </div>
        <div className="input input-fullWidth">
          <input
            id="test10"
            type="text"
            name="Image"
            value={image}
            placeholder="Image"
            onChange={({ target }) => setImage(target.value)}
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

export { CreateTypeData };
