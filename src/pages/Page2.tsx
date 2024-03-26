import React, { useEffect, useMemo } from "react";
import { Helmet } from "react-helmet";
import { Box } from "@mui/material";

import HelloWorld from "features/helloWorld/HelloWorld";

export default function () {
  return (
    <>
      <Helmet>
        <meta name="description" content="Page1" />
        <title>Page 1</title>
      </Helmet>

      <Box>
        <h2>page 2</h2>
        <HelloWorld />
      </Box>
    </>
  );
}
