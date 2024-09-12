import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';

const MiniNav = () => {
    return (
        <div className="bg-purple-600 text-white p-2">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                
                {/* Contact Info for Desktop */}
                <div className="hidden md:flex space-x-8 items-center">
                    <div className="flex items-center space-x-2">
                        <FaMapMarkerAlt />
                        <span>54 NJ-12, Flemington, United States</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaPhoneAlt />
                        <span>+153-987-3657</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaEnvelope />
                        <span>info@webteck.com</span>
                    </div>
                </div>

                {/* Follow Us Section for Desktop */}
                <div className="hidden md:flex md:ml-auto items-center space-x-4">
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
                <div className="md:hidden flex flex-col items-center space-y-2 w-full mt-2">
                    {/* Follow Us On Text and Social Media Icons on the same line */}
                    <div className="flex items-center space-x-2">
                        <span>Follow Us On :</span>
                        <div className="flex space-x-2">
                            <FaFacebookF className="hover:text-gray-200 cursor-pointer text-lg" />
                            <FaTwitter className="hover:text-gray-200 cursor-pointer text-lg" />
                            <FaLinkedinIn className="hover:text-gray-200 cursor-pointer text-lg" />
                            <FaInstagram className="hover:text-gray-200 cursor-pointer text-lg" />
                            <FaYoutube className="hover:text-gray-200 cursor-pointer text-lg" />
                        </div>
                    </div>

                    {/* Mobile Number */}
                    <div className="flex items-center space-x-2">
                        <FaPhoneAlt className="text-lg" />
                        <span className="text-sm">+153-987-3657</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiniNav;
