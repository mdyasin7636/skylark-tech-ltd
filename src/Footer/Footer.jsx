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

                <ul className="mt-6 space-y-4 text-sm">

                  <li>
                    <Link className="text-white transition hover:text-normal-sky" to="/about-us">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link className="text-white transition hover:text-normal-sky" to="/contact-us">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link className="text-white transition hover:text-normal-sky" to="/live-chat">
                      Live Chat
                    </Link>
                  </li>
                  <li>
                    <Link className="text-white transition hover:text-normal-sky" to="/PrivacyPolicy">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link className="text-white transition hover:text-normal-sky" to="/terms">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="text-center md:text-left">
                <p className="text-xl font-semibold text-white">Our Services</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <Link className="text-white transition hover:text-normal-sky" to="/web-development">
                      Web Development
                    </Link>
                  </li>

                  <li>
                    <Link className="text-white transition hover:text-normal-sky" to="/digital-marketing">
                      Digital Marketing
                    </Link>
                  </li>

                  <li>
                    <Link className="text-white transition hover:text-normal-sky" to="/graphic-design">
                      Graphic Design
                    </Link>
                  </li>

                  <li>
                    <Link className="text-white transition hover:text-normal-sky" to="/app-development">
                      App Development
                    </Link>
                  </li>
                  <li>
                    <Link className="text-white transition hover:text-normal-sky" to="/cloud-services">
                      Cloud Services
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-span-2 text-center md:col-span-1 md:text-left">
                <p className="text-xl font-semibold text-white">Contact Us</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <span className="text-white">
                      93, Kazi Nazrul Islam Avenue
                      <br className="sm:hidden" />{" "}
                      Kawran Bazar, Dhaka-1215
                    </span>
                  </li>

                  <li>
                    <span className="text-white">
                      <span className="block">+8801676047350</span>
                      <span className="block">+8801976369111</span>
                    </span>
                  </li>

                  <li>
                    <span className="text-white">
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