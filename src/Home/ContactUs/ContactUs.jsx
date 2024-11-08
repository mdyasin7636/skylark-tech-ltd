import { IoMdPerson } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { BiSolidMessage } from "react-icons/bi";
import { HiPhone } from "react-icons/hi2";
import { SlLocationPin } from "react-icons/sl";
import { SiMaildotcom } from "react-icons/si";
import { MdPhoneInTalk } from "react-icons/md";
import { TbWorldSearch } from "react-icons/tb";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div className="mt-7">
      <div className="text-center">
        <h1 className="text-3xl text-deep-sky font-extrabold">Get In Touch</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-7">
        <div className="relative flex items-end px-5 pb-16 pt-16 md:justify-center lg:pb-24 bg-gray-50">
          <div className="absolute inset-0">
            <img
              className="object-cover w-full h-full"
              src="https://res.cloudinary.com/dlaatmz5a/image/upload/v1731070249/page-turner_jbyoxt.png"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          <div className="relative">
            <div className="w-full max-w-xl xl:w-full xl:mx-auto xl:pr-24 xl:max-w-xl">
              <h3 className="text-4xl font-bold text-white">
                Let&apos;s discuss on something{" "}
                <br className="hidden xl:block" />
                cool together
              </h3>
              <ul className="grid grid-cols-1 mt-10 sm:grid-cols-2 gap-x-8 gap-y-4">
                <li className="flex items-center space-x-3">
                  <div className="inline-flex items-center justify-center flex-shrink-0 text-white">
                    <SlLocationPin className="w-7 h-7" />
                  </div>
                  <span className="text-lg font-medium text-white">
                    93, Kazi Nazrul Islam Avenue, Kawran Bazar, Dhaka-1215
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="inline-flex items-center justify-center flex-shrink-0 text-white">
                    <SiMaildotcom className="w-7 h-7" />
                  </div>
                  <span className="text-lg font-medium text-white">
                    skylarkitltd@gmail.com
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="inline-flex items-center justify-center flex-shrink-0 text-white">
                    <MdPhoneInTalk className="w-7 h-7" />
                  </div>
                  <span className="text-lg font-medium text-white">
                    +8801676047350
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="inline-flex items-center justify-center flex-shrink-0 text-white">
                    <TbWorldSearch className="w-7 h-7" />
                  </div>
                  <span className="text-lg font-medium text-white">
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        <Link
                          to="https://www.facebook.com/SkyLarkITLtd"
                          className="cursor-pointer w-7"
                        >
                          <img
                            src="https://res.cloudinary.com/dlaatmz5a/image/upload/v1729435146/facebook_5968764_ekshhw.png"
                            alt=""
                          />
                        </Link>
                        <Link
                          to="https://www.facebook.com/SkyLarkITLtd"
                          className="w-7"
                        >
                          <img
                            src="https://res.cloudinary.com/dlaatmz5a/image/upload/v1729435147/whatsapp_733585_liafzz.png"
                            alt=""
                          />
                        </Link>
                        <Link
                          to="https://www.facebook.com/SkyLarkITLtd"
                          className="w-7"
                        >
                          <img
                            src="https://res.cloudinary.com/dlaatmz5a/image/upload/v1729504222/twitter-alt-circle_12107562_jbyxff.png"
                            alt=""
                          />
                        </Link>
                        <Link
                          to="https://www.facebook.com/SkyLarkITLtd"
                          className="w-7"
                        >
                          <img
                            src="https://res.cloudinary.com/dlaatmz5a/image/upload/v1729504222/linkedin_2504923_p74b0u.png"
                            alt=""
                          />
                        </Link>
                        <Link
                          to="https://www.facebook.com/SkyLarkITLtd"
                          className="w-7"
                        >
                          <img
                            src="https://res.cloudinary.com/dlaatmz5a/image/upload/v1729435146/instagram_2111463_jpyguo.png"
                            alt=""
                          />
                        </Link>
                        <Link
                          to="https://www.facebook.com/SkyLarkITLtd"
                          className="w-7"
                        >
                          <img
                            src="https://res.cloudinary.com/dlaatmz5a/image/upload/v1729435147/youtube_3938026_w19clj.png"
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center py-6 bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
          <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
              Send Us A Message
            </h2>
            <form action="#" method="POST" className="mt-6">
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    Name
                  </label>
                  <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <IoMdPerson />
                    </div>

                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter your name"
                      className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <MdEmail />
                    </div>
                    <input
                      type="email"
                      name=""
                      id=""
                      placeholder="Enter your email"
                      className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    Number
                  </label>
                  <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <HiPhone />
                    </div>

                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter your number"
                      className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    How can we help?
                  </label>
                  <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600 flex items-start">
                    <div className="absolute left-3 top-[23px] pointer-events-none">
                      <BiSolidMessage />
                    </div>

                    <textarea
                      type="text"
                      name=""
                      id=""
                      cols="20"
                      rows="4"
                      placeholder="Enter your message"
                      className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600 resize"
                    />
                  </div>
                </div>
                <div>
                  <button className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-md bg-[#1A1D2B] py-4 font-medium text-neutral-50 mt-2">
                    <span className="absolute h-0 w-0 rounded-full bg-deep-sky transition-all duration-300 group-hover:h-[390px] group-hover:w-[390px]"></span>
                    <span className="relative">Send</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
