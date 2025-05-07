import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

// Service Card Component with key points and hover effect
const ServiceCard = ({ title, description, keyPoints, index }) => {
  return (
    <motion.div 
      className="w-full h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
      viewport={{ once: true }}
    >
      <motion.div 
        className="rounded-xl overflow-hidden h-full flex flex-col shadow-sm hover:shadow-md"
        whileHover={{ 
          y: -8, 
          transition: { duration: 0.2 }
        }}
        transition={{ 
          type: "spring",
          stiffness: 300,
          damping: 20
        }}
      >
        {/* Title Bar */}
        <div className="bg-[#AF8A2D] p-5 rounded-t-xl">
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        
        {/* Content */}
        <div className="p-6 bg-white flex-grow rounded-b-xl">
          <p className="text-gray-700 mb-6">{description}</p>
          
          {/* Key Points */}
          <div className="space-y-4">
            {keyPoints.map((point, idx) => (
              <div key={idx} className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-[#AF8A2D]/10 flex items-center justify-center text-[#AF8A2D]">
                    <Check className="h-4 w-4" />
                  </div>
                </div>
                <p className="ml-3 text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Why Choose Us Item Component
const BenefitItem = ({ title, description }) => {
  return (
    <motion.div 
      className="flex items-start"
      whileHover={{ x: 5, transition: { duration: 0.2 } }}
    >
      <div className="flex-shrink-0 mt-1">
        <div className="w-6 h-6 rounded-full bg-[#AF8A2D]/10 flex items-center justify-center text-[#AF8A2D]">
          <Check className="h-4 w-4" />
        </div>
      </div>
      <div className="ml-3">
        <h6 className="font-bold text-gray-800">{title}</h6>
        <p className="text-gray-700">{description}</p>
      </div>
    </motion.div>
  );
};

const MainServiceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  
  // Videos for background
  const videos = [
    "/cleaning-video.mp4",
    "/clean-home.mp4"
  ];
  
  // Get random video index based on page load/refresh
  const getVideoIndex = () => {
    if (typeof window !== 'undefined') {
      const index = sessionStorage.getItem('najville-video-index');
      if (index === null) {
        const newIndex = Math.floor(Math.random() * videos.length);
        sessionStorage.setItem('najville-video-index', newIndex.toString());
        return newIndex;
      } else {
        const nextIndex = (parseInt(index) + 1) % videos.length;
        sessionStorage.setItem('najville-video-index', nextIndex.toString());
        return nextIndex;
      }
    }
    return 0;
  };
  
  // Animation on component in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    // Ensure video plays
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video play failed:", error);
      });
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Service cards data - reduced to 6 services by combining some related ones
  const services = [
    {
      title: "Full Property Cleaning",
      description: "Comprehensive interior and exterior cleaning services for residential and commercial properties.",
      keyPoints: [
        "Interior deep cleaning for all rooms and spaces",
        "Exterior cleaning including facades and windows",
        "Professional equipment and eco-friendly products",
        "Specialized cleaning for different surface types"
      ]
    },
    {
      title: "Routine Estate Maintenance",
      description: "Regular maintenance services to keep your property in optimal condition year-round.",
      keyPoints: [
        "Garden and landscape maintenance",
        "Regular plumbing and electrical system checks",
        "Minor repairs and preventative maintenance",
        "Seasonal property inspections and upkeep"
      ]
    },
    {
      title: "Deep & Specialized Cleaning",
      description: "Intensive cleaning services for specific needs including seasonal, post-construction, and move-in/out services.",
      keyPoints: [
        "Seasonal deep cleaning for all property areas",
        "Post-construction cleanup and debris removal",
        "Move-in/move-out cleaning services",
        "Specialized surface treatment and restoration"
      ]
    },
    {
      title: "Pest Control & Sanitation",
      description: "Comprehensive pest prevention, management, and elimination services with complete sanitation.",
      keyPoints: [
        "Preventative pest control treatments",
        "Targeted pest elimination solutions",
        "Complete premise sanitation services",
        "Eco-friendly and safe pest management options"
      ]
    },
    {
      title: "Waste & Landscape Management",
      description: "Efficient waste solutions combined with professional landscape care for complete outdoor management.",
      keyPoints: [
        "Regular waste collection and responsible disposal",
        "Recycling program implementation",
        "Lawn care, garden maintenance, and tree services",
        "Outdoor surface cleaning and maintenance"
      ]
    },
    {
      title: "Scheduled & Emergency Services",
      description: "Customized maintenance plans with regular schedules plus 24/7 emergency response capabilities.",
      keyPoints: [
        "Weekly, bi-weekly, or monthly service options",
        "Emergency response for water and storm damage",
        "Urgent plumbing and electrical repairs",
        "Detailed service documentation and reporting"
      ]
    }
  ];

  // Benefits data
  const benefits = [
    {
      title: "Experienced Team",
      description: "Professionals with 10+ years in property maintenance"
    },
    {
      title: "Comprehensive Coverage",
      description: "All maintenance aspects handled by one provider"
    },
    {
      title: "Customized Plans",
      description: "Tailored schedules based on your property's needs"
    },
    {
      title: "Quality Guarantee",
      description: "Satisfaction guaranteed on all services"
    }
  ];

  return (
    <section id="main-service" ref={sectionRef} className="py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-[#AF8A2D]/10 px-4 py-2 rounded-full">
            <h2 className="text-sm font-semibold tracking-wider uppercase text-[#AF8A2D]">
              OUR SERVICES
            </h2>
          </div>
          
          <h3 className="text-4xl font-bold text-gray-900 mt-4 mb-4">
            Comprehensive Estate Maintenance Solutions
          </h3>
          
          <p className="text-gray-600 max-w-3xl mx-auto">
            Transform every aspect of your property with our specialized maintenance and cleaning services designed for lasting impact and value preservation.
          </p>
        </motion.div>
        
        {/* Top Section: Video and Overview */}
        <div className="flex flex-col lg:flex-row gap-8 items-center mb-16">
          {/* Video Panel */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-xl overflow-hidden shadow-md relative">
              <div className="aspect-video w-full">
                <video 
                  ref={videoRef}
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src={videos[getVideoIndex()]} type="video/mp4" />
                </video>
                {/* Fix for mobile video display issues */}
                <div className="w-full h-0" style={{ paddingBottom: "56.25%" }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10"></div>
                <div className="absolute bottom-0 left-0 p-6 z-10">
                  <h4 className="text-2xl font-bold text-white mb-1">Professional Excellence</h4>
                  <p className="text-white/90">Expert team delivering world-class property care</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Overview */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">
                Comprehensive Property Care Solutions
              </h4>
              
              <p className="text-gray-600 mb-4">
                We provide complete property care for residential and commercial estates, ensuring pristine conditions that preserve value and appearance. Our experienced team delivers exceptional results for properties of all sizes.
              </p>
              
              <p className="text-gray-600">
                Available 24/7 for routine maintenance, deep cleaning, or emergency repairs, we use eco-friendly products and professional equipment to deliver superior results with minimal environmental impact.
              </p>
            </div>
          </motion.div>
        </div>
        
        {/* Services Grid - now with 3x2 grid for 6 services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              keyPoints={service.keyPoints}
              index={index}
            />
          ))}
        </div>
        
        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-xl p-8 mb-12"
        >
          <h5 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Why Choose Our Estate Maintenance Services
          </h5>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <BenefitItem
                key={index}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
        </motion.div>
        
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <h4 className="text-2xl font-bold text-gray-800 mb-6">Ready to transform your property?</h4>
          <motion.button 
            className="bg-[#AF8A2D] hover:bg-[#8A6F25] text-white font-bold py-3 px-8 rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default MainServiceSection;