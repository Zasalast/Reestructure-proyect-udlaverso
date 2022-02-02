import { useParams, useNavigate } from "react-router-dom";
import { getAll, getOnePersonService } from "../../service/PersonsService";
import { Loading } from "../../components/Loading/Loading";
import { useState, useEffect } from "react";

export default async function Person() {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: undefined,
  });
  let navigate = useNavigate();
  let params = useParams();

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    let data = null;
    setState({ ...state, loading: true, error: null });
    try {
      data = await getOnePersonService(params.personId);
      console.log(data, "getOnePersonService(params.personId)");
      /* api.users.list; */
      setState({
        ...state,
        data: data,
      });
      console.log(data, "data");
      console.log(state, "state data");
      setState({ loading: false, data: data });
    } catch (error) {
      setState({ ...state, loading: false, error: error });
    }
  };

  if (state.loading === true) {
    return <div className="loadingBar"></div>;
  }
  if (state.error) {
    return `Error: ${state.error.message}`;
  }
  return (
    <main className="container m-medium border">
      {console.log(state.data)}
      {/*   <h2>Name: {person.name}</h2>
      <p>
        LastName: {person.lastName}
      </p>
      <p>Phone: {person.phone}</p> */}
      {/*   <p>
        <button
          onClick={() => {
            deletePersonService(person.number);
            navigate("/Persons");
          }}
        >
          Delete
        </button>
      </p> */}
    </main>
  );
}
