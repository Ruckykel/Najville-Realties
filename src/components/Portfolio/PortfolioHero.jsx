import React from 'react';
import { motion } from 'framer-motion';

const PortfolioHero = () => {
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden min-h-[80vh] pt-32 pb-28 flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/New-Media/Pics/3d1.webp"
          alt="Najville Realties architectural render"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-block bg-[#AF8A2D]/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <h2 className="text-sm font-semibold tracking-wider uppercase text-[#f6ca5a]">
              Our Portfolio
            </h2>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            From Concept <br />
            <span className="text-[#deb03e]">To Completion</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            Explore our work across every stage of a project — detailed architectural plans, photorealistic 3D visualizations, and quality construction on site.
          </p>

          <div className="flex flex-wrap">
            <motion.a
              href="#portfolio-gallery"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#B4974C] hover:bg-[#a3873f] text-white font-bold py-3 px-8 rounded-full shadow-md mr-4 mb-4"
            >
              View Our Work
            </motion.a>
            <motion.a
              href="/Contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold py-3 px-8 rounded-full shadow-md mb-4"
            >
              Start a Project
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,64L80,69.3C160,75,320,85,480,90.7C640,96,800,96,960,85.3C1120,75,1280,53,1360,42.7L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default PortfolioHero;
