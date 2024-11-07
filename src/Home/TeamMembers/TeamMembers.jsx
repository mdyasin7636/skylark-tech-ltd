import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import {Navigation, Autoplay } from "swiper/modules";

const TeamMembers = () => {
  const members = [
    {
      name: "Alamin Poner",
      role: "CEO & Founder",
      image: "https://i.ibb.co.com/Kr6tyHp/Julian-Myers.jpg",
    },
    {
      name: "Ashraful ALam",
      role: "Director",
      image: "https://i.ibb.co.com/JdbsDP9/Oliver-Hayes.jpg",
    },
    {
      name: "Yeasin Arafath",
      role: "Developer",
      image: "https://i.ibb.co.com/QMtsyf1/Henry-Fletcher.jpg",
    },
    {
      name: "Mizanur Rahman",
      role: "Technical Manager",
      image: "https://i.ibb.co.com/QMtsyf1/Henry-Fletcher.jpg",
    },
    {
      name: "Tanvir Ahamed",
      role: "Digital Marketer",
      image: "https://i.ibb.co.com/QMtsyf1/Henry-Fletcher.jpg",
    },
  ];

  return (
    <div className="relative mt-7">
      <div className="text-center">
        <h1 className="text-3xl text-deep-sky font-extrabold">TEAM MEMBERS</h1>
      </div>

      <div className="relative max-w-6xl mx-auto mt-7">
        {/* Swiper container */}
        <Swiper
          loop={true}
          slidesPerView={1}
          spaceBetween={30}
          modules={[Navigation, Autoplay]}
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
