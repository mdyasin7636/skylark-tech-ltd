import AboutUs from "../AboutUs/AboutUs";
import Achievements from "../Achievements/Achievements";
import Clients from "../Clients/Clients";
import ContactUs from "../ContactUs/ContactUs";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import Slider from "../Slider/Slider";
// import SocialMediaPosts from "../SocialMediaPosts/SocialMediaPosts";
import TeamMembers from "../TeamMembers/TeamMembers";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Slider />
      <Services />
      <AboutUs />
      <Projects />
      <WhyChooseUs />
      <Achievements />
      <TeamMembers />
      <Clients />
      {/* <SocialMediaPosts /> */}
      <ContactUs />
    </div>
  );
};

export default Home;
