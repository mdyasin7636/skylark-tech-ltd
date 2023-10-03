import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-white">
     <nav className="flex justify-between items-center w-[92%] mx-auto">
      <div>
        <img className="w-20" src="https://i.ibb.co/g9rCyYj/download.png" alt="" />
      </div>
      <div className="">
        <ul className="flex items-center gap-12">
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
