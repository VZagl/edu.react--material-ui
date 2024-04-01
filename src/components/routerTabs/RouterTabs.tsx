import { useLayoutEffect, useMemo } from "react";
import { matchPath, useLocation, NavLink } from "react-router-dom";
import { Box, Tab, Tabs } from "@mui/material";

import { I_RoutedItem } from "types/I_RoutedItem";
import { T_RoutedDataProps } from "types/T_RoutedDataProps";

export function useRouteMatch(patterns: readonly I_RoutedItem[]) {
  const { pathname } = useLocation();
  console.log("## RouterTabs#useRouteMatch: pathname=", pathname);

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern.pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}

export default function RouterTabs(props: T_RoutedDataProps) {
  useLayoutEffect(() => {
    console.log("## RouterTabs: CREATE");
    return () => {
      console.log("## RouterTabs: DESTROY");
    };
  }, []);

  const routeMatch = useRouteMatch(props.data);
  const currentTab = routeMatch?.pattern?.path || false;

  const listTabs = useMemo(() => {
    return props.data.map((v) => (
      <Tab
        key={v.pattern}
        value={v.pattern}
        to={v.to}
        label={v.label}
        component={NavLink}
      />
    ));
  }, [props.data]);

  console.log("## RouterTabs: render");
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <Tabs value={currentTab}>{listTabs}</Tabs>
    </Box>
  );
}
