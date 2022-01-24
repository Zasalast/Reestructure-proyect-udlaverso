import React from "react";
import iconGuitua from "./favicon.ico";
function InvestigationGroups() {
  return (
    <div className="container m-medium border">
      <h3 className="text-big">INVESTIGATION GROUPS</h3>
      <div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src={iconGuitua} />
            </div>
            <div class="flip-card-back">
              <h1>GITUA</h1>
              <h4>Líneas de investigación declaradas por el grupo</h4>
              <p>Formación para la gestión de sistemas ambientales</p>
              <p>Informatica Educativa</p>
              <p>Ingeniería de Softwar</p>
              <p>Inteligencia Artificial</p>
            </div>
          </div>
        </div>
      </div>

      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="favicon.ico" />
          </div>
          <div class="flip-card-back">
            <h1>Sena</h1>
          </div>
        </div>
      </div>

      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="favicon.ico" />
          </div>
          <div class="flip-card-back">
            <h1>AMBIENTES VIRTUALES</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvestigationGroups;
