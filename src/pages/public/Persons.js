import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { getAll } from "../../service/PersonsService";
function Persons() {
  /* let invoices = getInvoices(); */
  const [state, setState] = useState({
    loading: true,
    error: null,
    person: undefined,
  });

  useEffect(() => {
    const data = getAll();
    setState({ ...state, person: data });
    console.log(data, "1");
    console.log(state.person, "4");
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
        />{" "} */}
        <ul>
          {state.person.map((item) => (
            <li>
              {" "}
              <NavLink
                style={({ isActive }) => ({
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "red" : "",
                })}
                to={`/invoices/${item.id}`}
                key={item.id}
              >
                {item.name}
                {item.lastName}
                {item.phone}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export { Persons };
