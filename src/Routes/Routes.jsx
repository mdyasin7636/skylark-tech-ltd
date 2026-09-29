import { createBrowserRouter,} from "react-router-dom";
import Main from "../Layouts/Main";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home/Home";
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy"
import AllProjects from "../AllProjects/AllProjects";
import AboutUs from "../Home/AboutUs/AboutUs";
import ContactUs from "../Home/ContactUs/ContactUs";
import InformationPage from "../InformationPage/InformationPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <ErrorPage/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/all-projects",
            element: <AllProjects/>
        },
        {
            path: "/PrivacyPolicy",
            element: <PrivacyPolicy/>
        },
        {
          path: "/about-us",
          element: <AboutUs/>
        },
        {
          path: "/contact-us",
          element: <ContactUs/>
        },
        {
          path: "/:page",
          element: <InformationPage/>
        },
        
      ]
    },
  ]);