import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FreeMode, Navigation, Autoplay } from "swiper/modules";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { useRef } from "react";

const TeamMembers = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const placeholderImages = [
    "https://randomuser.me/api/portraits/men/1.jpg",
    "https://randomuser.me/api/portraits/women/2.jpg",
    "https://randomuser.me/api/portraits/men/3.jpg",
    "https://randomuser.me/api/portraits/women/4.jpg",
    "https://randomuser.me/api/portraits/men/5.jpg",
    "https://randomuser.me/api/portraits/women/6.jpg",
  ];

  const members = [
    {
      name: "Alex Furnandes",
      role: "Project Manager",
      image: placeholderImages[0],
    },
    {
      name: "Mary Crispy",
      role: "Chief Expert",
      image: placeholderImages[1],
    },
    {
      name: "Henry Joshep",
      role: "Product Manager",
      image: placeholderImages[2],
    },
    {
      name: "Sanjida Carlose",
      role: "IT Consultant",
      image: placeholderImages[3],
    },
    {
      name: "John Doe",
      role: "Data Scientist",
      image: placeholderImages[4],
    },
    {
      name: "Jane Doe",
      role: "Business Analyst",
      image: placeholderImages[5],
    },
  ];

  return (
    <div className="py-12 relative">
      <h2 className="text-center text-3xl font-bold mb-8">
        See Our Skilled Expert <span className="text-indigo-600">Team</span>
      </h2>

      <div className="relative max-w-6xl mx-auto">
        {/* Swiper container */}
        <Swiper
          loop={true}
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSwiper={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
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
              <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-500 hover:shadow-xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />

                {/* Name and Role (Visible at all times) */}
                <div className="absolute bottom-0 left-0 w-full p-4 bg-white text-center">
                  <h3 className="text-lg font-bold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-sm text-indigo-600">{member.role}</p>
                </div>

                {/* Social Media Icons (Visible on hover in a rounded shape) */}
                <div className="absolute top-20 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white p-4 rounded-full shadow-lg flex space-x-4">
                    <a href="#" className="text-gray-700 hover:text-indigo-500">
                      <FaFacebookF />
                    </a>
                    <a href="#" className="text-gray-700 hover:text-indigo-500">
                      <FaTwitter />
                    </a>
                    <a href="#" className="text-gray-700 hover:text-indigo-500">
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex w-full justify-between px-4">
          <button
            ref={prevRef}
            className="absolute -left-16 bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-300"
          >
            &#8249; {/* Left arrow */}
          </button>
          <button
            ref={nextRef}
            className="absolute -right-16 bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-300"
          >
            &#8250; {/* Right arrow */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
