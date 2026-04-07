import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import CustomTitle from "../../components/CustomTitle";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const TeamMembers = () => {
  const members = [
    {
      name: "Alamin Poner",
      role: "CEO & Founder",
      image: "https://res.cloudinary.com/dlaatmz5a/image/upload/v1774702286/Alamin_kqe51j.jpg",
    },
    {
      name: "Ashraful Alam",
      role: "Director",
      image: "https://res.cloudinary.com/dlaatmz5a/image/upload/v1774702287/Ashraful_knzk8o.jpg",
    },
    {
      name: "Yeasin Arafath",
      role: "Senior Developer",
      image: "https://res.cloudinary.com/dlaatmz5a/image/upload/v1774702287/Yeasin_oamch6.jpg",
    },
    {
      name: "Mizanur Rahman",
      role: "Technical Manager",
      image: "https://res.cloudinary.com/dlaatmz5a/image/upload/v1774699159/Mizanur_uvkm5a.jpg",
    },
    {
      name: "Asad Jaman",
      role: "Product Strategist",
      image: "https://res.cloudinary.com/dlaatmz5a/image/upload/v1774702286/Asad_w5tlpg.jpg",
    },
    {
      name: "Tanvir Ahamed",
      role: "Digital Marketer",
      image: "https://res.cloudinary.com/dlaatmz5a/image/upload/v1774702287/Tanvir_s2aa83.jpg",
    },
  ];

  return (
    <div className="bg-white mt-12">
      <CustomTitle text="TEAM MEMBERS" />

      <div className="max-w-sm md:max-w-5xl mx-auto mt-10">
        <Swiper
          loop
          spaceBetween={28}
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {members.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="relative bg-[#f5f6f7] rounded-[18px] pt-[38px] pb-[78px] text-center overflow-hidden">

                {/* top right corner */}
                <div className="absolute top-0 right-0 w-[26px] h-[26px] border-t-[3px] border-r-[3px] border-deep-sky rounded-tr-[18px]" />

                {/* top left corner */}
                <div className="absolute top-0 left-0 w-[26px] h-[26px] border-t-[3px] border-l-[3px] border-deep-sky rounded-tl-[18px]" />

                {/* subtle dots */}
                <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle,_#000_1px,_transparent_1px)] bg-[size:24px_24px]" />

                {/* IMAGE STACK (3 layers EXACT) */}
                <div className="relative flex justify-center">
                  {/* outer faint ring */}
                  <div className="w-[192px] h-[192px] rounded-full flex items-center justify-center">

                    {/* actual image */}
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-[192px] h-[192px] rounded-full object-cover border-2 border-deep-sky"
                    />

                  </div>
                </div>

                {/* name */}
                <h3 className="mt-[14px] text-[16px] font-bold text-black">
                  {member.name}
                </h3>

                {/* role */}
                <p className="text-[12.5px] text-gray-500 font-semibold mt-[4px]">
                  {member.role}
                </p>

                {/* bottom bar */}
                <div className="absolute bottom-0 left-0 w-full bg-deep-sky pt-[10px] pb-[10px] flex justify-center gap-[20px] rounded-full">

                  {[FaFacebookF, FaInstagram, FaLinkedinIn, HiOutlineMail].map(
                    (Icon, i) => (
                      <div
                        key={i}
                        className="w-[34px] h-[34px] flex items-center justify-center border border-white rounded-full text-white hover:bg-white hover:text-[#2d8cf0] transition cursor-pointer"
                      >
                        <Icon size={13} />
                      </div>
                    )
                  )}

                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TeamMembers;