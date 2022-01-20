import React from "react";
import "./ServicesOffered.css";

import red_videojuegos from "./../../../assets/LargeLogo.png";

import red_trabaje from "./../../../assets/trabaje.png";
import redesempresariales from "./../../../assets/trabaje.png";

const ServicesOffered = () => {
    return (
        <div className="container">
            <div className="row" gutter={16}>
                <div>
                    <img alt="example" src={red_trabaje} />
                    <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    <h2>¿Qué hacemos? </h2>
                    <h4>Trabaja con Nosotros</h4>
                </div>
            </div>
        </div>
    );
};
export { ServicesOffered };
