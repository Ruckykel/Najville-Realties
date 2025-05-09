import React from 'react';
import { motion } from 'framer-motion';

const TrainingHero = () => {
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden h-screen flex items-center">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video 
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/TrainingVid.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <img 
            src="/images/training-hero.jpg" 
            alt="Architectural software training" 
            className="w-full h-full object-cover"
          />
        </video>
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
              Professional Architectural Software Training
            </h2>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Master the Tools That <br />
            <span className="text-[#deb03e]">Shape Your Designs</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            Enhance your skillset with our industry-focused training courses in AutoCAD and Revit. Learn from professionals who understand the real-world applications of architectural software.
          </p>
          
          <div className="flex flex-wrap">
            <motion.a
              href="/Contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold py-3 px-8 rounded-full shadow-md"
            >
              Contact Us
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

export default TrainingHero;