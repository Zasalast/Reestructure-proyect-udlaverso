import React from "react";
import account1 from "./../../../assets/account/image(1).png";
import account2 from "./../../../assets/account/image(2).png";
import account from "./../../../assets/account/image.png";
function AccountUdlaVerso() {
  return (
    <div className="container m-medium border">
      <div className="row">
        <h3 className="text-huge">Construyendo Metaversos</h3>
        <div>
          <h4 className="text-big">
            Para iniciar el proceso de creación de cuentas damos clic en el
            Botón <a href="">Udla3D</a>
          </h4>

          <p>Pagina principal Servidor de Videojuegos Udla 3D</p>
          <img src={account} alt="" />
        </div>
        <div>
          <p>Seguido realizamos los siguientes pasos.</p>
          <h4 className="text-big">Ingresamos a nuestro sistemas de Cuentas</h4>
          <img src={account1} alt="" />
        </div>
        <div>
          <h4 className="text-big">2. Damos Clic en crear cuenta.</h4>
          <h4 className="text-big">
            3. Diligenciamos datos de formulario de creación de cuenta.
          </h4>
          <img src={account2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default AccountUdlaVerso;
