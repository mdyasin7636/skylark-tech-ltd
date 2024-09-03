import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import bannerImg1 from "../../assets/banner1.jpg"
import bannerImg2 from "../../assets/banner2.jpg"
import bannerImg3 from "../../assets/banner3.jpg"


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
        className="mySwiper"
        
      >
        <SwiperSlide>
          <img src={bannerImg1} alt="Banner Image" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bannerImg2} alt="Banner Image" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bannerImg3} alt="Banner Image" loading="lazy" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
