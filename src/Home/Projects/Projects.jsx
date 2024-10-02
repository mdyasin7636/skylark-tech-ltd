import { useState } from "react";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("News Site");

  const tabs = [
    { name: "News Site" },
    { name: "Elevator Site" },
    { name: "Corporate Site" },
    { name: "SEO Optimized Site" },
    { name: "Graphics Solution" },
  ];

  const cards = {
    "News Site": [
      {
        id: 1,
        title: "Newscricket24",
        img: "https://res.cloudinary.com/dlaatmz5a/image/upload/v1727875085/newscricket24_wiobo0.png",
        link: "https://newscricket24.com/",
      },
      {
        id: 2,
        title: "Bangladesher Kontha",
        img: "https://res.cloudinary.com/dlaatmz5a/image/upload/v1727875089/Bangladesher-Kontha_makkox.png",
        link: "https://bangladesherkontha.com/",
      },
      {
        id: 3,
        title: "Nogor Pratidin",
        img: "https://res.cloudinary.com/dlaatmz5a/image/upload/v1727875091/Nogor-Pratidin_sd0jdf.png",
        link: "https://nogorpratidin.com/",
      },
    ],
    "Elevator Site": [
      {
        title: "Lara TVSite",
        price: "$349",
        license: "Single",
        img: "path-to-img",
      },
      {
        title: "Lara Creative",
        price: "$210",
        license: "Single",
        img: "path-to-img",
      },
      {
        title: "Lara NewsSun",
        price: "$349",
        license: "Single",
        img: "path-to-img",
      },
    ],
    "Corporate Site": [
      {
        title: "ESchool",
        price: "$42.38",
        license: "Single",
        img: "path-to-img",
      },
      {
        title: "Smart Edu",
        price: "$42.38",
        license: "Single",
        img: "path-to-img",
      },
      {
        title: "EduCare",
        price: "$42.38",
        license: "Single",
        img: "path-to-img",
      },
    ],
    "SEO Optimized Site": [
      {
        title: "Lara TVSite",
        price: "$349",
        license: "Single",
        img: "path-to-img",
      },
      {
        title: "Lara Creative",
        price: "$210",
        license: "Single",
        img: "path-to-img",
      },
      {
        title: "Lara NewsSun",
        price: "$349",
        license: "Single",
        img: "path-to-img",
      },
    ],
    "Graphics Solution": [
      {
        title: "ESchool",
        price: "$42.38",
        license: "Single",
        img: "path-to-img",
      },
      {
        title: "Smart Edu",
        price: "$42.38",
        license: "Single",
        img: "path-to-img",
      },
      {
        title: "EduCare",
        price: "$42.38",
        license: "Single",
        img: "path-to-img",
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
            {cards[activeTab].map((card, id) => (
              <div
                key={id}
                className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-black px-2"
              >
                <div className="relative max-w-full h-72 overflow-hidden rounded-lg border border-gray-400">
                  <div className="h-max w-full transition-transform duration-[3500ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
                    <img
                      src={card.img}
                      className="w-full object-cover object-top rounded-lg"
                    />
                  </div>
                </div>
                <div className="flex justify-evenly">
                  <div>
                  <h3 className="text-lg font-bold mt-2">{card.title}</h3>
                  </div>
                  <div>
                  <button onClick={() => handleSiteLink(card.link)} className="mt-2 bg-deep-sky text-white py-1 px-4 rounded-lg">
                    View Site
                  </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
