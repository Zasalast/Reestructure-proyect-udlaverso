import React from "react";
import ReactDOM from "react-dom";
import ima_udla from "./../../assets/3D_computer_animation3.jpg";
import ima_udla2 from "./../../assets/piedra-del-indio-apolinar-yurayaco.jpg";
import ima_udla3 from "./../../assets/photo_2021-06-17_13-54-49.jpg";
import ima_udla4 from "./../../assets/construccion-large.jpg";
import "./Carousel.scss";
const contentStyle = {
  height: "32vh",
  color: "#fff",
  lineHeight: "30vh",
  textAlign: "center",
  background: "#364d79",
  justify: "center",
  orientation: "left",
};

function Carouse() {
  let mountNode = document.getElementById("container");
  return (
    <div className="container m-medium border section bg-dark">
      <div id="container" />
      <div className="container text-center">
        <div>
          <img alt="Es un computador" src={ima_udla} height="195vh" />
        </div>
        <div style={contentStyle}>
          <img alt="Es un computador" src={ima_udla2} height="195vh" />
        </div>
        <div style={contentStyle}>
          <img alt="Es un computador" src={ima_udla3} height="195vh" />
        </div>
        <div style={contentStyle}>
          <img alt="Es un computador" src={ima_udla4} height="195vh" />
        </div>
      </div>
      <div className="slide">
        <div className="slide-inner">
          <input
            className="slide-open"
            type="radio"
            id="slide-1"
            name="slide"
            aria-hidden="true"
            hidden=""
            checked="checked"
          />
          <div className="slide-item">
            <img src={ima_udla2} />
          </div>
          <input
            className="slide-open"
            type="radio"
            id="slide-2"
            name="slide"
            aria-hidden="true"
            hidden=""
          />
          <div className="slide-item">
            <img src={ima_udla} />
          </div>
          <input
            className="slide-open"
            type="radio"
            id="slide-3"
            name="slide"
            aria-hidden="true"
            hidden=""
          />
          <div className="slide-item">
            <img src={ima_udla3} />
          </div>
          <label for="slide-3" className="slide-control prev control-1">
            ‹
          </label>
          <label for="slide-2" className="slide-control next control-1">
            ›
          </label>
          <label for="slide-1" className="slide-control prev control-2">
            ‹
          </label>
          <label for="slide-3" className="slide-control next control-2">
            ›
          </label>
          <label for="slide-2" className="slide-control prev control-3">
            ‹
          </label>
          <label for="slide-1" class="slide-control next control-3">
            ›
          </label>
          <ol className="slide-indicador">
            <li>
              <label for="slide-1" className="slide-circulo">
                •
              </label>
            </li>
            <li>
              <label for="slide-2" className="slide-circulo">
                •
              </label>
            </li>
            <li>
              <label for="slide-3" className="slide-circulo">
                •
              </label>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export { Carouse };
