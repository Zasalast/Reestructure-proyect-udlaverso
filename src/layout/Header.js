import React from "react";
import "./Header.scss";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";
import { AuthStatus } from "../components/Auth/Auth";
import {} from "./../pages/public/home";
function Headers({ children }) {
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
            <img
              src="https://sierra-library.github.io/img/sierra.svg"
              width="50"
            />
          </div>
          <h1>Desarrollo Colectivo</h1>
        </div>
        <div></div>
        <div>
          {" "}
          <div className="tabs header-app">
            <Link to="/invoices" className="tabs-item is-selected">
              Invoices
            </Link>{" "}
            |{" "}
            <Link to="/expenses" className="tabs-item">
              Expenses
            </Link>
            |{" "}
            <Link to="/about" className="tabs-item">
              about
            </Link>
            |{" "}
            <Link to="/team" className="tabs-item">
              team
            </Link>
            {/*  <div className="tabs-item select formCollapsed-item  "> */}
            <select
              className="tabs-item header-app"
              name="service"
              id="service"
              placeholder="hola"
              title="Service"
            >
              <option>Services </option>
              <option>Kelly</option>
              <option>Doyle </option>
              <option>Lt. William</option>
            </select>
            {/*  </div> */}|{" "}
            <Link to="/home" className="tabs-item">
              home
            </Link>{" "}
            |
            <Link to="/login" className="tabs-item">
              login{" "}
            </Link>
            |<div className="tabs-item">{children}</div>
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
