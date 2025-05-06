import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const HomeHero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video play failed:", error);
      });
    }
  }, []);

  // Improved animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
        duration: 1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className="relative h-[100vh] sm:h-[100vh] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/HeroBg4.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Darker Overlay with Gold Tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-[#332200]/60" /> {/* Gradient overlay with gold tint */}
      </div>
      
      {/* Content - Centered Both Horizontally and Vertically */}
      <div className="relative h-full flex items-center justify-center mt-8">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="bg-white/30 rounded-lg px-5 py-1.5 inline-block mb-6 backdrop-blur-sm"
              variants={itemVariants}
            >
              <h2 className="text-sm sm:text-base font-medium text-white">
                Premium Property Specialists
              </h2>
            </motion.div>
            
            <motion.h2 
              className="text-lg sm:text-xl md:text-2xl font-medium text-white"
              variants={itemVariants}
            >
              WELCOME TO <span className="text-[#ffe14d]">NAJVILLE REALTIES</span>
            </motion.h2>
            
            <motion.h1 
              className="text-[45px] sm:text-[60px] md:text-[75px] font-bold leading-tight my-6 tracking-tight text-white"
              variants={itemVariants}
            >
              Smart <span className="text-[#ffe14d]">Solutions</span>
              <br />
              for Better Living
            </motion.h1>
            
            <motion.p 
              className="max-w-2xl text-lg md:text-xl text-gray-100 mx-auto"
              variants={itemVariants}
            >
              Transform your lifestyle with our exceptional properties
              <br className="hidden sm:block" /> and professional real estate services. Discover your dream
              <br className="hidden sm:block" /> home with Najville Realties.
            </motion.p>
            
            <motion.div
              variants={itemVariants}
              className="mt-12 flex flex-col sm:flex-row justify-center gap-4"
            >
              <a 
                href="#get-started" 
                className="bg-white hover:bg-gray-100 text-[#1e1e1e] font-bold py-3 px-8 rounded-lg transition-all duration-300 inline-block shadow-md"
              >
                Get Started Today
              </a>
              <a 
                href="#services" 
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold py-3 px-8 rounded-lg transition-all duration-300 inline-block"
              >
                Explore Services
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;