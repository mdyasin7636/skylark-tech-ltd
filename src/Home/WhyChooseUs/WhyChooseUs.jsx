import { AiOutlineCheck } from 'react-icons/ai';

const WhyChooseUs = () => {
    return (
        <section className="bg-white py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            We Deal With The Aspects
            <br />
            <span className="text-indigo-600">Professional IT Services</span>
          </h2>
          <p className="text-gray-600 mb-8">
            Collaboratively envision user-friendly supply chains and cross-unit imperatives. Authoritatively fabricate competitive resources and holistic solutions.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {/* List of Services */}
            <div className="flex items-center">
              <AiOutlineCheck className="text-indigo-600 w-6 h-6 mr-2" />
              Big Data Analysis
            </div>
            <div className="flex items-center">
              <AiOutlineCheck className="text-indigo-600 w-6 h-6 mr-2" />
              High Quality Security
            </div>
            <div className="flex items-center">
              <AiOutlineCheck className="text-indigo-600 w-6 h-6 mr-2" />
              24/7 Online Support
            </div>
            <div className="flex items-center">
              <AiOutlineCheck className="text-indigo-600 w-6 h-6 mr-2" />
              24/7 Expert Team
            </div>
            <div className="flex items-center">
              <AiOutlineCheck className="text-indigo-600 w-6 h-6 mr-2" />
              Business Improvement
            </div>
            <div className="flex items-center">
              <AiOutlineCheck className="text-indigo-600 w-6 h-6 mr-2" />
              Easy Solutions
            </div>
          </div>
        </div>

        {/* Image Content */}
        <div className="md:w-1/2 mt-10 md:mt-0 relative">
          <div className="relative rounded-full overflow-hidden">
            <img
              className="w-full h-auto rounded-lg"
              src="/path-to-your-image.png" // Replace with your image path
              alt="Team analyzing data"
            />
            <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-100 rounded-full transform translate-x-10 translate-y-10 z-[-1]"></div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default WhyChooseUs;