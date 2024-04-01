import { useLayoutEffect } from "react";
import { Helmet } from "react-helmet";
import { Box } from "@mui/material";

import HelloWorld from "features/helloWorld/HelloWorld";

export default function () {
  useLayoutEffect(() => {
    console.log("## Page2: CREATE");
    return () => {
      console.log("## Page2: DESTROY");
    };
  }, []);

  console.log("## Page2: render");
  return (
    <>
      <Helmet>
        <meta name="description" content="Page2" />
        <title>Page 2</title>
      </Helmet>

      <Box>
        <h2>page 2</h2>
        <HelloWorld />
      </Box>
    </>
  );
}
