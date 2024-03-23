import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

export default function CurrentRoute() {
  useEffect(() => {
    console.log("## CurrentRoute: CREATE");
    return () => {
      console.log("## CurrentRoute: DESTROY");
    };
  }, []);

  const location = useLocation();

  console.log("## CurrentRoute: render");
  return (
    <Typography variant="body2" sx={{ pb: 2 }} color="text.secondary">
      Current route: {location.pathname}
    </Typography>
  );
}
