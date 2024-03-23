import React, { useEffect, useMemo } from "react";
import { matchPath, useLocation } from "react-router-dom";
import { Tab, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { TabContext, TabList } from "@mui/lab";

export interface I_RouterTabsItem {
  label: string;
  pattern: string;
  to: string;
}

type T_RoutedDataProps = { data: I_RouterTabsItem[]; currentTab?: number };

export function useRouteMatch(patterns: readonly I_RouterTabsItem[]) {
  const { pathname } = useLocation();
  console.log("## MyTabs#useRouteMatch: pathname=", pathname);

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
  useEffect(() => {
    console.log("## TabsRouter: CREATE");
    return () => {
      console.log("## TabsRouter: DESTROY");
    };
  }, []);

  const routeMatch = useRouteMatch(props.data);
  const currentTab = routeMatch?.pattern?.path || -1;

  const listTabs = useMemo(() => {
    return props.data.map((v) => (
      <Tab
        key={v.pattern}
        value={v.pattern}
        to={v.to}
        label={v.label}
        component={Link}
      />
    ));
  }, [props.data]);

  console.log("## TabsRouter: render");
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={currentTab}>
        <TabList>
          {/* <Tab label="Inbox" value="/inbox/:id" to="/inbox/1" component={Link} />
        <Tab label="Drafts" value="/drafts" to="/drafts" component={Link} />
        <Tab label="Trash" value="/trash" to="/trash" component={Link} /> */}
          {listTabs}
        </TabList>
      </TabContext>
    </Box>
  );
}
