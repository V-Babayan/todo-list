import { lazy } from "react";
import { Paths } from "./helpers/consts";

const routes = [
  {
    path: "/*",
    Component: lazy(() => import(/* webpack-chunk-name: 'pages/' */ "./pages/Main")),
  },
  {
    path: Paths.TODOS,
    Component: lazy(() => import(/* webpack-chunk-name: 'pages/todos' */ "./pages/Todos")),
  },
  {
    path: Paths.ARCHIVES,
    Component: lazy(() => import(/* webpack-chunk-name: 'pages/archive' */ "./pages/Archive")),
  },
  {
    path: Paths.TRASH,
    Component: lazy(() => import(/* webpack-chunk-name: 'pages/trash' */ "./pages/Trash")),
  },
];

export default routes;
