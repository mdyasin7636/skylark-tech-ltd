import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FreeMode, Autoplay, Navigation } from 'swiper/modules';

const Services = () => {
  const services = [
    {
      title: "Machine Learning",
      description: "Conveniently promote transparent materials and stand-alone strategic theme areas.",
      icon: "🤖",
    },
    {
      title: "IT Management",
      description: "Conveniently promote transparent materials and stand-alone strategic theme areas.",
      icon: "💻",
    },
    {
      title: "Cloud Computing",
      description: "Conveniently promote transparent materials and stand-alone strategic theme areas.",
      icon: "☁️",
    },
    {
      title: "Machine Learning",
      description: "Conveniently promote transparent materials and stand-alone strategic theme areas.",
      icon: "🤖",
    },
    {
      title: "IT Management",
      description: "Conveniently promote transparent materials and stand-alone strategic theme areas.",
      icon: "💻",
    },
    {
      title: "Cloud Computing",
      description: "Conveniently promote transparent materials and stand-alone strategic theme areas.",
      icon: "☁️",
    }
  ];

  return (
    <div className="mt-10">
      <div className="text-center">
        <h1 className="text-3xl text-blue-800 font-extrabold">Our Services</h1>
        <p className="mt-2 font-bold text-4xl">
          We Provide Exclusive Service <br /> For Your Business
        </p>
      </div>

      <div className="mt-8">
        <Swiper
          loop={true}
          slidesPerView={1}
          spaceBetween={1}
          freeMode={true}
          modules={[FreeMode, Autoplay, Navigation]}
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
                <div className="absolute top-12 bottom-12 left-1/2 -translate-x-1/2 w-[calc(100%+4rem)] bg-gray-300 opacity-70 rounded-lg"></div>

                {/* Card content */}
                <div className="relative bg-white shadow-lg rounded-lg p-6 text-center z-10 mx-4 border border-black">
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-100 flex items-center justify-center">
                    <div className="text-3xl text-indigo-600">
                      {service.icon}
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-6 text-sm">
                    {service.description}
                  </p>
                  
                  {/* Button with arrow */}
                  <div className="flex justify-center mt-4">
                    <button className="bg-blue-500 text-white p-3 w-12 h-12 flex items-center justify-center rounded-full transition hover:bg-white hover:text-blue-500 border border-transparent hover:border-blue-500 hover:shadow-glow">
                      →
                    </button>
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
