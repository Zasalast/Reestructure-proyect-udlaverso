import React, { useEffect, useState } from "react";
import { CreateCategoryService } from "../../../service/CategoryService";

function CreateCategory() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState(null);
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
      const category = await CreateCategoryService.login({
        name,
      });
      console.log(category);
      /*   window.localStorage.setItem(
            'loggedNoteAppUser', JSON.stringify(user)
          ) */
      /*  noteService.setToken(user.token) */
      setCategory(category);

      setCategory("");
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
        <h1 className="text-center text-uppercase text-success text-big aligner aligner--centerHoritzontal aligner--centerVertical">
          login
        </h1>
        <div className="input input-fullWidth">
          <input
            type="text"
            name="Email"
            value={name}
            placeholder="Email"
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
