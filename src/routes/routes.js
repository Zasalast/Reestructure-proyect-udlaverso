import * as React from "react";
import { useSelector } from "react-redux";
import moment from "moment";

import "../i18n/i18n";
/* import { AuthProvider, RequireAuth } from "./../components/Auth/Auth"; */
import { Link } from "react-router-dom";
import { RoutePrivate } from "./RoutePrivate";
import { RoutePublic } from "./RoutePublic";
function RoutesApp() {
  /*   const handleLogout = () => {
    noteService.setToken(null)
    window.localStorage.removeItem("loggedNoteAppUser");
  }; */
  const { authentication } = useSelector((state) => state.auth);
  React.useEffect(() => {
    moment.locale("es");
  }, []);

  return (
    <div>
      {console.log(authentication, "Routes rouete")}
      {authentication ? (
        <RoutePrivate />
      ) : (
        <div className="aligner aligner--centerHoritzontal aligner--centerVertical">
          <div
            className="
          row"
          >
            <div className="container">
              <h3 className="aligner aligner--centerHoritzontal aligner--centerVertical text-huge">
                Inicia sesión para más opciones
              </h3>
            </div>
            <div className="container aligner aligner--centerHoritzontal aligner--centerVertical">
              <Link
                to="/login"
                className="aligner aligner--centerHoritzontal aligner--centerVertical text-huge button button--big "
              >
                login
              </Link>
            </div>
          </div>
        </div>
      )}

      <RoutePublic />
    </div>
  );
}
export default RoutesApp;
