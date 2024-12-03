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
    <div className="shadow-md w-full top-0 left-0 bg-white">
      <div className="md:px-10 py-2 px-7 md:flex justify-between items-center ">
        {/* logo here */}
        <div onClick={() => navigate("/")} className="cursor-pointer">
          <img src={skylarkLogo} className="w-40 h-16" alt="SKYLARK IT" />
        </div>
        {/* menu icon */}

        <div
          onClick={() => setIsOpen(!isOpen)}
          className="absolute right-8 top-[84px] cursor-pointer md:hidden z-20 border-2 border-black p-1 rounded-lg"
        >
          {isOpen ? (
            <AiOutlineClose size={30} color="black" />
          ) : (
            <FiMenu size={30} color="black" />
          )}
        </div>

        {/* nav links */}

        <ul
          className={`md:flex md:items-center md:pb-0 pb-8 absolute md:static bg-white left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in ${
            isOpen ? "top-16" : "top-[-490px]"
          } z-10`}
        >
          {Links.map((link, index) => (
            <li key={index} className="font-semibold my-7 md:my-0 md:ml-8">
              <button
                onClick={() => handleNavigation(link.link)}
                className="cursor-pointer"
              >
                {link.name}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handleNavigation("contact")}
              className="bg-deep-sky text-white py-1 px-3 md:ml-8 rounded-md"
            >
              Contact Us
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
