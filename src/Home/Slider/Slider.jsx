import { FaBolt, FaNetworkWired } from "react-icons/fa";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 to-indigo-800 text-white overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dlaatmz5a/image/upload/v1754747572/photo-1451187580459-43490279c0fa_fvwod3.jpg')",
        }}
      ></div>

      <div className="container mx-auto px-4 mt-16 mb-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Side */}
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Innovate.
              <br />
              Transform.
              <br />
              Succeed.
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Empowering businesses with cutting-edge solutions for a digital
              future.
            </p>
            <motion.div
              className="flex space-x-4 mt-6 justify-center md:justify-normal"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Link to="/all-projects">
                <button className="group relative inline-flex h-12 w-44 items-center justify-center overflow-hidden rounded-full bg-[#1A1D2B] font-medium text-neutral-50 border border-deep-sky">
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
                <button className="group relative inline-flex h-12 w-44 items-center justify-center overflow-hidden rounded-full bg-[#1A1D2B] font-medium text-neutral-50 border border-deep-sky">
                  <span className="absolute h-0 w-0 rounded-full bg-deep-sky transition-all duration-300 group-hover:h-56 group-hover:w-56"></span>
                  <span className="relative">CONTACT US</span>
                </button>
              </ScrollLink>
            </motion.div>
          </div>

          {/* Right Side */}
          <div className="w-full md:w-1/2 md:pl-12">
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-2xl">
              <h2 className="text-2xl font-semibold mb-6">Why Skylark IT?</h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <FaBolt className="w-6 h-6 mr-3 text-yellow-400" />
                  <span>Innovative Web Experiences</span>
                </li>
                <li className="flex items-center">
                  <HiOutlineShieldCheck className="w-6 h-6 mr-3 text-green-400" />
                  <span>Targeted Marketing Strategies</span>
                </li>
                <li className="flex items-center">
                  <FaNetworkWired className="w-6 h-6 mr-3 text-purple-400" />
                  <span>Seamless IT Management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0 -mb-[1px]">
        <svg viewBox="0 0 1440 122" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 122L60 107C120 92 240 62 360 47C480 32 600 32 720 39.5C840 47 960 62 1080 69.5C1200 77 1320 77 1380 77L1440 77V122H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Banner;
