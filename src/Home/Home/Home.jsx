import AboutUs from "../AboutUs/AboutUs";
import Achievements from "../Achievements/Achievements";
import Clients from "../Clients/Clients";
import ContactUs from "../ContactUs/ContactUs";
import CustomerReviews from "../CustomerReviews/CustomerReviews";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import Slider from "../Slider/Slider";
// import SocialMediaPosts from "../SocialMediaPosts/SocialMediaPosts";
import TeamMembers from "../TeamMembers/TeamMembers";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div>
      <Slider />
      <Services />
      <AboutUs />
      <Projects />
      <WhyChooseUs />
      <CustomerReviews />
      <Achievements />
      <TeamMembers />
      <Clients />
      {/* <SocialMediaPosts /> */}
      <ContactUs />
    </div>
  );
};

export default Home;
