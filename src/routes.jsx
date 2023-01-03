import { lazy } from "react";

const routes = [
  {
    path: "/general",
    Component: lazy(() => import(/* webpack-chunk-name: 'pages/general' */ "./pages/General")),
  },
];

export default routes;
