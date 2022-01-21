import React from "react";

import red_videojuegos from "./../../../assets/LargeLogo - Copy.png";
import red_trabaje from "./../../../assets/trabaje.png";

import redesempresariales from "./../../../assets/Aventuras en equipo .png";
import redesempresariales2 from "./../../../assets/Aventuras en equipo.png";
/* import redesempresariales from "./../../assets/redes-empresariales.png"; */

const MisionVision = () => {
    return (
        <div className="content row">
            <img src={redesempresariales} /> <img src={redesempresariales2} />{" "}
            <img alt="example" src={red_trabaje} />
            <a href="https://sites.google.com/view/redes3d/qui%C3%A9nes-somos"></a>
            <div className="container row">
                {" "}
                <div className="col m-medium">
                    <h3 className="text-big">VISIÓN </h3>
                    <h5>
                        El Semillero de Investigación Red3D será reconocido
                        regionalmente en la formación de investigaciones
                        aplicadas al uso de las redes informáticas, videojuegos
                        y realidad mixta con fines sociales y académicos."
                    </h5>
                </div>
                <div className="col m-medium">
                    <h3 className="text-big"> MISIÓN"</h3>
                    <h5>
                        Formar en el campo investigativo en temas relacionados
                        con: redes informáticas, videojuegos y realidad mixta
                        con fines académicos y sociales.
                    </h5>
                </div>
            </div>
            ,
        </div>
    );
};
export { MisionVision };
