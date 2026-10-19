/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Cloudinary } from "cloudinary-core";

const cloudinary = new Cloudinary({ cloud_name: "dlaatmz5a" });

const AllProjects = () => {
  const projects = [
    {
      title: "Sigma Lift Company",
      img: "Sigma-Lift-Company-Ltd_srlrrp.png",
      link: "https://sigmaliftcompany.com/",
    },
    {
      title: "LG Elevator Ltd",
      img: "LG-ELEVATOR_ax801j.png",
      link: "https://lgelevators.com/",
    },
    {
      title: "Hyundai Lift Ltd",
      img: "Hyundai-Lift-Ltd_aefwhe.png",
      link: "https://hyundailiftltd.com/",
    },
    {
      title: "OTIS Elevator Bangladesh",
      img: "OTIS-Elevator-Bangladesh-Ltd_t3jpgf.png",
      link: "https://otiselevatorltd.net/",
    },
    {
      title: "Newscricket24",
      img: "NewsCricket24_huezle.png",
      link: "https://newscricket24.com/",
    },
    {
      title: "Bangladesher Kontha",
      img: "Bangladesher-Kontha_akospc.png",
      link: "https://bangladesherkontha.com/",
    },
    {
      title: "Nogor Pratidin",
      img: "Nogor-Pratidin_pzrk4u.png",
      link: "https://nogorpratidin.com/",
    },
    {
      title: "Daink Sirajganj",
      img: "Daink-Sirajganj_w9rof0.png",
      link: "https://dainiksirajganj.com/",
    },
    {
      title: "Daily Banglar Mukh",
      img: "Daily-Banglar-Mukh_shdkup.png",
      link: "https://dailybanglarmukh.com/",
    },
    {
      title: "Euro Elevator BD",
      img: "Euro-Elevator-BD-Ltd_bybbvw.png",
      link: "https://www.euroelevator-bd.com/",
    },
    {
      title: "SB Elevator Group",
      img: "SB-Elevator-Group_hrgae6.png",
      link: "https://sbelevatorgroup.com/",
    },
    {
      title: "Hyundai Elevator Ltd",
      img: "Hyundai-Elevator-Company-Ltd_hgru6p.png",
      link: "https://hyundaielevatorltd.com/",
    },
    {
      title: "ELEVATOR-SPARE-PARTS",
      img: "ELEVATOR-SPARE-PARTS_q4zjgg.png",
      link: "https://elevatorsparesparts.com/",
    },
    {
      title: "D&D Experts",
      img: "Denim-and-Design-Expert_yhzcxx.png",
      link: "https://dndexperts.com/",
    },
    {
      title: "Morning-Mirror",
      img: "Daily-Morning-Mirror_gl82hu.png",
      link: "https://dailymorningmirror.com/",
    },
    {
      title: "Sigma Lift Price",
      img: "Home-Sigma-Lift-Price_b0r5nj.png",
      link: "https://sigmaliftprice.net/",
    },
    {
      title: "Daily Bonik Bangladesh",
      img: "Daily-Bonik-Bangladesh_n7wxbj.png",
      link: "https://dailybonikbangladesh.com/",
    },
    {
      title: "Daily AjKaler Kontho",
      img: "Daily-AjKaler-Kontho_hu8wg3.png",
      link: "https://ajkalerkontho.com/",
    },
    {
      title: "Daily Jago Sangbad",
      img: "Daily-Jago-Sangbad_doj0ia.png",
      link: "https://dailyjagosangbad.com/",
    },
  ];

  const handleSiteLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="mt-7 mb-14" id="projects">
      <div className="text-center mt-10">
        <h1 className="text-3xl text-deep-sky font-extrabold">
          Take a Peek at Our Work
        </h1>
      </div>
      <div className="mt-10">
        <div className="mt-5 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-8">
            {projects.map((card) => (
              <Card
                key={card.title}
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
    window.scrollTo(0, 0);
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

export default AllProjects;
