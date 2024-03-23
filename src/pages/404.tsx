import React from "react";
import { Link } from "react-router-dom";

import ErrorMessage from "components/errorMessage/ErrorMessage";

const Page404 = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <ErrorMessage />
      <p />
      <h1>404 error. </h1>
      <Link to="/">
        <h1>Back to main page.</h1>
      </Link>
    </div>
  );
};

export default Page404;
