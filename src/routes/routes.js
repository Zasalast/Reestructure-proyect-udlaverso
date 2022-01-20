import * as React from "react";
import { AuthProvider } from "./../components/Auth/Auth";

import { RoutePrivate } from "./RoutePrivate";
import { RoutePublic } from "./RoutePublic";
function RoutesApp() {
  /*   const handleLogout = () => {
    noteService.setToken(null)
    window.localStorage.removeItem("loggedNoteAppUser");
  }; */
  return (
    <AuthProvider>
      <RoutePrivate />
      <RoutePublic />
    </AuthProvider>
  );
}
export default RoutesApp;
