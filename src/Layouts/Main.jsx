import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const Main = () => {
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
