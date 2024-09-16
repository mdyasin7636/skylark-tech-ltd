import { AiOutlineCheck, AiOutlinePhone } from "react-icons/ai";
import { RiTeamFill } from "react-icons/ri";
import aboutImage from "../../assets/aboutImage.png";

const AboutUs = () => {
  return (
    <div className="mt-10 px-4">
      <div className="text-center">
        <h1 className="text-3xl text-blue-800 font-extrabold">About Us</h1>
        <p className="mt-2 font-bold text-4xl">
          We Provide Exclusive Service <br /> For Your Business
        </p>
      </div>

      <div className="mt-8">
        <div className="container mx-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            {/* Image Section */}
            <div className="mb-8 lg:mb-2">
              <img
                src={aboutImage}
                alt="Team working"
                className="w-10/12 h-auto"
              />
            </div>

            {/* Text Section */}
            <div className="">
              <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-4">
                We Are Increasing Business <br /> Success With
                <span className="text-purple-600"> IT Solution</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Collaboratively envision user-friendly supply chains and cross
                unit imperatives. Authoritatively fabricate competitive
                resources and holistic synergy. Uniquely generate efficient
                schemas before the future.
              </p>

              {/* Icons Section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <span className="bg-purple-600 p-3 rounded-full text-white">
                    <AiOutlineCheck className="h-6 w-6" />
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Certified Company
                    </h4>
                    <p className="text-sm text-gray-500">
                      Best Provide Skills Services
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="bg-purple-600 p-3 rounded-full text-white">
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
                  className="bg-purple-600 text-white py-2 px-6 rounded-lg text-sm hover:bg-purple-700"
                >
                  Discover More
                </a>
                <div className="flex items-center space-x-2 text-purple-600">
                  <span>
                    <AiOutlinePhone className="h-6 w-6" />
                  </span>
                  <p className="text-gray-800">
                    Call Us On: <strong>+190-8800-0393</strong>
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
