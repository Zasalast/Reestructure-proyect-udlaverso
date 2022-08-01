import React, { useState, useEffect } from "react";

import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";

import {
  CreateOrderService,
  setToken,
} from "../../../service/Order/OrderServices";
function CreateOrder() {
  const [order, setOrder] = useState(null);
  const [access_token, setAccessToken] = useState(null);
  const config = {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log(event.target.value, "hola");
    try {
      setToken(access_token);
      const order = await CreateOrderService({ ...order });
      console.log(order);

      setOrder(order);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedNoteAppUser");
    if (loggedUserJSON) {
      /* const user = JSON.parse(loggedUserJSON);
      setUser(user); */
      /*   noteService.setToken(user.token) */
    }
  }, []);
  return <div>Create Order</div>;
}

export { CreateOrder };
