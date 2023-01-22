import React, { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import routes from "./routes";
import Header from "./components/header/Header";
import Loader from "./components/loader/Loader";
import Todo from "./store/Todo";

const App = () => {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10?_page=10")
      .then((res) => res.json())
      .then((data) => Todo.setTodos(data));
  }, []);

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
