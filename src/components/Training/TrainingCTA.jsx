import React from 'react';
import { motion } from 'framer-motion';

const TrainingCTA = () => {
  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Diagonal Pattern Background */}
      <div className="absolute inset-0 opacity-10 z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diagonalPattern" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="rotate(45)">
              <rect width="100%" height="100%" fill="none"/>
              <path d="M0,0 L20,0 L20,20 L0,20 Z" fill="#AF8A2D"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonalPattern)"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-[#AF8A2D]/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <h2 className="text-sm font-semibold tracking-wider uppercase text-[#ddb040]">
                Take The Next Step
              </h2>
            </div>

            <h3 className="text-4xl font-bold text-white mb-6">
              Invest in Your <span className="text-[#d2a73b]">Professional Growth</span>
            </h3>
            
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
              Our industry-focused courses provide the skills and knowledge needed to excel in today's architectural and construction landscape. Join the hundreds of professionals who have transformed their careers through our training.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <motion.div 
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="bg-[#AF8A2D]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#AF8A2D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Expert Instructors</h4>
                <p className="text-gray-400">Learn from professionals who bridge theory and practice</p>
              </motion.div>
              
              <motion.div 
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="bg-[#AF8A2D]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#AF8A2D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Industry-Relevant</h4>
                <p className="text-gray-400">Courses designed for real-world application</p>
              </motion.div>
              
              <motion.div 
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="bg-[#AF8A2D]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#AF8A2D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Immediate Impact</h4>
                <p className="text-gray-400">Apply new skills to your projects right away</p>
              </motion.div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <motion.a
                href="/Contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-4 px-10 rounded-full shadow-lg text-lg w-full sm:w-auto"
              >
                Call for Details
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0L60,10C120,20,240,40,360,50C480,60,600,60,720,50C840,40,960,20,1080,15C1200,10,1320,20,1380,25L1440,30L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default TrainingCTA;