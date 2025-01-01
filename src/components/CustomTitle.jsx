/* eslint-disable react/prop-types */

const CustomTitle = ({
  text,
  borderColor = "bg-purple-600",
  className = "",
}) => {
  return (
    <div className={`text-center ${className}`}>
      <h1 className="relative text-4xl font-bold text-gray-900 leading-tight inline-block">
        {text}
        <span
          className={`absolute w-1/4 h-[2px] ${borderColor} top-0 right-0 transform translate-y-[-50%]`}
        />
        <span
          className={`absolute w-1/4 h-[2px] ${borderColor} bottom-0 left-0 transform translate-y-[50%]`}
        />
      </h1>
    </div>
  );
};

export default CustomTitle;
