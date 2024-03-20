import React from "react";
import { Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

export function CurrentRoute() {
  const location = useLocation();

  return (
    <Typography variant="body2" sx={{ pb: 2 }} color="text.secondary">
      Current route: {location.pathname}
    </Typography>
  );
}
