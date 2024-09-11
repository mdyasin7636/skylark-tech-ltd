
// const Projects = () => {
//     return (
//         <div className="relative max-w-sm p-6 rounded-lg shadow-lg bg-white transition-all duration-300 hover:bg-purple-600 hover:text-white group">
//       {/* Large number background */}
//       <div className="absolute top-6 right-6 text-6xl font-bold text-purple-100 transition-all duration-300 group-hover:text-white opacity-10 group-hover:opacity-100">
//         04
//       </div>

//       <div className="flex items-center space-x-4">
//         {/* Icon Placeholder */}
//         <div className="p-4 rounded-full bg-purple-100 text-purple-600 transition-all duration-300 group-hover:bg-white group-hover:text-purple-600">
//           {/* Your SVG icon */}
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18v6H3z" />
//           </svg>
//         </div>
//       </div>

//       {/* Title */}
//       <h3 className="mt-4 text-xl font-semibold transition-all duration-300 group-hover:text-white">
//         Business Analysis
//       </h3>

//       {/* Description */}
//       <p className="mt-2 text-gray-500 transition-all duration-300 group-hover:text-white">
//         Intrinsically redefine competitive e-business before adaptive potentiality. Professionally build progressive users with.
//       </p>

//       {/* Read More Button */}
//       <div className="mt-4">
//         <a
//           href="#"
//           className="inline-flex items-center px-4 py-2 text-sm font-semibold leading-6 text-purple-600 bg-white border border-transparent rounded-md transition-all duration-300 group-hover:bg-purple-700 group-hover:text-white"
//         >
//           READ MORE →
//         </a>
//       </div>
//     </div>
//     );
// };

// export default Projects;

import { useState } from "react";

const Projects = () => {

  const [activeTab, setActiveTab] = useState("Popular Theme");

  const tabs = [
    { name: "Popular Theme" },
    { name: "Newspaper Theme" },
    { name: "TV Theme" },
    { name: "E-Commerce Theme" },
    { name: "PHP Site" },
    { name: "Others Theme" },
  ];

  const cards = {
    "Popular Theme": [
      { title: "ESchool", price: "$42.38", license: "Single", img: "path-to-img" },
      { title: "Smart Edu", price: "$42.38", license: "Single", img: "path-to-img" },
      { title: "EduCare", price: "$42.38", license: "Single", img: "path-to-img" },
    ],
    "Newspaper Theme": [
      { title: "Lara TVSite", price: "$349", license: "Single", img: "path-to-img" },
      { title: "Lara Creative", price: "$210", license: "Single", img: "path-to-img" },
      { title: "Lara NewsSun", price: "$349", license: "Single", img: "path-to-img" },
    ],
    // Add more cards for other tabs...
  };

  return (
    <div className="p-4">
      {/* Tab Navigation */}
      <div className="flex justify-center space-x-4 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`px-4 py-2 rounded-t-lg ${
              activeTab === tab.name ? "bg-green-600 text-white" : "bg-gray-200 text-gray-600"
            } mb-2 sm:mb-0`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Content for the Active Tab */}
      <div className="mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards[activeTab].map((card, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
              <img src={card.img} alt={card.title} className="h-32 w-full object-cover rounded-t-lg" />
              <h3 className="text-lg font-bold mt-2">{card.title}</h3>
              <p className="text-sm">License: {card.license}</p>
              <p className="text-sm">Price: {card.price}</p>
              <button className="mt-2 bg-green-500 text-white py-1 px-4 rounded-lg">
                View Demo
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;