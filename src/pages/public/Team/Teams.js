import React, { useEffect, useState } from "react";
import { getAll } from "../../../service/PersonsService";
import { NavLink, Outlet, useSearchParams } from "react-router-dom";
/* import { getInvoices } from "../../data"; */
import api from "../../../service/api2";
import data from "./../../../Data.json";
import { Loading } from "../../../components/Loading/Loading";
const Teams = () => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: undefined,
  });
  let [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let data = null;
    setState({ ...state, loading: true, error: null });
    try {
      console.log(api, "api");
      data = await getAll(); /* api.users.list; */
      setState({
        ...state,
        data: data,
      });
      console.log(data, "data");
      console.log(state, "state data");
      setState({ ...state, loading: false, data: data });
    } catch (error) {
      setState({ ...state, loading: false, error: error });
    }
  };

  /*  const { id, userId, description, fistName, job } = data; */

  if (state.loading === true) {
    return <div className="loadingBar"></div>;
  }
  if (state.error) {
    return `Error: ${state.error.message}`;
  }

  return (
    <div className="container m-medium border">
      {state.data ? (
        <div>
          {" "}
          <h2>Team</h2> <label className="label">Buscar por nombre</label>
          <div className="input input-fullWidth">
            {" "}
            <input
              placeholder="Buscar por nombre"
              value={searchParams.get("filter") || ""}
              onChange={(event) => {
                let filter = event.target.value;
                if (filter) {
                  setSearchParams({ filter });
                } else {
                  setSearchParams({});
                }
              }}
            />
          </div>
          <div>
            <table className="table">
              <thead>
                <tr className="text-small text-left">
                  <th>Fotografia</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Telefono</th>
                  <th>Ver</th>
                </tr>
              </thead>
              <tbody>
                {state.data
                  .filter((data) => {
                    let filter = searchParams.get("filter");
                    if (!filter) return true;
                    let name = data.name.toLowerCase();
                    return name.startsWith(filter.toLowerCase());
                  })
                  .map((item) => (
                    <tr key={item.id}>
                      <td>
                        <img src="favicon.ico" />
                      </td>
                      <td>{item.name}</td>
                      <td>{item.lastName}</td>
                      <td>{item.phone}</td>

                      <td>
                        <button>Ver Miembro</button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <>
          {" "}
          <div className="loadingBar"></div> <Loading />
        </>
      )}
    </div>
  );
};
export { Teams };
