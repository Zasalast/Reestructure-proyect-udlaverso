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
import { createPersonService } from "../../../service/PersonsService.js";

import { useAuth } from "./../../../components/Auth/Auth";

function CreatePerson() {
  /* const { name, lastName, phone, setPerson } = useState({}); */
  const [person, setPerson] = useState({ name: "", lastName: "", phone: "" });
  const [user, setUser] = useState(null);
  const [access_token, setAccessToken] = useState(null);
  const config = {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  };

  /*   let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();
  let from = location.state?.from?.pathname || "/"; */
  function handleSubmit(event) {
    event.preventDefault();
    setPerson({
      ...person,
      [event.target.name]: event.target.value,
    });
    /* let formData = new FormData(event.currentTarget);
    let username = formData.get("username");
    auth.signin(username, () => {
      navigate(from, { replace: true });
    }); */
  }
  const handleLogin = async (event) => {
    event.preventDefault();
    console.log(event.target.value, "hola");
    try {
      const user = await createPersonService({
        ...person,
        name,
        lastName,
        phone,
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
      Create Person{" "}
      <form action="">
        <label for="nombre">
          <span>Nombres</span>
          <input
            type="text"
            id="nombre"
            placeholder="tu nombre"
            autocomplete="name"
            required
          />
        </label>
        <label for="Apellido">
          <span>Apellidos</span>
          <input
            type="text"
            id="nombre"
            placeholder="tu nombre"
            autocomplete="name"
            required
          />
        </label>
        <label for="nombre">
          <span>Correo Electrónico</span>
          <input
            type="text"
            id="nombre"
            placeholder="tu nombre"
            autocomplete="name"
            required
          />
        </label>
        <label for="nombre">
          <span>Contraseña</span>
          <input
            type="text"
            id="nombre"
            placeholder="tu nombre"
            autocomplete="name"
            required
          />
        </label>
        <label for="nombre">
          <span>Repita Contraseña</span>
          <input
            type="text"
            id="nombre"
            placeholder="tu nombre"
            autocomplete="name"
            required
          />
        </label>
        <datalist id="cursos">
          <option value="Female">Female</option>
          <option value="Male">Male</option>
          <option value="Neutral">Neutral</option>
        </datalist>
      </form>
      hola
    </div>
  );
}

export { CreatePerson };
