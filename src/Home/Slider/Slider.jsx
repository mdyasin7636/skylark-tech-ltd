// import { FaBolt, FaNetworkWired } from "react-icons/fa";
// import { HiOutlineShieldCheck } from "react-icons/hi";
// import { Link } from "react-router-dom";
// import { Link as ScrollLink } from "react-scroll";
// import { motion } from "framer-motion";

// const Banner = () => {
//   return (
//     <section className="relative bg-gradient-to-br from-blue-900 to-indigo-800 text-white overflow-hidden">
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black opacity-50"></div>

//       {/* Background image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('https://res.cloudinary.com/dlaatmz5a/image/upload/v1754747572/photo-1451187580459-43490279c0fa_fvwod3.jpg')",
//         }}
//       ></div>

//       <div className="container mx-auto px-4 mt-16 mb-32 relative z-10">
//         <div className="flex flex-col md:flex-row items-center justify-between">
//           {/* Left Side */}
//           <motion.div
//             className="w-full md:w-1/2 mb-12 md:mb-0"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//           >
//             <motion.h1
//               className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//             >
//               Innovate.
//               <br />
//               Transform.
//               <br />
//               Succeed.
//             </motion.h1>

//             <motion.p
//               className="text-xl mb-8 text-gray-300"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//             >
//               Empowering businesses with cutting-edge solutions for a digital
//               future.
//             </motion.p>

//             <motion.div
//               className="flex space-x-4 mt-6 justify-center md:justify-normal"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6, delay: 0.6 }}
//             >
//               <Link to="/all-projects">
//                 <button className="group relative inline-flex h-12 w-44 items-center justify-center overflow-hidden rounded-full bg-[#1A1D2B] font-medium text-neutral-50 border border-deep-sky">
//                   <span className="absolute h-0 w-0 rounded-full bg-deep-sky transition-all duration-300 group-hover:h-56 group-hover:w-56"></span>
//                   <span className="relative">DISCOVER MORE</span>
//                 </button>
//               </Link>

//               <ScrollLink
//                 to="contact"
//                 smooth={true}
//                 duration={500}
//                 offset={-70}
//               >
//                 <button className="group relative inline-flex h-12 w-44 items-center justify-center overflow-hidden rounded-full bg-[#1A1D2B] font-medium text-neutral-50 border border-deep-sky">
//                   <span className="absolute h-0 w-0 rounded-full bg-deep-sky transition-all duration-300 group-hover:h-56 group-hover:w-56"></span>
//                   <span className="relative">CONTACT US</span>
//                 </button>
//               </ScrollLink>
//             </motion.div>
//           </motion.div>

//           {/* Right Side */}

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7, delay: 0.8 }}
//             className="w-full md:w-1/2 md:pl-12"
//           >
//             <div className="relative bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-2xl overflow-hidden">
//               {/* Fade-out overlay */}
//               <motion.div
//                 initial={{ opacity: 1 }}
//                 animate={{ opacity: 0 }}
//                 transition={{ duration: 0.7, delay: 0.8 }}
//                 className="absolute inset-0 bg-white bg-opacity-30 pointer-events-none"
//               />

//               <h2 className="text-2xl font-semibold mb-6">Why Skylark IT?</h2>
//               <ul className="space-y-4">
//                 <li className="flex items-center">
//                   <FaBolt className="w-6 h-6 mr-3 text-yellow-400" />
//                   <span>Innovative Web Experiences</span>
//                 </li>
//                 <li className="flex items-center">
//                   <HiOutlineShieldCheck className="w-6 h-6 mr-3 text-green-400" />
//                   <span>Targeted Marketing Strategies</span>
//                 </li>
//                 <li className="flex items-center">
//                   <FaNetworkWired className="w-6 h-6 mr-3 text-purple-400" />
//                   <span>Seamless IT Management</span>
//                 </li>
//               </ul>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Decorative Wave */}
//       <div className="absolute bottom-0 left-0 right-0 -mb-[1px]">
//         <svg viewBox="0 0 1440 122" xmlns="http://www.w3.org/2000/svg">
//           <path
//             d="M0 122L60 107C120 92 240 62 360 47C480 32 600 32 720 39.5C840 47 960 62 1080 69.5C1200 77 1320 77 1380 77L1440 77V122H0Z"
//             fill="white"
//           />
//         </svg>
//       </div>
//     </section>
//   );
// };

// export default Banner;




import { Plasma } from "../Plasma/Plasma";


const Slider = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* Plasma Background */}
      <div className="absolute inset-0 -z-10">
        <Plasma/>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl px-6">
        <button className="mb-6 rounded-full bg-neutral-900/60 px-4 py-2 text-sm text-white flex items-center gap-2 hover:bg-neutral-800/70 transition">
          <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
          5+ New Patterns ⚡ Read More →
        </button>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Craft Beautiful <br />
          <span className="text-purple-300">Patterns Backgrounds</span>
        </h1>

        <p className="mt-6 text-lg text-gray-300">
          Professional-grade background patterns and gradients. Easily copy
          the code and seamlessly integrate it into your projects. Crafted
          with modern CSS and Tailwind.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button className="px-6 py-3 rounded-lg bg-purple-600 text-white font-medium shadow hover:bg-purple-500 transition">
            One-Click Copy
          </button>
          <button className="px-6 py-3 rounded-lg bg-neutral-800 text-white font-medium shadow hover:bg-neutral-700 transition">
            Live Preview
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;