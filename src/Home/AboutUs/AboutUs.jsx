import { AiOutlineCheck } from "react-icons/ai";
import { RiTeamFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import CustomTitle from "../../components/CustomTitle";

const AboutUs = () => {
  const handleWhatsAppClick = (e) => {
    e.preventDefault(); // Prevent default navigation
    const confirmed = window.confirm("Do you want to call via WhatsApp?");
    if (confirmed) {
      // Open WhatsApp link in a new tab
      window.open("https://wa.me/8801676047350", "_blank");
    }
  };

  return (
    <div className="bg-white" id="about">
      <CustomTitle text="ABOUT US" />
      <div className="mt-7">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 items-center text-center"
         
        >
          {/* Image Section */}
          <div>
            <img
              src="https://res.cloudinary.com/dlaatmz5a/image/upload/v1729540688/aboutImage_zgjt4y.png"
              alt="Team working"
              className="w-10/12 md:ml-20 ml-8"
            />
          </div>
          {/* Text Section */}
          <div>
            <div className="px-9 mt-4">
              <h2 className="text-2xl lg:text-4xl font-bold mb-4 text-[#1A1D2B]">
                We Are Increasing Business <br /> Success With
                <span className="text-deep-sky"> IT Solution</span>
              </h2>
              <p className="text-[#1A1D2B] font-normal">
                Skylark IT is your trusted partner for complete IT solutions. We
                focus on building lasting relationships while delivering results
                that take your business to new heights. From web development to
                digital marketing, we provide innovative, tailored services
                designed to meet your unique needs. Our goal is simple: to help
                you grow, enhance your online presence, and stay ahead of the
                competition. With Skylark IT by your side, you can confidently
                navigate the digital world and achieve sustainable success.
              </p>
            </div>

            {/* Icons Section */}
            <div className="flex items-center justify-evenly text-left mt-3">
              <div className="flex items-center space-x-1">
                <span className="bg-[#1A1D2B] p-3 rounded-full text-white">
                  <AiOutlineCheck className="h-6 w-6" />
                </span>
                <div>
                  <h4 className="font-semibold text-gray-800 whitespace-nowrap">
                    Certified Company
                  </h4>
                  {/* <p className="text-sm text-gray-500 whitespace-nowrap">
                    Best Provide Skills Services
                  </p> */}
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <span className="bg-[#1A1D2B] p-3 rounded-full text-white">
                  <RiTeamFill className="h-6 w-6" />
                </span>
                <div>
                  <h4 className="font-semibold text-gray-800">Expert Team</h4>
                  {/* <p className="text-sm text-gray-500">100% Expert Team</p> */}
                </div>
              </div>
            </div>
            {/* Button & Call Section */}
            <Link
              to="/all-projects"
              className="flex items-center justify-evenly mt-5"
            >
              <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-[#1A1D2B] px-6 font-medium text-neutral-50">
                <span className="absolute h-0 w-0 rounded-full bg-deep-sky transition-all duration-300 group-hover:h-56 group-hover:w-56"></span>
                <span className="relative">DISCOVER MORE</span>
              </button>
              <Link
                to="#"
                onClick={handleWhatsAppClick}
                className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-[#1A1D2B] px-6 font-medium text-neutral-50"
              >
                <span className="absolute h-0 w-0 rounded-full bg-deep-sky transition-all duration-300 group-hover:h-56 group-hover:w-56"></span>
                <span className="relative">
                  <div className="flex space-x-1 items-center">
                    <p>Call Us On </p>
                    <div className="w-5">
                      <img
                        src="https://res.cloudinary.com/dlaatmz5a/image/upload/v1729435147/whatsapp_733585_liafzz.png"
                        alt=""
                      />
                    </div>
                  </div>
                </span>
              </Link>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
