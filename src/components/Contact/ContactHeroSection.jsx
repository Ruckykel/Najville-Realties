import React from 'react';
import { motion } from 'framer-motion';

const ContactHeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#6a5723] to-[#AF8A2D] text-white pt-36 pb-24">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {/* Circular elements */}
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-white/5"></div>
        <div className="absolute top-40 -right-20 w-80 h-80 rounded-full bg-white/5"></div>
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 rounded-full bg-white/5"></div>
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '30px 30px' 
          }}></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get In Touch
          </motion.h1>
          
          <motion.div 
            className="w-24 h-1 bg-white/50 mx-auto my-8"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
          
          <motion.p 
            className="mt-3 text-lg md:text-xl text-white/90 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We're here to help with all your property maintenance and cleaning needs. Reach out to us with any questions, for quotes, or to schedule services.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default ContactHeroSection;