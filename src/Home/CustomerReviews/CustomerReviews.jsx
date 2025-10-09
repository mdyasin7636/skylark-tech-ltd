import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import CustomTitle from "../../components/CustomTitle";

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      text: "Working with Skylark IT was a fantastic experience. They took the time to understand our needs, and the result was a website that exceeded our expectations.",
      name: "Michael S.",
      role: "Marketing Manager",
      img: "https://res.cloudinary.com/dlaatmz5a/image/upload/v1739373835/review1_n1qsho.jpg",
    },
    {
      id: 2,
      text: "The professionalism and expertise of the Skylark IT team truly set them apart. They delivered our project on time, and the quality is outstanding.",
      name: "Emily R.",
      role: "Project Administrator",
      img: "https://res.cloudinary.com/dlaatmz5a/image/upload/v1739373835/review2_bgrepb.jpg",
    },
    {
      id: 3,
      text: "I was impressed with the creative solutions and attention to detail provided by Skylark IT. Their support has been invaluable to our online growth.",
      name: "Henry K.",
      role: "Business Owner",
      img: "https://res.cloudinary.com/dlaatmz5a/image/upload/v1739373835/review3_x76bdw.jpg",
    },
    {
      id: 4,
      text: "Skylark IT transformed our outdated website into a modern, user-friendly platform. Their commitment to excellence is evident in every aspect of their work.",
      name: "David L.",
      role: "Neurologist",
      img: "https://res.cloudinary.com/dlaatmz5a/image/upload/v1739373835/review4_soztu6.jpg",
    },
    {
      id: 5,
      text: "From the initial consultation to the final delivery, Skylark IT was a pleasure to work with. They truly understand how to merge functionality with design.",
      name: " Jessica P.",
      role: "Entrepreneur",
      img: "https://res.cloudinary.com/dlaatmz5a/image/upload/v1739373835/review5_p5stsy.jpg",
    },
    {
      id: 6,
      text: "We saw immediate improvements in user engagement after our website revamp by Skylark IT. Their continuous support have been second to none.",
      name: "Mark A.",
      role: "Director of Operations",
      img: "https://res.cloudinary.com/dlaatmz5a/image/upload/v1739373835/review6_u6zffi.jpg",
    },
  ];

  return (
    <div className="bg-white">
      <CustomTitle text="OUR HAPPY CLIENTS"/>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 mt-6">
        <Swiper
          loop={true}
          slidesPerView={1}
          spaceBetween={20}
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
          {reviews.map((review) => (
            <SwiperSlide key={review.id} className="px-1">
            <div className="overflow-hidden bg-white rounded-full shadow text-center border border-black h-96 flex flex-col justify-between">
              <div className="px-6 py-8">
                <div className="relative w-24 h-24 mx-auto">
                  <img
                    className="relative object-cover w-24 h-24 mx-auto rounded-full"
                    src={review.img}
                    alt={review.name}
                  />
                  <div className="absolute top-0 right-0 flex items-center justify-center bg-deep-sky rounded-full w-6 h-6">
                    <BiSolidQuoteAltRight className="w-5 h-5 text-white" />
                  </div>
                </div>
                <blockquote className="pt-4 h-32 overflow-hidden text-ellipsis">
                  <p className="text-lg text-black ">{review.text}</p>
                </blockquote>
                <div className="mt-6">
                <p className="text-base font-semibold text-black">{review.name}</p>
                <p className="mt-1 text-base text-gray-600">{review.role}</p>
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

export default CustomerReviews;
