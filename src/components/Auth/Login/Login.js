import * as React from "react";
/* import { Row, col } from "antd"; */
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { CreateUser } from "../../../pages/private/User/CreateUser";
import { Signup } from "../Signup/Signup";
import { FormLogin } from "./FormLogin/FormLogin";

export const Login = () => {
  const { t } = useTranslation();
  const [login, setLogin] = React.useState(true);
  const { authentication } = useSelector((state) => state.auth);
  return (
    <div className="component-login">
      <div className="row">
        {login ? (
          <div className="container">
            <FormLogin />
          </div>
        ) : (
          <div className="container">
            {/*  <h1>{t("login")}</h1> */}
            <CreateUser />
          </div>
        )}
      </div>
      {login ? (
        <div className="aligner aligner--centerHoritzontal aligner--centerVertical">
          {!authentication && (
            <button
              className="button  button--small button--primary "
              onClick={() => setLogin(!login)}
            >
              Register
            </button>
          )}
        </div>
      ) : (
        <div className="aligner aligner--centerHoritzontal aligner--centerVertical">
          <button
            className="button  button--small button--primary "
            onClick={() => setLogin(!login)}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};
