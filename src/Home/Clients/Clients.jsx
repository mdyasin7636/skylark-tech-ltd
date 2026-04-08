import CustomTitle from "../../components/CustomTitle";

const clients = [
  { img: "https://res.cloudinary.com/dlaatmz5a/image/upload/v1729609651/news-cricket_tya5kz.jpg" },
  { img: "https://res.cloudinary.com/dlaatmz5a/image/upload/v1729609175/hyundai-elevator_kvng8e.jpg" },
  { img: "https://res.cloudinary.com/dlaatmz5a/image/upload/v1729609174/morning-mirror_jo3kmx.jpg" },
  { img: "https://res.cloudinary.com/dlaatmz5a/image/upload/v1729609175/otis-elevator_g5lqh6.jpg" },
  { img: "https://res.cloudinary.com/dlaatmz5a/image/upload/v1729609176/sigma-lift_nvu7vo.jpg" },
  { img: "https://res.cloudinary.com/dlaatmz5a/image/upload/v1729609174/lg-elevator_rxpnk6.jpg" },
  { img: "https://res.cloudinary.com/dlaatmz5a/image/upload/v1729609176/hyundai-lift_aif17c.jpg" },
  { img: "https://res.cloudinary.com/dlaatmz5a/image/upload/v1729609175/elevator-parts_ziseqy.jpg" },
  { img: "https://res.cloudinary.com/dlaatmz5a/image/upload/v1729609175/sb-elevator_e9fjth.jpg" },
  { img: "https://res.cloudinary.com/dlaatmz5a/image/upload/v1729609174/boinik-bangladesh_brdnpp.jpg" },
  { img: "https://res.cloudinary.com/dlaatmz5a/image/upload/v1729609174/ajkaler-kontho_x30ltc.jpg" },
  { img: "https://res.cloudinary.com/dlaatmz5a/image/upload/v1729609174/doinik-sirajganj_gpm1wq.jpg" },
  { img: "https://res.cloudinary.com/dlaatmz5a/image/upload/v1729609174/bangladesher-kontho_snvw6o.jpg" },
  { img: "https://res.cloudinary.com/dlaatmz5a/image/upload/v1729609174/banglar-mukh_xy19he.jpg" },
  { img: "https://res.cloudinary.com/dlaatmz5a/image/upload/v1729609175/jago-songbad_g3ztge.jpg" },
  { img: "https://res.cloudinary.com/dlaatmz5a/image/upload/v1729609175/nogor-protidin_yrmsmj.jpg" },
];

const Clients = () => {
  return (
    <div className="mt-20 px-4 md:px-10">
      <CustomTitle text="Our Clients" />

      <p className="text-center text-gray-400 mt-3 max-w-2xl mx-auto">
        Trusted by companies and organizations across different industries
      </p>

      {/* Grid Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-12">
        {clients.map((client, index) => (
          <div
            key={index}
            className="
              group flex items-center justify-center
              bg-[#0F111A] rounded-2xl p-6
              border border-[#1A1D2B]
              transition-all duration-300
              hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]
              hover:-translate-y-2
            "
          >
            <img
              src={client.img}
              alt="client"
              className="
                max-h-16 object-contain
                transition-all duration-500
                group-hover:grayscale-0 group-hover:opacity-100
              "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;