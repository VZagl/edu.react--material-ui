import React, { useEffect, useMemo } from "react";
import { Box } from "@mui/material";

import HelloWorld from "features/helloWorld/HelloWorld";

export default function () {
  return (
    <Box>
      <h2>page 2</h2>
      <HelloWorld />
    </Box>
  );
}
