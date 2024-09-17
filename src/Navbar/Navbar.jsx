import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";
import skylarkLogo from "../assets/logo.png"

const Navbar = () => {
  const Links = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/" },
    { name: "Projects", link: "/" },
    { name: "Blogs", link: "/" },
    { name: "About Us", link: "/" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="shadow-md w-full top-0 left-0">
      <div className="md:px-10 py-2 px-7 md:flex justify-between items-center bg-white">
        {/* logo here */}
        <Link to="/">
          <div>
            <img src={skylarkLogo} className="w-40 h-16" alt="SKYLARK IT" />
          </div>
        </Link>

        {/* menu links */}

        <div
          onClick={() => setIsOpen(!isOpen)}
          className="absolute right-8 top-[84px] cursor-pointer md:hidden z-20"
        >
          {isOpen ? <AiOutlineClose size={30} color="black" /> : <FiMenu size={30} color="black" />}
        </div>

        {/* nav links */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-8 absolute md:static bg-white left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in ${
            isOpen ? "top-16" : "top-[-490px]"
          } z-10`}
        >
          {Links.map((link, index) => (
            <li key={index} className="font-semibold my-7 md:my-0 md:ml-8">
              <a href="/">{link.name}</a>
            </li>
          ))}
          <button className="bg-deep-sky text-white py-1 px-3 md:ml-8 rounded-md md:static">
            Contact Us
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
