import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const WhoWeAre = () => {
  // Create refs to detect when elements are in view
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const cardsRef = useRef(null);
  
  const contentInView = useInView(contentRef, { once: true, amount: 0.2 });
  const imageInView = useInView(imageRef, { once: true, amount: 0.2 });
  const cardsInView = useInView(cardsRef, { once: true, amount: 0.2 });

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1
      }
    }
  };

  const imageAnimation = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 1.2, 
        ease: "easeOut" 
      }
    }
  };

  return (
    <div className="container mx-auto px-4 pt-16 md:py-24 max-w-7xl">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {/* Content Section - Always appears first on mobile */}
        <motion.div 
          ref={contentRef}
          className="w-full lg:w-1/2 space-y-8 order-1"
          initial="hidden"
          animate={contentInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {/* Who We Are section */}
          <motion.div variants={fadeInUp}>
            <h2 className="text-sm font-semibold tracking-wider uppercase text-[#AF8A2D]">
              WHO WE ARE
            </h2>
            <div className="w-16 h-1 bg-[#AF8A2D] mt-2 mb-6"></div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              We are a Real estate management/development company in Nigeria.
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We are a real estate development, management, and consultancy firm committed to addressing Nigeria's housing deficit. We are here to create innovative solutions, deliver quality projects, and contribute to sustainable urban development, ensuring accessible and affordable housing for communities across the nation.
            </p>
          </motion.div>

          {/* Mission and Vision cards */}
          <motion.div 
            ref={cardsRef}
            className="bg-gradient-to-br from-[#F5F0E8] to-[#EEE7E0] p-6 sm:p-8 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 shadow-lg"
            initial="hidden"
            animate={cardsInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {/* Mission */}
            <motion.div 
              className="space-y-4"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-3">
                <div className="bg-[#AF8A2D]/10 p-2 rounded-full">
                  <img
                    src="/Mission.svg"
                    alt="Mission icon"
                    className="w-6 sm:w-8"
                  />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-800">Our Mission</h4>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                To bridge Nigeria's housing gap through innovative, high-quality, and sustainable real estate solutions that are affordable and accessible to all socioeconomic levels while maintaining the highest standards of integrity and environmental responsibility.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div 
              className="space-y-4"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-3">
                <div className="bg-[#AF8A2D]/10 p-2 rounded-full">
                  <img
                    src="/Vision.svg"
                    alt="Vision icon"
                    className="w-6 sm:w-8"
                  />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-800">Our Vision</h4>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                To become Nigeria's premier real estate firm, recognized for transforming urban landscapes through architectural excellence, creating communities that enhance quality of life, and setting new standards for sustainable development across West Africa.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Images Section - Different layout on mobile vs desktop */}
        <motion.div 
          ref={imageRef}
          className="w-full lg:w-1/2 mt-8 lg:mt-0 order-2 lg:order-1"
          initial="hidden"
          animate={imageInView ? "visible" : "hidden"}
          variants={imageAnimation}
        >
          {/* Desktop: Overlapping images - hidden on mobile */}
          <div className="hidden lg:block relative w-full aspect-square">
            {/* First shape (top-left section) */}
            <motion.div 
              className="absolute left-0 top-0 w-[75%] h-[75%] rounded-[2.5rem] overflow-hidden bg-slate-600 shadow-lg"
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { 
                  opacity: 1, 
                  x: 0,
                  transition: { duration: 1, delay: 0.3 }
                }
              }}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
            >
              <img
                src="/Building1.webp"
                alt="Modern architecture"
                className="w-full h-full object-cover opacity-60 mix-blend-overlay transition-all duration-300 hover:opacity-75"
              />
            </motion.div>
            
            {/* Second shape (bottom-right section) */}
            <motion.div 
              className="absolute right-0 bottom-0 w-[75%] h-[75%] rounded-[2.5rem] overflow-hidden bg-white shadow-lg"
              variants={{
                hidden: { opacity: 0, x: 30 },
                visible: { 
                  opacity: 1, 
                  x: 0,
                  transition: { duration: 1, delay: 0.6 }
                }
              }}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
            >
              <img
                src="/Building2.webp"
                alt="Building facade"
                className="w-full h-full object-cover transition-all duration-300 hover:brightness-110"
              />
            </motion.div>
          </div>

          {/* Mobile: Single centered image - visible only on mobile */}
          <div className="lg:hidden flex justify-center">
            <motion.div 
              className="w-full h-72 sm:h-80 rounded-[2.5rem] overflow-hidden shadow-lg"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 1, delay: 0.3 }
                }
              }}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
            >
              <img
                src="/Building2.webp"
                alt="Modern architecture"
                className="w-full h-full object-cover opacity-60 mix-blend-overlay"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Helper function for useInView hook
function useInView(ref, options) {
  const [isInView, setIsInView] = React.useState(false);
  
  React.useEffect(() => {
    if (!ref.current) return;
    
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
      
      if (entry.isIntersecting && options.once) {
        observer.unobserve(ref.current);
      }
    }, {
      threshold: options.amount || 0
    });
    
    observer.observe(ref.current);
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options.once, options.amount]);
  
  return isInView;
}

export default WhoWeAre;