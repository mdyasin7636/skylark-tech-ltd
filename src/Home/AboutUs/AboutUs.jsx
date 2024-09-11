

const AboutUs = () => {
  return (
    <section className="relative bg-white py-12 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center lg:space-x-8">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 relative">
            <img 
              src="your-image-path.jpg" 
              alt="Team working" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="absolute top-2/3 left-2/3 transform -translate-x-1/2 -translate-y-1/2 bg-purple-600 text-white rounded-full px-6 py-3 text-center">
              <p className="text-xl font-bold">25</p>
              <p className="text-sm">Years Experience</p>
            </div>
          </div>
          
          {/* Text Section */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-4">
              We Are Increasing Business Success With 
              <span className="text-purple-600"> IT Solution</span>
            </h2>
            <p className="text-gray-600 mb-6">
              Collaboratively envision user-friendly supply chains and cross unit imperatives. Authoritatively fabricate competitive resources and holistic synergy. Uniquely generate efficient schemas before the future.
            </p>
            
            {/* Icons Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center space-x-3">
                <span className="bg-purple-600 p-3 rounded-full text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 11l3 3L22 4M21 21H3V3h7"></path>
                  </svg>
                </span>
                <div>
                  <h4 className="font-semibold text-gray-800">Certified Company</h4>
                  <p className="text-sm text-gray-500">Best Provide Skills Services</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="bg-purple-600 p-3 rounded-full text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9"></path>
                  </svg>
                </span>
                <div>
                  <h4 className="font-semibold text-gray-800">Expert Team</h4>
                  <p className="text-sm text-gray-500">100% Expert Team</p>
                </div>
              </div>
            </div>
            
            {/* Button & Call Section */}
            <div className="flex items-center space-x-4">
              <a href="#discover-more" className="bg-purple-600 text-white py-2 px-6 rounded-lg text-sm hover:bg-purple-700">
                Discover More
              </a>
              <div className="flex items-center space-x-2 text-purple-600">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v2a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-2M17 9a5 5 0 0 1-10 0 5 5 0 0 1 10 0z"></path>
                  </svg>
                </span>
                <p className="text-gray-800">Call Us On: <strong>+190-8800-0393</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
