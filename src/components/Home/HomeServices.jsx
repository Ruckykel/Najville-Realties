import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

const HomeServices = () => {
  // Featured main service with multiple videos
  const mainService = {
    title: "Estate Maintenance and Cleaning Services",
    description: "Professional and comprehensive property care solutions for residential and commercial estates. Our expert team ensures your property remains in pristine condition with our top-tier maintenance and cleaning services.",
    videos: [
      "/cleaning-video.mp4",
      "/maintenance-video.mp4",
      "/clean-home.mp4"
    ]
  };
  
  // Additional services
  const additionalServices = [
    {
      image: '/Architecture.webp',
      title: 'Architectural Design',
      description: 'Innovative architectural solutions tailored to your vision and requirements.'
    },
    {
      image: '/Construction.webp',
      title: 'Construction Services',
      description: 'Quality construction services with attention to detail and superior craftsmanship.'
    },
    {
      image: '/Interior.webp',
      title: 'Interior Design',
      description: 'Transform your spaces with our creative and functional interior design services.'
    },
    {
      image: '/Equipment.webp',
      title: 'Equipment Procurement',
      description: 'Access to high-quality equipment and materials for your property needs.'
    },
    {
      image: '/Sale.webp',
      title: 'Property Sales',
      description: 'Expert guidance in buying and selling properties with maximized value.'
    },
    {
      image: '/consult.webp',
      title: 'Consulting Services',
      description: 'Professional advice on real estate investments and property management.'
    },
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4);
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  
  // Get random video index based on page load/refresh
  const getVideoIndex = () => {
    if (typeof window !== 'undefined') {
      const index = sessionStorage.getItem('najville-video-index');
      if (index === null) {
        const newIndex = Math.floor(Math.random() * mainService.videos.length);
        sessionStorage.setItem('najville-video-index', newIndex.toString());
        return newIndex;
      } else {
        const nextIndex = (parseInt(index) + 1) % mainService.videos.length;
        sessionStorage.setItem('najville-video-index', nextIndex.toString());
        return nextIndex;
      }
    }
    return 0;
  };
  
  // Animation on component mount
  useEffect(() => {
    setIsVisible(true);
    
    // Ensure video plays
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video play failed:", error);
      });
    }
  }, []);

  // Update number of items based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else if (window.innerWidth < 1280) {
        setItemsToShow(3);
      } else {
        setItemsToShow(4);
      }
    };

    // Initial call
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + additionalServices.length) % additionalServices.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % additionalServices.length);
  };

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  
  // Minimum swipe distance in pixels
  const minSwipeDistance = 50;

  const handleTouchStart = (e) => {
    setTouchEnd(null); // Reset touchEnd
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      handleNextClick(); // Swipe left to see next
    } else if (isRightSwipe) {
      handlePrevClick(); // Swipe right to see previous
    }
  };

  // Determine which services to display
  const displayServices = () => {
    const serviceSlice = [];
    
    for (let i = 0; i < itemsToShow; i++) {
      serviceSlice.push(additionalServices[(currentIndex + i) % additionalServices.length]);
    }
    
    return serviceSlice;
  };

  return (
    <div ref={sectionRef} className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main section with animation */}
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-sm font-semibold tracking-wider uppercase text-[#AF8A2D]">
            OUR SERVICES
          </h2>
          <div className="w-12 h-0.5 bg-[#AF8A2D] mt-2 mb-6"></div>
          <h3 className="text-4xl font-bold mb-12 text-gray-800">
            We provide the best service for you
          </h3>
        </div>

        {/* Featured Service with Video Background */}
        <div className={`mb-16 rounded-xl overflow-hidden shadow-2xl relative transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ height: '500px' }}>
          {/* Video Background with Gold Tint */}
          <video 
            ref={videoRef}
            autoPlay 
            loop 
            muted 
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={mainService.videos[getVideoIndex()]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Gold Tint Overlay - REDUCED OPACITY HERE */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-[#332200]/30 z-10" />
          
          {/* Content */}
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center p-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {mainService.title}
            </h2>
            <div className="w-24 h-1 bg-[#ffe14d] mx-auto mb-6"></div>
            <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
              {mainService.description}
            </p>
            <button className="mt-8 bg-[#AF8A2D] hover:bg-[#8A6F25] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>

        {/* Additional Services Title */}
        <div className={`mb-8 text-center transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-3xl font-bold text-gray-800">
            We've Got More
          </h3>
          <div className="w-24 h-0.5 bg-[#AF8A2D] mx-auto mt-2 mb-12"></div>
        </div>

        {/* Additional Services Carousel */}
        <div className={`relative transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div
            className="flex justify-center gap-6 transition-all duration-500"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {displayServices().map((service, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-full 
                  ${itemsToShow === 1 ? 'sm:w-full' : 
                    itemsToShow === 2 ? 'sm:w-1/2' : 
                    itemsToShow === 3 ? 'sm:w-1/3' : 
                    'sm:w-1/4'} 
                  mb-8`}
              >
                <div className="bg-gradient-to-br from-[#AB9B72] to-[#8A7C5C] rounded-xl overflow-hidden h-full flex flex-col shadow-lg">
                  <div className="relative overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-2 flex-shrink-0">
                      {service.title}
                    </h3>
                    <p className="text-white/90 text-sm flex-grow line-clamp-3">{service.description}</p>
                    <button className="mt-4 self-start text-white border border-white/50 hover:bg-white/20 hover:border-white px-4 py-2 rounded text-sm transition-all duration-300 hover:translate-x-1 group">
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">Discover More</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Buttons - Hidden on mobile */}
          <div className="absolute top-1/3 transform -translate-y-1/2 w-full hidden sm:flex justify-between px-4 z-10">
            <button
              className="bg-white/80 backdrop-blur-sm rounded-full shadow-md p-2 hover:bg-white transition-colors"
              onClick={handlePrevClick}
            >
              <ChevronLeftIcon className="h-6 w-6 text-gray-800" />
            </button>
            <button
              className="bg-white/80 backdrop-blur-sm rounded-full shadow-md p-2 hover:bg-white transition-colors"
              onClick={handleNextClick}
            >
              <ChevronRightIcon className="h-6 w-6 text-gray-800" />
            </button>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center mt-8">
            {Array.from({ length: Math.min(6, additionalServices.length) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 w-3 rounded-full mx-1 transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-[#AF8A2D] w-6' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;