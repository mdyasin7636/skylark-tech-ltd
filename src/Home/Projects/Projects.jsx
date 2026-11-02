
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import {
  FiArrowLeft,
  FiArrowRight,
  FiArrowUpRight,
  FiExternalLink,
} from "react-icons/fi";
import { FaGlobe } from "react-icons/fa";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState } from "react";

import "swiper/css";
import "swiper/css/navigation";

const CLOUDINARY_BASE =
  "https://res.cloudinary.com/dlaatmz5a/image/upload/";

const projects = [
  {
    title: "Sigma Lift Company",
    img: "Sigma-Lift-Company-Ltd_srlrrp.png",
    link: "https://sigmaliftcompany.com/",
    category: "Corporate Website",
    description:
      "A professional website showcasing elevator products and business solutions.",
  },
  {
    title: "LG Elevator Ltd",
    img: "LG-ELEVATOR_ax801j.png",
    link: "https://lgelevators.com/",
    category: "Corporate Website",
    description:
      "A modern corporate website for elevator products and services.",
  },
  {
    title: "Hyundai Lift Ltd",
    img: "Hyundai-Lift-Ltd_aefwhe.png",
    link: "https://hyundailiftltd.com/",
    category: "Corporate Website",
    description:
      "A responsive website built to present elevator solutions and company information.",
  },
  {
    title: "Newscricket24",
    img: "NewsCricket24_huezle.png",
    link: "https://newscricket24.com/",
    category: "News Portal",
    description:
      "A digital news platform for delivering sports news and updates.",
  },
  {
    title: "Bangladesher Kontha",
    img: "Bangladesher-Kontha_akospc.png",
    link: "https://bangladesherkontha.com/",
    category: "News Portal",
    description:
      "An online newspaper platform for news, articles, and current affairs.",
  },
  {
    title: "Nogor Pratidin",
    img: "Nogor-Pratidin_pzrk4u.png",
    link: "https://nogorpratidin.com/",
    category: "News Portal",
    description:
      "A digital newspaper website designed for accessible news publishing.",
  },
  {
    title: "Euro Elevator BD",
    img: "Euro-Elevator-BD-Ltd_bybbvw.png",
    link: "https://www.euroelevator-bd.com/",
    category: "Corporate Website",
    description:
      "A business website presenting elevator products and company services.",
  },
  {
    title: "SB Elevator Group",
    img: "SB-Elevator-Group_hrgae6.png",
    link: "https://sbelevatorgroup.com/",
    category: "Corporate Website",
    description:
      "A corporate web presence for elevator products and solutions.",
  },
  {
    title: "Hyundai Elevator Ltd",
    img: "Hyundai-Elevator-Company-Ltd_hgru6p.png",
    link: "https://hyundaielevatorltd.com/",
    category: "Corporate Website",
    description:
      "A company website highlighting elevator solutions and services.",
  },
  {
    title: "D&D Experts",
    img: "Denim-and-Design-Expert_yhzcxx.png",
    link: "https://dndexperts.com/",
    category: "Business Website",
    description:
      "A business website presenting denim, design, and related services.",
  },
  {
    title: "Morning Mirror",
    img: "Daily-Morning-Mirror_gl82hu.png",
    link: "https://dailymorningmirror.com/",
    category: "News Portal",
    description:
      "An online news platform for publishing current affairs and stories.",
  },
  {
    title: "Sigma Lift Price",
    img: "Home-Sigma-Lift-Price_b0r5nj.png",
    link: "https://sigmaliftprice.net/",
    category: "Business Website",
    description:
      "A web platform presenting elevator pricing and related information.",
  },
  {
    title: "Daily Bonik Bangladesh",
    img: "Daily-Bonik-Bangladesh_n7wxbj.png",
    link: "https://dailybonikbangladesh.com/",
    category: "News Portal",
    description:
      "An online newspaper for digital news publishing and readership.",
  },
  {
    title: "Daily AjKaler Kontho",
    img: "Daily-AjKaler-Kontho_hu8wg3.png",
    link: "https://ajkalerkontho.com/",
    category: "News Portal",
    description:
      "A digital news website for current events and editorial content.",
  },
  {
    title: "Daily Jago Sangbad",
    img: "Daily-Jago-Sangbad_doj0ia.png",
    link: "https://dailyjagosangbad.com/",
    category: "News Portal",
    description:
      "A news publishing website designed for online readers.",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative isolate overflow-hidden bg-[#F8FAFD] py-16 sm:py-20 lg:py-24"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 0% 45%, rgba(28,117,188,0.07), transparent 26%),
            radial-gradient(circle at 100% 45%, rgba(47,179,227,0.07), transparent 25%)
          `,
        }}
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-10 flex flex-col justify-between gap-6 sm:mb-12 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1C75BC]/20 bg-[#1C75BC]/[0.06] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#1C75BC] sm:text-xs">
              <FiArrowLeft />
              Digital Projects
              <FiArrowRight />
            </div>

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#171D2B] sm:text-4xl lg:text-[42px]">
              Explore Our{" "}
              <span className="bg-gradient-to-r from-[#159FEA] via-[#397DF4] to-[#9639EE] bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-[15px]">
              Explore our website development and digital solutions,
              created to help businesses and brands strengthen their
              online presence.
            </p>
          </div>

          {/* Slider arrows */}
          <div className="flex shrink-0 items-center gap-3 md:mb-1">
            <button
              type="button"
              aria-label="Previous projects"
              className="projects-prev flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition duration-300 hover:border-[#2FB3E3] hover:bg-[#1C75BC] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2FB3E3]"
            >
              <FiArrowLeft size={18} />
            </button>

            <button
              type="button"
              aria-label="Next projects"
              className="projects-next flex h-11 w-11 items-center justify-center rounded-full bg-[#168FF5] text-white shadow-md shadow-blue-200/70 transition duration-300 hover:bg-[#1C75BC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2FB3E3]"
            >
              <FiArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Project slider */}
        <Swiper
          modules={[Autoplay, Navigation]}
          navigation={{
            prevEl: ".projects-prev",
            nextEl: ".projects-next",
          }}
          loop
          speed={650}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
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
          className="projects-swiper"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.title + project.img} className="!h-auto">
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* All projects */}
        <div className="mt-10 text-center">
          <Link
            to="/all-projects"
            className="group inline-flex items-center gap-2 rounded-full bg-[#1A1D2B] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#1C75BC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2FB3E3]"
          >
            Explore All Projects
            <FiArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const imageUrl = `${CLOUDINARY_BASE}${project.img}`;

  const openProject = () => {
    window.open(project.link, "_blank", "noopener,noreferrer");
  };

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#E0E7F0] bg-white shadow-[0_4px_15px_rgba(15,23,42,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-[#B7DDF5] hover:shadow-[0_16px_35px_rgba(28,117,188,0.12)]">
      {/* Image preview */}
      <div className="relative m-2.5 mb-0 aspect-[1.45/1] overflow-hidden rounded-xl bg-slate-100">
        {!imageError && (
          <img
            src={imageUrl}
            alt={`${project.title} website preview`}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            className={`absolute inset-0 h-full w-full object-cover object-top transition-all duration-500 ${
              imageLoaded
                ? "scale-100 opacity-100"
                : "scale-[1.02] opacity-0"
            } group-hover:scale-105 group-hover:blur-[3px]`}
          />
        )}

        {/* Image loading / fallback */}
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#1C75BC]/20 border-t-[#1C75BC]" />
          </div>
        )}

        {imageError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#EAF4FC] to-[#F7FAFE] text-[#1C75BC]">
            <FaGlobe size={30} />
            <span className="px-3 text-center text-sm font-semibold">
              {project.title}
            </span>
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-[#06162D]/0 transition-all duration-300 group-hover:bg-[#06162D]/30">
          <button
            type="button"
            onClick={openProject}
            className="inline-flex -translate-y-2 items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold text-[#171D2B] opacity-0 shadow-xl transition-all duration-300 hover:bg-[#168FF5] hover:text-white group-hover:translate-y-0 group-hover:opacity-100 focus-visible:translate-y-0 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2FB3E3]"
          >
            <FiExternalLink size={15} />
            Live Demo
          </button>
        </div>
      </div>

      {/* Project information */}
      <div className="flex flex-1 flex-col px-4 pb-4 pt-4 sm:px-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-[15px] font-extrabold leading-snug text-[#171D2B] transition-colors duration-300 group-hover:text-[#168FF5]">
            {project.title}
          </h3>

          <span className="shrink-0 rounded-md bg-[#E6F8F1] px-2 py-1.5 text-[9px] font-bold leading-tight text-emerald-700 sm:text-[10px]">
            {project.category}
          </span>
        </div>

        <p className="mt-2 text-xs leading-[1.7] text-slate-500">
          {project.description}
        </p>
      </div>

      {/* Bottom action bar — no pricing */}
      <div className="flex items-center justify-between gap-3 border-t border-slate-100 px-4 py-3">
        <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
          <span className="h-2 w-2 rounded-full bg-[#2FB3E3]" />
          Website Project
        </div>

        <button
          type="button"
          onClick={openProject}
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#F0F3F8] px-4 py-2.5 text-[11px] font-bold text-[#273144] transition-all duration-300 hover:bg-[#168FF5] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2FB3E3]"
        >
          Details
          <FiArrowRight size={13} />
        </button>
      </div>
    </article>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Projects;
