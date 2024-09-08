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
      <div className="grid md:grid-cols-2 mb-10">
        <div>
          <Lottie
            className=""
            animationData={contactImg}
            loop={true}
            data-aos="fade-up"
            data-aos-duration="3000"
          ></Lottie>
        </div>
        <div
          className="md:mt-20 md:w-3/4 mb-10 md:mb-6 mx-6"
        >

        </div>
      </div>
    </div>
  );
};

export default ContactUs;
