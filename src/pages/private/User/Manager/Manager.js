import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
function Manager() {
  let navigate = useNavigate();
  let params = useParams();
  function handleChange(value) {
    navigate(`${value}`, { replace: true });
    value = "";
  }
  return (
    <div>
      <div className="text-center text-uppercase text-success text-big aligner aligner--centerHoritzontal aligner--centerVertical">
        <h2>Create</h2>
      </div>
      <div>
        {" "}
        <select
          onChange={(event) => handleChange(event.target.value)}
          className="tabs-item header-app"
        >
          <option value="#">Create</option>
          <option value="/newcategory">category</option>
          <option value="/newtypedata">typedata</option>
          <option value="/newproduct">product</option>
          <option value="/newuser">user</option>
          <option value="/neworder">order</option>
        </select>
      </div>
    </div>
  );
}

export { Manager };
