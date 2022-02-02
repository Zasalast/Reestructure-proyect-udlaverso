import React from "react";
import { Objetivos } from "../Objetivos/Objetivos";
import { MisionVision } from "./../misionvision/MisionVision";
import { Metodologia } from "./../servicesOffered/Metodologia/Metodologia";
import InvestigationGroups from "./InvestigationGroups/InvestigationGroups";
import { LinesInvestigation } from "./LinesInvestigation/LinesInvestigation";
import ParticipatingEntities from "./ParticipatingEntities/ParticipatingEntities";

const About = () => {
  return (
    <div className="container m-medium border">
      {" "}
      <div>
        <img className="opacity-low" src={MisionVision} width="100%" />
        <h2 className="text-huge">¿Quiénes Somos?</h2>
      </div>
      <p>
        En la búsqueda de sinergias para el desarrollo de las redes informáticas
        y los videojuegos desde la Universidad de la Amazonia - Florencia
        Caquetá Colombia.{" "}
      </p>
      <article className="container m-medium border">
        <h3 className="text-big">
          R3D -Redes y Videojuegos - Semillero de Investigación
        </h3>
        <p>
          Somos un equipo de profesionales que busca aportar al desarrollo
          económico y tecnológico de la región Amazonica, impulsados por el
          anhelo de producir conocimiento bajo las premisas de las redes
          informáticas los contenidos digitales y los videojuegos. Desde la
          perspectiva local, Rede3D busca estrategias y soluciones innovadoras a
          los problemas de la Amazonia Colombiana .
        </p>
      </article>
      <article className="container m-medium border">
        <MisionVision />
      </article>
      <article>
        <Metodologia />
      </article>
      <article className="container m-medium border">
        <Objetivos />
      </article>
      <article className="container m-medium border">
        <LinesInvestigation />
      </article>
      <article>
        {" "}
        <ParticipatingEntities />
      </article>
      <article>
        {" "}
        <InvestigationGroups />
      </article>
    </div>
  );
};
export { About };
