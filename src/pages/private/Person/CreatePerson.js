import React from "react";

function CreatePerson() {
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
