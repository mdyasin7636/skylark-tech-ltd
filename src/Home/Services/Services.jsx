import { useState } from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import {
  FaCode,
  FaPaintBrush,
  FaBullhorn,
  FaSearch,
  FaCogs,
  FaImages,
  FaShieldAlt,
  FaShoppingCart,
  FaCloud,
  FaMobileAlt,
  FaBuilding,
} from "react-icons/fa";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from "react-icons/fi";

import "swiper/css";
import "swiper/css/navigation";
import CustomTitle from "../../components/CustomTitle";

const services = [
  {
    title: "Web Development",
    description:
      "High-performance dynamic websites, web portals, and scalable cloud web apps built with modern technologies.",
    icon: <FaCode />,
  },
  {
    title: "Website Design",
    description:
      "Modern, responsive, and user-friendly website designs that strengthen your brand and engage visitors.",
    icon: <FaPaintBrush />,
  },
  {
    title: "Digital Marketing",
    description:
      "Strategic digital campaigns that increase brand awareness, attract customers, and drive business growth.",
    icon: <FaBullhorn />,
  },
  {
    title: "SEO Optimization",
    description:
      "Improve search visibility, attract relevant visitors, and build a stronger organic presence online.",
    icon: <FaSearch />,
  },
  {
    title: "IT Management",
    description:
      "Reliable IT solutions and technical support to keep your business operations running smoothly.",
    icon: <FaCogs />,
  },
  {
    title: "Graphics Solution",
    description:
      "Creative graphics, brand identities, and visual content that make your business stand out.",
    icon: <FaImages />,
  },
  {
    title: "Cyber & Data Security",
    description:
      "Protect your digital assets with security-focused solutions and best practices for your business.",
    icon: <FaShieldAlt />,
  },
  {
    title: "WooCommerce & E-Commerce",
    description:
      "Powerful online stores with streamlined shopping experiences and flexible e-commerce solutions.",
    icon: <FaShoppingCart />,
  },
  {
    title: "Cloud & NVMe Hosting",
    description:
      "Fast, reliable hosting solutions with performance, uptime, and scalability in mind.",
    icon: <FaCloud />,
  },
  {
    title: "Mobile App Development",
    description:
      "Intuitive mobile experiences designed to connect your business with customers on the go.",
    icon: <FaMobileAlt />,
  },
  {
    title: "Enterprise ERP & CRM",
    description:
      "Streamline workflows, manage customer relationships, and improve business efficiency.",
    icon: <FaBuilding />,
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative isolate overflow-hidden bg-[#F8FAFD] py-16 sm:py-20 lg:py-24"
    >
      {/* Subtle background pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{
          backgroundImage: `
            radial-gradient(circle at 0% 45%, rgba(28,117,188,0.09), transparent 25%),
            radial-gradient(circle at 100% 40%, rgba(47,179,227,0.08), transparent 24%)
          `,
        }}
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Heading and navigation */}
        <div className="mb-10 flex flex-col justify-between gap-6 sm:mb-12 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <CustomTitle text="OUR SERVICES" />

            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-[#171D2B] sm:text-4xl lg:text-[42px]">
              Advance With IT Innovation
              <span className="mt-1 block bg-gradient-to-r from-[#159FEA] via-[#397DF4] to-[#9B39EF] bg-clip-text text-transparent">
                Your Business & Enterprise
              </span>
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-6 text-slate-500 sm:text-[15px] sm:leading-7">
              We deliver world-class custom development and IT services for
              your organization&apos;s modern digital transformation.
            </p>
          </div>

          {/* Custom slider arrows */}
          <div className="flex shrink-0 items-center gap-3 md:mb-1 md:ml-6">
            <button
              type="button"
              aria-label="Previous services"
              className="services-prev flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition duration-300 hover:border-[#2FB3E3] hover:bg-[#1C75BC] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2FB3E3]"
            >
              <FiArrowLeft size={18} />
            </button>

            <button
              type="button"
              aria-label="Next services"
              className="services-next flex h-11 w-11 items-center justify-center rounded-full bg-[#168FF5] text-white shadow-md shadow-blue-200/70 transition duration-300 hover:bg-[#1C75BC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2FB3E3]"
            >
              <FiArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Services slider */}
        <Swiper
          modules={[Autoplay, Navigation]}
          navigation={{
            prevEl: ".services-prev",
            nextEl: ".services-next",
          }}
          loop
          speed={650}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          watchOverflow
          spaceBetween={18}
          slidesPerView={1}
          breakpoints={{
            540: {
              slidesPerView: 2,
              spaceBetween: 18,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1100: {
              slidesPerView: 4,
              spaceBetween: 18,
            },
          }}
          className="services-swiper"
        >
          {services.map((service) => (
            <SwiperSlide key={service.title} className="!h-auto">
              <ServiceCard service={service} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

const ServiceCard = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative flex h-full min-h-[290px] flex-col overflow-hidden rounded-2xl border p-5 transition-all duration-300 sm:min-h-[300px] sm:p-6 ${
        isHovered
          ? "border-[#A9DDF7] bg-white shadow-[0_14px_35px_rgba(28,117,188,0.13)]"
          : "border-[#E0EAF5] bg-[#F2F6FC]"
      }`}
    >
      {/* Animated background accents */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#2FB3E3]/10 blur-3xl transition-all duration-500 ${
          isHovered ? "scale-150 opacity-100" : "scale-75 opacity-0"
        }`}
      />

      {/* Icon */}
      <div
        className={`relative mb-5 flex h-12 w-12 items-center justify-center rounded-xl border transition-all duration-300 ${
          isHovered
            ? "border-[#168FF5] bg-[#168FF5] text-white shadow-lg shadow-blue-200"
            : "border-[#E1EFFB] bg-white text-[#168FF5] shadow-sm"
        }`}
      >
        <span className="text-xl">{service.icon}</span>
      </div>

      {/* Content */}
      <h3
        className={`relative text-base font-bold leading-snug transition-colors duration-300 ${
          isHovered ? "text-[#168FF5]" : "text-[#171D2B]"
        }`}
      >
        {service.title}
      </h3>

      <p className="relative mt-3 text-[13px] leading-[1.8] text-slate-500">
        {service.description}
      </p>

      {/* Read more */}
      <div className="relative mt-auto pt-5">
        <button
          type="button"
          aria-label={`Learn more about ${service.title}`}
          onClick={() =>
            window.location.assign(
              `/contact?service=${encodeURIComponent(service.title)}`
            )
          }
          className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-xs font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2FB3E3] ${
            isHovered
              ? "border-[#168FF5] bg-[#168FF5] text-white shadow-md shadow-blue-200/60"
              : "border-[#DCE8F5] bg-white text-slate-700 hover:border-[#168FF5]"
          }`}
        >
          Read more
          <FiArrowUpRight
            size={14}
            className={`transition-transform duration-300 ${
              isHovered ? "translate-x-0.5 -translate-y-0.5" : ""
            }`}
          />
        </button>
      </div>
    </article>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
  }).isRequired,
};

export default Services;
