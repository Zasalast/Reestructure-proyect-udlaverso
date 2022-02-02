import React from "react";

function Loading() {
  return (
    <div className="loadingSpinner">
      <span className="loadingSpinner-inner"></span>
      <span className="loadingSpinner-inner"></span>
      <span className="loadingSpinner-inner"></span>
      <span className="loadingSpinner-inner"></span>
    </div>
  );
}

export { Loading };
