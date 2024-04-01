import React, { useLayoutEffect } from "react";

import PositionedMenu from "../../components/positionedMenu/PositionedMenu";
import RouterTabs from "components/routerTabs/RouterTabs";
import { I_RoutedItem } from "types/I_RoutedItem";

const routedData: I_RoutedItem[] = [
  {
    label: "Main",
    pattern: "/",
    to: "/",
  },
  {
    label: "page1",
    pattern: "/page1",
    to: "/page1",
  },
  {
    label: "page2",
    pattern: "/page2",
    to: "/page2",
  },
  {
    label: "err",
    pattern: "/err",
    to: "/err",
  },
];

export default function AppHeader(props: { children?: React.ReactNode }) {
  const { children } = props;

  useLayoutEffect(() => {
    console.log("## AppHeader: CREATE");
    return () => {
      console.log("## AppHeader: DESTROY");
    };
  }, []);

  console.log("## AppHeader: render");
  return (
    <div>
      <h1>app header</h1>
      <PositionedMenu data={routedData} />
      <RouterTabs data={routedData} />
      {children}
    </div>
  );
}
