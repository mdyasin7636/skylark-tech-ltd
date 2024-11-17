import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { BiSolidQuoteAltRight } from "react-icons/bi";

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      text: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
      name: "Devon Lane",
      role: "President of Sales",
      img: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-1.jpg",
    },
    {
      id: 2,
      text: "Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.",
      name: "Ronald Richards",
      role: "Marketing Coordinator",
      img: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-2.jpg",
    },
    {
      id: 3,
      text: "This is a top quality product. No need to think twice before making it live on web.",
      name: "Jane Cooper",
      role: "Dog Trainer",
      img: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-3.jpg",
    },
    {
      id: 4,
      text: "Finally, I’ve found a template that covers all bases for a bootstrapped startup. We were able to launch in days, not months.",
      name: "Theresa Webb",
      role: "Web Designer",
      img: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-4.jpg",
    },
    {
      id: 5,
      text: "My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
      name: "Darlene Robertson",
      role: "Medical Assistant",
      img: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-5.jpg",
    },
    {
      id: 6,
      text: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
      name: "Floyd Miles",
      role: "Nursing Assistant",
      img: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-6.jpg",
    },
  ];

  return (
    <div className="mt-7">
      <div className="text-center">
        <h1 className="text-3xl text-deep-sky font-extrabold">
          OUR HAPPY CLIENTS
        </h1>
      </div>
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
            <SwiperSlide key={review.id}>
            <div className="overflow-hidden bg-white rounded-md shadow text-center border border-black h-96 flex flex-col justify-between">
              <div className="px-6 py-8">
                <div className="relative w-24 h-24 mx-auto">
                  <img
                    className="relative object-cover w-24 h-24 mx-auto rounded-full"
                    src={review.img}
                    alt={review.name}
                  />
                  <div className="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                    <BiSolidQuoteAltRight className="w-5 h-5 text-white" />
                  </div>
                </div>
                <blockquote className="mt-7 h-32 overflow-hidden text-ellipsis">
                  <p className="text-lg text-black ">{review.text}</p>
                </blockquote>
                <div>
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
