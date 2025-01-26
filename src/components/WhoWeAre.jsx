import React from 'react';

const WhoWeAre = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Left side with overlapping shapes */}
        <div className="relative w-full sm:w-3/4 md:w-2/3 lg:w-1/2 aspect-square sm:aspect-[4/3] lg:aspect-square">
          {/* First shape (top-left blue section) */}
          <div className="absolute left-0 top-0 w-[75%] h-[75%] rounded-[2.5rem] overflow-hidden bg-slate-600">
            <img
              src="/Building1.webp"
              alt="Modern architecture"
              className="w-full h-full object-cover opacity-50 mix-blend-overlay"
            />
          </div>
          
          {/* Second shape (bottom-right white section) */}
          <div className="absolute right-0 bottom-0 w-[75%] h-[75%] rounded-[2.5rem] overflow-hidden bg-white">
            <img
              src="/Building2.webp"
              alt="Building facade"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right side content */}
        <div className="w-full lg:w-1/2 space-y-8 mt-8 lg:mt-0">
          {/* Who We Are section */}
          <div>
            <h2 className="text-sm font-semibold tracking-wider uppercase">
              WHO WE ARE
            </h2>
            <div className="w-12 h-0.5 bg-[#AF8A2D] mt-2 mb-6"></div>
            <h3 className="text-4xl font-bold mb-6">
              We are a Real estate management/development company in Nigeria.
            </h3>
            <p className="text-gray-600">
              We are a real estate development, management, and consultancy firm committed to addressing Nigeria's housing deficit. We are here to create innovative solutions, deliver quality projects, and contribute to sustainable urban development, ensuring accessible and affordable housing for communities across the nation.
            </p>
          </div>

          {/* Mission and Vision cards */}
          <div className="bg-[#EEE7E0] p-6 sm:p-8 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Mission */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src="/Mission.svg"
                  alt="Mission icon"
                  className="w-6 sm:w-8"
                />
                <h4 className="text-lg sm:text-xl font-bold">Our Mission</h4>
              </div>
              <p className="text-sm text-gray-600">
                Our mission is to deliver innovative and sustainable real estate solutions through exceptional architectural design, precise construction, creative interior decoration, and quality equipment supplies.
              </p>
            </div>

            {/* Vision */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src="/Vision.svg"
                  alt="Vision icon"
                  className="w-6 sm:w-8"
                />
                <h4 className="text-lg sm:text-xl font-bold">Our Vision</h4>
              </div>
              <p className="text-sm text-gray-600">
                Our vision is to deliver innovative and sustainable real estate solutions through exceptional architectural design, precise construction, creative interior decoration, and quality equipment supplies.
              </p>
            </div>
          </div>

          {/* Learn More Button */}
          <div className="flex justify-center md:justify-start">
            <a href="">
            <button
              className="px-8 py-3 bg-[#AF8A2D] text-white rounded-md font-semibold hover:bg-[#8F7225] transition-colors duration-300 shadow-md hover:shadow-lg"
              onClick={() => {/* Add your onClick handler here */}}
            >
              Learn More
            </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;