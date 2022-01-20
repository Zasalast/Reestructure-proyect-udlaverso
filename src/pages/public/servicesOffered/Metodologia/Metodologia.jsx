import "../../servicesOffered/ServicesOffered";
import { Card, Col, Row, Avatar, Divider } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import red_videojuegos from "./../../../assets/red-vertical-color.png";

import red_trabaje from "./../../../assets/trabaje.png";
import redesempresariales from "./../../../assets/trabaje.png";
const { Meta } = Card;
const Metodologia = () => {
  return (
    <Row>
      <Col span={12} offset={6}>
        <h1>Metodología propuesta</h1>
      </Col>{" "}
      <div className="site-card-wrapper">
        {" "}
        <Col span={24}>
          <Row gutter={16}>
            <Col span={8}>
              <ul>
                <h4>FASE I</h4>
                <li>Registro Cvlab.</li>
                <li>Presentación del Grupo de Investigación GITUA.</li>
                <li>Bases de Datos Especializadas.</li>
                <li>Mapas conceptuales.</li>
                <li>Estado del Arte.</li>
                <li>Formas de Investigar y producción de conocimientos.</li>
                <li>Participación en Proyectos de investigación.</li>
              </ul>
            </Col>
            <Col span={8}>
              {" "}
              <ul>
                <h4>FASE II</h4>

                <li>Actualización del Cvlab</li>
                <li>Socialización formato de presentación de proyectos UA.</li>
                <li>Instrumentos de Recolección de Datos.</li>
                <li>Redes de Investigación.</li>
                <li>Acompañamiento a proyectos de investigación.</li>
                <li>Proyectos de investigación.</li>
              </ul>
            </Col>
            <Col span={8}>
              {" "}
              <ul>
                <h4>FASE III</h4>
                <li>Elaboración de Artículos.</li>

                <li>Participación en convocatorias.</li>

                <li>Concursos y congresos.</li>

                <li>
                  Participación en Proyectos de Gestion de Redes de Datos.
                </li>

                <li>
                  Participación en Proyectos de desarrollo de Videojuegos.
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
      </div>
    </Row>
  );
};
export default Metodologia;
