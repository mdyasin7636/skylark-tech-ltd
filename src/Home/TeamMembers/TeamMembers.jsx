import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import CustomTitle from "../../components/CustomTitle";

const TeamMembers = () => {
  const members = [
    {
      name: "Alamin Poner",
      role: "CEO & Founder",
      description: "Visionary leader driving innovation and excellence.",
      image: "https://i.ibb.co.com/Kr6tyHp/Julian-Myers.jpg",
    },
    {
      name: "Ashraful Alam",
      role: "Director",
      description: "Strategic planner and execution expert.",
      image: "https://i.ibb.co.com/JdbsDP9/Oliver-Hayes.jpg",
    },
    {
      name: "Yeasin Arafath",
      role: "Developer",
      description: "Full-stack developer crafting seamless solutions.",
      image: "https://i.ibb.co.com/QMtsyf1/Henry-Fletcher.jpg",
    },
    {
      name: "Mizanur Rahman",
      role: "Technical Manager",
      description: "Ensuring tech robustness across platforms.",
      image: "https://i.ibb.co.com/QMtsyf1/Henry-Fletcher.jpg",
    },
    {
      name: "Asad Jaman",
      role: "Product Strategist",
      description: "Aligning user needs with market success.",
      image: "https://i.ibb.co.com/QMtsyf1/Henry-Fletcher.jpg",
    },
    {
      name: "Tanvir Ahamed",
      role: "Digital Marketer",
      description: "Scaling brand reach and engagement.",
      image: "https://i.ibb.co.com/QMtsyf1/Henry-Fletcher.jpg",
    },
  ];

  return (
    <div className="relative bg-white">
      <CustomTitle text="TEAM MEMBERS" />

      <div className="relative max-w-6xl mx-auto mt-7">
        <Swiper
          loop={true}
          slidesPerView={1}
          spaceBetween={20}
          freeMode={true}
          modules={[Autoplay, Navigation]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          className="mySwiper"
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {members.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="group relative rounded-xl overflow-hidden bg-black border border-neutral-800 hover:shadow-xl transition-shadow duration-500">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-72 object-cover opacity-90 group-hover:opacity-60 transition-opacity duration-500"
                />

                {/* Overlay bottom box */}
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black via-black/70 to-transparent text-white transition-all duration-500 transform translate-y-24 group-hover:translate-y-0">
                  <div className="border-l-4 border-purple-500 pl-3">
                    <h3 className="text-lg font-bold">{member.name}</h3>
                    <p className="text-sm text-purple-400">{member.role}</p>
                    <p className="text-xs mt-2 text-gray-300 leading-snug">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TeamMembers;




// const teamData = [
//   {
//     id: 1,
//     name: "YOUR NAME HERE",
//     role: "TAG LINE HERE",
//     img: "https://i.pravatar.cc/150?img=1",
//   },
//   {
//     id: 2,
//     name: "YOUR NAME HERE",
//     role: "TAG LINE HERE",
//     img: "https://i.pravatar.cc/150?img=2",
//   },
//   {
//     id: 3,
//     name: "YOUR NAME HERE",
//     role: "TAG LINE HERE",
//     img: "https://i.pravatar.cc/150?img=3",
//   },
// ];

// const TeamMembers = () => {
//   return (
//     <div className="min-h-screen bg-gray-200 flex items-center justify-center">
//       <div className="flex gap-10 flex-wrap justify-center">
//         {teamData.map((member) => (
//           <div
//             key={member.id}
//             className="relative w-[260px] h-[240px] bg-[#08142b] text-white flex flex-col items-center pt-16 px-6"
//             style={{
//               borderBottomLeftRadius: "80px",
//             }}
//           >
//             {/* Image Circle */}
//             <div className="absolute -top-14 w-28 h-28 rounded-full border-4 border-[#08142b] overflow-hidden bg-white">
//               <img
//                 src={member.img}
//                 alt=""
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             {/* Content */}
//             <h3 className="mt-4 text-sm font-bold tracking-wide text-center">
//               {member.name}
//             </h3>
//             <p className="text-xs text-gray-300 mt-1 mb-4 text-center">
//               {member.role}
//             </p>
// {/* 
//             <p className="text-[11px] text-gray-300 text-center leading-relaxed mb-6">
           
//             </p> */}

//             {/* Button */}
//             <button className="text-[10px] px-4 py-1 border border-gray-300 rounded-full hover:bg-white hover:text-black transition">
//               READ MORE
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TeamMembers;