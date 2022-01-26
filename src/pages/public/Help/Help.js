import React from "react";
import "./Help.scss";
function Help() {
  return (
    <div className="container m-medium border">
      <div>
        <h1>Centro de Ayuda</h1>
      </div>
      <div>Estamos aquí con la ayuda y el asesoramiento que necesitas.</div>
      <div>
        <div>
          <input type="search" placeholder="En que podemos ayudarle?" />
        </div>
        <div className="conteiner aligner aligner--spaceAround row">
          <div className="flex-grow column">
            <h3>Administracion Cuenta</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
              veniam? Deserunt reiciendis beatae officia iusto a accusamus id
              soluta ipsa et necessitatibus natus, provident labore saepe
              aliquam voluptates porro repellendus!
            </p>
          </div>
          <div className="flex-grow column">
            <h3>Udla Verso</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Blanditiis fugiat est veritatis, adipisci harum beatae ullam quod
              iste odit exercitationem asperiores alias minus porro soluta rem
              quasi corporis facilis optio?
            </p>
          </div>
          <div className="flex-grow column">
            <h3>Visor Meta Verso</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              perferendis accusamus cum harum mollitia enim dolore amet vitae
              nemo beatae debitis, voluptatum cumque iure asperiores modi
              maxime, sequi, sit atque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Help };
