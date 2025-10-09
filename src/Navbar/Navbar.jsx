/* eslint-disable no-unused-vars */
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import skylarkLogo from "../assets/logo.png";
import { useNavigate, useLocation } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const Links = [
    { name: "Home", link: "home" },
    { name: "Services", link: "services" },
    { name: "Projects", link: "projects" },
    { name: "About Us", link: "about" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Custom Scroll Logic
  const handleNavigation = (link) => {
    if (location.pathname !== "/") {
      // Redirect to the homepage and scroll
      navigate("/", { replace: true });
      setTimeout(() => {
        scroll.scrollTo(document.getElementById(link).offsetTop - 70, {
          smooth: true,
        });
      }, 100); // Add a delay to ensure the page is fully loaded
    } else {
      // Scroll to the section if already on the homepage
      scroll.scrollTo(document.getElementById(link).offsetTop - 70, {
        smooth: true,
      });
    }
    setIsOpen(false); // Close menu after clicking
  };

  return (
    <div className="shadow-md w-full sticky top-0 z-50 bg-white">
      <div className="md:px-10 py-2 px-7 md:flex justify-between items-center">
        {/* logo here */}
        <div onClick={() => navigate("/")} className="cursor-pointer">
          <img src={skylarkLogo} className="w-40 h-16" alt="SKYLARK IT" />
        </div>
        {/* menu icon */}

        <div
          onClick={() => setIsOpen(!isOpen)}
          className="absolute right-8 top-[22px] cursor-pointer md:hidden z-20 border-2 border-black p-1 rounded-lg"
        >
          {isOpen ? (
            <AiOutlineClose size={30} color="black" />
          ) : (
            <FiMenu size={30} color="black" />
          )}
        </div>

        {/* nav links */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-8 absolute md:static left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in bg-white ${
            isOpen ? "top-[80px]" : "top-[-490px]"
          } z-10`}
        >
          {Links.map((link, index) => (
            <li
              key={index}
              className="font-semibold my-7 md:my-0 md:ml-8 text-lg group"
            >
              <button
                onClick={() => handleNavigation(link.link)}
                className="relative inline-block text-black transition-all duration-300"
              >
                {link.name}
                {/* Top Line */}
                <span className="absolute top-0 right-0 h-[2px] w-0 bg-deep-sky transition-all duration-300 group-hover:w-full group-hover:right-0"></span>
                {/* Bottom Line */}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-deep-sky transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handleNavigation("contact")}
              className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-full bg-[#1A1D2B] px-4 md:ml-6 font-medium text-neutral-50 border border-deep-sky"
            >
              <span className="absolute h-0 w-0 rounded-full bg-deep-sky transition-all duration-300 group-hover:h-56 group-hover:w-56"></span>
              <span className="relative">CONTACT US</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
