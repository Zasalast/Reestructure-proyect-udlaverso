import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { getAll } from "./../../service/PersonsService";
import { Persons } from "./Persons";
function About() {
  /* let invoices = getInvoices(); */
  const [state, setState] = useState({
    loading: true,
    error: null,
    person: null,
  });

  useEffect(() => {
    try {
      const data = getAll();
      setState({ ...state, person: data });
      console.log(data, "1");
      console.log(state.person, "4");
    } catch (error) {
      console.log(error, "1");
    }
  }, []);

  /* const fetchData = async () => {
    setState({ loading: true, error: null });
    try {
      const data = await api.teams.list;
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  }; */
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {/*  <input
          value={searchParams.get("filter") || ""}
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        /> */}
        <ul>{state.person ? <Persons /> : <div>null</div>}</ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default About;
