import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ParticlesComponent from "../../components/particles";
import './slider.css'

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
    <div id="home" className="relative">
      <div className="absolute inset-0 z-0">
       
      </div>
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
    {/* Particles only in each slide */}
    <div className="absolute inset-0 z-0">
      <ParticlesComponent id={`particles-${index}`} />
    </div>
    <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
    <img
      src={slide.img}
      className="w-full h-[60vh] md:h-[70vh] lg:h-[100vh] object-cover"
      alt="Banner Image"
      loading="lazy"
    />
    <div className="absolute bottom-28 md:bottom-36 md:left-10 z-20 text-white text-center md:text-left">
      {/* Slide content */}
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
        {/* Buttons */}
        <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-[#1A1D2B] px-6 font-medium text-neutral-50 border border-deep-sky">
          <span className="absolute h-0 w-0 rounded-full bg-deep-sky transition-all duration-300 group-hover:h-56 group-hover:w-56"></span>
          <span className="relative">DISCOVER MORE</span>
        </button>

        <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-[#1A1D2B] px-6 font-medium text-neutral-50 border border-deep-sky">
          <span className="absolute h-0 w-0 rounded-full bg-deep-sky transition-all duration-300 group-hover:h-56 group-hover:w-56"></span>
          <span className="relative">CONTACT US</span>
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
