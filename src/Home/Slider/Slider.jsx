import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

const bannerData = {
  img: "https://res.cloudinary.com/dlaatmz5a/image/upload/v1729540688/banner1_fmzljr.jpg",
  heading: "Perfect IT Solution\nFor Your Business",
  text: "At Skylark IT, we innovate cutting-edge IT solutions designed to\nelevate your business for tomorrow's challenges and opportunities.",
};

const Banner = () => {
  return (
    <div id="home" className="relative">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Banner image */}
      <img
        src={bannerData.img}
        className="w-full h-[60vh] md:h-[70vh] lg:h-[100vh] object-cover"
        alt="Banner"
        loading="lazy"
      />

      {/* Banner content */}
      <div className="absolute bottom-28 md:bottom-36 md:left-10 z-20 text-white text-center md:text-left">
        <p className="font-semibold">SECURE & IT SERVICES</p>
        <h2 className="md:text-6xl text-4xl font-bold mt-2">
          {bannerData.heading.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </h2>
        <p className="text-lg mt-4 mx-4 md:mx-0">
          {bannerData.text.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </p>

        {/* Action buttons */}
        <div className="flex space-x-4 mt-6 justify-center md:justify-normal">
          <Link to="/all-projects">
            <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-[#1A1D2B] px-6 font-medium text-neutral-50 border border-deep-sky">
              <span className="absolute h-0 w-0 rounded-full bg-deep-sky transition-all duration-300 group-hover:h-56 group-hover:w-56"></span>
              <span className="relative">DISCOVER MORE</span>
            </button>
          </Link>

          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
          >
            <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-[#1A1D2B] px-6 font-medium text-neutral-50 border border-deep-sky">
              <span className="absolute h-0 w-0 rounded-full bg-deep-sky transition-all duration-300 group-hover:h-56 group-hover:w-56"></span>
              <span className="relative">CONTACT US</span>
            </button>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};

export default Banner;
