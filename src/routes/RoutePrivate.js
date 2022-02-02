import React from "react";
import { Routes, Route } from "react-router-dom";
import Team from "../pages/private/team";

import { RequireAuth } from "../components/Auth/Auth";
import Layout from "../layout/Layout";
import { CreateCategory } from "../pages/private/Category/CreateCategory";
import { CreateTypeData } from "../pages/private/TypeData/CreateTypeData";
import { CreateProduct } from "../pages/private/Product/CreateProduct";
import { CreateUser } from "../pages/private/User/CreateUser";
import { CreateOrder } from "../pages/private/Order/CreateOrder";
import { Manager } from "../pages/private/User/Manager/Manager";
import { Teams } from "../pages/public/Teams";
function RoutePrivate() {
  const handleLogout = () => {
    /* noteService.setToken(null) */
    window.localStorage.removeItem("loggedNoteAppUser");
  };
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/*  <Route
          path="expenses"
          element={
            <RequireAuth>
              <Expenses />
            </RequireAuth>
          }
        /> */}
        <Route path="team" element={<Team />} />
        <Route path="manager" element={<Manager />} />
        <Route path="newcategory" element={<CreateCategory />} />
        <Route path="newtypedata" element={<CreateTypeData />} />
        <Route path="newproduct" element={<CreateProduct />} />
        <Route path="newuser" element={<CreateUser />} />
        <Route path="teams" element={<Teams />} />
        <Route path="neworder" element={<CreateOrder />} />
      </Route>
    </Routes>
  );
}

export { RoutePrivate };
