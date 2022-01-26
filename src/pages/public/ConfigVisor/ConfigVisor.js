import React from "react";
import Diapositiva1 from "./../../../assets/Visor/image.png";
/* import Diapositiva1 from "./../../../assets/Visor/Diapositiva2.PNG"; */
import Diapositiva2 from "./../../../assets/Visor/Diapositiva2.PNG";
import Diapositiva3 from "./../../../assets/Visor/Diapositiva3.PNG";
import Diapositiva4 from "./../../../assets/Visor/Diapositiva4.PNG";
import Diapositiva5 from "./../../../assets/Visor/Diapositiva5.PNG";
import Diapositiva6 from "./../../../assets/Visor/Diapositiva6.PNG";
import Diapositiva7 from "./../../../assets/Visor/Diapositiva7.PNG";

function ConfigVisor() {
  return (
    <div className="container m-medium border">
      <div className="row">
        <div className="row text-huge">
          Descarga del Visor{" "}
          <a href="http://www.google.com/url?q=http%3A%2F%2Fmetaverseink.com%2Fdownload%2FOnLook_1-8-6-6289_Setup.exe&sa=D&sntz=1&usg=AFQjCNGqgRH114PYXJUaef3FDKfKt03R9Q">
            {" "}
            On_look
          </a>{" "}
          <br />
          <br />
        </div>
        <div className="row text-huge">
          Damos inicio al proceso de configuración del visor
          <br />
          <img src={Diapositiva1} alt="" />
          <br />
        </div>
        <div className="row text-huge">
          Damos Clic en Grid manager
          <br />
          <img src={Diapositiva2} alt="" />
          <br />
        </div>
        <div className="row text-huge">
          <a href="https://sites.google.com/view/redes3d/udla3d/configuraci%C3%B3n-visor-onlook#h.z03dvta4moex">
            Seguid en Grids
          </a>

          <br />
          <img src={Diapositiva3} alt="" />
          <br />
        </div>
        <div className="row text-huge">
          <a href="https://sites.google.com/view/redes3d/udla3d/configuraci%C3%B3n-visor-onlook#h.py72ipry4oqv">
            3. Luego en la opción de Create
          </a>
          <br />
          <img src={Diapositiva4} alt="" />
          <br />
        </div>
        <div className="row text-huge">
          <p>
            En el Opción de Advance getionamos: <br />
            Login URI: http://152.200.138.122:9000/ Grid <br />
            Name: Udla3D Splash Page: http://152.200.138.122:9000/ <br />
            Helper ULR: http://152.200.138.122:9000/ <br />
            Web Site: http://152.200.138.122:9000/ <br />
            Support URL: http://152.200.138.122:9000/ <br />
            Accounr URL:http://152.200.138.122:9000/ <br />
            Password URL: http://152.200.138.122:9000/ <br />
            Search URL:http://152.200.138.122:9000/
          </p>
          <br />
          <img src={Diapositiva5} alt="" />
          <br />
        </div>
        <div className="row text-huge">
          <a href="https://sites.google.com/view/redes3d/udla3d/configuraci%C3%B3n-visor-onlook#h.hd7i8glujw8s">
            Así quedara nuestro formulario Ya
          </a>{" "}
          <a href="https://sites.google.com/view/redes3d/udla3d/configuraci%C3%B3n-visor-onlook#h.6py60rqq72ri">
            casi estamos listo..¡¡
          </a>{" "}
          <br />
          <img src={Diapositiva6} alt="" />
          <br />
        </div>
        <div className="row text-huge">
          <a href="https://sites.google.com/view/redes3d/udla3d/configuraci%C3%B3n-visor-onlook#h.upn2cysqk5xe">
            ingresamos Name O Username, Password y listo..
          </a>
          <br />
          <img src={Diapositiva7} alt="" />
          <br />
        </div>
      </div>
    </div>
  );
}

export { ConfigVisor };
