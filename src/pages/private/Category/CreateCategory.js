import React, { useEffect, useState } from "react";

import {
  CreateCategoryService,
  setToken,
} from "../../../service/Category/CategoryService";

function CreateCategory() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState(null);

  const [user, setUser] = useState(null);

  const handleCategory = async (event) => {
    event.preventDefault();
    console.log(event.target.value, "hola");
    setToken(user.token);
    try {
      const category = await CreateCategoryService(
        {
          name,
        },
        user.token
      );
      console.log(category);

      setCategory(category);

      setCategory("");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedNoteAppUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      setToken(user.token);
    }
  }, []);

  return (
    <div>
      <h2>Crear Categoria</h2>
      <form onSubmit={handleCategory}>
        <h1 className="text-center text-uppercase text-success text-big aligner aligner--centerHoritzontal aligner--centerVertical">
          login
        </h1>
        <div className="input input-fullWidth">
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Nombre Categoria"
            onChange={({ target }) => setCategory(target.value)}
          />
        </div>

        <div className="aligner aligner--centerHoritzontal aligner--centerVertical">
          <button className="button  button--small button--primary ">
            Crear Categoria
          </button>
        </div>
      </form>
    </div>
  );
}

export { CreateCategory };
