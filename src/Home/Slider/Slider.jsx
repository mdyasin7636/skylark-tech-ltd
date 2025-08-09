import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // ✅ Framer Motion import

const bannerData = {
  img: "https://res.cloudinary.com/dlaatmz5a/image/upload/v1754747572/photo-1451187580459-43490279c0fa_fvwod3.jpg",
  heading: "Perfect IT Solution\nFor Your Business",
  text: "At Skylark IT, we innovate cutting-edge IT solutions designed to\nelevate your business for tomorrow's challenges and opportunities.",
};

const Banner = () => {
  return (
    <div id="home" className="relative overflow-hidden">
      {/* Background overlay */}
      <motion.div
        className="absolute inset-0 bg-black opacity-50 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
      ></motion.div>

      {/* Banner image with zoom-in effect */}
      <motion.img
        src={bannerData.img}
        className="w-full h-[60vh] md:h-[70vh] lg:h-[100vh] object-cover"
        alt="Banner"
        loading="lazy"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* Banner content */}
      <div className="absolute bottom-28 md:bottom-36 md:left-10 z-20 text-white text-center md:text-left">
        <motion.p
          className="font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          SECURE & IT SERVICES
        </motion.p>

        <motion.h2
          className="md:text-6xl text-4xl font-bold mt-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {bannerData.heading.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </motion.h2>

        <motion.p
          className="text-lg mt-4 mx-4 md:mx-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {bannerData.text.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </motion.p>

        {/* Action buttons */}
        <motion.div
          className="flex space-x-4 mt-6 justify-center md:justify-normal"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <Link to="/all-projects">
            <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-[#1A1D2B] px-6 font-medium text-neutral-50 border border-deep-sky">
              <span className="absolute h-0 w-0 rounded-full bg-deep-sky transition-all duration-300 group-hover:h-56 group-hover:w-56"></span>
              <span className="relative">DISCOVER MORE</span>
            </button>
          </Link>

          <ScrollLink to="contact" smooth={true} duration={500} offset={-70}>
            <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-[#1A1D2B] px-6 font-medium text-neutral-50 border border-deep-sky">
              <span className="absolute h-0 w-0 rounded-full bg-deep-sky transition-all duration-300 group-hover:h-56 group-hover:w-56"></span>
              <span className="relative">CONTACT US</span>
            </button>
          </ScrollLink>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;