const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      text: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
      name: "Devon Lane",
      role: "President of Sales",
      img: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-1.jpg",
    },
    {
      id: 2,
      text: "Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.",
      name: "Ronald Richards",
      role: "Marketing Coordinator",
      img: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-2.jpg",
    },
    {
      id: 3,
      text: "This is a top quality product. No need to think twice before making it live on web.",
      name: "Jane Cooper",
      role: "Dog Trainer",
      img: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-3.jpg",
    },
    {
      id: 4,
      text: "Finally, I’ve found a template that covers all bases for a bootstrapped startup. We were able to launch in days, not months.",
      name: "Theresa Webb",
      role: "Web Designer",
      img: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-4.jpg",
    },
    {
      id: 5,
      text: "My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
      name: "Darlene Robertson",
      role: "Medical Assistant",
      img: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-5.jpg",
    },
    {
      id: 6,
      text: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
      name: "Floyd Miles",
      role: "Nursing Assistant",
      img: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-6.jpg",
    },
  ];

  return (
    <div className="mt-7">
      <div className="text-center">
        <h1 className="text-3xl text-deep-sky font-extrabold">
          OUR HAPPY CLIENTS
        </h1>
      </div>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 mt-6">
        {/* Limit to 3 reviews for small screens */}
        <div className="grid grid-cols-1 gap-6 lg:gap-10 sm:grid-cols-2 md:grid-cols-3">
          {reviews
            .slice(0, 3) // Always show first 3 reviews
            .map((review) => (
              <div
                key={review.id}
                className="flex flex-col bg-white border border-black rounded-md"
              >
                <div className="flex flex-col justify-between flex-1 p-8">
                  <div className="flex-1">
                    <blockquote>
                      <p className="text-lg text-gray-800">“{review.text}”</p>
                    </blockquote>
                  </div>
                  <div className="mt-8">
                    <div className="w-full h-0 mb-8 border-t-2 border-gray-400 border-dotted"></div>
                    <div className="flex items-center">
                      <img
                        className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                        src={review.img}
                        alt={review.name}
                      />
                      <div className="min-w-0 ml-3">
                        <p className="text-base font-semibold text-gray-800 truncate">
                          {review.name}
                        </p>
                        <p className="text-base text-gray-500 truncate">
                          {review.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          {/* Show additional 3 reviews only on larger screens */}
          {reviews
            .slice(3, 6) // Next 3 reviews for larger screens
            .map((review) => (
              <div
                key={review.id}
                className="hidden md:flex flex-col bg-white border border-black rounded-md"
              >
                <div className="flex flex-col justify-between flex-1 p-8">
                  <div className="flex-1">
                    <blockquote>
                      <p className="text-lg text-gray-800">“{review.text}”</p>
                    </blockquote>
                  </div>
                  <div className="mt-8">
                    <div className="w-full h-0 mb-8 border-t-2 border-gray-400 border-dotted"></div>
                    <div className="flex items-center">
                      <img
                        className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                        src={review.img}
                        alt={review.name}
                      />
                      <div className="min-w-0 ml-3">
                        <p className="text-base font-semibold text-gray-800 truncate">
                          {review.name}
                        </p>
                        <p className="text-base text-gray-500 truncate">
                          {review.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
