import React, { createContext, useState } from "react";
import Header from "./components/header/Header";
import AppRouter from "./components/AppRouter";

const App = () => {
  return (
    <>
      <Header modalOpenAndClose={"func"} />

      <AppRouter />
    </>
  );
};

export default App;
