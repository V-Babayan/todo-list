import React from "react";
import { Routes, Route } from "react-router-dom";
import General from "./pages/General";
import Login from "./pages/Login";

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/general' element={<General />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
