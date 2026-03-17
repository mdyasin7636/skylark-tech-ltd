import AboutUs from "../AboutUs/AboutUs";
import Achievements from "../Achievements/Achievements";
import Clients from "../Clients/Clients";
import ContactUs from "../ContactUs/ContactUs";
import CustomerReviews from "../CustomerReviews/CustomerReviews";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
// import SocialMediaPosts from "../SocialMediaPosts/SocialMediaPosts";
import TeamMembers from "../TeamMembers/TeamMembers";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import Banner from "../Banner/Banner";


const Home = () => {

  return (
    <div>
      <Banner />
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
