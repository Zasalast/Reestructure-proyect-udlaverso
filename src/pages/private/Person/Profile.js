import React, { useState } from "react";

import JSONPretty from "react-json-pretty";
const Profile = () => {
  const { user, isAuthenticated, isLoading } = useState(null);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.nickname}</p>

        {/* <JSONPretty id="json-pretty" data={user}></JSONPretty> */}
      </div>
    )
  );
};

export { Profile };
