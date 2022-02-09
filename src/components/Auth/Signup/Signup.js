import React from "react";
import { FormRegister } from "../components/FormRegister/FormRegister";
import { Row, col } from "antd";
import { useTranslation } from "react-i18next";

export const Signup = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div>
        <div className="container">
          <h1 className="text-huge">{t("sing")}</h1>
        </div>
      </div>
      <div>
        {" "}
        <FormRegister />
        <div />
      </div>
    </div>
  );
};
