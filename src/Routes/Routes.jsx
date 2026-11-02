import { createBrowserRouter, } from "react-router-dom";
import Main from "../Layouts/Main";
import ErrorPage from "../ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        lazy: async () => ({
          Component: (await import("../Home/Home/Home")).default,
        }),
      },
      {
        path: "/all-projects",
        lazy: async () => ({
          Component: (await import("../AllProjects/AllProjects")).default,
        }),
      },
      {
        path: "/contact-us",
        lazy: async () => ({
          Component: (await import("../ContactPage/ContactPage")).default,
        }),
      },
      {
        path: "/:page",
        lazy: async () => ({
          Component: (await import("../InformationPage/InformationPage")).default,
        }),
      },
    ]
  },
]);