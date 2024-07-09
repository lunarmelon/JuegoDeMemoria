import { RouteObject, createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./constants";

import { Game } from "../pages";
import PublicRouter from "./PublicRouter";

const routes: RouteObject[] = [
  {
    path: ROUTES.HOME,
    element: <PublicRouter />,
    children: [{ path: ROUTES.HOME, element: <Game /> }],
  },
];

export const router = createBrowserRouter(routes);
