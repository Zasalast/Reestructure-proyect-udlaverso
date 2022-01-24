import { useParams, useNavigate } from "react-router-dom";
import { getInvoice, deletePerson } from "../../data";

export default function Person() {
  let navigate = useNavigate();
  let params = useParams();
  let person = getInvoice(parseInt(params.invoiceId, 10));

  return (
    <main style={{ padding: "1rem" }} className="container m-medium border">
      <h2>Total Due: {person.amount}</h2>
      <p>
        {person.name}: {person.number}
      </p>
      <p>Due Date: {person.due}</p>
      <p>
        <button
          onClick={() => {
            deletePerson(person.number);
            navigate("/Persons");
          }}
        >
          Delete
        </button>
      </p>
    </main>
  );
}
