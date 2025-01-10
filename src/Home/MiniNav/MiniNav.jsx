import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const socialMediaLinks = [
  {
    href: "https://www.facebook.com/SkyLarkITLtd",
    src: "https://res.cloudinary.com/dlaatmz5a/image/upload/v1729435146/facebook_5968764_ekshhw.png",
    alt: "Facebook",
  },
  {
    href: "#",
    src: "https://res.cloudinary.com/dlaatmz5a/image/upload/v1729435147/whatsapp_733585_liafzz.png",
    alt: "WhatsApp",
    onClick: (e) => {
      e.preventDefault();
      const confirmed = window.confirm("Do you want to call via WhatsApp?");
      if (confirmed) {
        window.open("https://wa.me/8801676047350", "_blank");
      }
    },
  },
  {
    href: "https://www.linkedin.com/in/skylarkitltd/",
    src: "https://res.cloudinary.com/dlaatmz5a/image/upload/v1729504222/linkedin_2504923_p74b0u.png",
    alt: "LinkedIn",
  },
  {
    href: "https://www.youtube.com/@SkylarkITLtd",
    src: "https://res.cloudinary.com/dlaatmz5a/image/upload/v1729435147/youtube_3938026_w19clj.png",
    alt: "YouTube",
  },
  {
    href: "https://www.x.com/Skylarkitltd",
    src: "https://res.cloudinary.com/dlaatmz5a/image/upload/v1729504222/twitter-alt-circle_12107562_jbyxff.png",
    alt: "Twitter",
  },
  {
    href: "https://www.instagram.com/skylarkitltd/",
    src: "https://res.cloudinary.com/dlaatmz5a/image/upload/v1729435146/instagram_2111463_jpyguo.png",
    alt: "Instagram",
  },
];

const MiniNav = () => {
  const renderSocialLinks = (iconSize) => (
    <div className={`flex space-x-${iconSize === "w-6" ? 1 : 2}`}>
      {socialMediaLinks.map(({ href, src, alt, onClick }, index) => (
        <Link
          to={href}
          key={index}
          className={iconSize}
          target={href !== "#" ? "_blank" : undefined}
          onClick={onClick || undefined}
        >
          <img src={src} alt={alt} />
        </Link>
      ))}
    </div>
  );

  return (
    <div className="bg-[#1A1D2B] text-white md:p-4 p-2">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Contact Info for Desktop */}
        <div className="hidden md:flex space-x-8 items-center font-semibold">
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

        {/* Follow Us Section */}
        <div className="hidden md:flex md:ml-auto items-center space-x-2">
          <span className="text-base font-semibold">Find Us On</span>
          {renderSocialLinks("w-6")}
        </div>

        {/* Mobile View */}
        <div className="md:hidden flex flex-row justify-evenly items-center w-full my-2">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-semibold">Find Us On</span>
            {renderSocialLinks("w-7")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniNav;
