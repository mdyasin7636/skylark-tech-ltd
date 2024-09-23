/* eslint-disable react/prop-types */
import { IoMailOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { MdContactMail } from "react-icons/md";
import CustomButton from "../../CustomButton/CustomButton";

const InputField = ({ id, type, placeholder, label }) => (
  <div className="relative">
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      className="peer w-full py-2 border rounded-md focus:outline-none placeholder-transparent border-normal-sky focus:border-deep-sky focus:bg-white focus:ring-2 focus:ring-blue-200 text-sm text-gray-900 leading-6 transition-colors duration-200 ease-in-out"
    />
    <label
      htmlFor={id}
      className="text-neutral-500 text-xs font-bold uppercase absolute -top-3 left-2 -translate-y-1/2 transition-all peer-placeholder-shown:left-4 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-neutral-900 peer-focus:-top-3 peer-focus:left-2 peer-focus:text-neutral-600 dark:peer-focus:text-neutral-300"
    >
      {label}
    </label>
  </div>
);

const ContactUs = () => {
  return (
    <div id="contact" className="mt-8 p-6">
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center border-b-2 border-indigo-800">
          <h2 className="mr-1 text-lg">
            <MdContactMail />
          </h2>
          <h2 className="text-xl font-semibold">Get In Touch</h2>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 my-5 justify-center items-center">
        {/* Contact Info */}

        <div className="min-h-screen flex items-center justify-center px-16">
          <div className="relative w-full max-w-lg">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            <div className="m-8 relative space-y-4">
              <div className="px-10 py-20 rounded-lg text-center">
                <div className="mb-4 text-sm uppercase text-indigo-600 font-semibold">
                  Appointment Now
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  We’re Ready To Talk About Your{" "}
                  <span className="text-purple-600">Opportunities</span>
                </h2>
                <p className="text-gray-600 mb-8">
                  Progressively morph principle-centered e-markets without an
                  expanded array of opportunities. Conveniently incubate
                  e-tailers for extensive leadership skills. Holistically extend
                  leading-edge vortals vis-a-vis 24/7 e-markets.
                </p>
                <div className="flex justify-center space-x-8">
                  <div className="flex items-center space-x-2 bg-white text-purple-600 border border-purple-500 py-4 px-6 rounded-lg shadow-md">
                    <FiPhoneCall size={24} />
                    <div className="text-left">
                      <p className="text-xs text-gray-500">Call Us On:</p>
                      <p className="text-lg font-semibold">+190-8800-0393</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 bg-white text-purple-600 border border-purple-500 py-4 px-6 rounded-lg shadow-md">
                    <IoMailOutline size={24} />
                    <div className="text-left">
                      <p className="text-xs text-gray-500">Quick Mail Us:</p>
                      <p className="text-lg font-semibold">info@traga.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="relative border-2 border-deep-sky p-6 rounded-lg grid gap-8 bg-white dark:bg-normal-sky max-w-xl w-full">
          <h2 className="text-2xl font-bold">Make An Appointment</h2>

          {/* Name and Email in one row */}
          <div className="grid md:grid-cols-2 gap-4">
            <InputField id="name" type="text" placeholder="Name" label="Name" />
            <InputField
              id="email"
              type="text"
              placeholder="Email"
              label="Email"
            />
          </div>

          {/* Subject and Phone in one row */}
          <div className="grid md:grid-cols-2 gap-4">
            <InputField
              id="subject"
              type="text"
              placeholder="Subject"
              label="Subject"
            />
            <InputField
              id="phone"
              type="text"
              placeholder="Phone Number"
              label="Phone Number"
            />
          </div>

          {/* Message textarea */}
          <div className="relative">
            <textarea
              id="content"
              cols="20"
              rows="4"
              placeholder="How can we help?"
              className="peer w-full form-textarea py-1.5 border rounded-md focus:outline-none placeholder-transparent border-normal-sky focus:border-deep-sky focus:bg-white focus:ring-2 focus:ring-blue-200 text-sm text-gray-900 leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
            <label
              htmlFor="content"
              className="text-neutral-500 text-xs font-bold uppercase absolute -top-3 left-2 -translate-y-1/2 transition-all peer-placeholder-shown:left-4 peer-placeholder-shown:top-4 peer-placeholder-shown:text-neutral-900 peer-focus:-top-3 peer-focus:left-2 peer-focus:text-neutral-600 dark:peer-focus:text-neutral-300"
            >
              How can we help?
            </label>
          </div>

          <CustomButton
            text="Send"
            onClick={() => console.log("Button Clicked!")}
          />
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
