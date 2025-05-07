import React, { useRef } from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
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
      color: "#AF8A2D",
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
      className=" max-w-7xl mx-auto px-4 pt-12 pb-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div 
        className="mb-12 flex md:justify-center"
        variants={logoVariants}
      >
        <motion.img 
          src="/Najville.svg" 
          alt="Najville Realties"
          className="h-8"
          whileHover={{ scale: 1.05 }}
        />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-52 mb-12">
        <motion.div variants={itemVariants}>
          <motion.h3 
            className="font-semibold text-lg mb-4"
            variants={itemVariants}
          >
            Residential
          </motion.h3>
          <ul className="space-y-2 text-sm">
            {['Residential property', 'Property management', 'Estate agency', 'Valuations'].map((item, index) => (
              <motion.li 
                key={index}
                variants={itemVariants}
                custom={index}
              >
                <motion.a 
                  href="#" 
                  className="hover:underline inline-block"
                  variants={linkHoverVariants}
                  whileHover="hover"
                >
                  {item}
                </motion.a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={itemVariants}>
          <motion.h3 
            className="font-semibold text-lg mb-4"
            variants={itemVariants}
          >
            Commercial
          </motion.h3>
          <ul className="space-y-2 text-sm">
            {['Commercial property', 'Property management', 'Estate agency', 'Valuations'].map((item, index) => (
              <motion.li 
                key={index}
                variants={itemVariants}
                custom={index}
              >
                <motion.a 
                  href="#" 
                  className="hover:underline inline-block"
                  variants={linkHoverVariants}
                  whileHover="hover"
                >
                  {item}
                </motion.a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={itemVariants}>
          <motion.h3 
            className="font-semibold text-lg mb-4"
            variants={itemVariants}
          >
            About Najville
          </motion.h3>
          <ul className="space-y-2 mb-8 text-sm">
            {['Our App', 'Blog', 'Contact us'].map((item, index) => (
              <motion.li 
                key={index}
                variants={itemVariants}
                custom={index}
              >
                <motion.a 
                  href="#" 
                  className="hover:underline inline-block"
                  variants={linkHoverVariants}
                  whileHover="hover"
                >
                  {item}
                </motion.a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      <motion.div 
        className="flex flex-wrap gap-4 mb-8 md:justify-center"
        variants={itemVariants}
      >
        {[
          { icon: <Facebook size={24} />, name: "Facebook" },
          { icon: <Twitter size={24} />, name: "Twitter" },
          { icon: <Linkedin size={24} />, name: "LinkedIn" },
          { icon: <Instagram size={24} />, name: "Instagram" },
          { icon: <Youtube size={24} />, name: "YouTube" }
        ].map((social, index) => (
          <motion.a 
            key={index}
            href="#" 
            className="text-gray-400"
            variants={socialIconVariants}
            custom={index}
            whileHover="hover"
            aria-label={social.name}
          >
            {social.icon}
          </motion.a>
        ))}
      </motion.div>

      <motion.div 
        className="flex flex-wrap gap-4 text-sm mb-8 md:justify-center"
        variants={itemVariants}
      >
        {['Terms and Conditions', 'Group Privacy Statement', 'Fair Processing Notice'].map((item, index) => (
          <motion.a 
            key={index} 
            href="#" 
            className="hover:underline"
            variants={linkHoverVariants}
            whileHover="hover"
          >
            {item}
          </motion.a>
        ))}
      </motion.div>

      <motion.div 
        className="text-sm text-gray-600 flex justify-center"
        variants={itemVariants}
        initial={{ opacity: 0 }}
        whileInView={{ 
          opacity: 1,
          transition: { delay: 0.5, duration: 0.7 }
        }}
        viewport={{ once: true }}
      >
        Copyright © 2025 Najville Realties
      </motion.div>
    </motion.footer>
  );
};

export default Footer;