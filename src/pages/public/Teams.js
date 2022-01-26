import React, { useEffect, useState } from "react";
import { getAll } from "../../service/PersonsService";
import { NavLink, Outlet, useSearchParams } from "react-router-dom";
/* import { getInvoices } from "../../data"; */
import api from "../../service/api2";
import data from "./../../Data.json";
import { Loading } from "../../components/Loading/Loading";
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
    setState({ loading: true, error: null });
    try {
      console.log(api, "api");
      data = await getAll(); /* api.users.list; */
      setState({
        ...state,
        data: data,
      });
      console.log(data, "data");
      console.log(state, "state data");
      setState({ loading: false, data: data });
    } catch (error) {
      setState({ loading: false, error: error });
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
          <h2>Team</h2>{" "}
          <label className="label" for="test10">
            Buscar por nombre
          </label>
          <div className="input input-fullWidth">
            {" "}
            <input
              id="test10"
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
            {state.data
              .filter((data) => {
                let filter = searchParams.get("filter");
                if (!filter) return true;
                let name = data.name.toLowerCase();
                return name.startsWith(filter.toLowerCase());
              })
              .map((item) => (
                <div key={item.id} className="card flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src="favicon.ico" />
                    </div>
                    <div className="flip-card-back">
                      <h1>{item.name}</h1>

                      <p className="title">{item.lastName}</p>
                      <p>{item.phone} </p>

                      <p>
                        <button>Contact</button>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ) : (
        <>
          {" "}
          <div class="loadingBar"></div> <Loading />
        </>
      )}
    </div>
  );
};
export { Teams };
