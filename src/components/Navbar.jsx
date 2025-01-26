import React, { useState, useEffect } from 'react';

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

  useEffect(() => {
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
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        {/* Desktop Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden md:flex justify-between items-center h-20">
            {/* Left Navigation Links */}
            <div className="flex-1">
              <div className="flex items-center space-x-8">
                {menuItems.slice(0, 3).map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-black hover:text-gray-600 text-sm font-medium"
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </div>

            {/* Centered Logo */}
            <div className="flex-shrink-0 absolute left-1/2 transform -translate-x-1/2">
              <a href={logoHref}>
                <img 
                  src={logoSrc}
                  alt="Najville Realties" 
                  className="h-8 w-auto"
                />
              </a>
            </div>
            
            {/* Right Navigation and Social */}
            <div className="flex-1 flex justify-end items-center space-x-8">
              <div className="flex items-center space-x-8">
                {menuItems.slice(3, 5).map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-black hover:text-gray-600 text-sm font-medium"
                  >
                    {link.text}
                  </a>
                ))}
              </div>
              <div className="flex items-center space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="text-black hover:text-gray-600"
                  >
                    <i className={`${social.icon} text-sm`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Navbar */}
          <div className="flex md:hidden justify-between items-center h-20">
            <div className="flex-shrink-0">
              <a href={logoHref}>
                <img 
                  src={logoSrc}
                  alt="Najville Realties" 
                  className="h-8 w-auto"
                />
              </a>
            </div>
            
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-black hover:text-gray-600"
                >
                  <i className={`${social.icon} text-sm`}></i>
                </a>
              ))}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="bg-[#B4974C] p-3 rounded-sm"
                aria-label="Menu"
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
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div 
          className={`fixed inset-y-0 left-0 w-full max-w-sm bg-white transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
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
            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#B4974C] text-white"
            >
              ×
            </button>
          </div>
          
          <div className="py-2">
            {menuItems.map((item, index) => (
              <div key={index} className="border-b border-gray-100">
                <a
                  href={item.href}
                  className="flex items-center justify-between px-6 py-4 text-base text-gray-900 hover:text-[#B4974C]"
                  onClick={() => !item.hasSubmenu && setIsMenuOpen(false)}
                >
                  {item.text}
                  {item.hasSubmenu && (
                    <span className="text-[#B4974C] text-xl">+</span>
                  )}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;