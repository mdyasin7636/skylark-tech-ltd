/* eslint-disable react/prop-types */

const CustomButton = ({ text, onClick }) => {
  return (
    <a
      href="#_"
      className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600 "
      onClick={onClick}
    >
      <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
      <span className="relative text-indigo-600 transition duration-300 group-hover:text-white ease">
        {text}
      </span>
    </a>
  );
};

export default CustomButton;
