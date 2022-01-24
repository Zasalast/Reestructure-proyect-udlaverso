import React from "react";

function WorkWithUs() {
  return (
    <div>
      <div>
        <h3 className="text-huge">Inscripción de Semilleros de Redes UDLA</h3>
        <p className="text-big">Nombre del Semillero: Redes y Videojuegos.</p>
        <p className="text-big">
          Docente Coordinador: Lubeimer Eduardo Gallego Ruiz
        </p>
        <p className="text-big">
          Correo electrónico del docente coordinador: LU.GALLEGO@UDLA.EDU.CO
        </p>
        <p className="text-big">Teléfono: 3103177449</p>
        <p className="text-error text-big">*Obligatorio</p>
        <a
          className="button   button--red"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdwIBU4-6qJrkaWb8xwYE_K_k1cykQY3igc9ZWqWRvSaWTxng/viewform?usp=embedded_form_link"
        >
          Rellenar Formulario
        </a>
      </div>
    </div>
  );
}

export { WorkWithUs };
