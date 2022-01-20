import { Outlet } from "react-router-dom";

import Headers from "./Header";
import { AuthStatus } from "../components/Auth/Auth";
function Layout() {
  return (
    <div>
      ss
      <Outlet />
    </div>
  );
}
export default Layout;
