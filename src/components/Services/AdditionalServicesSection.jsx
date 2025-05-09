import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

// Modal Component for detailed service information
const ServiceModal = ({ isOpen, onClose, service }) => {
  // Cost estimates in Naira for each service
  const costEstimates = {
    'Architectural Design': {
      'Basic Consultation': '₦50,000 - ₦150,000',
      'Custom Residential Design': '₦500,000 - ₦2,500,000',
      'Commercial Project': '₦2,000,000 - ₦10,000,000',
      'Technical Drawings Only': '₦250,000 - ₦800,000',
      'Sustainable Design Planning': '₦350,000 - ₦1,500,000'
    },
    'Construction Services': {
      'Small Renovation': '₦1,500,000 - ₦5,000,000',
      'Residential Construction': '₦15,000,000 - ₦100,000,000+',
      'Commercial Construction': '₦50,000,000 - ₦500,000,000+',
      'Project Management': '10-15% of total project cost',
      'Quality Inspection': '₦250,000 - ₦500,000'
    },
    'Interior Design': {
      'Single Room Design': '₦200,000 - ₦500,000',
      'Full Home Design': '₦1,000,000 - ₦5,000,000',
      'Office Space Design': '₦1,500,000 - ₦8,000,000',
      'Custom Furniture': '₦250,000 - ₦2,000,000 per piece',
      'Lighting Design': '₦350,000 - ₦1,200,000'
    },
    'Equipment Procurement': {
      'Home Appliances': '₦500,000 - ₦3,000,000',
      'Construction Equipment': '₦2,000,000 - ₦50,000,000',
      'Office Equipment': '₦1,500,000 - ₦10,000,000',
      'Installation Services': '15-20% of equipment cost',
      'Maintenance Contracts': '₦250,000 - ₦1,500,000 annually'
    },
    'Property Sales': {
      'Valuation Services': '₦150,000 - ₦500,000',
      'Marketing Package': '₦350,000 - ₦1,200,000',
      'Commission': '3-5% of property value',
      'Legal Documentation': '₦250,000 - ₦800,000',
      'Property Inspection': '₦200,000 - ₦450,000'
    },
    'Consulting Services': {
      'Investment Analysis': '₦300,000 - ₦1,000,000',
      'Portfolio Review': '₦500,000 - ₦1,500,000',
      'Market Research': '₦400,000 - ₦1,200,000',
      'Financial Planning': '₦350,000 - ₦900,000',
      'Ongoing Consultation': '₦250,000 - ₦750,000 monthly'
    }
  };

  const serviceInfo = {
    'Architectural Design': {
      description: 'Our architectural design services blend innovative aesthetics with practical functionality to create spaces that inspire and endure. Our team of experienced architects works closely with clients to understand their vision, goals, and requirements, transforming ideas into detailed plans and stunning reality.',
      process: ['Initial consultation and requirement gathering', 'Concept development and preliminary design', 'Detailed design and documentation', 'Material and finish selection', 'Technical drawings and specifications', 'Coordination with engineers and contractors', 'Construction oversight and quality control'],
      benefits: ['Customized designs that reflect your unique vision and needs', 'Optimal space utilization and functionality', 'Energy-efficient and sustainable solutions', 'Compliance with building codes and regulations', 'Enhanced property value', 'Professional guidance throughout the entire project']
    },
    'Construction Services': {
      description: 'Our construction services deliver excellence in building execution with meticulous attention to detail. From groundbreaking to the final touches, our experienced team ensures your project is completed to the highest standards, on time and within budget.',
      process: ['Project planning and scheduling', 'Resource allocation and procurement', 'Site preparation and foundation work', 'Structural construction and framing', 'Electrical, plumbing, and mechanical installations', 'Interior and exterior finishing', 'Quality inspection and handover'],
      benefits: ['Expert craftsmanship and superior build quality', 'Strict adherence to timelines and budgets', 'Comprehensive project management', 'Transparent communication throughout construction', 'Problem-solving capability for unforeseen challenges', 'Warranty on workmanship']
    },
    'Interior Design': {
      description: 'Our interior design services transform ordinary spaces into extraordinary environments that reflect your personality and meet your functional needs. Our designers blend creativity with practicality to create interiors that inspire and delight daily.',
      process: ['Space assessment and client consultation', 'Concept development and mood boarding', 'Space planning and layout optimization', 'Material, furniture, and color selection', 'Custom design elements and lighting plans', 'Procurement and installation coordination', 'Final styling and accessorizing'],
      benefits: ['Personalized designs tailored to your lifestyle and preferences', 'Maximized space utilization and functionality', 'Professional access to exclusive materials and products', 'Cohesive aesthetic throughout your space', 'Balance of beauty and practicality', 'Potential increase in property value']
    },
    'Equipment Procurement': {
      description: 'Our equipment procurement service leverages our industry connections to source high-quality equipment and materials at competitive prices. We handle the selection, negotiation, purchase, and installation process to ensure you get the best value without compromise.',
      process: ['Needs assessment and specification development', 'Vendor identification and qualification', 'Quotation analysis and negotiation', 'Purchase order management', 'Logistics and delivery coordination', 'Installation and testing', 'Warranty registration and maintenance planning'],
      benefits: ['Access to premium brands and products', 'Cost savings through our industry relationships', 'Quality assurance and performance guarantees', 'Simplified procurement process', 'Professional installation and setup', 'Ongoing maintenance support']
    },
    'Property Sales': {
      description: 'Our property sales services provide expert guidance throughout the buying and selling process. We combine market knowledge, strategic marketing, and negotiation expertise to help you achieve the best possible outcome in your real estate transactions.',
      process: ['Property valuation and market analysis', 'Marketing strategy development', 'Professional photography and listing preparation', 'Targeted marketing and property promotion', 'Buyer screening and property showings', 'Offer negotiation and contract management', 'Transaction coordination and closing support'],
      benefits: ['Maximum property value realization', 'Exposure to qualified buyers', 'Professional representation in negotiations', 'Reduced stress and time investment', 'Expert handling of paperwork and legal requirements', 'Market insights and timing recommendations']
    },
    'Consulting Services': {
      description: 'Our consulting services provide expert advice and insights to help you make informed decisions about real estate investments and property management. Our consultants analyze market trends, evaluate opportunities, and develop strategies aligned with your financial goals.',
      process: ['Initial assessment and goal setting', 'Current portfolio or property analysis', 'Market research and opportunity identification', 'Risk assessment and mitigation planning', 'Strategy development and recommendation', 'Implementation support and guidance', 'Performance monitoring and adjustment'],
      benefits: ['Data-driven decision making', 'Risk minimization and opportunity maximization', 'Customized strategies for your specific goals', 'Unbiased professional perspective', 'Access to market insights and trends', 'Long-term planning for sustained growth']
    }
  };

  // Animation variants for modal
  const modalVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2, ease: "easeIn" } }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  if (!isOpen) return null;

  const costs = costEstimates[service.title];
  const info = serviceInfo[service.title];

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={backdropVariants}
        onClick={onClose}
      >
        <motion.div 
          className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          variants={modalVariants}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative">
            <div className="h-64 relative">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute top-4 right-4">
                <button 
                  onClick={onClose}
                  className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 p-2 rounded-full"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="absolute bottom-0 left-0 p-8">
                <h2 className="text-3xl font-bold text-white">{service.title}</h2>
              </div>
            </div>
            
            <div className="p-8">
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Overview</h3>
                <p className="text-gray-700">{info.description}</p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Process</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {info.process.map((step, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="bg-[#AF8A2D]/20 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                        <div className="bg-[#AF8A2D] rounded-full w-3 h-3"></div>
                      </div>
                      <p className="text-gray-700">{step}</p>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {info.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="bg-[#AF8A2D]/20 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                        <div className="bg-[#AF8A2D] rounded-full w-3 h-3"></div>
                      </div>
                      <p className="text-gray-700">{benefit}</p>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Cost Estimates (in Naira)</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service Type</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price Range</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {Object.entries(costs).map(([service, price], idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{service}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-500 mt-4">* Prices may vary based on project scope, complexity, and specific requirements. Contact us for a personalized quote.</p>
              </div>
              
              <div className="text-center">
                <button 
                  className="bg-[#AF8A2D] hover:bg-[#8A6F25] text-white font-bold py-3 px-10 rounded-full shadow-md transition-all"
                >
                  Request a Quote
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Service Card Component with improved styling and Learn More link
const ServiceCard = ({ service, index, openModal }) => {
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
        
        <button 
          onClick={() => openModal(service)}
          className="mt-6 text-[#AF8A2D] font-semibold hover:text-[#8A6F25] flex items-center transition-colors"
        >
          Learn More
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
};

// Additional Services Section Component
const AdditionalServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
            <ServiceCard 
              key={index} 
              service={service} 
              index={index} 
              openModal={openModal}
            />
          ))}
        </div>
        
        {selectedService && (
          <ServiceModal 
            isOpen={isModalOpen} 
            onClose={closeModal} 
            service={selectedService} 
          />
        )}
      </div>
    </section>
  );
};

export default AdditionalServicesSection;