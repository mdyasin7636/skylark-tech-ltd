import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight, FiPlay } from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";


const reviews = [
  {
    title: "A Professional Website That Transformed Our Business",
    review:
      "Skylark IT understood our business needs and delivered a professional website that represents our brand perfectly. Their team was responsive, creative, and committed to quality throughout the project.",
    name: "Rahim Ahmed",
    position: "Business Owner",
    company: "Corporate Client",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=85",
    customerImage:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
  },
  {
    title: "An Excellent Experience From Start to Finish",
    review:
      "The team at Skylark IT made the entire website development process smooth and straightforward. The design looks modern, works well on mobile devices, and reflects exactly what we wanted.",
    name: "Nusrat Jahan",
    position: "Managing Director",
    company: "Business Client",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=85",
    customerImage:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
  },
  {
    title: "Better Online Visibility for Our Business",
    review:
      "We wanted to strengthen our online presence and make it easier for customers to find us. Skylark IT helped us focus on a professional website and a clear digital strategy for our business.",
    name: "Tanvir Hasan",
    position: "Marketing Manager",
    company: "Digital Marketing Client",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85",
    customerImage:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80",
  },
  {
    title: "Creative Design With Reliable Support",
    review:
      "From the initial discussion to the final design, communication was clear and professional. Skylark IT paid attention to the details and helped us build a stronger digital identity.",
    name: "Farhana Akter",
    position: "Founder",
    company: "Small Business Client",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=85",
    customerImage:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80",
  },
  {
    title: "A Trusted Partner for Our Digital Growth",
    review:
      "Skylark IT provided a thoughtful approach to our digital requirements. The team focused on usability, design, and the needs of our customers. We appreciated their professional approach and support.",
    name: "Mahmud Karim",
    position: "Operations Manager",
    company: "IT Solutions Client",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
    customerImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
  },
];

const CustomerReviews = () => {
   const [activeIndex, setActiveIndex] = useState(0);
  const activeReview = reviews[activeIndex];

  const previousReview = () => {
    setActiveIndex((current) =>
      current === 0 ? reviews.length - 1 : current - 1
    );
  };

  const nextReview = () => {
    setActiveIndex((current) =>
      current === reviews.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section
      id="customer-reviews"
      className="relative isolate overflow-hidden bg-[#061642] py-16 text-white sm:py-20 lg:py-24"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_85%_45%,rgba(20,83,200,0.65),transparent_55%),linear-gradient(110deg,#04102f_0%,#08256b_55%,#103e9d_100%)]"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-2xl text-center sm:mb-16"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#2FB3E3]/30 bg-[#1C75BC]/20 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#58C8F4] sm:text-xs">
            <FiArrowLeft />
            Client Testimonials
            <FiArrowRight />
          </div>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-[44px]">
            What Clients Say{" "}
            <span className="bg-gradient-to-r from-[#2FB3E3] to-[#7167FF] bg-clip-text text-transparent">
              About Our Services
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-blue-100/75 sm:text-base">
            Valuable feedback and trusted experiences from clients who
            choose Skylark IT for their digital journey.
          </p>
        </motion.div>

        {/* Review content */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: review details */}
          <div className="relative flex min-w-0 flex-col">
            <FaQuoteLeft
              aria-hidden="true"
              className="mb-3 h-10 w-10 rotate-180 text-white/15 sm:h-12 sm:w-12"
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -18 }}
                transition={{ duration: 0.3 }}
              >
                <div className="min-h-0 lg:min-h-[220px]">
                  <h3 className="max-w-xl text-2xl font-extrabold leading-snug sm:text-3xl">
                    {activeReview.title}
                  </h3>

                  {/* Star rating */}
                  <div
                    className="mt-4 flex items-center gap-1"
                    aria-label={`${activeReview.rating} out of 5 stars`}
                  >
                    {Array.from({ length: activeReview.rating }).map(
                      (_, index) => (
                        <span
                          key={index}
                          className="text-xl leading-none text-amber-400"
                        >
                          ★
                        </span>
                      )
                    )}
                  </div>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-blue-100/65 sm:text-[15px] sm:leading-8">
                    {activeReview.review}
                  </p>
                </div>

                {/* Customer information and controls */}
                <div className="mt-6 flex flex-wrap items-center justify-between gap-5 border-t border-white/10 pt-5 sm:mt-7">
                  <div className="flex min-w-0 items-center gap-3">
                    <img
                      src={activeReview.customerImage}
                      alt={activeReview.name}
                      className="h-11 w-11 shrink-0 rounded-full border-2 border-[#2FB3E3]/70 object-cover"
                      loading="lazy"
                    />

                    <div className="min-w-0">
                      <p className="truncate text-sm font-bold text-white">
                        {activeReview.name}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-blue-100/60">
                        {activeReview.position} · {activeReview.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex shrink-0 items-center gap-2">
                    <button
                      type="button"
                      onClick={previousReview}
                      aria-label="Previous customer review"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/70 text-white transition-colors duration-300 hover:border-[#2FB3E3] hover:bg-[#1C75BC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2FB3E3]"
                    >
                      <FiArrowLeft size={18} />
                    </button>

                    <button
                      type="button"
                      onClick={nextReview}
                      aria-label="Next customer review"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0878FF] text-white transition-colors duration-300 hover:bg-[#2FB3E3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2FB3E3]"
                    >
                      <FiArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Review indicators */}
            <div className="mt-6 flex items-center gap-2">
              {reviews.map((review, index) => (
                <button
                  key={review.name}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show review ${index + 1}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "w-8 bg-[#2FB3E3]"
                      : "w-3 bg-white/25 hover:bg-white/50"
                  }`}
                />
              ))}
              <span className="ml-2 text-xs text-blue-100/60">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(reviews.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Right: customer image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeReview.image}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35 }}
              className="relative mx-auto w-full max-w-2xl lg:ml-auto"
            >
              {/* Decorative dot pattern */}
              <div
                aria-hidden="true"
                className="absolute -left-5 -top-5 -z-10 h-28 w-28 opacity-60 [background-image:radial-gradient(#7ABEFF_1px,transparent_1px)] [background-size:11px_11px]"
              />

              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/20 bg-[#102C60] shadow-[0_25px_70px_rgba(0,0,0,0.3)] sm:aspect-[1.25/1] lg:aspect-[1.18/1]">
                <img
                  src={activeReview.image}
                  alt={`Customer experience: ${activeReview.company}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#03102B]/75 via-transparent to-transparent" />

                {/* Image caption */}
                <div className="absolute bottom-5 left-5 flex items-center gap-3 sm:bottom-7 sm:left-7">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#168AFF] text-white shadow-lg">
                    <FiPlay className="ml-0.5" size={18} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-white">
                      Customer Success
                    </p>
                    <p className="mt-1 text-xs text-white/70">
                      Skylark IT · Client Experience
                    </p>
                  </div>
                </div>

                {/* Image counter */}
                <div className="absolute right-5 top-5 rounded-full border border-white/20 bg-black/25 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                  {activeIndex + 1} of {reviews.length}
                </div>
              </div>

              <div
                aria-hidden="true"
                className="absolute -bottom-4 -right-4 -z-10 h-24 w-24 rounded-full bg-[#1C75BC]/30 blur-2xl"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;