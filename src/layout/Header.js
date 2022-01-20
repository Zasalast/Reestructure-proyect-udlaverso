import React from "react";
import "./Header.scss";
import { Link, useNavigate, useParams } from "react-router-dom";

import { AuthStatus } from "../components/Auth/Auth";

function Headers({ children }) {
  let navigate = useNavigate();
  let params = useParams();
  function handleChange(value) {
    navigate(`${value}`, { replace: true });
    value = "";
  }
  const handleLogout = () => {
    /* setUser(null); */
    /* noteService.setToken(null) */
    window.localStorage.removeItem("loggedNoteAppUser");
  };
  return (
    <div className="header-app">
      {" "}
      <div className="logo" />
      <div className="aligner aligner--spaceBetween">
        <div className="aligner aligner--contentStart">
          <div>
            <img src="./../assets/LargeLogo.png" width="50" />
          </div>
          <Link to="/home" className="tabs-item">
            <h1>Desarrollo Colectivo</h1>
          </Link>{" "}
        </div>
        <div></div>
        <div>
          {" "}
          <div className="tabs header-app">
            <Link to="/about" className="tabs-item">
              about
            </Link>{" "}
            <Link to="/invoices" className="tabs-item">
              UdlaVerso
            </Link>{" "}
            <Link to="/teams" className="tabs-item">
              teams
            </Link>
            {/*  <div className="tabs-item select formCollapsed-item  "> */}
            <select
              onChange={(event) => handleChange(event.target.value)}
              className="tabs-item header-app"
            >
              <option value="/service" className="tabs-item">
                Services
              </option>
              <option value="/login" className="tabs-item">
                {" "}
                login
              </option>
              <option value="/expenses">Expenses</option>
              <option value="/manager">Manager</option>
            </select>
            {/*  </div> */}
            <Link to="/help" className="tabs-item">
              Ayuda
            </Link>{" "}
            <div className="tabs-item">{children}</div>
          </div>
        </div>{" "}
        <div className="aligner aligner--contentEnd">
          <div>
            <button
              onClick={() => handleLogout}
              className="button  button--transparent"
            >
              logout
            </button>
            {/*  <button onClick={() => handleLogout}>logout</button> */}
          </div>
          {/*    <AuthStatus /> */}
        </div>
      </div>
    </div>
  );
}

export default Headers;
