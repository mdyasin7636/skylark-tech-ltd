import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowRightLong } from "react-icons/fa6";

const slidesData = [
  {
    img: "https://res.cloudinary.com/dlaatmz5a/image/upload/v1729540688/banner1_fmzljr.jpg",
    heading: "Perfect IT Solution\nFor Your Business",
    text: "At Skylark IT, we innovate cutting-edge IT solutions designed to\nelevate your business for tomorrow's challenges and opportunities.",
  },
  {
    img: "https://res.cloudinary.com/dlaatmz5a/image/upload/v1729540687/banner2_vzdaqt.jpg",
    heading: "Creating the Easiest\nSolution for You",
    text: "Empowering businesses with smart IT solutions, Skylark IT transforms\nyour potential into success, shaping a brighter future for your company.",
  },
  {
    img: "https://res.cloudinary.com/dlaatmz5a/image/upload/v1729540688/banner3_rnkfi2.jpg",
    heading: "Shaping IT Solutions\nFor Your Business",
    text: "Unlock your business potential with Skylark IT’s innovative solutions,\ndesigned to streamline operations and propel you toward success.",
  },
];

const Slider = () => {
  return (
    <div id="home">
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
