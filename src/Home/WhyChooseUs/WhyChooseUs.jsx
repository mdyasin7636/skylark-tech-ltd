import { IoIosCheckboxOutline } from "react-icons/io";

const WhyChooseUs = () => {
  return (
    <div className="mt-7">
      <div className="text-center">
        <h1 className="text-3xl text-deep-sky font-extrabold">WHY CHOOSE US</h1>
      </div>
      <div className="mt-6">
        <div className="mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div className="order-last md:order-first">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
              Reliable IT Services
              <span>
                <br />
                Designed for <span className="text-deep-sky">Your Business Growth</span>
              </span>
            </h2>
            <p className="text-gray-600 mb-8">
              Choosing Skylark IT means partnering with a trusted ally focused
              on your success. We deliver customized web solutions that drive
              growth, using the latest technology and innovative designs. Our
              proven track record speaks to our commitment to quality and
              lasting partnerships. Let us help you achieve your goals with
              expert support every step of the way.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {/* List of Services */}
              <div className="flex items-center">
                <IoIosCheckboxOutline className="text-[#1A1D2B] w-6 h-6 mr-1" />
                Big Data Analysis
              </div>
              <div className="flex items-center">
                <IoIosCheckboxOutline className="text-[#1A1D2B] w-6 h-6 mr-1" />
                High Quality Security
              </div>
              <div className="flex items-center">
                <IoIosCheckboxOutline className="text-[#1A1D2B] w-6 h-6 mr-1" />
                24/7 Online Support
              </div>
              <div className="flex items-center">
                <IoIosCheckboxOutline className="text-[#1A1D2B] w-6 h-6 mr-1" />
                24/7 Expert Team
              </div>
              <div className="flex items-center">
                <IoIosCheckboxOutline className="text-[#1A1D2B] w-6 h-6 mr-1" />
                Business Improvement
              </div>
              <div className="flex items-center">
                <IoIosCheckboxOutline className="text-[#1A1D2B] w-6 h-6 mr-1" />
                Easy Solutions
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="order-first md:order-last">
            <div className="rounded-full">
              <img
                className="w-full h-auto"
                src="https://res.cloudinary.com/dlaatmz5a/image/upload/v1729540687/bannerImgChoose_wgnx3e.png"
                alt="Team Analyzing"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
