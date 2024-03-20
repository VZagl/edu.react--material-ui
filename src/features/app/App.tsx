import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { CurrentRoute } from "components/currentRoute/CurrentRoute";
import RouterTabs, { I_RouterTabsItem } from "components/routerTabs/RouterTabs";
import HelloWorld from "features/helloWorld/HelloWorld";
import Page404 from "pages/404";
import "./App.scss";

const RoutedData: I_RouterTabsItem[] = [
  { label: "Inbox", pattern: "/inbox/:id", to: "/inbox/1", component: {} },
  { label: "Drafts", pattern: "/drafts", to: "/drafts", component: {} },
  { label: "Trash", pattern: "/trash", to: "/trash", component: {} },
  {
    label: "Hello",
    pattern: "/hello",
    to: "/hello",
    component: { HelloWorld },
  },
];

export default function App() {
  return (
    <Router>
      <div className="app">
        {/* <AppHeader /> */}
        <main>
          <CurrentRoute />
          <RouterTabs data={RoutedData} currentTab={2} />
          {/* <Routes> */}
          {/* <Route path="/" element={<MainPage />} /> */}

          {/* <Route path="/comics" element={<ComicsPage />} /> */}
          {/* <Route path="/comics/:comicId" element={<SingleComicPage />} /> */}

          {/* <Route path="*" element={<Page404 />} /> */}
          {/* </Routes> */}
        </main>
      </div>
    </Router>
  );
}
