import * as React from "react";
import { useSelector } from "react-redux";
/* import { AuthProvider, RequireAuth } from "./../components/Auth/Auth"; */

import { RoutePrivate } from "./RoutePrivate";
import { RoutePublic } from "./RoutePublic";
function RoutesApp() {
  /*   const handleLogout = () => {
    noteService.setToken(null)
    window.localStorage.removeItem("loggedNoteAppUser");
  }; */
  const { authentication } = useSelector((state) => state.auth);
  return (
    <div>
      {authentication && <RoutePrivate />}

      {!authentication && <RoutePublic />}
    </div>
  );
}
export default RoutesApp;
