import { SiMicrostrategy } from "react-icons/si";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    {
      icon: <SiMicrostrategy />,
      title: "WordPress Development",
      description: "Create your WordPress site with our Expert Team",
    },
    {
      icon: <SiMicrostrategy />,
      title: "Web Development",
      description:
        "Bug-Free and Secure Custom Web Development According to Business Needs.",
    },
    {
      icon: <SiMicrostrategy />,
      title: "Prototype Design",
      description:
        "Scratch your imagination from the beginning before the Final Project. Live Your Dream Project.",
    },
    {
      icon: <SiMicrostrategy />,
      title: "App Development",
      description:
        "Custom iOS/Android App Design and Development for Businesses of All Sizes. Get Start Today",
    },
    {
      icon: <SiMicrostrategy />,
      title: "Graphics Solution",
      description:
        "SkyLark Offers A Complete Graphics Solution from Branding to Product Promotion.",
    },
    {
      icon: <SiMicrostrategy />,
      title: "Digital Marketing",
      description:
        "SkyLark is ready to Promote your Brand with Data-Driven Marketing. We Ensure Your Sale",
    },
  ];

  return (
    <div className="mt-10">
      <div className="text-center">
        <h1 className="text-3xl text-blue-800 text-center font-extrabold">
          Our Services
        </h1>
        <p className="mt-2 font-bold text-4xl">
          We Provide Exclusive Service <br /> For Your Business
        </p>
      </div>
      <div className="grid md:grid-cols-3 justify-items-center gap-12 mt-11 md:mx-[115px]">
        {services.map((service, index) => (
          <div key={index} >
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
