import React from 'react';

const HomeHero = () => {
  return (
    <div className="relative h-[70vh] sm:h-[100vh]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/Building.webp)',
        }}
      />
      
      {/* White Overlay */}
      <div className="absolute inset-0 bg-white/30" /> {/* 30% opaque white overlay */}
      
      {/* Content */}
      <div className="relative h-full pt-72">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-black mt-[-100px] text-center md:text-left">
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium">
              WELCOME TO <span className="text-[#af8a2d]">NAJVILLE REALTIES</span>
            </h2>
            <h1 className="text-[45px] sm:text-[60px] md:text-[75px] font-bold leading-tight mb-4 tracking-tight">
              Smart Solutions
              <br />
              for Better Living
            </h1>
            <p className="max-w-2xl text-base md:text-lg text-gray-800 mx-auto sm:mx-0">
              Transform your lifestyle with our exceptional properties
              <br className="hidden sm:block" /> and professional real estate services. Discover your dream
              <br className="hidden sm:block" /> home with Najville Realties.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;