import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import General from "./pages/General";
import Archive from "./pages/Archive";
import Trash from "./pages/Trash";
import Login from "./pages/Login";

const App = () => {
  return (
    <>
      <header>
        <NavLink to={"/general"}>General</NavLink>
        <NavLink to={"/archive"}>Archive</NavLink>
        <NavLink to={"/trash"}>Trash</NavLink>
      </header>
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
