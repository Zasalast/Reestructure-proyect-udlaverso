import React from "react";
import MV from "./misionvision/MisionVision";
import Metodologia from "./servicesOffered/Metodologia/Metodologia";

const About = () => {
  return (
    <>
      {" "}
      <h2>¿Quiénes Somos?</h2>
      <p>
        En la búsqueda de sinergias para el desarrollo de las redes informáticas
        y los videojuegos desde la Universidad de la Amazonia - Florencia
        Caquetá Colombia.{" "}
      </p>
      <article>
        <h3>R3D -Redes y Videojuegos - Semillero de Investigación</h3>
        <p>
          R3D -Redes y Videojuegos - Semillero de Investigación Somos un equipo
          de profesionales que busca aportar al desarrollo económico y
          tecnológico de la región Amazonica, impulsados por el anhelo de
          producir conocimiento bajo las premisas de las redes informáticas los
          contenidos digitales y los videojuegos. Desde la perspectiva local,
          Rede3D busca estrategias y soluciones innovadoras a los problemas de
          la Amazonia Colombiana .
        </p>
      </article>
      <article>
        <MV />
      </article>
      <article>
        <Metodologia />
      </article>
    </>
  );
};
export default About;
