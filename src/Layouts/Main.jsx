import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import MiniNav from "../Home/MiniNav/MiniNav";

const Main = () => {
  return (
    <div>
      <MiniNav/>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;