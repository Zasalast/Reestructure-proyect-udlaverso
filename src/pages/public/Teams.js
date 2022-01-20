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
      </a>
    </>
  );
};
export { Teams };
