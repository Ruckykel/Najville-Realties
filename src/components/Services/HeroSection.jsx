import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const videoRef = useRef(null);
  
  // Ensure video plays on load
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video play failed:", error);
      });
    }
  }, []);

  return (
    <motion.section 
      className="relative h-[80vh] flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/maintenance-video.mp4" type="video/mp4" />
          {/* Fallback Image if Video Fails */}
          <img 
            src="/hero-services.jpg" 
            alt="Najville Services" 
            className="w-full h-full object-cover"
          />
        </video>
        
        {/* Gold Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#332200]/50 to-[#AF8A2D]/30 z-10"></div>
        
        {/* Additional Gold Light Effects */}
        <div className="absolute inset-0 bg-[#AF8A2D]/10 mix-blend-overlay z-10"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto max-w-7xl relative z-20 px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto"
        >
          {/* Gold Accent Line */}
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 100 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-1 bg-[#AF8A2D] mx-auto mb-8"
          ></motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Comprehensive<br className="hidden md:block" /> Property Services
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-10 text-white/90 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            From architectural design to property management, we provide end-to-end solutions for all your real estate needs.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center"
          >
            <a 
              href="#main-service" 
              className="inline-block bg-[#AF8A2D] hover:bg-[#8A6F25] text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#AF8A2D]/30"
            >
              Explore Our Services
            </a>
          </motion.div>
          
          {/* Animated Down Arrow */}
          <motion.div 
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
            initial={{ y: -10, opacity: 0.6 }}
            animate={{ y: 10, opacity: 1 }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              repeatType: "reverse"
            }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 17L12 7M12 17L8 13M12 17L16 13" stroke="#AF8A2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;