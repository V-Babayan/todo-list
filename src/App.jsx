import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import routes from "./routes";
import Header from "./components/header/Header";
import Loader from "./components/loader/Loader";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        {routes.map(({ path, Component }, index) => (
          <Route
            key={index}
            path={path}
            element={
              <Suspense fallback={<Loader />}>
                <Component />
              </Suspense>
            }
          />
        ))}
      </Routes>
    </>
  );
};

export default App;
