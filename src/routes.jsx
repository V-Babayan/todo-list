import { lazy } from "react";

const routes = [
  {
    path: "/login",
    Component: lazy(() => import(/* webpack-chunk-name: 'pages/*' */ "./pages/Login")),
  },
  {
    path: "/todos",
    Component: lazy(() => import(/* webpack-chunk-name: 'pages/todos' */ "./pages/Todos")),
  },
  {
    path: "/archive",
    Component: lazy(() => import(/* webpack-chunk-name: 'pages/archive' */ "./pages/Archive")),
  },
  {
    path: "/trash",
    Component: lazy(() => import(/* webpack-chunk-name: 'pages/trash' */ "./pages/Trash")),
  },
];

export default routes;
