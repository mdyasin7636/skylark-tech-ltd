const SocialMediaPosts = () => {
  return (
    <div>
       <div
            className="h-full w-full bg-white m-auto rounded-xl relative group p-2 z-0 overflow-hidden shadow border cursor-pointer hover:border-transparent">
            <div
              className="h-24 w-96 bg-blue-950 absolute left-full rounded-full -bottom-12 group-hover:scale-[550%] z-[-1] duration-700 easy-in-out">
            </div>
            <div
              className="h-20 w-44 bg-blue-700 absolute left-full rounded-full -bottom-12 group-hover:scale-[400%] z-[-1] duration-700 easy-in-out">
            </div>
            <div
              className="h-16 w-48 bg-blue-500 absolute left-full rounded-full -bottom-12 group-hover:scale-[300%] z-[-1] duration-700 easy-in-out">
            </div>
            <div
              className="h-16 w-44 bg-blue-950 absolute left-full rounded-full -bottom-12 group-hover:scale-[200%] z-[-1] duration-700 easy-in-out">
            </div>

            <div className="z-20 m-4">
              <div className="">
                <p
                  className="text-lg font-semibold text-blue-950 group-hover:text-white duration-300">
                  Uber will pay you $1,000 to ditch your car for five weeks
                </p>
                <p
                  className="text-base text-gray-500 mt-20 group-hover:text-white duration-300 text-pretty">
                  Traffic got you down? If the idea of locking your car keys in
                  a drawer and using alternate means of transportation sounds
                  intriguing, Uber has the challenge for you.
                </p>
              </div>
            </div>
          </div>

    </div>
  );
};

export default SocialMediaPosts;
