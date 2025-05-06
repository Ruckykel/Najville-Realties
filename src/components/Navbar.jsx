import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ 
  menuItems = [
    { href: "/", text: "Home" },
    { href: "#", text: "About Us" },
    { href: "#", text: "Services", hasSubmenu: true },
    { href: "#", text: "Projects", hasSubmenu: true },
    { href: "#", text: "Contact Us" },
  ],
  socialLinks = [
    { href: "#", platform: "Facebook", icon: "fa-brands fa-facebook-f" },
    { href: "#", platform: "Twitter", icon: "fa-brands fa-x-twitter" },
    { href: "#", platform: "Instagram", icon: "fa-brands fa-instagram" }
  ],
  logoSrc = "/Najville.svg",
  logoHref = "/"
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set loaded state after a small delay for startup animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 0);
      
      if (currentScrollY > lastScrollY) {
        if (currentScrollY > window.innerHeight) {
          setIsVisible(false);
        }
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [lastScrollY]);

  // Animation variants
  const navbarVariants = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: -100, opacity: 0 }
  };

  const linkVariants = {
    normal: { y: 0 },
    hover: { y: -2, transition: { duration: 0.2 } }
  };

  const socialIconVariants = {
    normal: { rotate: 0, scale: 1 },
    hover: { rotate: 5, scale: 1.2, transition: { duration: 0.2 } }
  };

  const mobileMenuVariants = {
    closed: { 
      x: "-100%",
      opacity: 0,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 40 
      } 
    },
    open: { 
      x: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 30,
        staggerChildren: 0.1,
        when: "beforeChildren"
      } 
    }
  };

  const menuItemVariants = {
    closed: { x: -20, opacity: 0 },
    open: { x: 0, opacity: 1 }
  };

  // Startup animation variants
  const containerStartupVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 0.3
      }
    }
  };

  const itemStartupVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const logoStartupVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: 0.2
      }
    }
  };

  return (
    <>
      <motion.nav 
        className={`fixed w-full z-50 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
        }`}
        variants={navbarVariants}
        initial="visible"
        animate={isVisible ? "visible" : "hidden"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {/* Desktop Navbar */}
        <div className="mx-auto px-4 sm:px-6 lg:px-8 bg-white">
          <motion.div 
            className="hidden md:flex justify-between items-center h-20 max-w-7xl mx-auto relative"
            variants={containerStartupVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
          >
            {/* Left Navigation Links */}
            <div className="flex-1 flex justify-start">
              <div className="flex items-center space-x-8">
                {menuItems.slice(0, 3).map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    className="text-black hover:text-gray-600 text-sm font-medium relative overflow-hidden group"
                    variants={itemStartupVariants}
                    whileHover="hover"
                  >
                    {link.text}
                    <motion.span 
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#B4974C] group-hover:w-full"
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Centered Logo */}
            <motion.div 
              className="absolute left-1/2 transform -translate-x-1/2"
              variants={logoStartupVariants}
            >
              <a href={logoHref}>
                <img 
                  src={logoSrc}
                  alt="Najville Realties" 
                  className="h-8 w-auto"
                />
              </a>
            </motion.div>
            
            {/* Right Navigation and Social */}
            <div className="flex-1 flex justify-end items-center space-x-8">
              <div className="flex items-center space-x-8">
                {menuItems.slice(3, 5).map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    className="text-black hover:text-gray-600 text-sm font-medium relative overflow-hidden group"
                    variants={itemStartupVariants}
                    whileHover="hover"
                  >
                    {link.text}
                    <motion.span 
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#B4974C] group-hover:w-full"
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                ))}
              </div>
              <motion.div 
                className="flex items-center space-x-4"
                variants={itemStartupVariants}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="text-black hover:text-gray-600"
                    variants={socialIconVariants}
                    whileHover="hover"
                  >
                    <i className={`${social.icon} text-sm`}></i>
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Mobile Navbar */}
          <motion.div 
            className="flex md:hidden justify-between items-center h-20"
            variants={containerStartupVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
          >
            <motion.div 
              className="flex-shrink-0" 
              variants={logoStartupVariants}
            >
              <a href={logoHref}>
                <img 
                  src={logoSrc}
                  alt="Najville Realties" 
                  className="h-8 w-auto"
                />
              </a>
            </motion.div>
            
            <motion.div 
              className="flex items-center space-x-4"
              variants={itemStartupVariants}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="text-black hover:text-gray-600"
                  variants={socialIconVariants}
                  whileHover="hover"
                >
                  <i className={`${social.icon} text-sm`}></i>
                </motion.a>
              ))}
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="bg-[#B4974C] p-3 rounded-sm"
                aria-label="Menu"
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
              >
                <svg 
                  className="w-6 h-6 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div 
              className="fixed inset-y-0 left-0 w-full max-w-sm bg-white"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-4 border-b border-gray-200">
                <a href={logoHref}>
                  <img 
                    src={logoSrc}
                    alt="Najville Realties" 
                    className="h-8 w-auto"
                  />
                </a>
                <motion.button
                  onClick={() => setIsMenuOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-[#B4974C] text-white"
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.1 }}
                >
                  ×
                </motion.button>
              </div>
              
              <div className="py-2">
                {menuItems.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="border-b border-gray-100"
                    variants={menuItemVariants}
                  >
                    <motion.a
                      href={item.href}
                      className="flex items-center justify-between px-6 py-4 text-base text-gray-900 hover:text-[#B4974C]"
                      onClick={() => !item.hasSubmenu && setIsMenuOpen(false)}
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    >
                      {item.text}
                      {item.hasSubmenu && (
                        <motion.span 
                          className="text-[#B4974C] text-xl"
                          initial={{ rotate: 0 }}
                          whileHover={{ rotate: 90, transition: { duration: 0.2 } }}
                        >
                          +
                        </motion.span>
                      )}
                    </motion.a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;