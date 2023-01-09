import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import routes from "../routes";
import Loader from "./loader/Loader";

const AppRouter = () => {
  return (
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
      <Route
        path='/*'
        element={<Main />}
      />
    </Routes>
  );
};

export default AppRouter;
