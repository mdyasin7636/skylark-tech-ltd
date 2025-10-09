import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import {
  FaCode,
  FaPaintBrush,
  FaBullhorn,
  FaSearch,
  FaCogs,
  FaImages,
} from "react-icons/fa";
import { TfiArrowCircleRight } from "react-icons/tfi";
import CustomTitle from "../../components/CustomTitle";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Building robust, scalable websites to elevate your online presence.",
      icon: <FaCode />,
    },
    {
      title: "Website Design",
      description:
        "Creating stunning, user-friendly designs that engage and convert visitors.",
      icon: <FaPaintBrush />,
    },
    {
      title: "Digital Marketing",
      description:
        "Driving growth through targeted strategies and online brand visibility.",
      icon: <FaBullhorn />,
    },
    {
      title: "SEO Optimization",
      description:
        "Enhancing your site’s visibility and ranking across search engines.",
      icon: <FaSearch />,
    },
    {
      title: "IT Management",
      description:
        "Streamlining IT operations to boost efficiency and support business goals.",
      icon: <FaCogs />,
    },
    {
      title: "Graphics Solution",
      description:
        "Delivering captivating visuals to enhance brand identity and messaging.",
      icon: <FaImages />,
    },
  ];

  return (
    <div className="py bg-white" id="services">
      <div className="text-center">
        <CustomTitle text="OUR SERVICES" />
      </div>
      <div className="">
        <Swiper
          loop={true}
          slidesPerView={1}
          spaceBetween={1}
          freeMode={true}
          modules={[Autoplay, Navigation]}
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
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="relative mx-14">
                {/* Adjusted gray background */}
                <div className="absolute top-12 bottom-12 left-1/2 -translate-x-1/2 w-[calc(100%+4rem)] bg-[#1A1D2B] rounded-lg"></div>

                {/* Card content */}
                <div className="h-[280px] w-[280px] md:h-[280px] md:w-[320px] bg-white m-auto rounded-xl relative group p-auto z-0 overflow-hidden shadow border border-blue-950 cursor-pointer">
                  <div className="h-28 w-64 bg-blue-950 absolute left-full rounded-full -bottom-12 group-hover:scale-[550%] z-[-1] duration-500 easy-in-out"></div>
                  <div className="h-24 w-52 bg-blue-700 absolute left-full rounded-full -bottom-12 group-hover:scale-[400%] z-[-1] duration-700 easy-in-out"></div>
                  <div className="h-20 w-48 bg-blue-500 absolute left-full rounded-full -bottom-12 group-hover:scale-[300%] z-[-1] duration-700 easy-in-out"></div>
                  <div className="h-16 w-44 bg-blue-950 absolute left-full rounded-full -bottom-12 group-hover:scale-[200%] z-[-1] duration-700 easy-in-out"></div>
                  <div className="z-20 mt-6 mx-2 text-center">
                    {/* Icon */}
                    <div className="w-[60px] h-[60px] mx-auto mb-4 rounded-full bg-[#1A1D2B] group-hover:bg-white duration-300 flex items-center justify-center">
                      <div className="text-3xl text-white group-hover:text-black duration-300">
                        {service.icon}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-white duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base text-gray-900 mt-3 group-hover:text-white duration-300">
                      {service.description}
                    </p>

                    {/* Button with arrow */}
                    <div className="flex justify-center mt-4">
                      <button className="bg-[#1A1D2B] group-hover:bg-white duration-300 text-white p-3 w-12 h-12 flex items-center justify-center rounded-full transition border border-transparent hover:shadow-glow">
                        <TfiArrowCircleRight className="w-14 h-14 group-hover:text-black duration-300" />
                      </button>
                    </div>
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

export default Services;
