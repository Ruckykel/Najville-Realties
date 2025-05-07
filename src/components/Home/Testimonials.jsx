import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Kemi Aderigbigbe",
    role: "Trader",
    text: "Idera residentials is an exceptional location to own a plot, and visiting it in person feels like a dream come true for anyone aspiring to grow.",
    avatar: "/consult.webp"
  },
  {
    id: 2, 
    name: "Uzochi Christopher",
    role: "Entrepreneur",
    text: "Doing business with Dradrock has been an incredible experience. Dradrock has ensured a seamless process from payment to allocation.",
    avatar: "/consult.webp"
  },
  {
    id: 3,
    name: "John Doe",
    role: "Investor",
    text: "The experience has been amazing. The customer service is top notch and the properties are premium quality.",
    avatar: "/consult.webp"
  },
  {
    id: 4,
    name: "Jane Doe",
    role: "Homeowner",
    text: "Dradrock has exceeded all my expectations. From purchase to documentation, it was seamless!",
    avatar: "/consult.webp"
  },
  {
    id: 5,
    name: "Samuel Johnson",
    role: "Investor",
    text: "A trustworthy company with premium properties. Highly recommend their services!",
    avatar: "/consult.webp"
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(2); // Default to 2 items for larger screens
  const containerRef = useRef(null);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isInView, setIsInView] = useState(false);

  // Adjust the number of testimonials to show based on screen size
  useEffect(() => {
    const updateItemsToShow = () => {
      setItemsToShow(window.innerWidth < 768 ? 1 : 2);
    };

    updateItemsToShow(); // Run on initial render
    window.addEventListener('resize', updateItemsToShow); // Adjust on resize

    return () => window.removeEventListener('resize', updateItemsToShow); // Cleanup listener
  }, []);

  // Detect when element is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 } // Trigger when 20% of element is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - itemsToShow : prevIndex - 1
    );
  };

  const next = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex >= testimonials.length - itemsToShow ? 0 : prevIndex + 1
    );
  };

  // Auto-advance testimonials
  useEffect(() => {
    if (!isInView) return; // Only auto-advance when in view
    
    const interval = setInterval(() => {
      next();
    }, 10000); // Change testimonials every 5 seconds
    
    return () => clearInterval(interval);
  }, [currentIndex, isInView]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const cardVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.4
      }
    })
  };

  return (
    <motion.section 
      ref={containerRef}
      className="bg-[#635d4b] py-16 px-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <motion.div variants={titleVariants}>
            <h2 className="text-sm font-semibold tracking-wider uppercase text-white">
              TESTIMONIALS
            </h2>
            <motion.div 
              className="h-0.5 bg-[#AF8A2D] mt-2 mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
            <h3 className="text-4xl font-bold mb-6 text-white">
              What our clients says..
            </h3>
          </motion.div>

          <motion.div 
            className="flex gap-4 mt-4 md:mt-0"
            variants={titleVariants}
          >
            <motion.button 
              onClick={prev}
              className="p-3 rounded-full bg-white hover:bg-[#AF8A2D] transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button 
              onClick={next}
              className="p-3 rounded-full bg-white hover:bg-[#AF8A2D] transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            {testimonials.slice(currentIndex, currentIndex + itemsToShow).map((testimonial) => (
              <motion.div 
                key={testimonial.id}
                className="bg-white rounded-md p-8 relative"
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
                transition={{ duration: 0.5 }}
              >
                <motion.div 
                  className="absolute -top-6 left-8"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#AF8A2D]">
                    <img 
                      src={testimonial.avatar}
                      alt={`${testimonial.name}'s avatar`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
                
                <div className="mt-6">
                  <motion.h4 
                    className="text-xl font-bold"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                  >
                    {testimonial.name}
                  </motion.h4>
                  <motion.p 
                    className="text-[#AF8A2D]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                  >
                    {testimonial.role}
                  </motion.p>
                  <motion.p 
                    className="mt-4 text-sm text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                  >
                    "{testimonial.text}"
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {/* Testimonial navigation dots */}
        <div className="flex justify-center mt-8">
          {[...Array(testimonials.length - (itemsToShow - 1))].map((_, index) => (
            <motion.button
              key={index}
              className={`h-2 rounded-full mx-1 transition-all duration-300 ${
                currentIndex === index 
                  ? 'bg-[#AF8A2D] w-6' 
                  : 'bg-white/50 hover:bg-white w-2'
              }`}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;