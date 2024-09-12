import { useState } from 'react';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const SocialMediaPosts = () => {

    const [isOpen, setIsOpen] = useState(false);
  const [expanded, setExpanded] = useState({
    services: false,
    pages: false,
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleExpand = (menu) => {
    setExpanded({ ...expanded, [menu]: !expanded[menu] });
  };

    return (
        <nav className="bg-[#0b0f19]">
        {/* Desktop Navbar */}
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/path/to/logo.png" alt="WebTeck" className="h-8" />
            <span className="text-white text-2xl font-bold ml-2">WebTeck</span>
          </div>
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#home" className="text-white hover:text-purple-400">Home</a>
            <a href="#about" className="text-white hover:text-purple-400">About Us</a>
            <div className="relative group">
              <a href="#services" className="text-white hover:text-purple-400 flex items-center">
                Services <FaChevronDown className="ml-1" />
              </a>
              <div className="absolute left-0 hidden group-hover:block bg-white text-black mt-1 p-2 shadow-lg">
                <a href="#service1" className="block px-4 py-2 hover:bg-gray-200">Service 1</a>
                <a href="#service2" className="block px-4 py-2 hover:bg-gray-200">Service 2</a>
              </div>
            </div>
            <div className="relative group">
              <a href="#pages" className="text-white hover:text-purple-400 flex items-center">
                Pages <FaChevronDown className="ml-1" />
              </a>
              <div className="absolute left-0 hidden group-hover:block bg-white text-black mt-1 p-2 shadow-lg">
                <a href="#page1" className="block px-4 py-2 hover:bg-gray-200">Page 1</a>
                <a href="#page2" className="block px-4 py-2 hover:bg-gray-200">Page 2</a>
              </div>
            </div>
            <a href="#blog" className="text-white hover:text-purple-400">Blog</a>
            <a href="#contact" className="text-white hover:text-purple-400">Contact Us</a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="..."></path></svg>
            </button>
            <button className="text-white relative">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="..."></path></svg>
              <span className="absolute top-0 right-0 bg-purple-600 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">0</span>
            </button>
          </div>
          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-white">
            {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
  
        {/* Mobile Navbar */}
        <div className={`fixed top-0 left-0 w-64 h-full bg-[#0b0f19] text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:hidden`}>
          <div className="flex justify-between items-center p-4">
            <div className="flex items-center">
              <img src="/path/to/logo.png" alt="WebTeck" className="h-8" />
              <span className="text-white text-2xl font-bold ml-2">WebTeck</span>
            </div>
            <button onClick={toggleMenu} className="text-white">
              <FaTimes className="w-6 h-6" />
            </button>
          </div>
          <div className="px-4">
            <a href="#home" className="block py-2">Home</a>
            <a href="#about" className="block py-2">About Us</a>
            <div className="py-2">
              <button onClick={() => toggleExpand('services')} className="flex items-center justify-between w-full">
                Services <FaChevronDown className={`transition-transform ${expanded.services ? 'rotate-180' : ''}`} />
              </button>
              {expanded.services && (
                <div className="pl-4 mt-2">
                  <a href="#service1" className="block py-2">Service 1</a>
                  <a href="#service2" className="block py-2">Service 2</a>
                </div>
              )}
            </div>
            <div className="py-2">
              <button onClick={() => toggleExpand('pages')} className="flex items-center justify-between w-full">
                Pages <FaChevronDown className={`transition-transform ${expanded.pages ? 'rotate-180' : ''}`} />
              </button>
              {expanded.pages && (
                <div className="pl-4 mt-2">
                  <a href="#page1" className="block py-2">Page 1</a>
                  <a href="#page2" className="block py-2">Page 2</a>
                </div>
              )}
            </div>
            <a href="#blog" className="block py-2">Blog</a>
            <a href="#contact" className="block py-2">Contact Us</a>
          </div>
        </div>
      </nav>
    );
};

export default SocialMediaPosts;