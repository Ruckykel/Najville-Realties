import React, { useRef } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin
} from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerRef = useRef(null);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  const socialIconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: i => ({ 
      scale: 1, 
      opacity: 1,
      transition: { 
        delay: i * 0.1,
        duration: 0.3,
        type: "spring",
        stiffness: 300
      }
    }),
    hover: { 
      scale: 1.2,
      transition: { duration: 0.2 }
    }
  };

  const linkHoverVariants = {
    hover: { 
      x: 5,
      color: "#AF8A2D",
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.footer 
      ref={footerRef}
      className="bg-gray-50 border-t border-gray-100 pt-16 pb-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-12">
          <motion.div 
            variants={logoVariants}
            className="flex flex-col items-center"
          >
            <motion.img 
              src="/Najville.svg" 
              alt="Najville Realties"
              className="h-10"
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>
        </div>

        {/* Main sections in the center */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 mb-12 max-w-5xl mx-auto">
          {/* Our Office */}
          <motion.div 
            className="col-span-1"
            variants={itemVariants}
          >
            <motion.h3 
              className="font-semibold text-lg mb-4 text-gray-900 text-center"
              variants={itemVariants}
            >
              Our Office
            </motion.h3>
            <div className="flex flex-col items-center">
              <motion.div 
                className="flex items-start"
                variants={itemVariants}
              >
                <MapPin className="text-[#AF8A2D] h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-gray-600 text-sm">
                  123 Main Street<br />
                  Lagos, Nigeria
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Reach Us */}
          <motion.div 
            className="col-span-1"
            variants={itemVariants}
          >
            <motion.h3 
              className="font-semibold text-lg mb-4 text-gray-900 text-center"
              variants={itemVariants}
            >
              Reach Us
            </motion.h3>
            <div className="flex flex-col items-center space-y-3">
              <motion.div 
                className="flex items-center"
                variants={itemVariants}
              >
                <Phone className="text-[#AF8A2D] h-5 w-5 mr-2 flex-shrink-0" />
                <a href="tel:+2349030805750" className="text-gray-600 text-sm hover:text-[#AF8A2D] transition-colors">
                  +234 903 080 5750
                </a>
              </motion.div>
              <motion.div 
                className="flex items-center"
                variants={itemVariants}
              >
                {/* WhatsApp Icon */}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 448 512" 
                  className="text-[#AF8A2D] h-5 w-5 mr-2 flex-shrink-0"
                  fill="currentColor"
                >
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                </svg>
                <a href="https://wa.me/2348089648242" className="text-gray-600 text-sm hover:text-[#AF8A2D] transition-colors">
                  +234 808 964 8242
                </a>
              </motion.div>
              <motion.div 
                className="flex items-center"
                variants={itemVariants}
              >
                <Mail className="text-[#AF8A2D] h-5 w-5 mr-2 flex-shrink-0" />
                <a href="mailto:earnest.nnajirc@gmail.com" className="text-gray-600 text-sm hover:text-[#AF8A2D] transition-colors">
                  earnest.nnajirc@gmail.com
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Get Involved */}
          <motion.div 
            className="col-span-1"
            variants={itemVariants}
          >
            <motion.h3 
              className="font-semibold text-lg mb-4 text-gray-900 text-center"
              variants={itemVariants}
            >
              Get Involved
            </motion.h3>
            <ul className="flex flex-col items-center space-y-2">
              {[
                { label: 'Our Services', link: '/services' },
                { label: 'Training', link: '/training' }
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  variants={itemVariants}
                  custom={index}
                >
                  <motion.a 
                    href={item.link} 
                    className="text-gray-600 hover:text-[#AF8A2D] text-sm"
                    variants={linkHoverVariants}
                    whileHover="hover"
                  >
                    {item.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Social Media Icons - Centered with gold color */}
        <motion.div 
          className="border-t border-gray-200 pt-8 pb-4 text-center"
          variants={itemVariants}
        >
          <motion.div 
            className="flex justify-center space-x-6 mb-6"
            variants={itemVariants}
          >
            {/* Using custom SVG icons for social media with gold fill */}
            <motion.a 
              href="#" 
              className="text-[#AF8A2D]"
              variants={socialIconVariants}
              custom={0}
              whileHover="hover"
              aria-label="Facebook"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
              </svg>
            </motion.a>
            
            <motion.a 
              href="#" 
              className="text-[#AF8A2D]"
              variants={socialIconVariants}
              custom={1}
              whileHover="hover"
              aria-label="Twitter"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
              </svg>
            </motion.a>
            
            <motion.a 
              href="#" 
              className="text-[#AF8A2D]"
              variants={socialIconVariants}
              custom={2}
              whileHover="hover"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </motion.a>
            
            <motion.a 
              href="#" 
              className="text-[#AF8A2D]"
              variants={socialIconVariants}
              custom={3}
              whileHover="hover"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
              </svg>
            </motion.a>
          </motion.div>

          <motion.div 
            className="mb-4"
            variants={itemVariants}
          >
            <motion.a 
              href="#" 
              className="text-sm text-gray-600 hover:text-[#AF8A2D] transition-colors"
              variants={linkHoverVariants}
              whileHover="hover"
            >
              Terms and Conditions
            </motion.a>
          </motion.div>

          <motion.div 
            className="text-sm text-gray-500 mt-4"
            variants={itemVariants}
          >
            Copyright © {new Date().getFullYear()} Najville Realties. All rights reserved.
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;