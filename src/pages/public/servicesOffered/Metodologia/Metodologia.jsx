import red_videojuegos from "./../../../../assets/Aventuras en equipo.png";

import red_trabaje from "./../../../../assets/trabaje.png";
import redesempresariales from "./../../../../assets/trabaje.png";

const Metodologia = () => {
    return (
        <div className="container border m-medium">
            <div className="container">
                <h3>
                    <h1 className="text-huge">Metodología propuesta</h1>
                </h3>
            </div>
            <div className="row aligner m-xsmall">
                <div className="col aligner--itemBottom border m-medium">
                    <ul>
                        <h4 className="text-big">FASE I</h4>
                        <li>Registro Cvlab.</li>
                        <li>Presentación del Grupo de Investigación GITUA.</li>
                        <li>Bases de Datos Especializadas.</li>
                        <li>Mapas conceptuales.</li>
                        <li>Estado del Arte.</li>
                        <li>
                            Formas de Investigar y producción de conocimientos.
                        </li>
                        <li>Participación en Proyectos de investigación.</li>
                    </ul>
                </div>
                <div className="col aligner--itemBottom border m-medium">
                    {" "}
                    <ul>
                        <h4 className="text-big">FASE II</h4>

                        <li>Actualización del Cvlab</li>
                        <li>
                            Socialización formato de presentación de proyectos
                            UA.
                        </li>
                        <li>Instrumentos de Recolección de Datos.</li>
                        <li>Redes de Investigación.</li>
                        <li>Acompañamiento a proyectos de investigación.</li>
                        <li>Proyectos de investigación.</li>
                    </ul>
                </div>
                <div className="col aligner--itemBottom border m-medium">
                    <ul>
                        <h4 className="text-big">FASE III</h4>
                        <li>Elaboración de Artículos.</li>

                        <li>Participación en convocatorias.</li>

                        <li>Concursos y congresos.</li>

                        <li>
                            Participación en Proyectos de Gestion de Redes de
                            Datos.
                        </li>

                        <li>
                            Participación en Proyectos de desarrollo de
                            Videojuegos.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export { Metodologia };
