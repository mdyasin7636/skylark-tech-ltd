import { Link } from "react-router-dom";
import {
  FiCloud,
  FiCode,
  FiFileText,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiPenTool,
  FiPhone,
  FiShield,
  FiSmartphone,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";
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
        <div className="mx-auto max-w-7xl px-5 pt-10 pb-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-12 md:gap-x-10 lg:gap-x-16">
            <div className="col-span-2 text-center md:col-span-4 md:text-left">
              <div className="flex justify-center md:justify-start">
                <img src={logo} className="w-40" alt="Skylark-IT" />
              </div>

              <p className="mt-4 max-w-md leading-relaxed text-white font-medium md:max-w-xs">
                Transforming Ideas into Effective <br /> Digital Solutions for Your Needs
              </p>

              <div className="mt-4 flex justify-center space-x-1 md:justify-start">
                <Link
                  to="https://www.facebook.com/SkyLarkITLtd"
                  className="cursor-pointer w-7"
                >
                  <img
                    src="https://res.cloudinary.com/dlaatmz5a/image/upload/v1729435146/facebook_5968764_ekshhw.png"
                    alt=""
                  />
                </Link>
                <Link to="#" onClick={handleWhatsAppClick} className="w-7">
                  <img
                    src="https://res.cloudinary.com/dlaatmz5a/image/upload/v1729435147/whatsapp_733585_liafzz.png"
                    alt=""
                  />
                </Link>
                <Link
                  to="https://www.linkedin.com/in/skylarkitltd/"
                  className="w-7"
                >
                  <img
                    src="https://res.cloudinary.com/dlaatmz5a/image/upload/v1729504222/linkedin_2504923_p74b0u.png"
                    alt=""
                  />
                </Link>
                <Link
                  to="https://www.youtube.com/@SkylarkITLtd"
                  className="w-7"
                >
                  <img
                    src="https://res.cloudinary.com/dlaatmz5a/image/upload/v1729435147/youtube_3938026_w19clj.png"
                    alt=""
                  />
                </Link>
                <Link to="https://www.x.com/Skylarkitltd" className="w-7">
                  <img
                    src="https://res.cloudinary.com/dlaatmz5a/image/upload/v1729504222/twitter-alt-circle_12107562_jbyxff.png"
                    alt=""
                  />
                </Link>
                <Link
                  to="https://www.instagram.com/skylarkitltd/"
                  className="w-7"
                >
                  <img
                    src="https://res.cloudinary.com/dlaatmz5a/image/upload/v1729435146/instagram_2111463_jpyguo.png"
                    alt=""
                  />
                </Link>
              </div>
            </div>

            <div className="col-span-2 grid grid-cols-2 gap-x-6 gap-y-10 md:col-span-8 md:grid-cols-3 md:gap-x-8">
              <div className="text-center md:text-left">
                <p className="text-xl font-semibold text-white">Quick Links</p>
                <div
                  aria-hidden="true"
                  className="mx-auto mt-2 h-1 w-12 rounded-full bg-gradient-to-r from-[#2FB3E3] to-[#1C75BC] md:mx-0"
                />

                <ul className="mt-6 space-y-4 text-sm">

                  <li>
                    <Link className="inline-flex items-center justify-center gap-2 text-white transition hover:text-normal-sky md:justify-start" to="/about-us">
                      <FiUsers aria-hidden="true" />
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link className="inline-flex items-center justify-center gap-2 text-white transition hover:text-normal-sky md:justify-start" to="/contact-us">
                      <FiMail aria-hidden="true" />
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link className="inline-flex items-center justify-center gap-2 text-white transition hover:text-normal-sky md:justify-start" to="/live-chat">
                      <FiMessageCircle aria-hidden="true" />
                      Live Chat
                    </Link>
                  </li>
                  <li>
                    <Link className="inline-flex items-center justify-center gap-2 text-white transition hover:text-normal-sky md:justify-start" to="/PrivacyPolicy">
                      <FiShield aria-hidden="true" />
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link className="inline-flex items-center justify-center gap-2 text-white transition hover:text-normal-sky md:justify-start" to="/terms">
                      <FiFileText aria-hidden="true" />
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="text-center md:text-left">
                <p className="text-xl font-semibold text-white">Our Services</p>
                <div
                  aria-hidden="true"
                  className="mx-auto mt-2 h-1 w-12 rounded-full bg-gradient-to-r from-[#2FB3E3] to-[#1C75BC] md:mx-0"
                />

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <Link className="inline-flex items-center justify-center gap-2 text-white transition hover:text-normal-sky md:justify-start" to="/web-development">
                      <FiCode aria-hidden="true" />
                      Web Development
                    </Link>
                  </li>

                  <li>
                    <Link className="inline-flex items-center justify-center gap-2 text-white transition hover:text-normal-sky md:justify-start" to="/digital-marketing">
                      <FiTrendingUp aria-hidden="true" />
                      Digital Marketing
                    </Link>
                  </li>

                  <li>
                    <Link className="inline-flex items-center justify-center gap-2 text-white transition hover:text-normal-sky md:justify-start" to="/graphic-design">
                      <FiPenTool aria-hidden="true" />
                      Graphic Design
                    </Link>
                  </li>

                  <li>
                    <Link className="inline-flex items-center justify-center gap-2 text-white transition hover:text-normal-sky md:justify-start" to="/app-development">
                      <FiSmartphone aria-hidden="true" />
                      App Development
                    </Link>
                  </li>
                  <li>
                    <Link className="inline-flex items-center justify-center gap-2 text-white transition hover:text-normal-sky md:justify-start" to="/cloud-services">
                      <FiCloud aria-hidden="true" />
                      Cloud Services
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-span-2 text-center md:col-span-1 md:text-left">
                <p className="text-xl font-semibold text-white">Contact Us</p>
                <div
                  aria-hidden="true"
                  className="mx-auto mt-2 h-1 w-12 rounded-full bg-gradient-to-r from-[#2FB3E3] to-[#1C75BC] md:mx-0"
                />

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <span className="inline-flex items-start justify-center gap-2 text-white md:justify-start">
                      <FiMapPin className="mt-1 shrink-0" aria-hidden="true" />
                      <span>
                        93, Kazi Nazrul Islam Avenue
                        <br className="sm:hidden" />{" "}
                        Kawran Bazar, Dhaka-1215
                      </span>
                    </span>
                  </li>

                  <li className="flex flex-col items-center gap-4 md:items-start">
                    <span className="inline-flex items-center gap-2 text-white">
                      <FiPhone aria-hidden="true" />
                      +8801676047350
                    </span>
                    <span className="inline-flex items-center gap-2 text-white">
                      <FiPhone aria-hidden="true" />
                      +8801976369111
                    </span>
                  </li>

                  <li>
                    <span className="inline-flex items-center justify-center gap-2 text-white md:justify-start">
                      <FiMail aria-hidden="true" />
                      skylarkitltd@gmail.com
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-gray-100 pt-6 dark:border-gray-800">
            <div className="flex flex-col gap-2 text-center sm:flex-row sm:justify-between sm:text-left">
              <p className="text-sm text-white">
                <span className="block sm:inline">All rights reserved</span>
              </p>

              <p className="text-sm text-white sm:order-first ">
                © {Year} SkyLark-IT
              </p>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Footer;