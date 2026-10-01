import { createBrowserRouter, } from "react-router-dom";
import Main from "../Layouts/Main";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home/Home";
import AllProjects from "../AllProjects/AllProjects";
import InformationPage from "../InformationPage/InformationPage";
import ContactPage from "../ContactPage/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/all-projects",
        element: <AllProjects />
      },
      {
        path: "/contact-us",
        element: <ContactPage />
      },
      
      {
        path: "/:page",
        element: <InformationPage />
      },

    ]
  },
]);