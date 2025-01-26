import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

const HomeServices = () => {
  const services = [
    {
      image: '/Architecture.webp',
      title: 'Architectural Design',
      description: 'At Nayville Realties, our mission is to deliver innovative and sustainable real estate solutions...'
    },
    {
      image: '/Construction.webp',
      title: 'Construction Services',
      description: 'At Nayville Realties, our mission is to deliver innovative and sustainable real estate solutions...'
    },
    {
      image: '/Interior.webp',
      title: 'Interior Design',
      description: 'At Nayville Realties, our mission is to deliver innovative and sustainable real estate solutions...'
    },
    {
      image: '/Equipment.webp',
      title: 'Equipment Procurement',
      description: 'At Nayville Realties, our mission is to deliver innovative and sustainable real estate solutions...'
    },
    {
      image: '/Sale.webp',
      title: 'Property Sales',
      description: 'At Nayville Realties, our mission is to deliver innovative and sustainable real estate solutions...'
    },
    {
      image: '/consult.webp',
      title: 'Consulting Services',
      description: 'At Nayville Realties, our mission is to deliver innovative and sustainable real estate solutions...'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4);

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
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const handleTouchStart = (e) => {
    e.touches[0].startX = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (!e.touches[0].startX) return;
    const deltaX = e.touches[0].clientX - e.touches[0].startX;
    if (deltaX > 50) {
      handlePrevClick();
      e.touches[0].startX = null;
    } else if (deltaX < -50) {
      handleNextClick();
      e.touches[0].startX = null;
    }
  };

  // Determine which services to display
  const displayServices = () => {
    const serviceSlice = [];
    
    for (let i = 0; i < itemsToShow; i++) {
      serviceSlice.push(services[(currentIndex + i) % services.length]);
    }
    
    return serviceSlice;
  };

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 className="text-sm font-semibold tracking-wider uppercase">
              OUR SERVICES
      </h2>
      <div className="w-12 h-0.5 bg-[#AF8A2D] mt-2 mb-6"></div>
      <h3 className="text-4xl font-bold mb-6">
         We provide the best service for you...
      </h3>
        <div className="relative">
          <div
            className="flex justify-center gap-4 transition-transform duration-300"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
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
                <div className="bg-[#AB9B72] rounded-md overflow-hidden h-full flex flex-col">
                  <img src={service.image} alt={service.title} className="w-full h-56 object-cover" />
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-2 flex-shrink-0">
                      {service.title}
                    </h3>
                    <p className="text-white text-sm flex-grow line-clamp-3">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Buttons - Hidden on small screens */}
          <div className="hidden sm:absolute sm:top-1/3 sm:transform sm:-translate-y-1/2 sm:w-full sm:flex sm:justify-between sm:px-4">
            <button
              className="bg-white rounded-full shadow-md p-2 hover:bg-gray-200 transition-colors"
              onClick={handlePrevClick}
            >
              <ChevronLeftIcon className="h-6 w-6 text-gray-500" />
            </button>
            <button
              className="bg-white rounded-full shadow-md p-2 hover:bg-gray-200 transition-colors"
              onClick={handleNextClick}
            >
              <ChevronRightIcon className="h-6 w-6 text-gray-500" />
            </button>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center mt-4">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 w-3 rounded-full mx-1 ${
                  currentIndex === index ? 'bg-[#AF8A2D]' : 'bg-gray-300'
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