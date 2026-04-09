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

      <footer className="bg-[#1A1D2B] ">
        <div className="mx-auto max-w-7xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div className="flex justify-center sm:justify-start">
                <img src={logo} className="w-40" alt="Skylark-IT" />
              </div>

              <p className="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left dark:text-gray-400">
                Transforming Ideas into Effective <br /> Digital Solutions for Your Needs
              </p>

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

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-white">About Us</p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a className="text-gray-300 transition hover:text-gray-50" href="#">
                      Company History
                    </a>
                  </li>

                  <li>
                    <a className="text-gray-300 transition hover:text-gray-50" href="#">
                      Meet the Team
                    </a>
                  </li>

                  <li>
                    <a className="text-gray-300 transition hover:text-gray-50" href="#">
                      Employee Handbook
                    </a>
                  </li>

                  <li>
                    <a className="text-gray-300 transition hover:text-gray-50" href="#">
                      Careers
                    </a>
                  </li>
                </ul>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-white">Our Services</p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a className="text-gray-300 transition hover:text-gray-50" href="#">
                      Web Development
                    </a>
                  </li>

                  <li>
                    <a className="text-gray-300 transition hover:text-gray-50" href="#">
                      Web Design
                    </a>
                  </li>

                  <li>
                    <a className="text-gray-300 transition hover:text-gray-50" href="#">
                      Marketing
                    </a>
                  </li>

                  <li>
                    <a className="text-gray-300 transition hover:text-gray-50" href="#">
                      Google Ads
                    </a>
                  </li>
                </ul>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-white">Helpful Links</p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a className="text-gray-300 transition hover:text-gray-50" href="#">
                      FAQs
                    </a>
                  </li>

                  <li>
                    <a className="text-gray-300 transition hover:text-gray-50" href="#">
                      Support
                    </a>
                  </li>

                  <li>
                    <a className="text-gray-300 transition hover:text-gray-50" href="#">
                      Live Chat
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-300 transition hover:text-gray-50" href="#">
                      Live Chat
                    </a>
                  </li>
                </ul>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-white">Helpful Links</p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a className="text-gray-300 transition hover:text-gray-50" href="#">
                      FAQs
                    </a>
                  </li>

                  <li>
                    <a className="text-gray-300 transition hover:text-gray-50" href="#">
                      Support
                    </a>
                  </li>

                  <li>
                    <a className="text-gray-300 transition hover:text-gray-50" href="#">
                      Live Chat
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-300 transition hover:text-gray-50" href="#">
                      Live Chat
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-100 pt-6 dark:border-gray-800">
            <div className="text-center sm:flex sm:justify-between sm:text-left">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <span className="block sm:inline">All rights reserved</span>
              </p>

              <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0 dark:text-gray-400">
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
