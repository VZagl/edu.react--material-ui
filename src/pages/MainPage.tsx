import { useLayoutEffect } from "react";
import { Box } from "@mui/material";
import { Helmet } from "react-helmet";

export default function () {
  useLayoutEffect(() => {
    console.log("## MainPage: CREATE");
    return () => {
      console.log("## MainPage: DESTROY");
    };
  }, []);

  console.log("## MainPage: render");
  return (
    <>
      <Helmet>
        <meta name="description" content="Main page" />
        <title>Main page</title>
      </Helmet>
      <Box>
        <h2>MainPage</h2>
      </Box>
    </>
  );
}
