import { Outlet } from "react-router-dom";

import Headers from "./Header";
import { AuthStatus } from "../components/Auth/Auth";
import red_trabaje2 from "./../assets/LargeLogo.png";
function Layout() {
  return (
    <div className="text-center m-medium">
      <img alt="example" src={red_trabaje2} height="300px" />
      <Outlet />
    </div>
  );
}
export default Layout;
