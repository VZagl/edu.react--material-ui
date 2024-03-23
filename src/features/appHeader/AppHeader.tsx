import React, { useEffect } from "react";

import { PositionedMenu } from "./PositionedMenu";

export default function AppHeader(props: { children?: React.ReactNode }) {
  const { children } = props;

  useEffect(() => {
    console.log("## AppHeader: CREATE");
    return () => {
      console.log("## AppHeader: DESTROY");
    };
  }, []);

  console.log("## AppHeader: render");
  return (
    <div>
      <h1>app header</h1>
      <PositionedMenu />
      {children}
    </div>
  );
}
