import { AiOutlineCheck } from "react-icons/ai";

const WhyChooseUs = () => {
  return (
    <div className="mt-7">
      <div className="text-center">
        <h1 className="text-3xl text-deep-sky font-extrabold">
          WHY CHOOSE US
        </h1>
      </div>
      <div className="mt-6">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              We Deal With The Aspects
              <br />
              <span className="text-deep-sky">Professional IT Services</span>
            </h2>
            <p className="text-gray-600 mb-8">
            Choosing Skylark IT means partnering with a trusted ally dedicated to your business&apos;s success. Our proven track record of satisfied customers speaks volumes about our commitment to excellence.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {/* List of Services */}
              <div className="flex items-center">
                <AiOutlineCheck className="text-deep-sky w-6 h-6 mr-2" />
                Big Data Analysis
              </div>
              <div className="flex items-center">
                <AiOutlineCheck className="text-deep-sky w-6 h-6 mr-2" />
                High Quality Security
              </div>
              <div className="flex items-center">
                <AiOutlineCheck className="text-deep-sky w-6 h-6 mr-2" />
                24/7 Online Support
              </div>
              <div className="flex items-center">
                <AiOutlineCheck className="text-deep-sky w-6 h-6 mr-2" />
                24/7 Expert Team
              </div>
              <div className="flex items-center">
                <AiOutlineCheck className="text-deep-sky w-6 h-6 mr-2" />
                Business Improvement
              </div>
              <div className="flex items-center">
                <AiOutlineCheck className="text-deep-sky w-6 h-6 mr-2" />
                Easy Solutions
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="">
            <div className=" rounded-full">
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
