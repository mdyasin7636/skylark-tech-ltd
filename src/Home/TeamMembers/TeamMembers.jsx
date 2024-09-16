import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FreeMode, Navigation, Autoplay } from "swiper/modules";

const TeamMembers = () => {
  const members = [
    {
      name: "Alex Furnandes",
      role: "Project Manager",
      image: "https://i.ibb.co.com/Kr6tyHp/Julian-Myers.jpg",
    },
    {
      name: "Mary Crispy",
      role: "Chief Expert",
      image: "https://i.ibb.co.com/JdbsDP9/Oliver-Hayes.jpg",
    },
    {
      name: "Henry Joshep",
      role: "Product Manager",
      image: "https://i.ibb.co.com/QMtsyf1/Henry-Fletcher.jpg",
    },
    {
      name: "Sanjida Carlose",
      role: "IT Consultant",
      image: "https://i.ibb.co.com/s9m41Tt/Isaac-Reynolds.jpg",
    },
    {
      name: "John Doe",
      role: "Data Scientist",
      image: "https://i.ibb.co.com/mJTNHMx/Alexander-Brooks.jpg",
    },
    {
      name: "Jane Doe",
      role: "Business Analyst",
      image: "https://i.ibb.co.com/ZBCCG0D/Ethan-Mitchell.jpg",
    },
  ];

  return (
    <div className="py-12 relative">
      <div className="text-center">
        <h1 className="text-3xl text-blue-800 font-extrabold">TEAM MEMBERS</h1>
        <p className="mt-2 font-bold text-4xl">See Our Skilled Expert Team</p>
      </div>

      <div className="relative max-w-6xl mx-auto mt-8">
        {/* Swiper container */}
        <Swiper
          loop={true}
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          modules={[Navigation, Autoplay, FreeMode]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {members.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-500 hover:shadow-xl border border-black">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover"
                />

                {/* Name and Role (Visible at all times) */}
                <div className="absolute bottom-0 left-0 w-full p-4 bg-white text-center">
                  <h3 className="text-lg font-bold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-sm text-indigo-600">{member.role}</p>
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
