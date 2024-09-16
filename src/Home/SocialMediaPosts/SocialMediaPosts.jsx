// import { useState } from 'react';
// import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

// const SocialMediaPosts = () => {

//     const [isOpen, setIsOpen] = useState(false);
//   const [expanded, setExpanded] = useState({
//     services: false,
//     pages: false,
//   });

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const toggleExpand = (menu) => {
//     setExpanded({ ...expanded, [menu]: !expanded[menu] });
//   };

//     return (
//         <nav className="bg-[#0b0f19]">
//         {/* Desktop Navbar */}
//         <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//           <div className="flex items-center">
//             <img src="/path/to/logo.png" alt="WebTeck" className="h-8" />
//             <span className="text-white text-2xl font-bold ml-2">WebTeck</span>
//           </div>
//           <div className="hidden md:flex space-x-6 items-center">
//             <a href="#home" className="text-white hover:text-purple-400">Home</a>
//             <a href="#about" className="text-white hover:text-purple-400">About Us</a>
//             <div className="relative group">
//               <a href="#services" className="text-white hover:text-purple-400 flex items-center">
//                 Services <FaChevronDown className="ml-1" />
//               </a>
//               <div className="absolute left-0 hidden group-hover:block bg-white text-black mt-1 p-2 shadow-lg">
//                 <a href="#service1" className="block px-4 py-2 hover:bg-gray-200">Service 1</a>
//                 <a href="#service2" className="block px-4 py-2 hover:bg-gray-200">Service 2</a>
//               </div>
//             </div>
//             <div className="relative group">
//               <a href="#pages" className="text-white hover:text-purple-400 flex items-center">
//                 Pages <FaChevronDown className="ml-1" />
//               </a>
//               <div className="absolute left-0 hidden group-hover:block bg-white text-black mt-1 p-2 shadow-lg">
//                 <a href="#page1" className="block px-4 py-2 hover:bg-gray-200">Page 1</a>
//                 <a href="#page2" className="block px-4 py-2 hover:bg-gray-200">Page 2</a>
//               </div>
//             </div>
//             <a href="#blog" className="text-white hover:text-purple-400">Blog</a>
//             <a href="#contact" className="text-white hover:text-purple-400">Contact Us</a>
//           </div>
//           <div className="hidden md:flex items-center space-x-4">
//             <button className="text-white">
//               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="..."></path></svg>
//             </button>
//             <button className="text-white relative">
//               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="..."></path></svg>
//               <span className="absolute top-0 right-0 bg-purple-600 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">0</span>
//             </button>
//           </div>
//           {/* Mobile Menu Button */}
//           <button onClick={toggleMenu} className="md:hidden text-white">
//             {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
//           </button>
//         </div>

//         {/* Mobile Navbar */}
//         <div className={`fixed top-0 left-0 w-64 h-full bg-[#0b0f19] text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:hidden`}>
//           <div className="flex justify-between items-center p-4">
//             <div className="flex items-center">
//               <img src="/path/to/logo.png" alt="WebTeck" className="h-8" />
//               <span className="text-white text-2xl font-bold ml-2">WebTeck</span>
//             </div>
//             <button onClick={toggleMenu} className="text-white">
//               <FaTimes className="w-6 h-6" />
//             </button>
//           </div>
//           <div className="px-4">
//             <a href="#home" className="block py-2">Home</a>
//             <a href="#about" className="block py-2">About Us</a>
//             <div className="py-2">
//               <button onClick={() => toggleExpand('services')} className="flex items-center justify-between w-full">
//                 Services <FaChevronDown className={`transition-transform ${expanded.services ? 'rotate-180' : ''}`} />
//               </button>
//               {expanded.services && (
//                 <div className="pl-4 mt-2">
//                   <a href="#service1" className="block py-2">Service 1</a>
//                   <a href="#service2" className="block py-2">Service 2</a>
//                 </div>
//               )}
//             </div>
//             <div className="py-2">
//               <button onClick={() => toggleExpand('pages')} className="flex items-center justify-between w-full">
//                 Pages <FaChevronDown className={`transition-transform ${expanded.pages ? 'rotate-180' : ''}`} />
//               </button>
//               {expanded.pages && (
//                 <div className="pl-4 mt-2">
//                   <a href="#page1" className="block py-2">Page 1</a>
//                   <a href="#page2" className="block py-2">Page 2</a>
//                 </div>
//               )}
//             </div>
//             <a href="#blog" className="block py-2">Blog</a>
//             <a href="#contact" className="block py-2">Contact Us</a>
//           </div>
//         </div>
//       </nav>
//     );
// };

// export default SocialMediaPosts;

const SocialMediaPosts = () => {
  return (
    <div className="grid grid-cols-1 gap-10 ml-5">
      <div>
        <a href="#_" className="relative inline-block text-lg group">
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative">Button Text</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </a>
      </div>

      <div>
        <a
          href="#_"
          className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
        >
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
          <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
          <span className="relative">Button Text</span>
        </a>
      </div>

      <div>
        <button className="relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-14 w-56 rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold">
          <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
          <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"></div>
          <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150"></div>
          <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200"></div>
          <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300"></div>
          <p className="z-10">Discover More</p>
        </button>
      </div>

      <div>
        <button className="border hover:scale-95 duration-300 relative group cursor-pointer text-sky-50  overflow-hidden h-16 w-64 rounded-md bg-sky-200 p-2 flex justify-center items-center font-extrabold">
          <div className="absolute right-32 -top-4  group-hover:top-1 group-hover:right-2 z-10 w-40 h-40 rounded-full group-hover:scale-150 duration-500 bg-sky-900"></div>
          <div className="absolute right-2 -top-4  group-hover:top-1 group-hover:right-2 z-10 w-32 h-32 rounded-full group-hover:scale-150  duration-500 bg-sky-800"></div>
          <div className="absolute -right-12 top-4 group-hover:top-1 group-hover:right-2 z-10 w-24 h-24 rounded-full group-hover:scale-150  duration-500 bg-sky-700"></div>
          <div className="absolute right-20 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-500 bg-sky-600"></div>
          <p className="z-10">See more</p>
        </button>
      </div>

      <div>
        <button className="relative group cursor-pointer text-sky-50  overflow-hidden h-16 w-64 rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold">
          <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-900"></div>
          <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-800"></div>
          <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-700"></div>
          <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-600"></div>
          <p className="z-10">See more</p>
        </button>
      </div>

      <div>
        <button className="cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700">
          HOVER ME
        </button>
      </div>

      <div>
        <button className="group group-hover:before:duration-500 group-hover:after:duration-1000 after:duration-500 hover:border-sky-300  duration-500 before:duration-500 hover:duration-500 underline underline-offset-2    hover:after:-right-2 hover:before:top-8 hover:before:right-16 hover:after:scale-150 hover:after:blur-none hover:before:-bottom-8 hover:before:blur-none hover:bg-sky-300 hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-sky-900 relative bg-sky-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-sky-400 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-cyan-600 after:right-8 after:top-3 after:rounded-full after:blur">
          See more
        </button>
      </div>

      <div>
        <button className="overflow-hidden w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group">
          Hover me!
          <span className="absolute w-36 h-32 -top-8 -left-2 bg-sky-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"></span>
          <span className="absolute w-36 h-32 -top-8 -left-2 bg-sky-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"></span>
          <span className="absolute w-36 h-32 -top-8 -left-2 bg-sky-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"></span>
          <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
            Explore!
          </span>
        </button>
      </div>

      <div>
  
<button className="cursor-pointer font-semibold overflow-hidden relative z-100 border border-green-500 group px-8 py-2">
  <span className="relative z-10 text-green-500 group-hover:text-white text-xl duration-500">Magic !</span>
  <span className="absolute w-full h-full bg-green-500 -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
  <span className="absolute w-full h-full bg-green-500 -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
</button>
      </div>

      <div>
      <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-50"><span className="absolute h-0 w-0 rounded-full bg-blue-500 transition-all duration-300 group-hover:h-56 group-hover:w-32"></span><span className="relative">Hover me</span></button>
      </div>

      <div>
      <button className="group relative h-12 overflow-hidden overflow-x-hidden rounded-md bg-neutral-950 px-8 py-2 text-neutral-50"><span className="relative z-10">Hover Me</span><span className="absolute inset-0 overflow-hidden rounded-md"><span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-blue-500 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span></span></button>
      </div>

      <div>
      <button className="group relative z-0 h-12 overflow-hidden overflow-x-hidden rounded-md bg-neutral-950 px-8 py-2 text-neutral-50"><span className="relative z-10">Hover Me</span><span className="absolute inset-0 overflow-hidden rounded-md"><span className="absolute left-0 aspect-square w-full origin-center translate-x-full rounded-full bg-blue-500 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span></span></button>
      </div>

      <div>
      <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-blue-500 px-6 font-medium text-neutral-50"><span className="absolute h-56 w-32 rounded-full bg-neutral-950 transition-all duration-300 group-hover:h-0 group-hover:w-0"></span><span className="relative">Hover me</span></button>
      </div>

      <div>
      <a href="#_" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
<span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
<span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Button Text</span>
</a>
      </div>

      <div>
      <a href="#_" className="relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-white group">
<span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
<span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">Button Text</span>
</a>
      </div>
    </div>
  );
};

export default SocialMediaPosts;
