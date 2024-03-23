import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.scss";

import Page404 from "pages/404";
import MainPage from "pages/MainPage";
import Page1 from "pages/Page1";
import Page2 from "pages/Page2";
import AppHeader from "features/appHeader/AppHeader";
import CurrentRoute from "components/currentRoute/CurrentRoute";

export default function App() {
  return (
    <div className="app">
      <Router>
        <CurrentRoute />
        <AppHeader>header content</AppHeader>
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />

            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />

            <Route path="*" element={<Page404 />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}
