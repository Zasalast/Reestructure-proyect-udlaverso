import React from "react";

import red_videojuegos from "./../../../assets/LargeLogo.png";
import red_trabaje from "./../../../assets/trabaje.png";
import redesempresariales from "./../../../assets/user.png";
/* import redesempresariales from "./../../assets/redes-empresariales.png"; */

const MisionVision = () => {
    return (
        <div className="content row">
            {" "}
            <a href="https://sites.google.com/view/redes3d/qui%C3%A9nes-somos"></a>
            <div
                style={{ width: 300 }}
                cover={<img alt="example" src={red_trabaje} />}
            >
                <h3>VISIÓN </h3>
                <h5>
                    El Semillero de Investigación Red3D será reconocido
                    regionalmente en la formación de investigaciones aplicadas
                    al uso de las redes informáticas, videojuegos y realidad
                    mixta con fines sociales y académicos."
                </h5>
            </div>
            <div>
                <img src={redesempresariales} />
                <h3> MISIÓN"</h3>
                <h5>
                    Formar en el campo investigativo en temas relacionados con:
                    redes informáticas, videojuegos y realidad mixta con fines
                    académicos y sociales.
                </h5>
            </div>
            ,
        </div>
    );
};
export { MisionVision };
