import React from "react";
import { Routes, Route } from "react-router-dom";
import General from "./pages/General";
import Archive from "./pages/Archive";
import Trash from "./pages/Trash";
import Login from "./pages/Login";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <>
      <Layout />
      <Routes>
        <Route path='/general' element={<General />} />
        <Route path='/archive' element={<Archive />} />
        <Route path='/trash' element={<Trash />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
