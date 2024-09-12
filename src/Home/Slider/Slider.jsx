import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowRightLong } from "react-icons/fa6";
import bannerImg1 from "../../assets/banner1.jpg";
import bannerImg2 from "../../assets/banner2.jpg";
import bannerImg3 from "../../assets/banner3.jpg";

const slidesData = [
  {
    img: bannerImg1,
    heading: "Perfect IT Solution\nFor Your Business",
    text: "Energetically harness ubiquitous imperatives without state of the art collaboration\nand idea-sharing. Monotonically parallel task cross-unit experiences and front-end.",
  },
  {
    img: bannerImg2,
    heading: "Make The Easiest\nSolution For You",
    text: "Energetically harness ubiquitous imperatives without state of the art collaboration\nand idea-sharing. Monotonically parallel task cross-unit experiences and front-end.",
  },
  {
    img: bannerImg3,
    heading: "Skylark Is The Best\nIT Solution 2024",
    text: "Energetically harness ubiquitous imperatives without state of the art collaboration\nand idea-sharing. Monotonically parallel task cross-unit experiences and front-end.",
  },
];

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
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            <img
              src={slide.img}
              className="w-full h-[60vh] md:h-[70vh] lg:h-[100vh] object-cover"
              alt="Banner Image"
              loading="lazy"
            />
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            <div className="absolute bottom-28 md:bottom-36 md:left-10 z-20 text-white text-center md:text-left">
              <p className="font-semibold">SECURE & IT SERVICES</p>
              <h2 className="md:text-6xl text-4xl font-bold mt-2">
                {slide.heading.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </h2>
              <p className="text-lg mt-4 mx-4 md:mx-0">
                {slide.text.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
              <div className="flex space-x-4 mt-6 justify-center md:justify-normal">
                <button className="flex items-center space-x-2 bg-deep-sky text-white py-2 px-4 rounded hover:bg-normal-sky">
                  <span>DISCOVER MORE</span> <FaArrowRightLong />
                </button>

                <button className="flex items-center space-x-2 bg-transparent border border-white text-white py-2 px-4 rounded hover:bg-white hover:text-black">
                  <span>CONTACT US</span> <FaArrowRightLong />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
