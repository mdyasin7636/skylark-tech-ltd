/* eslint-disable react/prop-types */
const testimonials = [
  {
    name: "Kanye West",
    role: "Rapper & Entrepreneur",
    image:
      "https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg",
    text: "Find Godaaaaaaaaaaa.",
    link: "https://twitter.com/kanyewest",
  },
  {
    name: "Tim Cook",
    role: "CEO of Apple",
    image:
      "https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg",
    text: "Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare.",
    link: "https://twitter.com/tim_cook",
  },
  {
    name: "Parag Agrawal",
    role: "CEO of Twitter",
    image:
      "https://pbs.twimg.com/profile_images/1375285353146327052/y6jeByyD_400x400.jpg",
    text: "Enim neque volutpat ac tincidunt vitae semper.",
    link: "https://twitter.com/paraga",
  },
  {
    name: "Satya Nadella",
    role: "CEO of Microsoft",
    image:
      "https://pbs.twimg.com/profile_images/1221837516816306177/_Ld4un5A_400x400.jpg",
    text: "Tortor dignissim convallis aenean et tortor at.",
    link: "https://twitter.com/satyanadella",
  },
  {
    name: "Dan Schulman",
    role: "CEO of PayPal",
    image:
      "https://pbs.twimg.com/profile_images/516916920482672641/3jCeLgFb_400x400.jpeg",
    text: "Quam pellentesque nec nam aliquam sem et tortor consequat.",
    link: "https://twitter.com/dan_schulman",
  },
  {
    name: "Dan Schulman",
    role: "CEO of PayPal",
    image:
      "https://pbs.twimg.com/profile_images/516916920482672641/3jCeLgFb_400x400.jpeg",
    text: "Quam pellentesque nec nam aliquam sem et tortor consequat.",
    link: "https://twitter.com/dan_schulman",
  },
  {
    name: "Dan Schulman",
    role: "CEO of PayPal",
    image:
      "https://pbs.twimg.com/profile_images/516916920482672641/3jCeLgFb_400x400.jpeg",
    text: "Quam pellentesque nec nam aliquam sem et tortor consequat.",
    link: "https://twitter.com/dan_schulman",
  },
  {
    name: "Dan Schulman",
    role: "CEO of PayPal",
    image:
      "https://pbs.twimg.com/profile_images/516916920482672641/3jCeLgFb_400x400.jpeg",
    text: "Quam pellentesque nec nam aliquam sem et tortor consequat.",
    link: "https://twitter.com/dan_schulman",
  },
  {
    name: "Dan Schulman",
    role: "CEO of PayPal",
    image:
      "https://pbs.twimg.com/profile_images/516916920482672641/3jCeLgFb_400x400.jpeg",
    text: "Quam pellentesque nec nam aliquam sem et tortor consequat.",
    link: "https://twitter.com/dan_schulman",
  },
];

const Card = ({ item }) => {
  return (
    <li className="text-sm leading-6">
      <div className="relative group">
        {/* Glow effect */}
        <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 opacity-25 blur transition duration-400 group-hover:opacity-100 group-hover:duration-200"></div>

        <a href={item.link} target="_blank" rel="noopener noreferrer">
          <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
            <div className="flex items-center space-x-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded-full border object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {item.name}
                </h3>
                <p className="text-gray-500 text-md">{item.role}</p>
              </div>
            </div>

            <p className="text-gray-300 text-md leading-normal">
              {item.text}
            </p>
          </div>
        </a>
      </div>
    </li>
  );
};

const CustomerReviews = () => {
  return (
    <section id="reviews" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
        
        {/* Heading */}
        <div className="mb-12 space-y-5 md:mb-16 md:text-center">
          <div className="inline-block px-3 py-1 text-sm font-semibold text-indigo-100 rounded-lg bg-[#202c47] bg-opacity-60 hover:bg-opacity-40">
            Customer Reviews
          </div>

          <h1 className="text-3xl font-semibold text-white md:text-5xl">
            It&apos;s not just us.
          </h1>

          <p className="text-xl text-gray-100 md:text-2xl">
            Here&apos;s what our clients say about Skylark.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          
          <ul className="space-y-8">
            {testimonials.slice(0, 3).map((item, i) => (
              <Card key={i} item={item} />
            ))}
          </ul>

          <ul className="hidden sm:block space-y-8">
            {testimonials.slice(2, 5).map((item, i) => (
              <Card key={i} item={item} />
            ))}
          </ul>

          <ul className="hidden lg:block space-y-8">
            {testimonials.slice(1, 4).map((item, i) => (
              <Card key={i} item={item} />
            ))}
          </ul>

        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;