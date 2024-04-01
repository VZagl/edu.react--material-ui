import { useLayoutEffect } from "react";
import { Helmet } from "react-helmet";
import { Box } from "@mui/material";

export default function () {
  useLayoutEffect(() => {
    console.log("## Page1: CREATE");
    return () => {
      console.log("## Page1: DESTROY");
    };
  }, []);

  console.log("## Page1: render");
  return (
    <>
      <Helmet>
        <meta name="description" content="Page1" />
        <title>Page 1</title>
      </Helmet>

      <Box>
        <h2>page 1</h2>
      </Box>
    </>
  );
}
