import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-black">
     <nav className="flex justify-between items-center w-[92%] mx-auto">
      <div>
        <img className="w-32" src="https://i.ibb.co/XJBtKym/Skylark-Tech-Ltd.png" alt="" />
      </div>
      <div className="absolute bg-black">
        <ul className="flex md:flex-row flex-col items-center gap-12 text-white">
          <li>
            <Link>HOME</Link>
          </li>
          <li>
            <Link>SERVICES</Link>
          </li>
          <li>
            <Link>PROJECTS</Link>
          </li>
          <li>
            <Link>BLOGS</Link>
          </li>
          <li>
            <Link>ABOUT US</Link>
          </li>
        </ul>
      </div>
      <div>
        <button className="text-white px-4 py-2 rounded-md bg-black">CONTACT US</button>
      </div>
     </nav>
    </div>
  );
};

export default Navbar;
