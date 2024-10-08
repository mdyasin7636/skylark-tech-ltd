import { createBrowserRouter,} from "react-router-dom";
import Main from "../Layouts/Main";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home/Home";
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy"
import UserDataDeletion from "../UserDataDeletion/UserDataDeletion"

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
            path: "/PrivacyPolicy",
            element: <PrivacyPolicy/>
        },
        {
            path: "/UserDataDeletion",
            element: <UserDataDeletion/>
        },
        
      ]
    },
  ]);