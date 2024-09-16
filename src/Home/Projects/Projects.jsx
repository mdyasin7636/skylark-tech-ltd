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
    
  };

  return (
    <div>
      <div className="text-center">
        <h1 className="text-3xl text-blue-800 font-extrabold">Our Projects</h1>
        <p className="mt-2 font-bold text-4xl">
          We Provide Exclusive Service <br /> For Your Business
        </p>
      </div>
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
      <div className="mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-8">
          {cards[activeTab].map((card, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg border border-black">
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
    </div>
  );
};

export default Projects;