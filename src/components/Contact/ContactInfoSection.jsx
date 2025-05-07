import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, ChevronDown, ChevronUp, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

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

// Contact info item with animation
const ContactItem = ({ icon, title, details, delay }) => {
  return (
    <FadeIn delay={delay} direction="left">
      <div className="flex items-start group">
        <div className="bg-white/20 p-2 rounded-full mr-4 group-hover:bg-white/30 transition-colors duration-300 transform group-hover:scale-105">
          {icon}
        </div>
        <div>
          <p className="font-semibold">{title}</p>
          {Array.isArray(details) ? (
            details.map((detail, idx) => <p key={idx}>{detail}</p>)
          ) : (
            <p>{details}</p>
          )}
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
  // FAQ data
  const faqs = [
    {
      question: "What areas do you service?",
      answer: "We provide our estate maintenance and cleaning services throughout the metropolitan area and surrounding suburbs. For specific locations, please contact our customer service team."
    },
    {
      question: "How much do your services cost?",
      answer: "Our service costs vary depending on the specific requirements of your property. We offer customized quotes based on property size, service frequency, and specific maintenance needs. Contact us for a free consultation and quote."
    },
    {
      question: "Do you offer recurring maintenance plans?",
      answer: "Yes, we offer weekly, bi-weekly, and monthly maintenance plans tailored to your property's specific needs. Our recurring plans come with preferential rates and guaranteed priority scheduling."
    },
    {
      question: "Are your cleaning products eco-friendly?",
      answer: "Yes, we prioritize environmentally responsible practices by using eco-friendly cleaning products and sustainable maintenance techniques that are safe for your family, pets, and the environment."
    },
    {
      question: "How quickly can you respond to emergency situations?",
      answer: "Our emergency response team is available 24/7 and typically arrives within 2-4 hours of your call, depending on your location and the nature of the emergency."
    },
  ];

// Update social media links with website names
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

  // Contact info data
  const contactInfo = [
    { 
      icon: <Phone className="h-5 w-5" />,
      title: "Call Us",
      details: ["+1 (800) 555-1234", "+1 (888) 555-5678"]
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email Us",
      details: ["info@najville.com"]
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Visit Us",
      details: ["123 Main Street", "New York, NY 10001"]
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304903!3d40.69766374873451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1683150233720!5m2!1sen!2sca"
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