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

import { useAuth } from "./../../../components/Auth/Auth";
import {
  CreateProductService,
  setToken,
} from "../../../service/ProductService";
function CreateProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [image, setImage] = useState("");

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
  const handleLogin = async (event) => {
    event.preventDefault();
    console.log(event.target.value, "hola");
    try {
      const user = await CreateProductService({
        name,
        description,
        url,
        image,
      });
      console.log(user);
      /*   window.localStorage.setItem(
            'loggedNoteAppUser', JSON.stringify(user)
          ) */
      /*  noteService.setToken(user.token) */
      setUser(user);
      let { access_token } = user;

      setAccessToken(access_token);

      setImage("");
      setDescription("");
      setName("");
      setUrl("");
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
      {" "}
      <form onSubmit={handleLogin}>
        <h1 className="text-center text-uppercase text-success text-big aligner aligner--centerHoritzontal aligner--centerVertical">
          login
        </h1>
        <div class="input input-fullWidth">
          <input
            type="text"
            name="Name"
            value={name}
            placeholder="Nombre Producto"
            onChange={({ target }) => setName(target.value)}
          />
        </div>
        <div class="input input-fullWidth">
          <input
            type="text"
            name="Description"
            value={description}
            placeholder="Description"
            onChange={({ target }) => setDescription(target.value)}
          />
        </div>
        <div class="input input-fullWidth">
          <input
            type="text"
            name="Name"
            value={url}
            placeholder="Url"
            onChange={({ target }) => setUrl(target.value)}
          />
        </div>
        <div class="input input-fullWidth">
          <input
            type="text"
            name="UrlImagen"
            value={image}
            placeholder="Url Imagen"
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

export { CreateProduct };
