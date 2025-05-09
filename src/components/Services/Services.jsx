import React, { useEffect, useRef } from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import AdditionalServicesSection from './AdditionalServicesSection';
import HeroSection from './HeroSection';
import MainServiceSection from './MainServiceSection';

const Services = () => {
  // Create refs for sections
  const mainServiceRef = useRef(null);
  const additionalServicesRef = useRef(null);

  useEffect(() => {
    // Check if we should scroll to MainServiceSection
    const shouldScrollToMainService = sessionStorage.getItem('scrollToMainService');
    
    if (shouldScrollToMainService === 'true') {
      // Clear the flag
      sessionStorage.removeItem('scrollToMainService');
      
      // Scroll to MainServiceSection with a slight delay
      setTimeout(() => {
        if (mainServiceRef.current) {
          // Get the MainServiceSection's position
          const yOffset = -80; // Adjust this value as needed for your header height
          const element = mainServiceRef.current;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          
          // Smooth scroll to the section
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 500); // Delay to ensure the component is fully rendered
    }
    
    // Check if we should scroll to AdditionalServicesSection
    const serviceTitle = sessionStorage.getItem('scrollToAdditionalServices');
    
    if (serviceTitle) {
      // Clear the flag
      sessionStorage.removeItem('scrollToAdditionalServices');
      
      // Scroll to AdditionalServicesSection with a slight delay
      setTimeout(() => {
        if (additionalServicesRef.current) {
          // Get the AdditionalServicesSection's position
          const yOffset = -80; // Adjust this value as needed for your header height
          const element = additionalServicesRef.current;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          
          // Smooth scroll to the section
          window.scrollTo({ top: y, behavior: 'smooth' });
          
          // If you want to, you can use the serviceTitle to highlight or focus the specific service
          // For example, you could pass it to the AdditionalServicesSection component as a prop
          console.log(`User navigated to service: ${serviceTitle}`);
        }
      }, 500); // Delay to ensure the component is fully rendered
    }
  }, []);

  return (
    <div className='overflow-x-hidden min-h-screen flex flex-col'>
      <Navbar />
      <HeroSection />
      <div ref={mainServiceRef}>
        <MainServiceSection />
      </div>
      <div ref={additionalServicesRef}>
        <AdditionalServicesSection />
      </div>
      <Footer />
    </div>
  );
};

export default Services;