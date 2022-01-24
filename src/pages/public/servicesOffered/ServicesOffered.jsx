import React from "react";
import "./ServicesOffered.css";

import red_videojuegos from "./../../../assets/LargeLogo.png";

import red_trabaje from "./../../../assets/trabaje.png";
import redesempresariales from "./../../../assets/trabaje.png";

const ServicesOffered = () => {
    return (
        <div className="container">
            <div className="row aligner aligner--spaceBetween">
                <div className="col bg-gray-light">
                    <div className="card">
                        <img alt="example" src={red_videojuegos} />

                        <p>
                            Somos un equipo de profesionales que busca aportar
                            al desarrollo económico y tecnológico de la región
                            Amazonica..
                        </p>
                        <p>
                            <button>¿Quien Somos?</button>
                        </p>
                    </div>{" "}
                    <br />
                </div>{" "}
                <div className="col bg-gray-light">
                    <div className="card">
                        <img src={red_trabaje} />

                        <p>
                            Contribuir en la formación integral de los
                            estudiantes del programa de Ingeniería de Sistemas..
                        </p>
                        <p>
                            <button>¿Qué hacemos? </button>
                        </p>
                    </div>
                    <h2></h2>
                    <br />
                </div>
                <div className="col bg-gray-light">
                    <div className="card">
                        <img src={redesempresariales} />

                        <p>
                            <button>
                                <h4>Trabaja con Nosotros</h4>
                            </button>
                        </p>
                    </div>

                    <br />
                </div>
            </div>
        </div>
    );
};
export { ServicesOffered };
