import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MiniNav = () => {
    return (
        <div className="bg-[#1A1D2B] text-white p-2">
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
                    <span className='text-base font-semibold'>Find Us On :</span>
                    <div className="flex space-x-1">
                    <Link to='https://www.facebook.com/SkyLarkITLtd' className='cursor-pointer w-6'>
                        <img src="https://res.cloudinary.com/dlaatmz5a/image/upload/v1729435146/facebook_5968764_ekshhw.png" alt="" />
                        </Link>
                        <Link to='https://www.facebook.com/SkyLarkITLtd' className='w-6'>
                        <img src="https://res.cloudinary.com/dlaatmz5a/image/upload/v1729435147/whatsapp_733585_liafzz.png" alt="" />
                        </Link>
                        <Link to='https://www.facebook.com/SkyLarkITLtd' className='w-6'>
                        <img src="https://res.cloudinary.com/dlaatmz5a/image/upload/v1729504222/twitter-alt-circle_12107562_jbyxff.png" alt="" />
                        </Link>
                        <Link to='https://www.facebook.com/SkyLarkITLtd' className='w-6'>
                        <img src="https://res.cloudinary.com/dlaatmz5a/image/upload/v1729504222/linkedin_2504923_p74b0u.png" alt="" />
                        </Link>
                        <Link to='https://www.facebook.com/SkyLarkITLtd' className='w-6'>
                        <img src="https://res.cloudinary.com/dlaatmz5a/image/upload/v1729435146/instagram_2111463_jpyguo.png" alt="" />
                        </Link>
                        <Link to='https://www.facebook.com/SkyLarkITLtd' className='w-6'>
                        <img src="https://res.cloudinary.com/dlaatmz5a/image/upload/v1729435147/youtube_3938026_w19clj.png" alt="" />
                        </Link>
                    </div>
                </div>

                {/* Mobile View: Follow Us On and Social Media Icons */} 
                <div className="md:hidden flex flex-row justify-evenly items-center w-full my-2">
                    {/* Follow Us On Text and Social Media Icons */}
                    <div className="flex items-center space-x-2">
                        <span className='text-xl font-semibold'>Find Us On:</span>
                        <div className="flex space-x-1">
                        <Link to='https://www.facebook.com/SkyLarkITLtd' className='cursor-pointer w-7'>
                        <img src="https://res.cloudinary.com/dlaatmz5a/image/upload/v1729435146/facebook_5968764_ekshhw.png" alt="" />
                        </Link>
                        <Link to='https://www.facebook.com/SkyLarkITLtd' className='w-7'>
                        <img src="https://res.cloudinary.com/dlaatmz5a/image/upload/v1729435147/whatsapp_733585_liafzz.png" alt="" />
                        </Link>
                        <Link to='https://www.facebook.com/SkyLarkITLtd' className='w-7'>
                        <img src="https://res.cloudinary.com/dlaatmz5a/image/upload/v1729504222/twitter-alt-circle_12107562_jbyxff.png" alt="" />
                        </Link>
                        <Link to='https://www.facebook.com/SkyLarkITLtd' className='w-7'>
                        <img src="https://res.cloudinary.com/dlaatmz5a/image/upload/v1729504222/linkedin_2504923_p74b0u.png" alt="" />
                        </Link>
                        <Link to='https://www.facebook.com/SkyLarkITLtd' className='w-7'>
                        <img src="https://res.cloudinary.com/dlaatmz5a/image/upload/v1729435146/instagram_2111463_jpyguo.png" alt="" />
                        </Link>
                        <Link to='https://www.facebook.com/SkyLarkITLtd' className='w-7'>
                        <img src="https://res.cloudinary.com/dlaatmz5a/image/upload/v1729435147/youtube_3938026_w19clj.png" alt="" />
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiniNav;
