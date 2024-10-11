/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Cloudinary } from "cloudinary-core";

const cloudinary = new Cloudinary({ cloud_name: "dlaatmz5a" });

const Projects = () => {
  const [activeTab, setActiveTab] = useState("Elevator Site");

  const tabs = [
    { name: "Elevator Site" },
    { name: "News Site" },
    { name: "SEO Optimized Site" },
    { name: "Corporate Site" },
    { name: "Graphics Solution" },
  ];

  const cards = {
    "Elevator Site": [
      {
        id: 1,
        title: "Sigma Lift Company",
        img: "sigma-lift-company-ltd_g3bs9a",
        link: "https://sigmaliftcompany.com/",
      },
      {
        id: 2,
        title: "LG Elevator Ltd",
        img: "LG-ELEVATOR_ojeenh",
        link: "https://lgelevators.com/",
      },
      {
        id: 3,
        title: "Hyundai Lift Ltd",
        img: "Hyundai-Lift_ucdtwp",
        link: "https://hyundailiftltd.com/",
      },
    ],
    "News Site": [
      {
        id: 1,
        title: "Newscricket24",
        img: "newscricket24_lrvyan",
        link: "https://newscricket24.com/",
      },
      {
        id: 2,
        title: "Bangladesher Kontha",
        img: "Bangladesher-Kontha_makkox",
        link: "https://bangladesherkontha.com/",
      },
      {
        id: 3,
        title: "Nogor Pratidin",
        img: "Nogor-Pratidin_sd0jdf",
        link: "https://nogorpratidin.com/",
      },
    ],
    "SEO Optimized Site": [
      {
        id: 1,
        title: "Hyundai Elevator Ltd",
        img: "Hyundai-Elevator-Ltd_tmukff",
        link: "https://hyundaielevatorltd.com/",
      },
      {
        id: 2,
        title: "SB Elevator Group",
        img: "SB-Elevator-Group_xgef0j",
        link: "https://sbelevatorgroup.com/",
      },
      {
        id: 3,
        title: "Elevator Spare Parts",
        img: "ELEVATOR-SPARE-PARTS_iyhima",
        link: "https://elevatorsparesparts.com/",
      },
    ],
    "Corporate Site": [
      {
        id: 1,
        title: "D&D Experts",
        img: "Denim-and-Design-Expert_u7rzoo",
        link: "https://dndexperts.com/",
      },
    ],
    "Graphics Solution": [
      {
        id: 1,
        title: "Daily Bonik Bangladesh",
        img: "Daily-Bonik-Bangladesh_vxbxlg",
        link: "https://dailybonikbangladesh.com/",
      },
    ],
  };
  

  const handleSiteLink = (link) => {
    window.open(link, "_blank");
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
                activeTab === tab.name
                  ? "bg-deep-sky text-white"
                  : "bg-gray-200 text-gray-600"
              } mb-2 sm:mb-0`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Content for the Active Tab */}
        <div className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-8">
            {cards[activeTab].map((card) => (
              <Card
                key={`${activeTab}-${card.id}`}
                card={card}
                handleSiteLink={handleSiteLink}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ card, handleSiteLink }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = cloudinary.url(card.img, { secure: true });
    img.onload = () => setLoading(false);
  }, [card.img]);

  return (
    <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-black px-2">
      <div className="relative max-w-full h-72 overflow-hidden rounded-lg border border-gray-400">
        {/* Maintain hover style while centering loading animation */}
        <div className="h-max w-full transition-transform duration-[3500ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
          {loading ? (
            <div className="absolute inset-0 flex items-center justify-center bg-white">
              <div className="flex flex-row gap-2">
                <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce"></div>
                <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]"></div>
                <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]"></div>
              </div>
            </div>
          ) : (
            <img
              src={cloudinary.url(card.img, { secure: true })}
              alt={card.title}
              className="w-full h-full object-cover object-top rounded-lg"
            />
          )}
        </div>
      </div>
      <div className="flex justify-evenly">
        <div>
          <h3 className="text-lg font-bold mt-2">{card.title}</h3>
        </div>
        <div>
          <button
            onClick={() => handleSiteLink(card.link)}
            className="mt-2 bg-deep-sky text-white py-1 px-4 rounded-lg"
          >
            View Site
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
