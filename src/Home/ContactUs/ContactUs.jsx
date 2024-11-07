/* eslint-disable react/prop-types */
// import { IoMailOutline } from "react-icons/io5";
// import { FiPhoneCall } from "react-icons/fi";
// import { MdContactMail } from "react-icons/md";

// const InputField = ({ id, type, placeholder, label }) => (
//   <div className="relative">
//     <input
//       type={type}
//       id={id}
//       placeholder={placeholder}
//       className="peer w-full py-2 border rounded-md focus:outline-none placeholder-transparent border-normal-sky focus:border-deep-sky focus:bg-white focus:ring-2 focus:ring-blue-200 text-sm text-gray-900 leading-6 transition-colors duration-200 ease-in-out"
//     />
//     <label
//       htmlFor={id}
//       className="text-neutral-500 text-xs font-bold uppercase absolute -top-3 left-2 -translate-y-1/2 transition-all peer-placeholder-shown:left-4 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-neutral-900 peer-focus:-top-3 peer-focus:left-2 peer-focus:text-neutral-600 dark:peer-focus:text-neutral-300"
//     >
//       {label}
//     </label>
//   </div>
// );

const ContactUs = () => {
  return (
    // <div id="contact" className="mt-7 mb-7">
    //   {/* <div className="flex items-center justify-center mb-8">
    //     <div className="flex items-center border-b-2 border-indigo-800">
    //       <h2 className="mr-1 text-lg">
    //         <MdContactMail />
    //       </h2>
    //       <h2 className="text-xl font-semibold">Get In Touch</h2>
    //     </div>
    //   </div> */}
    //   <div className="text-center">
    //     <h1 className="text-3xl text-deep-sky font-extrabold">Get In Touch</h1>
    //   </div>

    //   <div className="grid md:grid-cols-2 justify-center items-center">
    //     {/* Contact Info */}

    //     <div className="flex items-center justify-center">
    //       <div>
    //         {/* className="relative w-full max-w-lg" */}
    //         {/* <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
    //         <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
    //         <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div> */}
    //         <div>
    //           {/* className="m-8 relative space-y-4" */}
    //           <div className="rounded-lg text-center mt-5">
    //             {/* <div className="px-10 py-10 rounded-lg text-center"> */}
    //             <div className="text-base uppercase text-deep-sky font-bold">
    //               Appointment Now
    //             </div>
    //             <h2 className="text-3xl font-bold text-black mt-2">
    //               We’re Ready To Talk About Your{" "}
    //               <span className="text-deep-sky">Opportunities</span>
    //             </h2>
    //             <p className="text-gray-600 mt-2">
    //               We’d love to hear from you! Whether you have questions, need
    //               assistance, or want to explore our services, feel free to
    //               reach out. Our team is here to help.
    //             </p>
    //             {/* <div className="flex justify-center space-x-8">
    //               <div className="flex items-center space-x-2 bg-white text-deep-sky border border-black py-4 px-6 rounded-lg shadow-md">
    //                 <FiPhoneCall size={37} />
    //                 <div className="text-left">
    //                   <p className="text-xs font-semibold text-black">Call Us On:</p>
    //                   <p className="text-lg font-semibold">+8801676047350</p>
    //                 </div>
    //               </div>
    //               <div className="flex items-center space-x-2 bg-white text-deep-sky border border-black py-4 px-6 rounded-lg shadow-md">
    //                 <IoMailOutline size={45} />
    //                 <div className="text-left">
    //                   <p className="text-xs font-semibold text-black">Quick Mail Us:</p>
    //                   <p className="text-lg font-semibold">skylarkitltd@gmail.com</p>
    //                 </div>
    //               </div>
    //             </div> */}
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Contact Form */}
    //     <form className="relative border-2 border-deep-sky p-6 rounded-lg grid gap-7 bg-white  max-w-xl mx-3 mt-7">
    //       <h2 className="text-2xl font-bold">Make An Appointment</h2>

    //       {/* Name and Email in one row */}
    //       <div className="grid md:grid-cols-2 gap-7">
    //         <InputField id="name" type="text" placeholder="Name" label="Name" />
    //         <InputField
    //           id="email"
    //           type="text"
    //           placeholder="Email"
    //           label="Email"
    //         />
    //       </div>

    //       {/* Subject and Phone in one row */}
    //       <div className="grid md:grid-cols-2 gap-7">
    //         <InputField
    //           id="subject"
    //           type="text"
    //           placeholder="Subject"
    //           label="Subject"
    //         />
    //         <InputField
    //           id="phone"
    //           type="text"
    //           placeholder="Number"
    //           label="Number"
    //         />
    //       </div>

    //       {/* Message textarea */}
    //       <div className="relative">
    //         <textarea
    //           id="content"
    //           cols="20"
    //           rows="4"
    //           placeholder="How can we help?"
    //           className="peer w-full form-textarea py-1.5 border rounded-md focus:outline-none placeholder-transparent border-normal-sky focus:border-deep-sky focus:bg-white focus:ring-2 focus:ring-blue-200 text-sm text-gray-900 leading-6 transition-colors duration-200 ease-in-out"
    //         ></textarea>
    //         <label
    //           htmlFor="content"
    //           className="text-neutral-500 text-xs font-bold uppercase absolute -top-3 left-2 -translate-y-1/2 transition-all peer-placeholder-shown:left-4 peer-placeholder-shown:top-4 peer-placeholder-shown:text-neutral-900 peer-focus:-top-3 peer-focus:left-2 peer-focus:text-neutral-600 dark:peer-focus:text-neutral-300"
    //         >
    //           How can we help?
    //         </label>
    //       </div>
    //       <div>
    //         <button className="group relative inline-flex py-2 items-center justify-center overflow-hidden rounded-md bg-[#1A1D2B] px-10 font-medium text-neutral-50">
    //           <span className="absolute h-0 w-0 rounded-full bg-deep-sky transition-all duration-300 group-hover:h-56 group-hover:w-56"></span>
    //           <span className="relative">Send</span>
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    // </div>
    <div>
      <section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative flex items-end px-4 pb-10 pt-60 sm:pb-16 md:justify-center lg:pb-24 bg-gray-50 sm:px-6 lg:px-8">
            <div className="absolute inset-0">
              <img
                className="object-cover w-full h-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/signup/4/girl-working-on-laptop.jpg"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

            <div className="relative">
              <div className="w-full max-w-xl xl:w-full xl:mx-auto xl:pr-24 xl:max-w-xl">
                <h3 className="text-4xl font-bold text-white">
                  Join 35k+ web professionals &{" "}
                  <br className="hidden xl:block" />
                  build your website
                </h3>
                <ul className="grid grid-cols-1 mt-10 sm:grid-cols-2 gap-x-8 gap-y-4">
                  <li className="flex items-center space-x-3">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                      <svg
                        className="w-3.5 h-3.5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-lg font-medium text-white">
                      {" "}
                      Commercial License{" "}
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                      <svg
                        className="w-3.5 h-3.5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-lg font-medium text-white">
                      {" "}
                      Unlimited Exports{" "}
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                      <svg
                        className="w-3.5 h-3.5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-lg font-medium text-white">
                      {" "}
                      120+ Coded Blocks{" "}
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                      <svg
                        className="w-3.5 h-3.5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-lg font-medium text-white">
                      {" "}
                      Design Files Included{" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
            <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                Send Us A Message
              </h2>
              <form action="#" method="POST" className="mt-8">
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
                        <svg
                          className="w-5 h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
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
                        <svg
                          className="w-5 h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                          />
                        </svg>
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
                        <svg
                          className="w-5 h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                          />
                        </svg>
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
                    <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          className="w-5 h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>

                      <textarea
                        type="text"
                        name=""
                        id=""
                        placeholder="Enter your message"
                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
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
      </section>
    </div>
  );
};

export default ContactUs;
