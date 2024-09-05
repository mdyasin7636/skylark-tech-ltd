import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import bannerImg1 from "../../assets/banner1.jpg";
import bannerImg2 from "../../assets/banner2.jpg";
import bannerImg3 from "../../assets/banner3.jpg";

const Slider = () => {
  return (
    <div>
      <Swiper
        loop={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        lazy={true}
        className="mySwiper relative"
      >
        <SwiperSlide className="relative">
          <img
            src={bannerImg1}
            className="w-full h-[50vh] md:h-[70vh] lg:h-[100vh] object-cover"
            alt="Banner Image"
            loading="lazy"
          />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          <div className="absolute bottom-10 left-10 text-black">
            <p>SECURE & IT SERVICES</p>
            <h2 className="text-2xl font-bold">
              Perfect IT Solution <br /> For Your Business
            </h2>
            <p className="text-lg mt-2">
              Energetically harness ubiquitous imperatives without state of the
              art collaboration <br /> and ide-sharing. Monotonically parallel task
              cross-unit experiences and front-end.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            src={bannerImg2}
            className="w-full h-[50vh] md:h-[70vh] lg:h-[100vh] object-cover"
            alt="Banner Image"
            loading="lazy"
          />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          <div className="absolute bottom-10 left-10 text-black">
            <p>SECURE & IT SERVICES</p>
            <h2 className="text-2xl font-bold">
              Make The Easiest <br /> Solution For You
            </h2>
            <p className="text-lg mt-2">
              Energetically harness ubiquitous imperatives without state of the
              art collaboration <br /> and ide-sharing. Monotonically parallel task
              cross-unit experiences and front-end.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            src={bannerImg3}
            className="w-full h-[50vh] md:h-[70vh] lg:h-[100vh] object-cover"
            alt="Banner Image"
            loading="lazy"
          />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          <div className="absolute bottom-10 left-10 text-black">
            <p>SECURE & IT SERVICES</p>
            <h2 className="text-2xl font-bold">
              Skylark Is The Best <br /> IT Solution 2024
            </h2>
            <p className="text-lg mt-2">
              Energetically harness ubiquitous imperatives without state of the
              art collaboration <br /> and ide-sharing. Monotonically parallel task
              cross-unit experiences and front-end.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
