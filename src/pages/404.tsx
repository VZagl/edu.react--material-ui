import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import ErrorMessage from "components/errorMessage/ErrorMessage";

const Page404 = () => {
  useLayoutEffect(() => {
    console.log("## Page404: CREATE");
    return () => {
      console.log("## Page404: DESTROY");
    };
  }, []);

  console.log("## Page404: render");
  return (
    <div style={{ textAlign: "center" }}>
      <Helmet>
        <meta name="description" content="This page is not found" />
        <title>This page is not found</title>
      </Helmet>
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
