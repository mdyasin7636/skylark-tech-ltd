import { AiOutlineCheck } from "react-icons/ai";
import bannerImg from "../../assets/bannerImgChoose.png";

const WhyChooseUs = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-3xl text-blue-800 font-extrabold">
          {" "}
          WHY CHOOSE US
        </h1>
        <p className="mt-2 font-bold text-4xl">
          We Provide Exclusive Service <br /> For Your Business
        </p>
      </div>
      <div className=" py-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              We Deal With The Aspects
              <br />
              <span className="text-indigo-600">Professional IT Services</span>
            </h2>
            <p className="text-gray-600 mb-8">
              Collaboratively envision user-friendly supply chains and
              cross-unit imperatives. Authoritatively fabricate competitive
              resources and holistic solutions.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {/* List of Services */}
              <div className="flex items-center">
                <AiOutlineCheck className="text-indigo-600 w-6 h-6 mr-2" />
                Big Data Analysis
              </div>
              <div className="flex items-center">
                <AiOutlineCheck className="text-indigo-600 w-6 h-6 mr-2" />
                High Quality Security
              </div>
              <div className="flex items-center">
                <AiOutlineCheck className="text-indigo-600 w-6 h-6 mr-2" />
                24/7 Online Support
              </div>
              <div className="flex items-center">
                <AiOutlineCheck className="text-indigo-600 w-6 h-6 mr-2" />
                24/7 Expert Team
              </div>
              <div className="flex items-center">
                <AiOutlineCheck className="text-indigo-600 w-6 h-6 mr-2" />
                Business Improvement
              </div>
              <div className="flex items-center">
                <AiOutlineCheck className="text-indigo-600 w-6 h-6 mr-2" />
                Easy Solutions
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="">
            <div className=" rounded-full">
              <img
                className="w-full h-auto"
                src={bannerImg}
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
