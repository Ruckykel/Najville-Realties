import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, ChevronDown, ChevronUp, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

// WhatsApp SVG Icon component
const WhatsAppIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="h-5 w-5"
  >
    <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.2.301-.767.966-.94 1.164-.173.199-.347.223-.647.075-.3-.15-1.269-.468-2.419-1.491-.896-.795-1.497-1.77-1.676-2.07-.174-.3-.019-.462.13-.612.136-.13.301-.33.451-.492.146-.163.197-.3.297-.498.1-.204.05-.373-.025-.52-.075-.142-.673-1.622-.922-2.22-.24-.582-.497-.498-.672-.505-.173-.008-.371-.01-.571-.01-.2 0-.522.074-.796.372-.273.297-1.045 1.02-1.045 2.488 0 1.469.996 2.914 1.134 3.117.14.203 1.88 3.02 4.645 4.191.65.281 1.155.422 1.55.537.651.209 1.244.174 1.712.106.539-.08 1.641-.687 1.869-1.354.229-.666.229-1.236.16-1.357-.069-.123-.249-.186-.548-.328z"/>
    <path d="M19.293 4.707C17.389 2.803 14.789 1.75 12.018 1.75 6.266 1.75 1.59 6.425 1.59 12.18c0 1.891.492 3.73 1.441 5.375L1.5 22.5l5.112-1.304c1.578.851 3.35 1.304 5.146 1.304h.004c5.75 0 10.425-4.675 10.425-10.43 0-2.786-1.053-5.386-2.894-7.363zm-7.275 16.023h-.004c-1.564 0-3.097-.414-4.433-1.194l-.335-.192-3.225.825.855-3.052-.215-.354c-.853-1.39-1.305-2.987-1.305-4.629 0-4.781 3.892-8.673 8.673-8.673 2.317 0 4.495.904 6.121 2.543 1.627 1.639 2.526 3.813 2.522 6.135-.003 4.784-3.894 8.675-8.676 8.675z" fill="currentColor" stroke="none"/>
  </svg>
);

// Animated fade-in component
const FadeIn = ({ children, delay = 0, direction = null }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  // Set transform based on direction
  let initialTransform = 'translateY(20px)';
  if (direction === 'left') initialTransform = 'translateX(-20px)';
  if (direction === 'right') initialTransform = 'translateX(20px)';
  
  return (
    <div
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) translateX(0)' : initialTransform,
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
      }}
    >
      {children}
    </div>
  );
};

// FAQ Component with animation
const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <FadeIn delay={100 + (index * 100)}>
      <div className="border-b border-gray-200 py-4 hover:bg-gradient-to-r hover:from-[#F8F5EA]/30 hover:to-white transition-colors duration-300 rounded-lg px-2">
        <button
          className="flex justify-between items-center w-full text-left"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h3 className="text-lg font-medium text-gray-900">{question}</h3>
          <div className={`p-2 rounded-full transition-colors duration-300 ${isOpen ? 'bg-[#AF8A2D]/10 text-[#AF8A2D]' : 'text-[#AF8A2D]'}`}>
            {isOpen ? (
              <ChevronUp className="h-5 w-5" />
            ) : (
              <ChevronDown className="h-5 w-5" />
            )}
          </div>
        </button>
        
        <div 
          className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}
        >
          <p className="text-gray-600 pr-4">{answer}</p>
        </div>
      </div>
    </FadeIn>
  );
};

// Contact info item with animation and clickable links
const ContactItem = ({ icon, title, details, links, delay }) => {
  return (
    <FadeIn delay={delay} direction="left">
      <div className="flex items-start group">
        <div className="bg-white/20 p-2 rounded-full mr-4 group-hover:bg-white/30 transition-colors duration-300 transform group-hover:scale-105">
          {icon}
        </div>
        <div>
          <p className="font-semibold">{title}</p>
          {details.map((detail, idx) => (
            <a 
              key={idx} 
              href={links[idx]} 
              className="block hover:underline transition-all duration-300 hover:translate-x-1"
              target={links[idx].startsWith('http') ? "_blank" : ""}
              rel={links[idx].startsWith('http') ? "noopener noreferrer" : ""}
            >
              {detail}
            </a>
          ))}
        </div>
      </div>
    </FadeIn>
  );
};

