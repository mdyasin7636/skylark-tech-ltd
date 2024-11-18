import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import skylarkLogo from "../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const Links = [
    { name: "Home", link: "home" },
    { name: "Services", link: "services" },
    { name: "Projects", link: "projects" },
    { name: "About Us", link: "about" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="shadow-md w-full top-0 left-0 flex">
      {/* Logo Section */}
      <div className="bg-white w-full md:w-3/12 flex items-center justify-center relative py-3">
        <ScrollLink to="home" smooth={true} duration={500} offset={-70}>
          <img
            src={skylarkLogo}
            className="w-40 h-[68px] cursor-pointer"
            alt="SKYLARK IT"
          />
        </ScrollLink>
        {/* Diagonal Divider */}
        <div className="absolute top-0 -right-5 h-full w-10 clip-diagonal"></div>
      </div>
      {/* Nav links Section */}
      <div className="w-3/4 bg-[#0A0C23] flex items-center justify-end pr-20">
        {/* Menu Icon */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="absolute right-8 top-[84px] cursor-pointer md:hidden z-20"
        >
          {isOpen ? (
            <AiOutlineClose size={30} color="white" />
          ) : (
            <FiMenu size={30} color="white" />
          )}
        </div>

        {/* Nav Links */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-8 absolute md:static bg-[#0A0C23] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in ${
            isOpen ? "top-[60px]" : "top-[-490px]"
          } z-10`}
        >
          {Links.map((link, index) => (
            <li
              key={index}
              className="font-semibold my-7 md:my-0 md:ml-8 text-white text-xl"
            >
              <ScrollLink
                to={link.link}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer"
              >
                {link.name}
              </ScrollLink>
            </li>
          ))}
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={() => setIsOpen(false)}
          >
            <button className="group relative inline-flex h-11 items-center justify-center overflow-hidden rounded-md bg-[#1A1D2B] md:mx-6 font-medium text-neutral-50 border border-deep-sky">
              <span className="absolute h-0 w-0 rounded-full bg-deep-sky transition-all duration-500 group-hover:h-56 group-hover:w-56"></span>
              <span className="relative px-3 text-xl ">Contact Us</span>
            </button>
          </ScrollLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
