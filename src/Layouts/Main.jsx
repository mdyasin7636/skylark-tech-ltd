import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import MiniNav from "../Home/MiniNav/MiniNav";

const Main = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (pathname === "/") {
      document.title = "Skylark IT";
    }
  }, [pathname]);

  return (

    <div>
      <MiniNav />
      <Navbar />
      <Outlet />
      <Footer />
      <WhatsAppButton />
    </div >
  );
};

export default Main;
