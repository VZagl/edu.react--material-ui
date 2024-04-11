import React, { useEffect } from "react";

import logo from "~/assets/img/logo.svg";
import "./HelloWorld.scss";

const HelloWorld = () => {
  useEffect(() => {
    console.log("## HelloWorld: CREATE");
    return () => {
      console.log("## HelloWorld: DESTROY");
    };
  }, []);

  return (
    <div className="HelloWorld">
      <header className="HelloWorld-header">
        <img src={logo} className="HelloWorld-logo" alt="logo" />
        <p>
          Edit <code>src/features/helloWorld/HelloWorld.tsx</code> and save to
          reload.
        </p>
        <a
          className="HelloWorld-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default HelloWorld;
