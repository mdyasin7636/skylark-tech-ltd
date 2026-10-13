import { FaCheckCircle } from "react-icons/fa";

const features = [
  "Experience and Expertise",
  "Customer-Centric Focus",
  "Results and Impact",
  "Quality Assurance",
  "24/7 Online Support",
  "High-Quality Security",
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-gray-50 py-12 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 leading-snug">
            We will develop a long-term relationship providing you{" "}
            <span className="text-blue-500">
              IT support and solutions
            </span>
          </h2>

          <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed">
            We are prepared to meet your needs and exceed your expectations by
            providing high-quality service and efficient technological solutions
            and support to your business at an affordable price.
          </p>

          {/* FEATURES */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-500 text-lg shrink-0" />
                <span className="text-gray-700 font-medium text-sm md:text-base">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SINGLE IMAGE */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <img
              src="https://res.cloudinary.com/dlaatmz5a/image/upload/v1729540687/bannerImgChoose_wgnx3e.png" // 👉 replace with your image
              alt="Team working"
              className="w-full max-w-md md:max-w-lg rounded-2xl shadow-lg object-cover"
            />

            {/* Optional decorative shapes (to match style a bit) */}
            <div className="hidden md:block absolute -top-4 -left-4 w-16 h-16 bg-blue-100 rounded-xl"></div>
            <div className="hidden md:block absolute -bottom-4 -right-4 w-20 h-20 bg-blue-200 rounded-xl"></div>
          </div>
        </div>

      </div>
    </section>
  );
}