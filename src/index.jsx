import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import theme, { GlobalStyles } from "./theme";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyles />
        <App />
      </Router>
    </ThemeProvider>
  </StrictMode>
);
