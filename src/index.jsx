import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import theme, { GlobalStyles } from "./theme";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <App />
  </ThemeProvider>
);
