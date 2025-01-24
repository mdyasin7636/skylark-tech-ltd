import { ImCheckboxChecked } from "react-icons/im";
import CustomTitle from "../../components/CustomTitle";

const WhyChooseUs = () => {
  return (
    <div className="mt-7">
      <CustomTitle text="WHY CHOOSE US" />
      <div className="mt-6">
        <div
          className="mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
          data-aos="fade-up"
          data-aos-easing="linear"
        >
          {/* Text Content */}
          <div className="order-last md:order-first">
            <h2 className="text-4xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Reliable IT Services Designed for{" "}
              <span className="text-deep-sky">Your Business Growth</span>
            </h2>
            <p className="text-base sm:text-base md:text-lg text-gray-600 mb-8 font">
              Choosing Skylark IT means partnering with a trusted ally focused
              on your success. We deliver customized web solutions that drive
              growth, using the latest technology and innovative designs. Our
              proven track record speaks to our commitment to quality and
              lasting partnerships. Let us help you achieve your goals with
              expert support every step of the way.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {/* Left Column */}
              <div className="flex items-center whitespace-nowrap font-bold">
                <ImCheckboxChecked className="text-deep-sky w-5 h-5" />
                <p className="pl-1">24/7 Support</p>
              </div>
              <div className="flex items-center whitespace-nowrap font-bold">
                <ImCheckboxChecked className="text-deep-sky w-5 h-5" />
                <p className="pl-1">Expert Team</p>
              </div>
              <div className="flex items-center whitespace-nowrap font-bold">
                <ImCheckboxChecked className="text-deep-sky w-5 h-5" />
                <p className="pl-1">Quality Assured</p>
              </div>

              {/* Right Column */}
              <div className="flex items-center whitespace-nowrap font-bold">
                <ImCheckboxChecked className="text-deep-sky w-5 h-5" />
                <p className="pl-1">Innovative Designs</p>
              </div>
              <div className="flex items-center whitespace-nowrap font-bold">
                <ImCheckboxChecked className="text-deep-sky w-5 h-5" />
                <p className="pl-1">Scalable Solutions</p>
              </div>
              <div className="flex items-center whitespace-nowrap font-bold">
                <ImCheckboxChecked className="text-deep-sky w-5 h-5" />
                <p className="pl-1">Transparent Pricing</p>
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
