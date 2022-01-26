import React from "react";
import logo_red from "./../../assets/red-vertical-color.png";
import { Link } from "react-router-dom";
function Logo() {
  return (
    <picture>
      <Link to="/" title="Redes y Video Juegos">
        <img src={logo_red} height="5px" className="App-logo" alt="logo" />
      </Link>{" "}
    </picture>
  );
}

export { Logo };
