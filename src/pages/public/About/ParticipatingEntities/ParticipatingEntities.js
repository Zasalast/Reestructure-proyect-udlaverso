import React from "react";
import EntitiesParty from "./../../../../assets/particitingentities/EmbeddedImage.png";
import EntitiesParty2 from "./../../../../assets/particitingentities/udla.png";
function ParticipatingEntities() {
  return (
    <div className="container m-medium border">
      <div>
        <h3 className="text-big">PARTICIPATING ENTITIES</h3>
      </div>
      <img src={EntitiesParty} />
      <img src={EntitiesParty2} />
    </div>
  );
}

export default ParticipatingEntities;
