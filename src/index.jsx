import React from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { HashRouter as Router } from "react-router-dom";
import theme, { GlobalStyles } from "./theme";

import Context from "./components/Context";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <Router>
      <Context>
        <GlobalStyles />
        <App />
      </Context>
    </Router>
  </ThemeProvider>
);
