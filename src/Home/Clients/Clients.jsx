import Marquee from "react-fast-marquee";

const Clients = () => {
  return (
    <div className="mt-6 mb-10">
      <div className="text-center">
        <h2 className="text-5xl font-bold">Our Partners</h2>
        <p className="text-lg mt-4 font-semibold">Beloved Allies</p>
      </div>
      <div className="flex mt-4">
        <Marquee speed={150}>
          <div className="w-3/4">
            <img src="https://picsum.photos/200/100?random=1" alt="Partner 1" />
          </div>
          <div className="w-3/4">
            <img src="https://picsum.photos/200/100?random=2" alt="Partner 2" />
          </div>
          <div className="w-3/4">
            <img src="https://picsum.photos/200/100?random=3" alt="Partner 3" />
          </div>
          <div className="w-3/4">
            <img src="https://picsum.photos/200/100?random=4" alt="Partner 4" />
          </div>
          <div className="w-3/4">
            <img src="https://picsum.photos/200/100?random=5" alt="Partner 5" />
          </div>
          <div className="w-3/4">
            <img src="https://picsum.photos/200/100?random=6" alt="Partner 6" />
          </div>
          <div className="w-3/4">
            <img src="https://picsum.photos/200/100?random=7" alt="Partner 7" />
          </div>
          <div className="w-3/4">
            <img src="https://picsum.photos/200/100?random=8" alt="Partner 8" />
          </div>
          <div className="w-3/4">
            <img src="https://picsum.photos/200/100?random=9" alt="Partner 9" />
          </div>
          <div className="w-3/4">
            <img src="https://picsum.photos/200/100?random=10" alt="Partner 10" />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Clients;
