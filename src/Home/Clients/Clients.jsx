import Marquee from "react-fast-marquee";

const Clients = () => {
  return (
    <div className="">
      <div className="text-center">
        <h1 className="text-3xl text-deep-sky font-extrabold">Our Clients</h1>
        {/* <p className="mt-2 font-bold text-4xl">
        Clients Who Choose Us
        </p> */}
      </div>
      <div className="flex">
        <Marquee speed={120}>
          <div className="w-60 mx-3 border-2 border-deep-sky rounded-full p-5">
            <img
              src="https://res.cloudinary.com/dlaatmz5a/image/upload/v1728573105/news-cricket_cos45n.jpg"
              alt="Partner 1"
            />
          </div>
          <div className="w-60 mx-3 border-2 border-deep-sky rounded-full p-5">
            <img
              src="https://res.cloudinary.com/dlaatmz5a/image/upload/v1728573103/hyundai-elevator_db2msr.jpg"
              alt="Partner 2"
            />
          </div>
          <div className="w-60 mx-3 border-2 border-deep-sky rounded-full p-5">
            <img
              src="https://res.cloudinary.com/dlaatmz5a/image/upload/v1728573105/morning-mirror_x80gov.jpg"
              alt="Partner 3"
            />
          </div>
          <div className="w-60 mx-3 border-2 border-deep-sky rounded-full p-5">
            <img
              src="https://res.cloudinary.com/dlaatmz5a/image/upload/v1728573105/otis-elevator_s6jkyp.jpg"
              alt="Partner 4"
            />
          </div>
          <div className="w-60 mx-3 border-2 border-deep-sky rounded-full p-5">
            <img
              src="https://res.cloudinary.com/dlaatmz5a/image/upload/v1728573106/sigma-lift_mxwm4q.jpg"
              alt="Partner 5"
            />
          </div>
          <div className="w-60 mx-3 border-2 border-deep-sky rounded-full p-5">
            <img
              src="https://res.cloudinary.com/dlaatmz5a/image/upload/v1728573104/lg-elevator_sudbz2.jpg"
              alt="Partner 6"
            />
          </div>
          <div className="w-60 mx-3 border-2 border-deep-sky rounded-full p-5">
            <img
              src="https://res.cloudinary.com/dlaatmz5a/image/upload/v1728573104/hyundai-lift_yfwr7i.jpg"
              alt="Partner 7"
            />
          </div>
          <div className="w-60 mx-3 border-2 border-deep-sky rounded-full p-5">
            <img
              src="https://res.cloudinary.com/dlaatmz5a/image/upload/v1728573103/elevator-parts_pq688f.jpg"
              alt="Partner 8"
            />
          </div>
          <div className="w-60 mx-3 border-2 border-deep-sky rounded-full p-5">
            <img
              src="https://res.cloudinary.com/dlaatmz5a/image/upload/v1728573105/sb-elevator_pysiom.jpg"
              alt="Partner 9"
            />
          </div>
          <div className="w-60 mx-3 border-2 border-deep-sky rounded-full p-5">
            <img
              src="https://res.cloudinary.com/dlaatmz5a/image/upload/v1728573103/boinik-bangladesh_x549gw.jpg"
              alt="Partner 10"
            />
          </div>
          <div className="w-60 mx-3 border-2 border-deep-sky rounded-full p-5">
            <img
              src="https://res.cloudinary.com/dlaatmz5a/image/upload/v1728573102/ajkaler-kontho_kqv27o.jpg"
              alt="Partner 10"
            />
          </div>
          <div className="w-60 mx-3 border-2 border-deep-sky rounded-full p-5">
            <img
              src="https://res.cloudinary.com/dlaatmz5a/image/upload/v1728573103/doinik-sirajganj_rozfau.jpg"
              alt="Partner 10"
            />
          </div>
          <div className="w-60 mx-3 border-2 border-deep-sky rounded-full p-5">
            <img
              src="https://res.cloudinary.com/dlaatmz5a/image/upload/v1728573103/bangladesher-kontho_nl8dbh.jpg"
              alt="Partner 10"
            />
          </div>
          <div className="w-60 mx-3 border-2 border-deep-sky rounded-full p-5">
            <img
              src="https://res.cloudinary.com/dlaatmz5a/image/upload/v1728573102/banglar-mukh_vjaknf.jpg"
              alt="Partner 10"
            />
          </div>
          <div className="w-60 mx-3 border-2 border-deep-sky rounded-full p-5">
            <img
              src="https://res.cloudinary.com/dlaatmz5a/image/upload/v1728573105/jago-songbad_veette.jpg"
              alt="Partner 10"
            />
          </div>
          <div className="w-60 mx-3 border-2 border-deep-sky rounded-full p-5">
            <img
              src="https://res.cloudinary.com/dlaatmz5a/image/upload/v1728573105/nogor-protidin_t0ccyq.jpg"
              alt="Partner 10"
            />
          </div>
          {/* <div className="w-60">
            <img src="https://res.cloudinary.com/dlaatmz5a/image/upload/v1728573103/dnd_lyr9z5.jpg
" alt="Partner 10" />
          </div> */}
        </Marquee>
      </div>
    </div>
  );
};

export default Clients;
