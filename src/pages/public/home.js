import React, { useEffect, useState } from "react";

import { LoginService } from "../../service/UserService";
import { saveState, loadState } from "../../utils/localStorage";
import { ServicesOffered } from "./servicesOffered/ServicesOffered";
import ima_small from "./../../assets/construccion-small.png";
import ima_media from "./../../assets/construccion-media.png";
import ima_large from "./../../assets/construccion-large.jpg";
import ima_udla from "./../../assets/orange-planets-background3.jpg";
import ima_udlainsc from "./../../assets/incribete.jpeg";
import { Carouse } from "../../components/Carousel/Carousel";
function Home() {
  return (
    <div>
      <ServicesOffered />
      <Carouse />
      <div className="c1">
        <img
          alt="Es un computador"
          src={ima_udlainsc}
          height="300vh"
          width="800vw"
        />
        {/*  <button><a href="/w3d/login"><i className="fas fa-user-circle fa-2x" /> </a></button> */}
      </div>
      <div className="c2">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/SZOrf_zTFkc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="c3">
        <section>
          <figure>
            <img
              alt="Es un computador"
              src={ima_media}
              sizes="(max-width: 400px) 100vw  100vw, (max-width: 500px) 50vw, 900px"
              /*  srcset="./../../../assets/construccion-small.png 100w,
    ./../../../assets/construccion-media.png 900w,
    ./../../../assets/construccion-large.png 1200w" */
            />

            <figcaption>Es un computador</figcaption>
          </figure>
        </section>
      </div>
      <div className="c4"></div>
      <div className="c5">
        <ul>
          <li class="nowrap">Users in World: 1</li>
          <li class="nowrap">Regions: 2</li>
          <li class="nowrap">Total Users: 44</li>
          <li class="nowrap">Active Users (Last 30 Days): 21</li>
        </ul>
      </div>
      <div className="c5">
        <div id="posts">
          <ul>
            <li>
              <a href="http://www.singularityviewer.org/downloads">
                Singularity
              </a>
            </li>
            <li>
              <a href="http://www.firestormviewer.org/downloads">Firestorm</a>
            </li>
            <li>
              <a href="https://bitbucket.org/kokua/downloads">Kokua</a>
            </li>
            <li>&nbsp;</li>
            <li>
              <a href="http://opensimulator.org">OpenSimulator</a>
            </li>
            <li>
              <a href="http://metaverseink.com/Downloads.html">
                Diva Distro (D2)
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="c6">
        <img
          alt="Es un computador"
          src="http://152.200.138.122:9000/wifi/images/diva.png"
          sizes="(max-width: 400px) 100vw  100vw, (max-width: 500px) 50vw, 900px"
          height="120vh"
          /*  srcset="./../../../assets/construccion-small.png 100w,
    ./../../../assets/construccion-media.png 900w,
    ./../../../assets/construccion-large.png 1200w" */
        />
        <img
          alt="Es un computador"
          src="http://152.200.138.122:9000/wifi/images/PoweredByOS.png"
          sizes="(max-width: 400px) 100vw  100vw, (max-width: 500px) 50vw, 900px"
          height="120vh"
        />
        <img alt="Es un computador" src={ima_udla} height="300vh" />
      </div>
      {/*     <p>{access_token + ""}</p>
      <form onSubmit={handleLogin}>
        <h1 className="text-center text-uppercase text-success text-big aligner aligner--centerHoritzontal aligner--centerVertical">
          login
        </h1>
        <div class="input input-fullWidth">
          <input
            type="text"
            name="Email"
            value={email}
            placeholder="Email"
            onChange={({ target }) => setEmail(target.value)}
          />
        </div>
        <div class="input input-fullWidth">
          <input
            id="test10"
            type="password"
            name="Password"
            value={password}
            placeholder="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <div className="aligner aligner--centerHoritzontal aligner--centerVertical">
          <button className="button  button--small button--primary ">
            login
          </button>
        </div>
      </form>

      {console.log(access_token, "jj")} */}
    </div>
  );
}

export { Home };
