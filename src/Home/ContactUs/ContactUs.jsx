import contactImg from "../../assets/contact.json";
import Lottie from "lottie-react";
import { MdContactMail } from "react-icons/md";

const ContactUs = () => {
  return (
    <div id="contact" className="mt-10">
      <div className="flex items-center justify-center">
        <div className="flex items-center border-b-2 border-indigo-800">
          <h2 className="mr-1 text-xl">
            <MdContactMail />
          </h2>
          <h2 className="text-2xl font-semibold">Get In Touch</h2>
        </div>
      </div>
      <div className="grid md:grid-cols-2">
        <div>
          <Lottie className="" animationData={contactImg} loop={true}></Lottie>
        </div>
        <div className="">
          <form className="relative border-2 border-deep-sky p-6 rounded-lg grid gap-8 md:flex-1 md:max-w-lg my-4 md:my-12 lg:my-16 bg-white dark:bg-normal-sky w-full">
            <h2 id="contact" className="text-3xl font-bold">
              Let&apos;s Connect
            </h2>
            <div className="relative">
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="peer w-full py-2 border rounded-md focus:outline-none placeholder-transparent border-normal-sky focus:border-deep-sky focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 leading-8 transition-colors duration-200 ease-in-out"
              />
              <label
                htmlFor="name"
                className="text-neutral-500 text-sm font-bold uppercase absolute -top-4 left-2 -translate-y-1/2 transition-all peer-placeholder-shown:left-4 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-neutral-900 peer-focus:-top-4 peer-focus:left-2 peer-focus:text-neutral-600 dark:peer-focus:text-neutral-300 "
              >
                Name
              </label>
            </div>
            <div className="relative">
              <input
                type="text"
                id="email"
                placeholder="Email"
                className="peer w-full py-2 border rounded-md focus:outline-none placeholder-transparent border-normal-sky focus:border-deep-sky focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 leading-8 transition-colors duration-200 ease-in-out"
              />
              <label
                htmlFor="email"
                className=" text-neutral-500 text-sm font-bold uppercase absolute -top-4 left-2 -translate-y-1/2 transition-all peer-placeholder-shown:left-4 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-neutral-900 peer-focus:-top-4 peer-focus:left-2 peer-focus:text-neutral-600 dark:peer-focus:text-neutral-300 "
              >
                Email
              </label>
            </div>
            <div className="relative">
              <textarea
                name="content"
                id="content"
                cols="20"
                rows="5"
                placeholder="How can we help?"
                className="peer w-full form-textarea py-2 border rounded-md focus:outline-none placeholder-transparent border-normal-sky focus:border-deep-sky focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 leading-8 transition-colors duration-200 ease-in-out"
              ></textarea>
              <label
                htmlFor="content"
                className=" text-neutral-500 text-sm font-bold uppercase absolute -top-3 left-2 -translate-y-1/2 transition-all peer-placeholder-shown:left-4 peer-placeholder-shown:top-6 peer-placeholder-shown:text-neutral-900 peer-focus:-top-4 peer-focus:left-2 peer-focus:text-neutral-600 dark:peer-focus:text-neutral-300 "
              >
                How can we help?
              </label>
            </div>
            <a
              href="#"
              role="menuitem"
              className=" py-2 px-6 bg-neutral-900 text-white w-max shadow-xl hover:shadow-none transition-shadow focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-md ring-offset-4 ring-offset-white dark:ring-offset-amber-400 "
            >
              Send
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
