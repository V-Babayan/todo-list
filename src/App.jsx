import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import General from "./pages/General";
import Login from "./pages/Login";
import routes from "./routes";

const App = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<General />} />
      {routes.map(({ path, Component }, index) => (
        <Route
          key={index}
          path={path}
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <Component />
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
};

export default App;
