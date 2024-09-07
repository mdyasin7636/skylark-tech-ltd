import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowRightLong } from "react-icons/fa6";
import bannerImg1 from "../../assets/banner1.jpg";
import bannerImg2 from "../../assets/banner2.jpg";
import bannerImg3 from "../../assets/banner3.jpg";

const Slider = () => {
  return (
    <div>
      <Swiper
        // loop={true}
        modules={[Navigation, Autoplay]}
        // autoplay={{
        //   delay: 4000,
        //   disableOnInteraction: false,
        // }}
        lazy={true}
        className="mySwiper relative"
      >
        <SwiperSlide className="relative">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <img
            src={bannerImg1}
            className="w-full h-[50vh] md:h-[70vh] lg:h-[100vh] object-cover"
            alt="Banner Image"
            loading="lazy"
          />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          <div className="absolute bottom-10 md:bottom-36 left-10 z-20 text-white">
            <p className="font-semibold">SECURE & IT SERVICES</p>
            <h2 className="text-6xl font-bold mt-2">
              Perfect IT Solution <br /> For Your Business
            </h2>
            <p className="text-lg mt-4">
              Energetically harness ubiquitous imperatives without state of the
              art collaboration <br /> and ide-sharing. Monotonically parallel
              task cross-unit experiences and front-end.
            </p>
            <div className="flex space-x-4 mt-6">
              <button className="flex items-center space-x-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                <span>DISCOVER MORE</span> <FaArrowRightLong />
              </button>

              <button className="flex items-center space-x-2 bg-transparent border border-white text-white py-2 px-4 rounded hover:bg-white hover:text-black">
                <span>CONTACT US</span> <FaArrowRightLong />
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <img
            src={bannerImg2}
            className="w-full h-[50vh] md:h-[70vh] lg:h-[100vh] object-cover"
            alt="Banner Image"
            loading="lazy"
          />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          <div className="absolute bottom-10 left-10 z-20 text-white">
            <p>SECURE & IT SERVICES</p>
            <h2 className="text-2xl font-bold">
              Make The Easiest <br /> Solution For You
            </h2>
            <p className="text-lg mt-2">
              Energetically harness ubiquitous imperatives without state of the
              art collaboration <br /> and ide-sharing. Monotonically parallel
              task cross-unit experiences and front-end.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <img
            src={bannerImg3}
            className="w-full h-[50vh] md:h-[70vh] lg:h-[100vh] object-cover"
            alt="Banner Image"
            loading="lazy"
          />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          <div className="absolute bottom-10 left-10 z-20 text-white">
            <p>SECURE & IT SERVICES</p>
            <h2 className="text-2xl font-bold">
              Skylark Is The Best <br /> IT Solution 2024
            </h2>
            <p className="text-lg mt-2">
              Energetically harness ubiquitous imperatives without state of the
              art collaboration <br /> and ide-sharing. Monotonically parallel
              task cross-unit experiences and front-end.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
