import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <h1>
      404: Not Found
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </h1>
  );
}

export default NotFound;
