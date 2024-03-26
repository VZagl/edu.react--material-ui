import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Helmet from "react-helmet";

import "./App.scss";

import Spinner from "components/spinner/Spinner";

const Page404 = React.lazy(() => import("pages/404"));
const CurrentRoute = React.lazy(
  () => import("components/currentRoute/CurrentRoute")
);
const AppHeader = React.lazy(() => import("features/appHeader/AppHeader"));
const MainPage = React.lazy(() => import("pages/MainPage"));
const Page1 = React.lazy(() => import("pages/Page1"));
const Page2 = React.lazy(() => import("pages/Page2"));

export default function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
      </Helmet>
      <div className="app">
        <Router>
          <main>
            <CurrentRoute />
            <AppHeader>header content</AppHeader>
            <React.Suspense fallback={<Spinner />}>
              <Routes>
                <Route path="/" element={<MainPage />} />

                <Route path="/page1" element={<Page1 />} />
                <Route path="/page2" element={<Page2 />} />

                <Route path="*" element={<Page404 />} />
              </Routes>
            </React.Suspense>
          </main>
        </Router>
      </div>
    </>
  );
}
