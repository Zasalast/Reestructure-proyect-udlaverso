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
    <div className="container header aligner aligner--spaceBetween">
      {" "}
      {/* <div className="logo" /> */}
      <div className="aligner aligner--spaceBetween">
        {/*   <div className="header-app aligner aligner--contentStart">
          <Link to="/home" className="tabs-item ">
            <img className="logo-header" src={logo} width="80" />
          </Link>{" "}
        </div> */}
        <div></div>
        <div className="">
          {" "}
          <div className="tabs header-app ">
            <div className="header-item tabs-item aligner--contentStart ">
              <Link to="/home" className="header-item tabs-item ">
                <img className="logo-header" src={logo} width="80" />
              </Link>{" "}
            </div>
            <Link
              to="/about"
              className="header-item tabs-item button button--transparent header-logout"
            >
              ¿Quiénes Somos?
            </Link>{" "}
            <select
              onChange={(event) => handleChange(event.target.value)}
              className="header-item tabs-item  button button--transparent header-logout"
            >
              <option
                disabled
                className="tabs-item button button--transparent "
              >
                udlaVerso
              </option>
              <option
                value="/videowordbuilder"
                className="tabs-item header-item button button--transparent"
              >
                {" "}
                Video word builder
              </option>
              <option
                value="/accountudlaverso"
                className="header-item button button--transparent"
              >
                cuentas udla verso
              </option>
              <option
                value="/configvisor"
                className="header-item button button--transparent "
              >
                configuracion visor
              </option>
            </select>
            <Link
              to="/teams"
              className="header-item tabs-item button button--transparent header-logout"
            >
              teams
            </Link>
            {/*  <div className="tabs-item select formCollapsed-item  "> */}
            <select
              className="header-item tabs-item  button button--transparent header-logout"
              onChange={(event) => handleChange(event.target.value)}
              /* className="tabs-item header-app" */
            >
              <option disabled className="tabs-item button button--transparent">
                Services
              </option>

              <option
                value="/service"
                className="header-item tabs-item  button button--transparent "
              >
                Services
              </option>
              <option
                value="/login"
                className="header-item tabs-item button button--transparent  "
              >
                {" "}
                login
              </option>
              <option
                value="/expenses"
                className="header-item button button--transparent"
              >
                Expenses
              </option>
              <option
                value="/manager"
                className="header-item button button--transparent "
              >
                Manager
              </option>
            </select>
            {/*  </div> */}
            <Link
              to="/workwithus"
              className="header-item tabs-item button button--transparent header-logout"
            >
              Trabaja con nosotros
            </Link>
            <Link
              to="/whatdoWedo"
              className="header-item tabs-item button button--transparent header-logout"
            >
              ¿Que hacemos?
            </Link>
            <Link
              to="/help"
              className="header-item tabs-item button button--transparent header-logout"
            >
              Ayuda
            </Link>{" "}
            {/* <div className="header-item tabs-item  ">{children}</div> */}{" "}
            <div className="header-item tabs-item aligner--centerVertical  aligner--contentEnd logout-text text-white">
              <button
                onClick={() => handleLogout}
                className="text-white button button--transparent    header-logout"
              >
                logout
              </button>

              {/*    <AuthStatus /> */}
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

export default Headers;
