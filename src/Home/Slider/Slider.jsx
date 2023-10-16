import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";


const Slider = () => {
  return (
    <div>
      <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        lazy={true}
        className="mySwiper"
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
      >
        <SwiperSlide>
          <img src="https://i.ibb.co/pXGBP7P/img-1.jpg" alt="" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/TM6C4Gr/img-2.jpg" alt="" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/QpxMX4S/img-3.jpg" alt="" loading="lazy" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
