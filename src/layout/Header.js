import React from "react";
import "./Header.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import logo from "./../assets/Aventuras en equipo .png";
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
    <div className="container header">
      {" "}
      {/* <div className="logo" /> */}
      <div className="aligner aligner--spaceBetween">
        {/*   <div className="header-app aligner aligner--contentStart">
          <Link to="/home" className="tabs-item ">
            <img className="logo-header" src={logo} width="80" />
          </Link>{" "}
        </div> */}
        <div></div>
        <div className="header-item">
          {" "}
          <div className="tabs header-app">
            <div className="header-app aligner aligner--contentStart">
              <Link to="/home" className="tabs-item ">
                <img className="logo-header" src={logo} width="80" />
              </Link>{" "}
            </div>
            <Link to="/about" className="tabs-item">
              ¿Quiénes Somos?
            </Link>{" "}
            <select
              onChange={(event) => handleChange(event.target.value)}
              className="header-item tabs-item"
            >
              <option disabled className="tabs-item header-item">
                udlaVerso
              </option>
              <option
                value="/videowordbuilder"
                className="tabs-item header-item"
              >
                {" "}
                Video word builder
              </option>
              <option value="/accountudlaverso" className="header-item">
                cuentas udla verso
              </option>
              <option value="/configvisor" className="header-item">
                configuracion visor
              </option>
            </select>
            <Link to="/teams" className="tabs-item header-item">
              teams
            </Link>
            {/*  <div className="tabs-item select formCollapsed-item  "> */}
            <select
              className="header-item tabs-item"
              onChange={(event) => handleChange(event.target.value)}
              /* className="tabs-item header-app" */
            >
              <option disabled className="header-item tabs-item ">
                Services
              </option>

              <option value="/service" className="tabs-item header-item">
                Services
              </option>
              <option value="/login" className="tabs-item header-item">
                {" "}
                login
              </option>
              <option value="/expenses" className="header-item">
                Expenses
              </option>
              <option value="/manager" className="header-item">
                Manager
              </option>
            </select>
            {/*  </div> */}
            <Link to="/workwithus" className="tabs-item header-item">
              Trabaja con nosotros
            </Link>
            <Link to="/help" className="tabs-item header-item">
              Ayuda
            </Link>{" "}
            <div className="tabs-item header-item">{children}</div>{" "}
            <div className="aligner aligner--contentEnd">
              <div>
                <button onClick={() => handleLogout}>logout</button>
              </div>
              {/*    <AuthStatus /> */}
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

export default Headers;
