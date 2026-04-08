/* eslint-disable no-unused-vars */
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { useState, useEffect } from "react";
import skylarkLogo from "../assets/logo.png";
import { useNavigate, useLocation } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => {

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const Links = [
    { name: "Home", link: "home" },
    { name: "Services", link: "services" },
    { name: "Projects", link: "projects" },
    { name: "About Us", link: "about" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (link) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: true });
      setTimeout(() => {
        const element = document.getElementById(link);
        if (element) {
          scroll.scrollTo(element.offsetTop - 70, {
            smooth: true,
          });
        } else {
          console.warn(`Element with id "${link}" not found`);
        }
      }, 100);
    } else {
      const element = document.getElementById(link);
      if (element) {
        scroll.scrollTo(element.offsetTop - 70, {
          smooth: true,
        });
      } else {
        console.warn(`Element with id "${link}" not found`);
      }
    }
    setIsOpen(false);
  };

  return (
    <div className="w-full sticky top-0 z-50 bg-white border-b border-black/10 shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
      <div className="md:px-10 px-7 flex justify-between items-center relative h-[80px]">
        {/* Logo (Left) */}
        <div onClick={() => navigate("/")} className="cursor-pointer">
          <img
            src={skylarkLogo}
            className="w-32 h-12 object-contain"
            alt="SKYLARK IT"
          />
        </div>

        {/* Menu Icon (Mobile) */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="
    md:hidden flex items-center justify-center
    absolute right-8 top-1/2 -translate-y-1/2
    cursor-pointer z-2 border-transparent
    p-2 rounded-xl w-11 h-11
    bg-gradient-to-br from-[#1C75BC] to-[#2FB3E3]
    shadow-[0_0_15px_rgba(47,179,227,0.45)]
    active:scale-90
    transition-all duration-300 ease-in-out
  "
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <motion.path
              d="M3 6h18"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            />
            <motion.path
              d="M3 12h18"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.path
              d="M3 18h18"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            />
          </motion.svg>
        </div>

        {/* Centered Navigation Links */}
        <ul
          className={`flex flex-col md:flex md:flex-row md:items-center md:justify-center md:space-x-10 
  absolute md:static 
  top-[81px] md:top-0 
  left-0 
  h-[calc(100vh-80px)] md:h-auto 
  w-[75%] md:w-auto 
  bg-white 
  transition-all duration-300 ease-in-out md:transition-none
  z-10
  ${isOpen
              ? "translate-x-0 opacity-100 md:translate-x-0 md:opacity-100"
              : "-translate-x-full opacity-0 md:translate-x-0 md:opacity-100"}
`}
        >
          {Links.map((link, index) => (
            <li
              key={index}
              className="font-semibold my-2 md:my-0 text-[20px] text-center md:pt-0 pt-4"
            >
              {/* Desktop style */}
              <button
                onClick={() => handleNavigation(link.link)}
                className=" hidden md:inline-block relative text-black group transition-all duration-300 ease-out hover:text-deep-sky hover:-translate-y-1 hover:scale-105"
              >
                {link.name}

                <span className="absolute -top-0.5 right-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full group-hover:right-0"></span>
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </button>

              {/* Mobile style */}
              <div className="md:hidden">
                <button
                  onClick={() => handleNavigation(link.link)}
                  className="md:hidden w-[80%] mx-auto block rounded-md border border-gray-300 bg-white py-2 my-2 text-black shadow-sm transition-all duration-200 hover:bg-normal-sky"
                >
                  {link.name}
                </button>

              </div>
            </li>
          ))}

          <li className="md:hidden mt-auto px-6 pb-8">
            <div className="flex flex-col items-center gap-5 text-center">
              <img
                src={skylarkLogo}
                alt="SKYLARK IT"
                className="w-28 h-auto mx-auto"
              />

              <div className="flex items-center justify-center gap-4 text-gray-500">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors duration-200 hover:text-blue-600"
                >
                  <FaFacebookF className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors duration-200 hover:text-pink-500"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors duration-200 hover:text-blue-700"
                >
                  <FaLinkedinIn className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors duration-200 hover:text-sky-500"
                >
                  <FaTwitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </li>
        </ul>

        {/* Contact Us Button (Right) */}
        <div className="hidden md:block">
          <div
            onClick={() => handleNavigation("contact")}
            className="relative group cursor-pointer select-none"
          >
            {/* Main Button */}
            <div
              className="relative px-6 py-2 border-2 border-blue-500 text-blue-500 font-bold text-lg rounded-lg 
      transform transition-all duration-300 
      group-hover:translate-y-1 group-hover:translate-x-1 
      shadow-[6px_6px_10px_rgba(0,0,0,0.6),-6px_-6px_10px_rgba(255,255,255,0.1)] 
      group-hover:shadow-[8px_8px_15px_rgba(0,0,0,0.8),-8px_-8px_15px_rgba(255,255,255,0.15)] 
      bg-white"
            >
              Contact Us
            </div>

            {/* Dashed Border Outline */}
            <div
              className="absolute inset-0 border-2 border-dashed border-blue-500 rounded-lg 
      opacity-50 group-hover:opacity-100 transition-opacity duration-300"
            ></div>

            {/* Animated Ping Dots */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full animate-ping shadow-lg"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-500 rounded-full animate-ping shadow-lg"></div>
            <div className="absolute top-1/3 left-3 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-70"></div>
            <div className="absolute top-2/3 right-3 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-70"></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
