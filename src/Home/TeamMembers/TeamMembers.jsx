import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import CustomTitle from "../../components/CustomTitle";

const TeamMembers = () => {
  const members = [
    {
      name: "Alamin Poner",
      role: "CEO & Founder",
      image: "https://res.cloudinary.com/dlaatmz5a/image/upload/v1774702286/Alamin_kqe51j.jpg",
    },
    {
      name: "Ashraful Alam",
      role: "Director",
      image: "https://res.cloudinary.com/dlaatmz5a/image/upload/v1774702287/Ashraful_knzk8o.jpg",
    },
    {
      name: "Yeasin Arafath",
      role: "Developer",
      image: "https://res.cloudinary.com/dlaatmz5a/image/upload/v1774702287/Yeasin_oamch6.jpg",
    },
    {
      name: "Mizanur Rahman",
      role: "Technical Manager",
      image: "https://res.cloudinary.com/dlaatmz5a/image/upload/v1774699159/Mizanur_uvkm5a.jpg",
    },
    {
      name: "Asad Jaman",
      role: "Product Strategist",
      image: "https://res.cloudinary.com/dlaatmz5a/image/upload/v1774702286/Asad_w5tlpg.jpg",
    },
    {
      name: "Tanvir Ahamed",
      role: "Digital Marketer",
      image: "https://res.cloudinary.com/dlaatmz5a/image/upload/v1774702287/Tanvir_s2aa83.jpg",
    },
  ];

  return (
    <div className="bg-white mt-12">
      <CustomTitle text="TEAM MEMBERS" />

      <div className="max-w-sm md:max-w-5xl mx-auto mt-10">
        <Swiper
          loop={true}
          spaceBetween={30}
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {members.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-200 rounded-2xl py-6 text-center shadow-sm hover:shadow-xl transition duration-500">

                {/* Circle Image */}
                <div className="flex justify-center mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-56 object-cover rounded-full border-4 border-gray-200"
                  />
                </div>

                {/* Name */}
                <h3 className="text-lg font-bold text-black tracking-wide">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="text-sm text-deep-sky font-semibold mt-1">
                  {member.role}
                </p>

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