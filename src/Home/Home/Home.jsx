import AboutUs from "../AboutUs/AboutUs";
import Blogs from "../Blogs/Blogs";
import ContactUs from "../ContactUs/ContactUs";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import Slider from "../Slider/Slider";

const Home = () => {
    return (
        <div>
            <Slider />
            <Services/>
            <Projects/>
            <AboutUs/>
            <Blogs/>
            <ContactUs/>
        </div>
    );
};

export default Home;