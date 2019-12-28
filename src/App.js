import React from "react";
import Routes from "./infrastructure/routes/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import "./styles/style.scss";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Routes />
      </ScrollToTop>
    </Router>
  );
}

export default App;
