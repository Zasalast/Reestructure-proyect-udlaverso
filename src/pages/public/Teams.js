import React, { useEffect, useState } from "react";
import { getAll } from "../../service/PersonsService";
import { getInvoices } from "../../data";
import api from "../../service/api2";
import data from "./../../Data.json";
const Teams = () => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: undefined,
  });

  useEffect(() => {
    this.fetchData();
  }, []);

  const fetchData = async () => {
    setState({ loading: true, error: null });
    try {
      const data = await api.teams.list;
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  const { id, userId, description, fistName, job } = data;
  if (this.State.loading === true) {
    return "Loading...";
  }
  if (this.state.error) {
    return `Error: ${this.State.error.message}`;
  }

  return (
    <>
      <h2>Team</h2>;{" "}
      <a href="https://sites.google.com/view/redes3d/qui%C3%A9nes-somos">
        {/* <div>{data.team}</div> */}
        <div class="card flip-card">
          <div className="flip-card-inner">
            <div class="flip-card-front">
              <img src="img.jpg" alt="John" style="width:100%" />
            </div>
            <div className="flip-card-back">
              <h1>John Doe</h1>
              <p class="title">CEO & Founder, Example</p>
              <p>Harvard University</p>
              <a href="#">
                <i class="fa fa-dribbble"></i>
              </a>
              <a href="#">
                <i class="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fa fa-linkedin"></i>
              </a>
              <a href="#">
                <i class="fa fa-facebook"></i>
              </a>
              <p>
                <button>Contact</button>
              </p>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};
export { Teams };
