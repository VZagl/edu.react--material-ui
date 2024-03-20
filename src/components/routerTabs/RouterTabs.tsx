import { matchPath, useLocation } from "react-router-dom";
import { Tab, Box } from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";
import { Link } from "react-router-dom";
import HelloWorld from "features/helloWorld/HelloWorld";

export interface I_RouterTabsItem {
  label: string;
  pattern: string;
  to: string;
  component: any;
}

type T_RoutedDataProps = { data: I_RouterTabsItem[]; currentTab?: number };

export function useRouteMatch(patterns: readonly string[]) {
  const { pathname } = useLocation();
  console.log("## MyTabs#useRouteMatch: pathname=", pathname);

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}

export default function TabsRouter(props: T_RoutedDataProps) {
  const routeMatch = useRouteMatch([
    "/inbox/:id",
    "/drafts",
    "/trash",
    "/hello",
  ]);
  const currentTab = routeMatch?.pattern?.path || -1;

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={currentTab}>
        <Tab label="Inbox" value="/inbox/:id" to="/inbox/1" component={Link} />
        <Tab label="Drafts" value="/drafts" to="/drafts" component={Link} />
        <Tab label="Trash" value="/trash" to="/trash" component={Link} />
        <TabPanel value="/inbox/:id">Item One</TabPanel>
        <TabPanel value="/drafts">Item Two</TabPanel>
        <TabPanel value="/trash">Item Three</TabPanel>
        <TabPanel value="/hello">
          <HelloWorld />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
