import * as React from "react";
/* import { Row, col } from "antd"; */
import { useTranslation } from "react-i18next";
import { FormLogin } from "./FormLogin/FormLogin";

export const Login = () => {
  const { t } = useTranslation();

  return (
    <div className="component-login">
      <div className="row">
        <div>
          <h1>{t("login")}</h1>
        </div>
      </div>
      <FormLogin />
    </div>
  );
};
