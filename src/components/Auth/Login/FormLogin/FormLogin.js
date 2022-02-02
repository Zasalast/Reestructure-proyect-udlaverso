import React, { useState } from "react";
/* import { Form, Icon, Input, Button, Checkbox, Row, col } from "antd"; */
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../../../service/Auth/AuthActions";

const FormLogin = () => {
  const { authentication } = useSelector((state) => state.auth);
  console.log(authentication);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = auth;
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [state, setState] = useState({
    error: false,
    values: null,
  });

  const handleSubmit = (target) => {
    target.preventDefault();

    if (!state.error) {
      console.log(target.value, "hola");
      dispatch(login(email, password));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-center text-uppercase text-success text-big aligner aligner--centerHoritzontal aligner--centerVertical">
        login
      </h1>
      <h2>
        {authentication ? (
          <div>{authentication}true</div>
        ) : (
          <div>{authentication}false</div>
        )}
        authentication
      </h2>
      <div className="input input-fullWidth">
        <input
          type="email"
          name="Email"
          value={email}
          placeholder="Email"
          onChange={({ target }) => setEmail(target.value)}
        />
      </div>
      <div className="input input-fullWidth">
        <input
          id="test10"
          type="password"
          name="Password"
          value={password}
          placeholder="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <div className="aligner aligner--centerHoritzontal aligner--centerVertical">
        <button className="button  button--small button--primary ">
          login
        </button>
      </div>
    </form>
  );
};

export { FormLogin };
