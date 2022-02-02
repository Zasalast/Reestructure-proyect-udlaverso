import React from "react";
import { Login } from "./Login/Login";
import { Signup } from "./Signup/Signup";
/* import { Row, Col, Button } from "antd"; */
/* import { Layout } from "antd"; */
import { useTranslation } from "react-i18next";

export const Auth = () => {
  /*  const { Header, Content } = Layout; */

  const { i18n } = useTranslation();

  const Selectlanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div style={{ padding: "24px" }}>
      <div>
        <header style={{ background: "#fff" }}>
          <div>
            <col className="col-sm-9" style={{ textAlign: "center" }}>
              Celagem
            </col>
            <col className="col-sm-4">
              <button
                onClick={() => Selectlanguage("es")}
                type="link"
                icon="flag"
              >
                ESP
              </button>
            </col>
            <col className="col-sm-4">
              <button
                onClick={() => Selectlanguage("en")}
                type="link"
                icon="flag"
              >
                ENG
              </button>
            </col>
          </div>
        </header>
      </div>

      <div style={{ paddingTop: "24px" }}>
        <content>
          Row
          <row className="row">
            <col className="col-sm-6">
              <Signup />
            </col>
            <col className="col-sm-6">
              <Login />
            </col>
          </row>
        </content>
      </div>
    </div>
  );
};
