import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode } from 'swiper/modules';

const Services = () => {

  const services = [
  {
    title: "Machine Learning",
    description: "Conveniently promote transparent materials and stand-alone strategic theme areas.",
    icon: "🤖", // Replace this with your preferred icon component or image
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
  // Add more services as needed
];
  
  return (
    <div className="mt-10">
      <div className="text-center">
        <h1 className="text-3xl text-blue-800 text-center font-extrabold">
          Our Services
        </h1>
        <p className="mt-2 font-bold text-4xl">
          We Provide Exclusive Service <br /> For Your Business
        </p>
      </div>
      <div className="mt-10">
      <div className="text-center">
        <h1 className="text-3xl text-blue-800 font-extrabold">
          Our Services
        </h1>
        <p className="mt-2 font-bold text-4xl">
          We Provide Exclusive Service <br /> For Your Business
        </p>
      </div>
      <div className="mt-8">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode]}
          className="mySwiper"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                <div className="text-5xl mb-4 text-indigo-600">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <div className="mt-4">
                  <button className="bg-blue-500 text-white p-2 rounded-full">
                    →
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>

    </div>
  );
};

export default Services;
