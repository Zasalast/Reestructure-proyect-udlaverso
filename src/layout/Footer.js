import React from "react";
import { Layout } from "antd";
const { Footer } = Layout;
const Footers = () => {
  return (
    <Footer style={{ textAlign: "center" }}>
      {" "}
      <div className="container">
        <div className="row">
          <div className="container-medium col l6 s12 ">
            <h5 className="white-text">Udla Verso</h5>
            <p className="container-medium grey-text text-lighten-4">
              En la búsqueda de sinergias para el desarrollo de las redes
              informáticas y los videojuegos desde la Universidad de la Amazonia
              - Florencia Caquetá Colombia
            </p>
          </div>
          <div className="container-small col l4 offset-l2 s12">
            <h5 className="white-text">Tambien puedes</h5>
            <ul>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  UDLA
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  UDLA VERSO
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  R3DES
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Contactanos
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          ©2022 Created by Desarrollo Colectivo <br />
          <a
            className="grey-text text-lighten-4 right"
            href="http://zasalastobon.com/"
          >
            Zanoni Alfredo Salas Tobon
          </a>
        </div>
      </div>
    </Footer>
  );
};
export default Footers;
