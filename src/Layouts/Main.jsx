import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const Main = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (

    <div>
      <Navbar />
      <Outlet />
      <Footer />
      <WhatsAppButton />
    </div >
  );
};

export default Main;
