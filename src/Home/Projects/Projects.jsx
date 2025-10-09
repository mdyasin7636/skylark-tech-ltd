/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Cloudinary } from "cloudinary-core";
import { Link } from "react-router-dom";
import CustomTitle from "../../components/CustomTitle";

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
        img: "Sigma-Lift-Company-Ltd_srlrrp.png",
        link: "https://sigmaliftcompany.com/",
      },
      {
        id: 2,
        title: "LG Elevator Ltd",
        img: "LG-ELEVATOR_ax801j.png",
        link: "https://lgelevators.com/",
      },
      {
        id: 3,
        title: "Hyundai Lift Ltd",
        img: "Hyundai-Lift-Ltd_aefwhe.png",
        link: "https://hyundailiftltd.com/",
      },
    ],
    "News Site": [
      {
        id: 1,
        title: "Newscricket24",
        img: "NewsCricket24_huezle.png",
        link: "https://newscricket24.com/",
      },
      {
        id: 2,
        title: "Bangladesher Kontha",
        img: "Bangladesher-Kontha_akospc.png",
        link: "https://bangladesherkontha.com/",
      },
      {
        id: 3,
        title: "Nogor Pratidin",
        img: "Nogor-Pratidin_pzrk4u.png",
        link: "https://nogorpratidin.com/",
      },
    ],
    "SEO Optimized Site": [
      {
        id: 1,
        title: "Euro Elevator BD",
        img: "Euro-Elevator-BD-Ltd_bybbvw.png",
        link: "https://www.euroelevator-bd.com/",
      },
      {
        id: 2,
        title: "SB Elevator Group",
        img: "SB-Elevator-Group_hrgae6.png",
        link: "https://sbelevatorgroup.com/",
      },
      {
        id: 3,
        title: "Hyundai Elevator Ltd",
        img: "Hyundai-Elevator-Company-Ltd_hgru6p.png",
        link: "https://hyundaielevatorltd.com/",
      },
    ],
    "Corporate Site": [
      {
        id: 1,
        title: "D&D Experts",
        img: "Denim-and-Design-Expert_yhzcxx.png",
        link: "https://dndexperts.com/",
      },
      {
        id: 2,
        title: "Morning-Mirror",
        img: "Daily-Morning-Mirror_gl82hu.png",
        link: "https://dailymorningmirror.com/",
      },
      {
        id: 3,
        title: "Sigma Lift Price",
        img: "Home-Sigma-Lift-Price_b0r5nj.png",
        link: "https://sigmaliftprice.net/",
      },
    ],
    "Graphics Solution": [
      {
        id: 1,
        title: "Daily Bonik Bangladesh",
        img: "Daily-Bonik-Bangladesh_n7wxbj.png",
        link: "https://dailybonikbangladesh.com/",
      },
      {
        id: 2,
        title: "Daily AjKaler Kontho",
        img: "Daily-AjKaler-Kontho_hu8wg3.png",
        link: "https://ajkalerkontho.com/",
      },
      {
        id: 3,
        title: "Daily Jago Sangbad",
        img: "Daily-Jago-Sangbad_doj0ia.png",
        link: "https://dailyjagosangbad.com/",
      },
    ],
  };

  const handleSiteLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="bg-white" id="projects">
      <CustomTitle text="OUR PROJECTS" />
      <div className="mt-5">
        {/* Tab Navigation */}

        <div className="flex justify-center flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`group relative inline-flex h-11 items-center justify-center overflow-hidden rounded-md px-[12px] font-medium text-neutral-50 mb-2 sm:mb-0 mx-[3px] md:mx-2 ${
                activeTab === tab.name ? "bg-[#1A1D2B]" : "bg-[#1A1D2B]"
              }`}
            >
              {/* Background transition effect */}
              <span
                className={`absolute h-0 w-0 rounded-full bg-deep-sky transition-all duration-700 group-hover:h-56 group-hover:w-56 ${
                  activeTab === tab.name ? "h-56 w-56" : ""
                }`}
              ></span>
              <span className="relative z-10">{tab.name}</span>
            </button>
          ))}
        </div>

        {/* Content for the Active Tab */}
        <div className="mt-5 ">
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
      <div className="text-center mt-7">
        <Link
          to="/all-projects"
          className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-[#1A1D2B] px-6 font-medium text-neutral-50"
        >
          <span className="absolute h-0 w-0 rounded-full bg-deep-sky transition-all duration-700 group-hover:h-56 group-hover:w-56"></span>
          <span className="relative">See All Projects</span>
        </Link>
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
    <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-black px-2 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] ">
      <div className="relative max-w-full h-72 overflow-hidden rounded-lg border border-gray-400">
        {/* Maintain hover style while centering loading animation */}
        <div>
          {loading ? (
            <div className="w-full h-full flex justify-center items-center pt-[88px]">
              <div className="absolute animate-spin h-[12rem] w-[12rem] rounded-full  border-tr-4 border-b-4 border-gray-900"></div>
              <div className="absolute animate-spin h-[10rem] w-[10rem] rounded-full border-tl-4 border-b-4 border-blue-900"></div>
              <div className="absolute animate-spin h-[8rem] w-[8rem] rounded-full border-tr-4 border-b-4 border-deep-sky"></div>
              <div className="absolute animate-spin h-[6rem] w-[6rem] rounded-full border-tl-4 border-b-4 border-normal-sky"></div>
              <div className="rounded-full h-28 w-28 animate-bounce flex items-center justify-center text-gray-900 font-semibold text-xl dark:text-black">
                Loading...
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
      <div className="flex justify-evenly items-center">
        <div className="relative bg-[linear-gradient(#262626,#262626),linear-gradient(#1C75BC,#1C75BC)] bg-[length:100%_2px,0_2px] bg-[position:100%_100%,0_100%] bg-no-repeat text-[#1A1D2B] transition-[background-size,color] duration-500 hover:bg-[0_2px,100%_2px] hover:text-[#1C75BC] font-semibold">
          {card.title}
        </div>
        <div>
          <button
            onClick={() => handleSiteLink(card.link)}
            className="group relative inline-flex h-9 items-center justify-center overflow-hidden rounded-md bg-[#1A1D2B] px-3 font-medium text-neutral-50 mt-2"
          >
            <span className="absolute h-0 w-0 rounded-full bg-deep-sky transition-all duration-300 group-hover:h-56 group-hover:w-56"></span>
            <span className="relative">Explore</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
