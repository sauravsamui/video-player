import React from "react";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./Constants";
import App from "../App";
import { Home } from "../pages/Home";
const ProjectRoutes = () => {
  const routes = createBrowserRouter([
    {
      path: ROUTES.HOME,
      element: <App />,
      children: [
        {
          path: ROUTES.HOME,
          element: <Home />,
        },
        {
          path: ROUTES.VIDEO_DETAILS,
          element: <Home />,
        },
        {
          path: ROUTES.NO_PATH,
          element: <Navigate to={ROUTES.HOME} replace />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
};

export default ProjectRoutes;
