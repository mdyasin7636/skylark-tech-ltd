import { SiMicrostrategy } from "react-icons/si";

const Services = () => {
  const services = [
    {
      icon: <SiMicrostrategy />,
      title: "IT Consultancy & Marketing Strategy",
      description: "Create your Marketing Strategy with our Expert Team",
    },
    {
      icon: <SiMicrostrategy />,
      title: "Prototype Design",
      description:
        "Scratch your imagination from the beginning before the Final Project. Live Your Dream Project.",
    },
    {
      icon: <SiMicrostrategy />,
      title: "Web Development",
      description:
        "Bug-Free and Secure Custom Web Development According to Business Needs.",
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
      title: "Photography",
      description:
        "We offer professional Photography services To Promote Your Brand.",
    },
    {
      icon: <SiMicrostrategy />,
      title: "Videography",
      description:
        "We offer professional Videography services To Promote Your Brand.",
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
        <p className="mt-2 font-semibold">
          We are committed to digitalizing your business. We provide Integrated
          marketing <br /> company that  delivers graphics, web, and marketing solutions
          for businesses of all sizes.
        </p>
      </div>
      <div className="grid md:grid-cols-4 gap-10 mt-10 mx-20">
        {
            services.map((service, index) => <div key={index} className="p-10 bg-slate-200 rounded-md mx-2 shadow-xl shadow-black hover:scale-105 duration-500">
            <div>
            <p>
              {service.icon}
            </p>
            </div>
            <h1 className="my-2 font-bold text-lg">{service.title}</h1>
            <p className="my-2">{service.description}</p>
          </div>)
        }
      </div>
    </div>
  );
};

export default Services;
