const AboutUs = () => {
  return (
    <section className="bg-[#f3f4f6] py-16 px-6 flex justify-center">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-6">

        {/* LEFT CARD */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
          <p className="text-orange-500 font-medium mb-4">How It Started</p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Our Dream is <br /> Global Learning <br /> Transformation
          </h2>

          <p className="text-gray-500 text-sm leading-relaxed">
            Skylark IT is your trusted partner for complete IT solutions. We focus on building lasting relationships while delivering results that take your business to new heights. From web development to digital marketing, we provide innovative, tailored services designed to meet your unique needs. Our goal is simple: to help you grow, enhance your online presence, and stay ahead of the competition. With Skylark IT by your side, you can confidently navigate the digital world and achieve sustainable success.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-6">

          {/* IMAGE CARD */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200">
            <img
              src="https://res.cloudinary.com/dlaatmz5a/image/upload/v1729540688/aboutImage_zgjt4y.png"
              alt="about"
              className="w-full h-[220px] object-cover"
            />
          </div>

          {/* STATS GRID */}
          <div className="grid grid-cols-2 gap-4">

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900">3.5</h3>
              <p className="text-gray-500 text-sm mt-1">Years Experience</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900">23</h3>
              <p className="text-gray-500 text-sm mt-1">Project Challenge</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900">830+</h3>
              <p className="text-gray-500 text-sm mt-1">Positive Reviews</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900">100K</h3>
              <p className="text-gray-500 text-sm mt-1">Trusted Students</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;