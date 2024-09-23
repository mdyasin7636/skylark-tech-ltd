import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';

const MiniNav = () => {
    return (
        <div className="bg-deep-sky text-white p-2">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                
                {/* Contact Info for Desktop */}
                <div className="hidden md:flex space-x-8 items-center">
                    <div className="flex items-center space-x-1">
                        <FaMapMarkerAlt />
                        <span>Kawran Bazar, Dhaka</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <FaPhoneAlt />
                        <span>+8801676047350</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <FaEnvelope />
                        <span>skylarkitltd@gmail.com</span>
                    </div>
                </div>

                {/* Follow Us Section for Desktop */}
                <div className="hidden md:flex md:ml-auto items-center space-x-2">
                    <span>Follow Us On :</span>
                    <div className="flex space-x-2">
                        <FaFacebookF className="hover:text-gray-200 cursor-pointer" />
                        <FaTwitter className="hover:text-gray-200 cursor-pointer" />
                        <FaLinkedinIn className="hover:text-gray-200 cursor-pointer" />
                        <FaInstagram className="hover:text-gray-200 cursor-pointer" />
                        <FaYoutube className="hover:text-gray-200 cursor-pointer" />
                    </div>
                </div>

                {/* Mobile View: Follow Us On and Social Media Icons */} 
                <div className="md:hidden flex flex-row justify-evenly items-center w-full my-2">
                    {/* Follow Us On Text and Social Media Icons */}
                    <div className="flex items-center space-x-1">
                        <span>Follow Us :</span>
                        <div className="flex space-x-1">
                            <FaFacebookF className="hover:text-gray-200 cursor-pointer text-lg" />
                            <FaTwitter className="hover:text-gray-200 cursor-pointer text-lg" />
                            <FaLinkedinIn className="hover:text-gray-200 cursor-pointer text-lg" />
                            <FaInstagram className="hover:text-gray-200 cursor-pointer text-lg" />
                            <FaYoutube className="hover:text-gray-200 cursor-pointer text-lg" />
                        </div>
                    </div>

                    {/* Mobile Number */}
                    <div className="flex items-center space-x-1">
                        <FaPhoneAlt className="text-lg" />
                        <span className="text-sm">+8801676047350</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiniNav;
