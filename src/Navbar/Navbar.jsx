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

  const handleNavigation = (link) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: true });
      setTimeout(() => {
        scroll.scrollTo(document.getElementById(link).offsetTop - 70, {
          smooth: true,
        });
      }, 100);
    } else {
      scroll.scrollTo(document.getElementById(link).offsetTop - 70, {
        smooth: true,
      });
    }
    setIsOpen(false);
  };

  return (
    <div className="shadow-md w-full sticky top-0 z-50 bg-white">
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
          className="md:hidden flex items-center justify-center absolute right-8 top-1/2 -translate-y-1/2 cursor-pointer z-20 border-2 border-black p-1 rounded-lg"
        >
          {isOpen ? (
            <AiOutlineClose size={26} color="black" />
          ) : (
            <FiMenu size={26} color="black" />
          )}
        </div>

        {/* Centered Navigation Links */}
        <ul
          className={`md:flex md:items-center md:justify-center md:space-x-10 absolute md:static left-0 w-full md:w-auto transition-all duration-300 ease-in bg-white ${
            isOpen ? "top-[80px]" : "top-[-490px]"
          } z-10`}
        >
          {Links.map((link, index) => (
            <li
              key={index}
              className="font-semibold my-4 md:my-0 text-[18px] text-center"
            >
              {/* Desktop style */}
              <button
                onClick={() => handleNavigation(link.link)}
                className="hidden md:inline-block relative text-black group transition-all duration-300"
              >
                {link.name}
                <span className="absolute top-0 right-0 h-[2px] w-0 bg-deep-sky transition-all duration-300 group-hover:w-full group-hover:right-0"></span>
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-deep-sky transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </button>

              {/* Mobile style */}
              <button
                onClick={() => handleNavigation(link.link)}
                className="md:hidden w-[80%] mx-auto block rounded-md border border-gray-300 bg-white py-2 text-black shadow-sm transition-all duration-200 hover:bg-gray-200"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Contact Us Button (Right) */}
        <div className="hidden md:block">
          <button
            onClick={() => handleNavigation("contact")}
            className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-full bg-[#1A1D2B] px-4 font-medium text-neutral-50 border border-deep-sky"
          >
            <span className="absolute h-0 w-0 rounded-full bg-deep-sky transition-all duration-300 group-hover:h-56 group-hover:w-56"></span>
            <span className="relative">CONTACT US</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
