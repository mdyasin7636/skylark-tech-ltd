import { AiOutlineCheck, AiOutlinePhone } from "react-icons/ai";
import { RiTeamFill } from "react-icons/ri";
import aboutImage from "../../assets/aboutImage.png";

const AboutUs = () => {
  return (
    <div className="mt-10 px-4" id="about">
      <div className="text-center">
        <h1 className="text-3xl text-deep-sky font-extrabold">About Us</h1>
        <p className="mt-2 font-bold text-4xl">
        We Deliver Innovative <br/> Solutions for Your Growth
        </p>
      </div>

      <div className="mt-8">
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            {/* Image Section */}
            <div className="mb-8 lg:mb-2 ml-16">
              <img
                src={aboutImage}
                alt="Team working"
                className="w-10/12 h-auto"
              />
            </div>
            {/* Text Section */}
            <div>
            <div className="text-center lg:text-left">
            <h2 className="text-2xl lg:text-4xl font-bold text-black mb-4">
              We Are Increasing Business <br /> Success With
              <span className="text-deep-sky"> IT Solution</span>
            </h2>
            <p className="text-gray-600 mb-6">
            Skylark IT is your trusted partner for comprehensive IT solutions. We believe in building strong relationships and delivering results that help your business reach new heights
            </p>
            </div>

              {/* Icons Section */}
              <div className="grid grid-cols-2 gap-14 md:gap-0 mb-6">
              <div className="flex items-center space-x-2">
                <span className="bg-deep-sky p-3 rounded-full text-white">
                  <AiOutlineCheck className="h-6 w-6" />
                </span>
                <div>
                  <h4 className="font-semibold text-gray-800 whitespace-nowrap">
                    Certified Company
                  </h4>
                  <p className="text-sm text-gray-500 whitespace-nowrap">
                    Best Provide Skills Services
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="bg-deep-sky p-3 rounded-full text-white">
                  <RiTeamFill className="h-6 w-6" />
                </span>
                <div>
                  <h4 className="font-semibold text-gray-800">Expert Team</h4>
                  <p className="text-sm text-gray-500">100% Expert Team</p>
                </div>
              </div>
            </div>
              {/* Button & Call Section */}
              <div className="flex items-center space-x-4">
                <a
                  href="#discover-more"
                  className="bg-deep-sky text-white py-2 px-6 rounded-lg text-sm hover:bg-normal-sky"
                >
                  Discover More
                </a>
                <div className="flex items-center space-x-1 text-deep-sky">
                  <span>
                    <AiOutlinePhone className="h-6 w-6" />
                  </span>
                  <p className="text-gray-800">
                    Call Us On: <strong>+8801676047350</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
