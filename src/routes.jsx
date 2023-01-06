import { lazy } from "react";

const routes = [
  {
    path: "/general",
    Component: lazy(() => import(/* webpack-chunk-name: 'pages/general' */ "./pages/General")),
  },
  {
    path: "/login",
    Component: lazy(() => import(/* webpack-chunk-name: 'pages/*' */ "./pages/Login")),
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