// Social media icon with animation
const SocialIcon = ({ icon, url, delay }) => {
  return (
    <FadeIn delay={delay}>
      <a 
        href={url}
        className="inline-block"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="bg-white/20 p-2 rounded-full mr-4 hover:bg-white/30 transition-colors duration-300 transform hover:scale-105">
          {icon}
        </div>
      </a>
    </FadeIn>
  );
};

const ContactInfoSection = () => {
  // Updated FAQ data covering all services
  const faqs = [
    {
      question: "What areas do you service?",
      answer: "We provide our real estate services throughout Nigeria, with primary focus on Lagos, Abuja, and Port Harcourt. For services in other locations, please contact our customer service team to confirm availability."
    },
    {
      question: "How much do your cleaning and maintenance services cost?",
      answer: "Our service costs vary depending on the specific requirements of your property. We offer customized quotes based on property size, service frequency, and specific maintenance needs. Contact us for a free consultation and quote."
    },
    {
      question: "What is included in your estate maintenance package?",
      answer: "Our comprehensive estate maintenance package includes regular cleaning, landscape maintenance, minor repairs, security monitoring, waste management, plumbing and electrical maintenance, and seasonal property inspections. We can customize packages based on your specific needs."
    },
    {
      question: "Do you offer architectural design for both residential and commercial properties?",
      answer: "Yes, our architectural design services cover both residential and commercial properties. Our team of experienced architects creates innovative, functional, and aesthetically pleasing designs tailored to your specific requirements and budget constraints."
    },
    {
      question: "What is your approach to construction quality control?",
      answer: "We implement a rigorous quality control process throughout all construction projects. This includes regular site inspections, adherence to building codes and standards, using high-quality materials, working with skilled craftsmen, and conducting thorough testing and commissioning before project handover."
    },
    {
      question: "How do your interior design services work?",
      answer: "Our interior design process begins with an initial consultation to understand your vision, style preferences, and budget. We then create concept designs, select materials, furniture, and accessories, and oversee the implementation to ensure the final result matches your expectations. We handle both residential and commercial interior design projects."
    },
    {
      question: "What types of equipment do you procure for properties?",
      answer: "Our equipment procurement services cover a wide range of property needs including HVAC systems, security systems, smart home technologies, kitchen appliances, lighting systems, generators, water treatment systems, and other specialized equipment based on your property requirements."
    },
    {
      question: "Are your cleaning products eco-friendly?",
      answer: "Yes, we prioritize environmentally responsible practices by using eco-friendly cleaning products and sustainable maintenance techniques that are safe for your family, pets, and the environment."
    },
    {
      question: "How quickly can you respond to emergency situations?",
      answer: "Our emergency response team is available 24/7 and typically arrives within 2-4 hours of your call, depending on your location and the nature of the emergency."
    },
    {
      question: "Can you handle both small-scale and large-scale construction projects?",
      answer: "Yes, our construction services cater to projects of all sizes, from small renovations to large-scale commercial developments. Our team scales resources appropriately to ensure quality and timely delivery regardless of project size."
    }
  ];

  // Update social media links
  const socialLinks = [
    { 
      icon: <Facebook className="h-5 w-5" />, 
      url: "https://facebook.com/najville",
      name: "Facebook"
    },
    { 
      icon: <Instagram className="h-5 w-5" />, 
      url: "https://instagram.com/najville",
      name: "Instagram"
    },
    { 
      icon: <Twitter className="h-5 w-5" />, 
      url: "https://twitter.com/najville",
      name: "Twitter"
    },
    { 
      icon: <Linkedin className="h-5 w-5" />, 
      url: "https://linkedin.com/company/najville",
      name: "LinkedIn"
    },
  ];

  // Updated contact info data with clickable links and correct email
  const contactInfo = [
    { 
      icon: <Phone className="h-5 w-5" />,
      title: "Call Us",
      details: ["+234 903 080 5750"],
      links: ["tel:+2349030805750"]
    },
    {
      icon: <WhatsAppIcon />,
      title: "WhatsApp",
      details: ["+234 808 964 8242"],
      links: ["https://wa.me/2348089648242"]
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email Us",
      details: ["earnest.nnajiarc@gmail.com"],
      links: ["mailto:earnest.nnajiarc@gmail.com"]
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Visit Us",
      details: ["123 Main Street, Lagos, Nigeria"],
      links: ["https://maps.google.com/?q=123+Main+Street+Lagos+Nigeria"]
    }
  ];

  return (
    <div>
      {/* Contact Info and FAQ Section */}
      <div className="py-16 bg-gradient-to-b from-[#F8F5EA]/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#AF8A2D] to-[#D4AF37] relative">
                Contact Us
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-[#AF8A2D] to-[#D4AF37]"></div>
              </span>
            </h2>
          </FadeIn>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Contact Info Panel */}
            <div className="relative rounded-xl overflow-hidden lg:w-1/3 shadow-xl transform transition-all duration-500 hover:shadow-2xl">
              {/* Gold gradient overlay with animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37] to-[#AF8A2D] opacity-90"></div>
              
              {/* Animated decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-bl-full animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-tr-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              
              <div className="relative p-8 text-white h-full">
                <FadeIn>
                  <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
                </FadeIn>
                
                <FadeIn delay={100}>
                  <p className="mb-8 text-white/90">We're available to answer your questions and provide excellent service for all your property needs.</p>
                </FadeIn>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <ContactItem 
                      key={index}
                      icon={item.icon}
                      title={item.title}
                      details={item.details}
                      links={item.links}
                      delay={300 + (index * 100)}
                    />
                  ))}
                </div>
                
                {/* Social Media Icons */}
                <div className="mt-10">
                  <FadeIn delay={700}>
                    <p className="font-semibold mb-3">Follow Us</p>
                  </FadeIn>
                  <div className="flex">
                    {socialLinks.map((social, index) => (
                      <SocialIcon 
                        key={index}
                        icon={social.icon}
                        url={social.url}
                        delay={800 + (index * 100)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* FAQ Section */}
            <div className="bg-white rounded-xl p-8 shadow-lg lg:w-2/3 relative overflow-hidden transform transition-all duration-500 hover:shadow-xl">
              {/* Decorative elements with animation */}
              <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-[#F8F5EA] animate-pulse" style={{ animationDuration: '4s' }}></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full bg-[#F8F5EA] animate-pulse" style={{ animationDuration: '5s' }}></div>
              
              <FadeIn direction="right">
                <h3 className="text-2xl font-semibold mb-6 text-[#AF8A2D] relative inline-block">
                  <span>Frequently Asked Questions</span>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#AF8A2D]/20 to-transparent"></div>
                </h3>
              </FadeIn>
              
              <div className="space-y-1 mt-8">
                {faqs.map((faq, index) => (
                  <FAQItem 
                    key={index} 
                    question={faq.question} 
                    answer={faq.answer}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section with animation */}
      <FadeIn delay={1200}>
        <div className="max-w-5xl mx-auto h-96 relative my-16 overflow-hidden rounded-xl shadow-lg transform transition-all duration-500 hover:shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-[#AF8A2D]/5 to-white opacity-90 z-10 pointer-events-none"></div>
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.45932780923!2d3.1193368273285426!3d6.548055966145058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1712669558867!5m2!1sen!2sus"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </FadeIn>
    </div>
  );
};

export default ContactInfoSection;