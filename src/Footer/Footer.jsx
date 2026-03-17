import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  const Year = new Date().getFullYear();

  const handleWhatsAppClick = (e) => {
    e.preventDefault(); // Prevent default navigation
    const confirmed = window.confirm("Do you want to call via WhatsApp?");
    if (confirmed) {
      // Open WhatsApp link in a new tab
      window.open("https://wa.me/8801676047350", "_blank");
    }
  };

  return (
    <div>
      <footer className="bg-[#1A1D2B]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid xl:grid-cols-3 xl:gap-8 pb-6 pt-2">
            <div>
              <div className="mt-5">
                <img src={logo} className="w-40" alt="" />
              </div>
              <div className="max-w-md text-md text-gray-200 mt-4">
                Transforming Ideas into Effective <br /> Digital Solutions for
                Your Needs
              </div>
              <div className="flex space-x-1 mt-4">
                <Link
                  to="https://www.facebook.com/SkyLarkITLtd"
                  className="cursor-pointer w-6"
                >
                  <img
                    src="https://res.cloudinary.com/dlaatmz5a/image/upload/v1729435146/facebook_5968764_ekshhw.png"
                    alt=""
                  />
                </Link>
                <Link to="#" onClick={handleWhatsAppClick} className="w-6">
                  <img
                    src="https://res.cloudinary.com/dlaatmz5a/image/upload/v1729435147/whatsapp_733585_liafzz.png"
                    alt=""
                  />
                </Link>
                <Link
                  to="https://www.linkedin.com/in/skylarkitltd/"
                  className="w-6"
                >
                  <img
                    src="https://res.cloudinary.com/dlaatmz5a/image/upload/v1729504222/linkedin_2504923_p74b0u.png"
                    alt=""
                  />
                </Link>
                <Link
                  to="https://www.youtube.com/@SkylarkITLtd"
                  className="w-6"
                >
                  <img
                    src="https://res.cloudinary.com/dlaatmz5a/image/upload/v1729435147/youtube_3938026_w19clj.png"
                    alt=""
                  />
                </Link>
                <Link to="https://www.x.com/Skylarkitltd" className="w-6">
                  <img
                    src="https://res.cloudinary.com/dlaatmz5a/image/upload/v1729504222/twitter-alt-circle_12107562_jbyxff.png"
                    alt=""
                  />
                </Link>
                <Link
                  to="https://www.instagram.com/skylarkitltd/"
                  className="w-6"
                >
                  <img
                    src="https://res.cloudinary.com/dlaatmz5a/image/upload/v1729435146/instagram_2111463_jpyguo.png"
                    alt=""
                  />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div className="mt-6">
                  <h3 className="text-md font-semibold leading-6 text-white">
                    Our Solutions
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <a
                        href="/aiplatform"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50"
                      >
                        Web Development
                      </a>
                    </li>
                    <li>
                      <a
                        href="/aialgorithms"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50"
                      >
                        Website Design
                      </a>
                    </li>
                    <li>
                      <a
                        href="/industryapplications"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50"
                      >
                        Digital Marketing
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-6">
                  <h3 className="text-md font-semibold leading-6 text-white">
                    Use Cases
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <a
                        href="/predictiveanalysis"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50"
                      >
                        Predictive Analysis
                      </a>
                    </li>
                    <li>
                      <a
                        href="/customerexperience"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50"
                      >
                        Customer Experience
                      </a>
                    </li>
                    <li>
                      <a
                        href="/automation"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50"
                      >
                        Automation
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div className="mt-6">
                  <h3 className="text-md font-semibold leading-6 text-white">
                    Resources
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <a
                        href="/pricing"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50"
                      >
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a
                        href="/UserDataDeletion"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50"
                      >
                        User Data Deletion
                      </a>
                    </li>
                    <li>
                      <a
                        href="/PrivacyPolicy"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50"
                      >
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-6">
                  <h3 className="text-md font-semibold leading-6 text-white">
                    Company
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <a
                        href="/aboutus"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="/careers"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50"
                      >
                        Careers
                      </a>
                    </li>
                    <li>
                      <a
                        href="/contactus"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-400/30 py-3">
            <div className="text-md text-center text-white">
              Copyright © {Year} SkyLark IT
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
