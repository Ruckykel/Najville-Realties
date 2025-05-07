import React from 'react';
import { motion } from 'framer-motion';

// Service Feature Component for compact feature list
const ServiceFeature = ({ feature }) => {
  return (
    <div className="flex items-center">
      <div className="w-3 h-3 rounded-full bg-[#AF8A2D]/20 flex items-center justify-center mr-3 flex-shrink-0">
        <div className="w-1.5 h-1.5 rounded-full bg-[#AF8A2D]"></div>
      </div>
      <p className="text-gray-700 text-sm">{feature}</p>
    </div>
  );
};

// Service Card Component with improved styling
const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        y: -8,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg h-full flex flex-col border border-gray-100"
    >
      <div className="relative overflow-hidden h-56">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6">
          <h4 className="text-xl font-bold text-white">{service.title}</h4>
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <p className="text-gray-600 mb-5 text-sm">{service.description}</p>
        
        <div className="space-y-2.5 flex-grow">
          {service.features.map((feature, idx) => (
            <ServiceFeature key={idx} feature={feature} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Additional Services Section Component
const AdditionalServicesSection = () => {
  const additionalServices = [
    {
      image: '/Architecture.webp',
      title: 'Architectural Design',
      description: 'Innovative architectural solutions tailored to your vision and requirements, focusing on functionality, aesthetics, and sustainability.',
      features: [
        'Custom design planning',
        'Technical drawings',
        'Sustainable architecture',
        'Renovation designs'
      ]
    },
    {
      image: '/Construction.webp',
      title: 'Construction Services',
      description: 'Quality construction services with attention to detail and superior craftsmanship, ensuring projects are completed on time and to the highest standards.',
      features: [
        'New builds',
        'Renovations',
        'Project management',
        'Quality assurance'
      ]
    },
    {
      image: '/Interior.webp',
      title: 'Interior Design',
      description: 'Transform your spaces with our creative and functional interior design services that reflect your personality while maximizing comfort and utility.',
      features: [
        'Space planning',
        'Material selection',
        'Custom furniture',
        'Lighting design'
      ]
    },
    {
      image: '/Equipment.webp',
      title: 'Equipment Procurement',
      description: 'Access to high-quality equipment and materials for your property needs, leveraging our industry connections to secure the best products at competitive prices.',
      features: [
        'Quality sourcing',
        'Competitive pricing',
        'Installation services',
        'Maintenance support'
      ]
    },
    {
      image: '/Sale.webp',
      title: 'Property Sales',
      description: 'Expert guidance in buying and selling properties with maximized value, providing comprehensive market analysis and strategic marketing approaches.',
      features: [
        'Market valuation',
        'Property marketing',
        'Negotiation support',
        'Transaction management'
      ]
    },
    {
      image: '/consult.webp',
      title: 'Consulting Services',
      description: 'Professional advice on real estate investments and property management, helping you make informed decisions that align with your financial goals.',
      features: [
        'Investment analysis',
        'Property evaluation',
        'Portfolio management',
        'Market trend insights'
      ]
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-[#AF8A2D]/10 px-4 py-2 rounded-full mb-4">
            <h2 className="text-sm font-semibold tracking-wider uppercase text-[#AF8A2D]">
              ADDITIONAL SERVICES
            </h2>
          </div>
          
          <h3 className="text-4xl font-bold text-gray-900 mb-4">
            We've Got More
          </h3>
          
          <div className="w-24 h-0.5 bg-[#AF8A2D] mx-auto mb-6"></div>
          
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Beyond our core maintenance services, we offer a comprehensive range of real estate solutions to meet all your property needs.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {additionalServices.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            className="bg-[#AF8A2D] hover:bg-[#8A6F25] text-white font-bold py-3 px-10 rounded-full shadow-md"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
            whileTap={{ scale: 0.98 }}
          >
            View All Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AdditionalServicesSection;